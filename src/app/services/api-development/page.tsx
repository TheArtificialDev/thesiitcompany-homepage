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
  title: 'API Development Services - The SIIT Company',
  description: 'RESTful APIs, GraphQL, microservices, and API integration services for modern applications.',
}

const apiFeatures = [
  {
    icon: "🔌",
    title: "RESTful APIs",
    description: "Standards-compliant REST APIs with comprehensive documentation"
  },
  {
    icon: "⚡",
    title: "GraphQL Services",
    description: "Flexible GraphQL APIs for efficient data fetching"
  },
  {
    icon: "🏗️",
    title: "Microservices",
    description: "Scalable microservice architectures for complex systems"
  },
  {
    icon: "🔐",
    title: "Authentication & Security",
    description: "JWT, OAuth, API keys, and rate limiting implementation"
  },
  {
    icon: "📊",
    title: "Real-time APIs",
    description: "WebSocket connections for live data and notifications"
  },
  {
    icon: "🔄",
    title: "Third-party Integrations",
    description: "Seamless integration with external services and APIs"
  }
]

const apiTypes = [
  {
    type: "REST APIs",
    description: "Traditional REST APIs with full CRUD operations",
    technologies: ["Express.js", "FastAPI", "Django REST", "Spring Boot"],
    use_cases: ["CRUD operations", "Mobile app backends", "Web service integration", "Data synchronization"]
  },
  {
    type: "GraphQL APIs",
    description: "Modern GraphQL APIs for flexible data queries",
    technologies: ["Apollo Server", "GraphQL Yoga", "Hasura", "AWS AppSync"],
    use_cases: ["Complex data relationships", "Frontend optimization", "Real-time subscriptions", "API federation"]
  },
  {
    type: "Microservices",
    description: "Distributed service architectures",
    technologies: ["Docker", "Kubernetes", "gRPC", "Apache Kafka"],
    use_cases: ["Large-scale systems", "Team autonomy", "Technology diversity", "Independent deployment"]
  },
  {
    type: "Real-time APIs",
    description: "Live data streaming and event-driven APIs",
    technologies: ["Socket.io", "WebSockets", "Server-Sent Events", "Redis Pub/Sub"],
    use_cases: ["Live chat", "Real-time updates", "Notifications", "Collaborative features"]
  }
]

export default function APIDevelopmentPage() {
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
                API Development
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display">
                Robust APIs That Connect Everything
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body">
                Enterprise-grade API development with RESTful services, GraphQL, microservices, and seamless third-party integrations.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Build Your API</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View API Projects
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
          <source src="https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/90 via-purple-600/70 to-blue-600/50" />
      </Section>

      {/* API Features */}
      <Section padding="lg" background="light">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">API Development Expertise</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                We build scalable, secure, and well-documented APIs that power modern applications and enable seamless integrations
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
              <Card key={index} variant="default" className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
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

      {/* API Types */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Types of APIs We Develop</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                From traditional REST APIs to modern GraphQL and real-time solutions
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="space-y-8">
            {apiTypes.map((api, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Typography variant="h4" className="font-display text-gradient-primary">{api.type}</Typography>
                      <Typography variant="p" className="text-muted-foreground font-body text-lg">
                        {api.description}
                      </Typography>
                      <div>
                        <Typography variant="small" className="font-semibold font-display mb-3 text-purple-600">
                          Use Cases:
                        </Typography>
                        <div className="grid grid-cols-2 gap-2">
                          {api.use_cases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></span>
                              <Typography variant="small" className="font-body">{useCase}</Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Typography variant="h6" className="font-display">Technologies</Typography>
                      <div className="grid grid-cols-2 gap-3">
                        {api.technologies.map((tech, idx) => (
                          <div key={idx} className="bg-muted rounded-lg p-3 text-center transition-all duration-300 hover:bg-purple-50 hover:scale-105">
                            <Typography variant="small" className="font-mono font-semibold">{tech}</Typography>
                          </div>
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

      {/* API Development Process */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Our API Development Process</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                A systematic approach to building APIs that are secure, scalable, and maintainable
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "API Design",
                description: "Design API architecture, endpoints, data models, and documentation specifications"
              },
              {
                step: "02", 
                title: "Development",
                description: "Build robust APIs with proper error handling, validation, and security measures"
              },
              {
                step: "03",
                title: "Testing",
                description: "Comprehensive testing including unit tests, integration tests, and load testing"
              },
              {
                step: "04",
                title: "Documentation",
                description: "Create detailed API documentation with examples and interactive testing tools"
              }
            ].map((phase, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  <Typography variant="h6" className="font-display">{phase.title}</Typography>
                  <Typography variant="small" className="text-muted-foreground font-body">
                    {phase.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Integration Showcase */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Popular API Integrations</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                We integrate with popular services and build custom APIs for any business need
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={100} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Stripe", category: "Payments" },
              { name: "AWS", category: "Cloud" },
              { name: "Twilio", category: "Communications" },
              { name: "SendGrid", category: "Email" },
              { name: "Google Maps", category: "Location" },
              { name: "Firebase", category: "Backend" },
              { name: "Shopify", category: "E-commerce" },
              { name: "Slack", category: "Messaging" },
              { name: "DocuSign", category: "Documents" },
              { name: "Zoom", category: "Video" },
              { name: "Salesforce", category: "CRM" },
              { name: "GitHub", category: "Development" }
            ].map((integration, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center space-y-2">
                  <Typography variant="small" className="font-semibold font-display">{integration.name}</Typography>
                  <Typography variant="small" className="text-muted-foreground font-body text-xs">{integration.category}</Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">API Development Pricing</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Transparent pricing for different API complexity levels and business requirements
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Simple API",
                price: "$3,000 - $8,000",
                description: "Basic REST API with CRUD operations",
                features: [
                  "REST API endpoints",
                  "Database integration",
                  "Basic authentication",
                  "API documentation",
                  "Basic testing"
                ]
              },
              {
                name: "Advanced API",
                price: "$8,000 - $20,000",
                description: "Complex APIs with advanced features",
                features: [
                  "REST + GraphQL",
                  "Advanced authentication",
                  "Real-time features",
                  "Third-party integrations",
                  "Comprehensive testing"
                ],
                popular: true
              },
              {
                name: "Enterprise API",
                price: "$20,000 - $100,000+",
                description: "Microservices and enterprise solutions",
                features: [
                  "Microservice architecture",
                  "High availability",
                  "Advanced security",
                  "Performance optimization",
                  "24/7 monitoring"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} variant="default" className={`relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <Typography variant="h5" className="font-display mb-2">{plan.name}</Typography>
                    <Typography variant="h3" className="font-display text-purple-600 mb-2">{plan.price}</Typography>
                    <Typography variant="small" className="text-muted-foreground font-body">{plan.description}</Typography>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
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
              <Heading2 color="white" className="font-display">Ready to Build Your API?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's create robust APIs that power your applications and enable seamless integrations.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your API Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
