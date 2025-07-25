import { LoginForm } from '@/components/auth/LoginForm'
import { Typography } from '@/components/ui/Typography'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Typography variant="h1" className="text-3xl font-bold text-gray-900 mb-2">
            TheSiit Company
          </Typography>
          <Typography variant="p" className="text-gray-600">
            Please sign in to your account
          </Typography>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
