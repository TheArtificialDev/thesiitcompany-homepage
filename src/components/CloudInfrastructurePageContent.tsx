'use client'

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

const cloudFeatures = [
  {
    icon: "☁️",
    title: "Cloud Migration",
    description: "Seamless migration from on-premise to cloud infrastructure"
  },
  {
    icon: "🏗️",
    title: "Infrastructure as Code",
    description: "Automated infrastructure deployment with Terraform and CloudFormation"
  },
  {
    icon: "🔄",
    title: "Auto Scaling",
    description: "Dynamic resource scaling based on demand and usage patterns"
  },
  {
    icon: "🛡️",
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance frameworks"
  },
  {
    icon: "📊",
    title: "Monitoring & Analytics",
    description: "Real-time monitoring, logging, and performance analytics"
  },
  {
    icon: "💰",
    title: "Cost Optimization",
    description: "Intelligent resource management to minimize cloud costs"
  }
]

const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "🏢",
    services: ["EC2", "Lambda", "RDS", "S3", "CloudFormation", "EKS"],
    strengths: ["Market leader", "Comprehensive services", "Global infrastructure", "Enterprise ready"]
  },
  {
    name: "Microsoft Azure",
    logo: "🔷",
    services: ["Virtual Machines", "Functions", "SQL Database", "Blob Storage", "ARM Templates", "AKS"],
    strengths: ["Microsoft integration", "Hybrid cloud", "Enterprise focus", "AI/ML services"]
  },
  {
    name: "Google Cloud Platform",
    logo: "🌟",
    services: ["Compute Engine", "Cloud Functions", "Cloud SQL", "Cloud Storage", "Deployment Manager", "GKE"],
    strengths: ["AI/ML expertise", "Data analytics", "Container services", "Developer friendly"]
  }
]

const infrastructureServices = [
  {
    category: "Compute Services",
    description: "Scalable computing power for any workload",
    services: [
      { name: "Virtual Machines", description: "Configurable VMs for any application" },
      { name: "Container Orchestration", description: "Kubernetes and Docker management" },
      { name: "Serverless Functions", description: "Event-driven computing without servers" },
      { name: "Load Balancing", description: "Traffic distribution and high availability" }
    ]
  },
  {
    category: "Storage & Database",
    description: "Reliable data storage and management solutions",
    services: [
      { name: "Object Storage", description: "Scalable file and media storage" },
      { name: "Managed Databases", description: "SQL and NoSQL database services" },
      { name: "Data Warehousing", description: "Big data analytics and reporting" },
      { name: "Backup & Recovery", description: "Automated backup and disaster recovery" }
    ]
  },
  {
    category: "Networking & Security",
    description: "Secure and performant network infrastructure",
    services: [
      { name: "Virtual Networks", description: "Isolated network environments" },
      { name: "CDN & Edge", description: "Global content delivery networks" },
      { name: "Security Services", description: "WAF, DDoS protection, and monitoring" },
      { name: "Identity Management", description: "Authentication and access control" }
    ]
  },
  {
    category: "DevOps & Monitoring",
    description: "Development and operational excellence tools",
    services: [
      { name: "CI/CD Pipelines", description: "Automated deployment workflows" },
      { name: "Monitoring & Logging", description: "Real-time system observability" },
      { name: "Infrastructure as Code", description: "Version-controlled infrastructure" },
      { name: "Cost Management", description: "Usage tracking and optimization" }
    ]
  }
]

export default function CloudInfrastructurePageContent() {
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
                Cloud Infrastructure
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display">
                Scalable Cloud Solutions That Grow With You
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body">
                Enterprise-grade cloud infrastructure on AWS, Azure, and Google Cloud. From migration to optimization, we handle your entire cloud journey.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Start Cloud Migration</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View Cloud Projects
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
          <source src="https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/90 via-cyan-600/70 to-blue-600/50" />
      </Section>

      {/* Cloud Features */}
      <Section padding="lg" background="light">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Cloud Infrastructure Capabilities</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Comprehensive cloud services from strategy to implementation and ongoing management
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, index) => (
              <Card key={index} variant="default" className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
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

      {/* Cloud Providers */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Multi-Cloud Expertise</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Certified experts across all major cloud platforms to help you choose the right solution
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="space-y-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-4 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        <span className="text-4xl">{provider.logo}</span>
                        <Typography variant="h4" className="font-display">{provider.name}</Typography>
                      </div>
                      <div className="space-y-2">
                        <Typography variant="small" className="font-semibold font-display mb-2 text-cyan-600">
                          Key Strengths:
                        </Typography>
                        {provider.strengths.map((strength, idx) => (
                          <div key={idx} className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
                            <Typography variant="small" className="font-body">{strength}</Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <Typography variant="h6" className="font-display mb-4">Core Services</Typography>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {provider.services.map((service, idx) => (
                          <div key={idx} className="bg-muted rounded-lg p-3 text-center transition-all duration-300 hover:bg-cyan-50 hover:scale-105">
                            <Typography variant="small" className="font-mono font-semibold">{service}</Typography>
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

      {/* Infrastructure Services */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Infrastructure Services</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Complete cloud infrastructure solutions for modern applications
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {infrastructureServices.map((category, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Typography variant="h5" className="font-display text-gradient-primary mb-2">{category.category}</Typography>
                      <Typography variant="p" className="text-muted-foreground font-body">{category.description}</Typography>
                    </div>
                    <div className="space-y-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="border-l-4 border-cyan-500/20 pl-4 space-y-1">
                          <Typography variant="small" className="font-semibold font-display">{service.name}</Typography>
                          <Typography variant="small" className="text-muted-foreground font-body">{service.description}</Typography>
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

      {/* Migration Process */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Cloud Migration Process</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Systematic approach to moving your infrastructure to the cloud with minimal downtime
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate current infrastructure and define migration strategy"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Design cloud architecture and create detailed migration plan"
              },
              {
                step: "03",
                title: "Preparation",
                description: "Set up cloud environment and prepare migration tools"
              },
              {
                step: "04",
                title: "Migration",
                description: "Execute phased migration with continuous monitoring"
              },
              {
                step: "05",
                title: "Optimization",
                description: "Optimize performance, security, and costs post-migration"
              }
            ].map((phase, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
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

      {/* Pricing Section */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Cloud Infrastructure Pricing</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Flexible pricing options for different cloud infrastructure needs and scales
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Cloud Setup",
                price: "$5,000 - $15,000",
                description: "Basic cloud infrastructure setup",
                features: [
                  "Cloud account setup",
                  "Basic security configuration",
                  "Simple deployment pipeline",
                  "Documentation",
                  "1 month support"
                ]
              },
              {
                name: "Cloud Migration",
                price: "$15,000 - $50,000",
                description: "Complete migration to cloud infrastructure",
                features: [
                  "Migration assessment",
                  "Architecture design",
                  "Phased migration",
                  "Performance optimization",
                  "6 months support"
                ],
                popular: true
              },
              {
                name: "Enterprise Cloud",
                price: "$50,000 - $200,000+",
                description: "Enterprise-grade multi-cloud solutions",
                features: [
                  "Multi-cloud strategy",
                  "Advanced security",
                  "High availability setup",
                  "Disaster recovery",
                  "12 months managed support"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} variant="default" className={`relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <Typography variant="h5" className="font-display mb-2">{plan.name}</Typography>
                    <Typography variant="h3" className="font-display text-cyan-600 mb-2">{plan.price}</Typography>
                    <Typography variant="small" className="text-muted-foreground font-body">{plan.description}</Typography>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
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
              <Heading2 color="white" className="font-display">Ready to Move to the Cloud?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's design and implement a cloud infrastructure that scales with your business.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Cloud Migration</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
