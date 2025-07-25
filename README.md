# The SIIT Company - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS showcasing technology consulting services and company capabilities.

## 🚀 Features

- **Modern Design**: Clean, professional interface with custom UI components
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast development
- **Type Safety**: Full TypeScript implementation for better developer experience
- **Custom Components**: Reusable UI components with Tailwind CSS styling
- **Contact Forms**: Interactive contact and newsletter signup forms
- **Authentication**: Complete user authentication system with login/register
- **Email Integration**: Multi-provider email service integration
- **SEO Optimized**: Proper meta tags and structured data for search engines

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React 18** - Latest React with concurrent features

### Backend & APIs
- **Next.js API Routes** - Serverless API endpoints
- **Zod** - Schema validation
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication

### Email Services
- **Mailgun** - Primary email service
- **SendGrid** - Alternative email provider
- **AWS SES** - Enterprise email solution

### Development Tools
- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   # Authentication
   JWT_SECRET=your-jwt-secret-key
   
   # Email Services (configure at least one)
   MAILGUN_API_KEY=your-mailgun-api-key
   MAILGUN_DOMAIN=your-mailgun-domain
   
   SENDGRID_API_KEY=your-sendgrid-api-key
   
   AWS_ACCESS_KEY_ID=your-aws-access-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret-key
   AWS_REGION=your-aws-region
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Available Pages

- **Homepage** (`/`) - Company overview and hero section
- **About** (`/about`) - Company story, team, and values
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Case studies and project showcases
- **Blog** (`/blog`) - Technical insights and company updates
- **Contact** (`/contact`) - Contact forms and company information
- **Authentication** (`/auth/login`) - User login and registration

## 🎨 Design System

### Colors
- **Deep Blue** (`#1a365d`) - Primary brand color
- **Insight Orange** (`#ff6b35`) - Accent color
- **Light Technical** (`#f8fafc`) - Background color
- **Implementation Green** (`#059669`) - Success states
- **Neutral Slate** (`#64748b`) - Text and borders

### Typography
- **Headings**: Inter font family with various weights
- **Body Text**: Responsive sizing with proper line heights
- **Component Variants**: h1-h6, body, lead, small, muted

### Components
- **Buttons**: Multiple variants (default, outline, ghost, link)
- **Cards**: Elevation effects with hover states
- **Forms**: Validated inputs with error states
- **Navigation**: Responsive header with mobile menu

## 🔧 Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Features Implemented

#### ✅ Phase 1: Foundation
- [x] Next.js 15 setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Basic component structure
- [x] Responsive layout system

#### ✅ Phase 2: Backend & APIs
- [x] Authentication system
- [x] Contact form processing
- [x] Newsletter signup
- [x] Email service integration
- [x] Data validation with Zod

#### ✅ Phase 3: Content Pages
- [x] Homepage with hero section
- [x] About page with team information
- [x] Services page with detailed offerings
- [x] Portfolio with case studies
- [x] Blog page structure
- [x] Contact page with forms

#### ✅ Phase 4: UI Polish
- [x] Consistent styling system
- [x] Custom color palette
- [x] Responsive navigation
- [x] Loading states and animations
- [x] Form validation and error handling

## 🎯 Future Enhancements

- [ ] CMS integration for blog management
- [ ] Advanced search functionality
- [ ] Multi-language support
- [ ] Performance monitoring
- [ ] A/B testing framework
- [ ] Advanced analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Demo**: http://localhost:3000
- **Support**: [Contact Form](/contact)

---

Built with ❤️ by The SIIT Company Team
