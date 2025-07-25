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
  title: 'Mobile App Development Services - The SIIT Company',
  description: 'Professional cross-platform mobile app development for tech startups. React Native, iOS, Android, and Flutter development services.',
}

const features = [
  {
    icon: "📱",
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with React Native and Flutter"
  },
  {
    icon: "⚡",
    title: "Native Performance",
    description: "Optimized for speed and smooth user experience"
  },
  {
    icon: "🔄",
    title: "Real-time Sync",
    description: "Live data synchronization across all devices"
  },
  {
    icon: "🔐",
    title: "Secure Architecture",
    description: "End-to-end encryption and secure data handling"
  },
  {
    icon: "📊",
    title: "Analytics Integration",
    description: "Built-in analytics and performance monitoring"
  },
  {
    icon: "🚀",
    title: "App Store Ready",
    description: "Optimized for App Store and Google Play submission"
  }
]

const technologies = [
  { name: "React Native", level: 95, color: "blue" },
  { name: "Flutter", level: 85, color: "cyan" },
  { name: "TypeScript", level: 90, color: "blue" },
  { name: "Firebase", level: 88, color: "orange" },
  { name: "Redux/Zustand", level: 85, color: "purple" },
  { name: "Native APIs", level: 80, color: "green" }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements, target audience, and technical needs to create a comprehensive development strategy.",
    deliverables: ["Technical specification", "UI/UX wireframes", "Project timeline", "Cost estimation"]
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Create stunning, user-friendly interfaces with interactive prototypes for validation before development.",
    deliverables: ["UI/UX designs", "Interactive prototypes", "Design system", "User flow diagrams"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your app with clean, scalable code while conducting thorough testing throughout the process.",
    deliverables: ["Cross-platform app", "API integration", "Testing suite", "Performance optimization"]
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch your app on both app stores and provide ongoing support and maintenance.",
    deliverables: ["App store deployment", "Documentation", "Training", "Ongoing support"]
  }
]

export default function MobileAppDevelopmentPage() {
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
                Mobile App Development
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display">
                Cross-Platform Mobile Apps That Scale
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body">
                Build powerful mobile applications for iOS and Android with a single codebase. 
                From MVP to enterprise-scale apps that your users will love.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Start Your Mobile Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View Mobile Projects
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
          <source src="https://videos.pexels.com/video-files/4491461/4491461-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/90 via-purple-600/70 to-blue-600/50" />
      </Section>

      {/* Features Overview */}
      <Section padding="lg" background="light">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Mobile App Features & Capabilities</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                We build feature-rich mobile applications with modern capabilities that provide exceptional user experiences
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="default" className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
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
              <Heading2 className="font-display">Our Mobile Technology Stack</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Cutting-edge technologies and frameworks for building high-performance mobile applications
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Typography variant="h6" className="font-display">{tech.name}</Typography>
                      <Typography variant="small" className="font-mono text-muted-foreground">{tech.level}%</Typography>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r from-${tech.color}-500 to-${tech.color}-600 h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Development Process */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Our Mobile Development Process</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                A proven methodology that ensures your mobile app is delivered on time, within budget, and exceeds expectations
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="space-y-8">
            {process.map((step, index) => (
              <Card key={index} variant="default" className="overflow-hidden group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white flex items-center justify-center">
                      <div className="text-center">
                        <Typography variant="h1" className="font-display opacity-20 mb-2">{step.step}</Typography>
                        <Typography variant="h5" className="font-display">{step.title}</Typography>
                      </div>
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <div className="space-y-4">
                        <Typography variant="p" className="text-muted-foreground font-body">
                          {step.description}
                        </Typography>
                        <div>
                          <Typography variant="small" className="font-semibold font-display mb-2">Deliverables:</Typography>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm font-body">
                                <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
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
              <Heading2 className="font-display">Mobile App Development Packages</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Transparent pricing for different project sizes and requirements
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "MVP Mobile App",
                price: "$15,000 - $25,000",
                description: "Perfect for startups validating their idea",
                features: [
                  "Cross-platform development",
                  "Basic user authentication",
                  "Core functionality",
                  "Simple UI/UX design",
                  "App store deployment",
                  "3 months support"
                ],
                popular: false
              },
              {
                name: "Full-Featured App",
                price: "$25,000 - $50,000", 
                description: "Comprehensive solution for growing businesses",
                features: [
                  "Advanced features & integrations",
                  "Custom UI/UX design",
                  "Real-time functionality",
                  "Push notifications",
                  "Analytics integration",
                  "6 months support"
                ],
                popular: true
              },
              {
                name: "Enterprise App",
                price: "$50,000+",
                description: "Large-scale applications with complex requirements",
                features: [
                  "Complex business logic",
                  "Multiple integrations",
                  "Advanced security",
                  "Custom backend",
                  "Performance optimization",
                  "12 months support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} variant="default" className={`relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <Typography variant="h5" className="font-display mb-2">{plan.name}</Typography>
                    <Typography variant="h3" className="font-display text-blue-600 mb-2">{plan.price}</Typography>
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
              <Heading2 color="white" className="font-display">Ready to Build Your Mobile App?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's discuss your mobile app idea and create a solution that drives your business forward.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Mobile Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
