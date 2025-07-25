/**
 * Authentication and session management utilities
 * This provides a foundation for authentication without specific provider implementation
 */

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

// Authentication configuration
export const authConfig = {
  sessionCookieName: 'session-token',
  sessionDuration: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  tokenSecret: process.env.AUTH_SECRET || 'fallback-secret-key',
  providers: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }
  }
} as const

// User types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'user'
  createdAt: string
  lastLoginAt: string
}

export interface Session {
  id: string
  userId: string
  expiresAt: string
  createdAt: string
}

// Validation schemas
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional()
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export const resetPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address')
})

export const newPasswordSchema = z.object({
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  token: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>
export type NewPasswordForm = z.infer<typeof newPasswordSchema>

/**
 * Mock user database (replace with real database)
 */
class UserDatabase {
  private users: User[] = []
  private sessions: Session[] = []

  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'lastLoginAt'>): Promise<User> {
    const user: User = {
      ...userData,
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    }
    
    this.users.push(user)
    return user
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }

  async findUserById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) return null
    
    const existingUser = this.users[userIndex]
    if (!existingUser) return null
    
    this.users[userIndex] = { ...existingUser, ...updates }
    return this.users[userIndex]
  }

  async createSession(userId: string): Promise<Session> {
    const session: Session = {
      id: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      expiresAt: new Date(Date.now() + authConfig.sessionDuration).toISOString(),
      createdAt: new Date().toISOString()
    }
    
    this.sessions.push(session)
    return session
  }

  async findSession(sessionId: string): Promise<Session | null> {
    const session = this.sessions.find(s => s.id === sessionId)
    if (!session) return null
    
    // Check if session is expired
    if (new Date(session.expiresAt) < new Date()) {
      this.deleteSession(sessionId)
      return null
    }
    
    return session
  }

  async deleteSession(sessionId: string): Promise<void> {
    this.sessions = this.sessions.filter(s => s.id !== sessionId)
  }

  async deleteUserSessions(userId: string): Promise<void> {
    this.sessions = this.sessions.filter(s => s.userId !== userId)
  }
}

export const userDb = new UserDatabase()

/**
 * Password hashing utilities (simplified for demo)
 * In production, use bcrypt or similar
 */
export class PasswordManager {
  static async hash(password: string): Promise<string> {
    // In production, use proper password hashing like bcrypt
    // This is simplified for demo purposes
    const encoder = new TextEncoder()
    const data = encoder.encode(password + authConfig.tokenSecret)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  static async verify(password: string, hash: string): Promise<boolean> {
    const hashedInput = await this.hash(password)
    return hashedInput === hash
  }
}

/**
 * Session management
 */
export async function createSession(userId: string): Promise<string> {
  const session = await userDb.createSession(userId)
  
  // Set session cookie
  const cookieStore = await cookies()
  cookieStore.set(authConfig.sessionCookieName, session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: authConfig.sessionDuration / 1000, // Convert to seconds
    path: '/'
  })
  
  return session.id
}

export async function getSession(): Promise<{ user: User; session: Session } | null> {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get(authConfig.sessionCookieName)?.value
  
  if (!sessionId) return null
  
  const session = await userDb.findSession(sessionId)
  if (!session) return null
  
  const user = await userDb.findUserById(session.userId)
  if (!user) return null
  
  return { user, session }
}

export async function getCurrentUser(): Promise<User | null> {
  const sessionData = await getSession()
  return sessionData?.user || null
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get(authConfig.sessionCookieName)?.value
  
  if (sessionId) {
    await userDb.deleteSession(sessionId)
  }
  
  // Clear session cookie
  cookieStore.delete(authConfig.sessionCookieName)
}

/**
 * Route protection utilities
 */
export async function requireAuth(): Promise<{ user: User; session: Session }> {
  const sessionData = await getSession()
  
  if (!sessionData) {
    redirect('/auth/login')
  }
  
  return sessionData
}

export async function requireAdmin(): Promise<{ user: User; session: Session }> {
  const sessionData = await requireAuth()
  
  if (sessionData.user.role !== 'admin') {
    redirect('/unauthorized')
  }
  
  return sessionData
}

export async function redirectIfAuthenticated(redirectTo: string = '/'): Promise<void> {
  const sessionData = await getSession()
  
  if (sessionData) {
    redirect(redirectTo)
  }
}

/**
 * Token generation utilities
 */
export function generateSecureToken(): string {
  return crypto.randomUUID() + '_' + Date.now().toString(36)
}

/**
 * OAuth provider configuration
 */
export const oauthProviders = {
  google: {
    name: 'Google',
    icon: '🔍',
    authUrl: '/api/auth/google',
    callbackUrl: '/api/auth/google/callback'
  },
  github: {
    name: 'GitHub',
    icon: '🐙',
    authUrl: '/api/auth/github',
    callbackUrl: '/api/auth/github/callback'
  }
} as const

export type OAuthProvider = keyof typeof oauthProviders
