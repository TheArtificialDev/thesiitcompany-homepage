import { Metadata } from 'next'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'
import { ScrollAnimate, ScrollStagger } from '@/components/ui/ScrollAnimate'

export const metadata: Metadata = {
  title: 'Technical Capabilities - The SIIT Company',
  description: 'Our technical expertise and competencies for tech-first founders. See our skills in action through example projects and demonstrations.',
}

const technicalCapabilities = [
  {
    title: "Full-Stack Web Applications",
    category: "Web Development",
    description: "Modern, scalable web applications built with the latest technologies",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    features: [
      "Responsive design with Tailwind CSS",
      "Real-time features with WebSockets",
      "Authentication & authorization",
      "Payment integration with Stripe",
      "SEO optimization"
    ],
    icon: "🌐"
  },
  {
    title: "Mobile Application Development",
    category: "Mobile Development", 
    description: "Cross-platform mobile apps that deliver native performance",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Redux"],
    features: [
      "iOS and Android compatibility",
      "Offline-first architecture",
      "Push notifications",
      "In-app purchases",
      "Real-time data synchronization"
    ],
    icon: "📱"
  },
  {
    title: "API Development & Microservices",
    category: "Backend Development",
    description: "Robust, scalable backend systems designed for growth",
    technologies: ["Node.js", "Express", "FastAPI", "Docker", "Kubernetes", "MongoDB"],
    features: [
      "RESTful and GraphQL APIs",
      "Microservices architecture", 
      "Database design & optimization",
      "Caching strategies with Redis",
      "Comprehensive testing"
    ],
    icon: "⚙️"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    category: "Infrastructure",
    description: "Scalable cloud infrastructure with automated deployment pipelines",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    features: [
      "Infrastructure as Code",
      "CI/CD pipelines",
      "Auto-scaling solutions",
      "Monitoring & logging",
      "Security best practices"
    ],
    icon: "☁️"
  },
  {
    title: "E-commerce Solutions",
    category: "E-commerce",
    description: "Complete e-commerce platforms with modern features",
    technologies: ["Next.js", "Shopify", "Stripe", "PayPal", "Algolia"],
    features: [
      "Product catalog management",
      "Shopping cart & checkout",
      "Payment processing",
      "Order management",
      "Search & filtering"
    ],
    icon: "🛍️"
  },
  {
    title: "Data Analytics & Visualization",
    category: "Data Science",
    description: "Transform your data into actionable insights",
    technologies: ["Python", "Pandas", "D3.js", "Chart.js", "PostgreSQL"],
    features: [
      "Data pipeline automation",
      "Interactive dashboards",
      "Real-time analytics",
      "Custom reporting",
      "Performance metrics"
    ],
    icon: "📊"
  }
]

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "AWS/Cloud", level: 82 },
  { name: "Database Design", level: 90 },
  { name: "Mobile Development", level: 80 },
  { name: "DevOps", level: 75 }
]

export default function PortfolioPage() {
  return (
    <MainLayout>
      {/* Hero Section with Video Background */}
      <Section 
        background="dark" 
        padding="xl"
        fullHeight="viewport"
        className="relative overflow-hidden"
      >
        <div className="relative z-10 text-center space-y-6 flex flex-col justify-center min-h-screen-75">
          <ScrollAnimate direction="fade" delay={200}>
            <Typography variant="h1" color="white" className="max-w-4xl mx-auto font-display">
              Technical Capabilities
            </Typography>
            <Typography variant="large" color="white" className="max-w-2xl mx-auto opacity-90 font-body">
              We're a new company with deep technical expertise. Here's what we can build for you.
            </Typography>
          </ScrollAnimate>
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex justify-center">
              <Button variant="accent" size="lg" className="group">
                <a href="#capabilities" className="flex items-center space-x-2">
                  <span>Explore Our Skills</span>
                  <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
                </a>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
        
        {/* Background video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/80 via-purple-600/60 to-blue-600/40 animate-gradient-shift" />
      </Section>

      {/* Technical Skills Overview */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Typography variant="h2" className="font-display">Our Technical Stack</Typography>
              <Typography variant="large" className="max-w-2xl mx-auto text-muted-foreground font-body">
                Modern technologies and proven methodologies for building scalable applications
              </Typography>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Typography variant="h6" className="font-display">{skill.name}</Typography>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <Typography variant="small" className="text-muted-foreground font-mono">
                      {skill.level}% Proficiency
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Technical Capabilities */}
      <Section id="capabilities" background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Typography variant="h2" className="font-display">What We Can Build</Typography>
              <Typography variant="large" className="max-w-2xl mx-auto text-muted-foreground font-body">
                Example projects and technical demonstrations showcasing our capabilities
              </Typography>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} variant="default" className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl group-hover:animate-bounce-subtle transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Typography variant="h5" className="font-display">{capability.title}</Typography>
                          <Typography variant="small" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded text-xs font-mono">
                            {capability.category}
                          </Typography>
                        </div>
                        <Typography variant="p" className="text-muted-foreground font-body">
                          {capability.description}
                        </Typography>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Typography variant="small" className="font-semibold font-display">Key Features:</Typography>
                      <ul className="grid grid-cols-1 gap-1">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm font-body">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <Typography variant="small" className="font-semibold font-display">Technologies:</Typography>
                      <div className="flex flex-wrap gap-2">
                        {capability.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-slate-100 to-slate-200 text-xs px-2 py-1 rounded font-mono hover:from-blue-100 hover:to-purple-100 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Typography variant="h2" className="font-display">Why Work With Us</Typography>
              <Typography variant="large" className="max-w-2xl mx-auto text-muted-foreground font-body">
                Honest advantages of partnering with a new but experienced technical team
              </Typography>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Focused Attention",
                description: "As a new company, you get our complete focus and dedication. We're building our reputation with your success."
              },
              {
                icon: "💰", 
                title: "Competitive Rates",
                description: "Excellent value as we establish ourselves. Quality work at startup-friendly prices."
              },
              {
                icon: "🔧",
                title: "Technical Excellence", 
                description: "Deep technical expertise with modern best practices. Clean code, documentation, and knowledge transfer included."
              }
            ].map((item, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl group-hover:animate-bounce-subtle">{item.icon}</span>
                  </div>
                  <Typography variant="h6" className="font-display">{item.title}</Typography>
                  <Typography variant="p" className="text-muted-foreground font-body">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        background="dark" 
        padding="lg"
        className="relative overflow-hidden"
      >
        <div className="relative z-10 text-center space-y-8">
          <ScrollAnimate direction="up">
            <div className="space-y-4">
              <Typography variant="h2" color="white" className="font-display">Ready to See Our Work in Action?</Typography>
              <Typography variant="large" color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's discuss your technical requirements and show you exactly how we can help bring your vision to life.
              </Typography>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="group">
                <a href="/contact" className="flex items-center space-x-2">
                  <span>Schedule Technical Consultation</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                <a href="/services">View Our Services</a>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
