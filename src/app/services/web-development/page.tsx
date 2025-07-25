import { MainLayout } from '@/components/layout'
import { 
  Button, 
  Typography, 
  Section, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  Heading1,
  Heading2,
  Paragraph,
  Lead 
} from '@/components/ui'
import { ScrollAnimate, ScrollStagger } from '@/components/ui/ScrollAnimate'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Services - The SIIT Company',
  description: 'Full-stack web development for tech startups. React, Next.js, Node.js, and modern web technologies.',
}

const webFeatures = [
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description: "Complete web solutions from frontend to backend and database"
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Optimized for speed with modern frameworks and CDN deployment"
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Perfect experience across all devices and screen sizes"
  },
  {
    icon: "🔒",
    title: "Security First",
    description: "Built-in security measures and best practices"
  },
  {
    icon: "🚀",
    title: "SEO Optimized",
    description: "Search engine optimized for maximum visibility"
  },
  {
    icon: "🔄",
    title: "Real-time Features",
    description: "Live updates, chat, notifications, and collaborative features"
  }
]

const techStack = [
  { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", technologies: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"] },
  { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
  { category: "Cloud & DevOps", technologies: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"] }
]

export default function WebDevelopmentPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section 
        background="dark" 
        padding="xl"
        fullHeight="viewport"
        className="relative overflow-hidden"
      >
        <div className="relative z-10 text-center space-y-6 flex flex-col justify-center min-h-screen-75">
          <ScrollAnimate direction="fade" delay={200}>
            <div className="space-y-4">
              <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold font-mono">
                Web Development
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display">
                Modern Web Applications That Scale
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body">
                Full-stack web development with cutting-edge technologies. From simple websites to complex web applications that handle millions of users.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Start Your Web Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View Web Projects
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        
        {/* Background video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/90 via-green-600/70 to-blue-600/50" />
      </Section>

      {/* Features Overview */}
      <Section padding="lg" background="light">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Web Development Capabilities</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                We build scalable, secure, and performant web applications using the latest technologies and best practices
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webFeatures.map((feature, index) => (
              <Card key={index} variant="default" className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl group-hover:animate-bounce-subtle">{feature.icon}</span>
                  </div>
                  <Typography variant="h6" className="font-display">{feature.title}</Typography>
                  <Typography variant="p" className="text-muted-foreground font-body">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Our Web Technology Stack</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Modern, proven technologies that ensure your web application is fast, scalable, and maintainable
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Typography variant="h6" className="font-display text-center mb-4">{stack.category}</Typography>
                    <div className="space-y-2">
                      {stack.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-muted rounded-lg p-2 text-center transition-colors duration-300 hover:bg-blue-50">
                          <Typography variant="small" className="font-mono">{tech}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Web Development Types */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Types of Web Applications We Build</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                From simple websites to complex enterprise applications, we have the expertise to build it all
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "SaaS Platforms",
                description: "Scalable software-as-a-service applications with subscription management, user dashboards, and multi-tenancy",
                features: ["User authentication", "Subscription billing", "Admin dashboards", "API management", "Multi-tenant architecture"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "E-commerce Solutions",
                description: "Full-featured online stores with payment processing, inventory management, and order fulfillment",
                features: ["Payment integration", "Inventory management", "Order processing", "Customer accounts", "Analytics dashboard"],
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Business Web Apps",
                description: "Custom web applications for business process automation, data management, and workflow optimization",
                features: ["Process automation", "Data visualization", "Workflow management", "Reporting tools", "Integration APIs"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Portfolio & Marketing Sites",
                description: "Professional websites that showcase your brand, convert visitors, and drive business growth",
                features: ["SEO optimization", "Contact forms", "Analytics", "CMS integration", "Mobile responsive"],
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop"
              }
            ].map((type, index) => (
              <Card key={index} variant="default" className="overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={type.image}
                      alt={type.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="space-y-4">
                      <Typography variant="h5" className="font-display">{type.title}</Typography>
                      <Typography variant="p" className="text-muted-foreground font-body">
                        {type.description}
                      </Typography>
                      <div>
                        <Typography variant="small" className="font-semibold font-display mb-2">Key Features:</Typography>
                        <ul className="space-y-1">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm font-body">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Web Development Packages</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Flexible pricing options for different project sizes and business needs
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Landing Page",
                price: "$2,500 - $5,000",
                description: "Perfect for marketing and lead generation",
                features: [
                  "Responsive design",
                  "SEO optimization",
                  "Contact forms",
                  "Analytics setup",
                  "1 month support"
                ]
              },
              {
                name: "Business Website",
                price: "$5,000 - $15,000",
                description: "Complete business presence online",
                features: [
                  "Multi-page website",
                  "CMS integration",
                  "E-commerce ready",
                  "Performance optimization",
                  "3 months support"
                ],
                popular: true
              },
              {
                name: "Web Application",
                price: "$15,000 - $100,000+",
                description: "Custom web applications and SaaS platforms",
                features: [
                  "Custom functionality",
                  "User authentication",
                  "Database integration",
                  "API development",
                  "12 months support"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} variant="default" className={`relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <Typography variant="h5" className="font-display mb-2">{plan.name}</Typography>
                    <Typography variant="h3" className="font-display text-green-600 mb-2">{plan.price}</Typography>
                    <Typography variant="small" className="text-muted-foreground font-body">{plan.description}</Typography>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <Typography variant="small" className="font-body">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "accent" : "outline"} 
                    size="lg" 
                    className="w-full group"
                  >
                    <span>Get Started</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg" className="relative overflow-hidden">
        <div className="relative z-10 text-center space-y-8">
          <ScrollAnimate direction="up">
            <div className="space-y-4">
              <Heading2 color="white" className="font-display">Ready to Build Your Web Application?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's create a web solution that drives your business forward and delights your users.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Web Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
