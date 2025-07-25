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

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section 
        background="dark" 
        padding="xl"
        fullHeight="viewport"
        className="relative overflow-hidden"
        safeArea={true}
      >
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 flex flex-col justify-center min-h-screen-75">
          <ScrollAnimate direction="fade" delay={200}>
            <div className="space-y-4 sm:space-y-6">
              <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold font-mono">
                For Tech-First Founders & Startups
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display animate-slide-in-up">
                Build, Launch & Scale Your Tech Product
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body animate-slide-in-up stagger-delay-2">
                Expert technical guidance for founders building innovative tech products. 
                From MVP development to scaling architecture - we speak your language.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10">Get Your Free Strategy Call</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-transform duration-300">
                  Explore Tech Services
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
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float top-20 left-10"></div>
          <div className="absolute w-48 h-48 bg-insight-orange/10 rounded-full blur-3xl animate-float-delayed top-40 right-20"></div>
          <div className="absolute w-32 h-32 bg-implementation-green/10 rounded-full blur-2xl animate-pulse bottom-20 left-1/4"></div>
        </div>
        
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/80 via-deep-blue/60 to-insight-orange/30 animate-gradient-shift" />
      </Section>

      {/* Services Overview */}
      <Section padding="lg" background="light" containerSize="default">
        <div className="text-center space-y-8 sm:space-y-12">
          <ScrollAnimate direction="up">
            <div className="space-y-4 sm:space-y-6">
              <Heading2 className="font-display">How We Accelerate Your Tech Product Journey</Heading2>
              <Lead className="max-w-2xl mx-auto px-4 font-body">
                From idea validation to production deployment, we provide the technical expertise 
                that tech founders need to build world-class products.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "⚡",
                title: "Technical MVP Development",
                description: "Build a production-ready MVP with clean, scalable code.",
                content: "Launch your tech product with a solid foundation. We focus on clean architecture, best practices, and scalable code that grows with your vision."
              },
              {
                icon: "📈",
                title: "Product Architecture & Scaling", 
                description: "Design systems that handle millions of users seamlessly.",
                content: "Build for scale from day one. We design distributed systems, microservices, and cloud-native architectures that perform under pressure."
              },
              {
                icon: "🔍",
                title: "Technical Strategy & Code Review",
                description: "Expert guidance on tech stack and architecture decisions.",
                content: "Make informed technical decisions with expert code reviews, architecture assessments, and technology stack recommendations."
              }
            ].map((service, index) => (
              <Card key={index} variant="default" hover="lift" className="text-left h-full group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl animate-bounce-subtle">{service.icon}</span>
                  </div>
                  <CardTitle className="font-display">{service.title}</CardTitle>
                  <CardDescription className="font-body">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Paragraph className="text-sm font-body">
                    {service.content}
                  </Paragraph>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Tech Excellence Showcase */}
      <Section background="light" padding="lg">
        <div className="text-center space-y-8 sm:space-y-12">
          <ScrollAnimate direction="up">
            <div className="space-y-4 sm:space-y-6">
              <Heading2 className="font-display">Our Technical Expertise</Heading2>
              <Lead className="max-w-2xl mx-auto px-4 font-body">
                Deep technical knowledge across modern tech stacks and innovative approaches 
                to building scalable, maintainable products.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
                title: "Clean Code Architecture",
                description: "Writing maintainable, scalable code that stands the test of time"
              },
              {
                image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop",
                title: "Cloud-Native Solutions", 
                description: "Leveraging modern cloud services for performance and scalability"
              },
              {
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
                title: "API-First Development",
                description: "Building robust APIs that enable seamless integrations and growth"
              }
            ].map((item, index) => (
              <Card key={index} hover="lift" className="overflow-hidden group">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <CardContent className="p-6">
                  <CardTitle className="mb-2 font-display">{item.title}</CardTitle>
                  <CardDescription className="font-body">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimate direction="left">
            <div className="space-y-6">
              <div className="space-y-4">
                <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold font-mono">
                  Why Tech Founders Choose Us
                </Typography>
                <Heading2 className="font-display">Technical Excellence Meets Startup Speed</Heading2>
                <Paragraph className="font-body">
                  We understand the unique challenges of building tech products. The need for clean, 
                  scalable code that ships fast without accumulating technical debt. 
                  That's exactly what we specialize in.
                </Paragraph>
              </div>
              
              <ScrollStagger direction="up" staggerDelay={100} className="space-y-4">
                {[
                  {
                    title: "Tech-First Approach",
                    description: "We speak your language. Deep technical expertise in modern frameworks, cloud architecture, and best practices."
                  },
                  {
                    title: "Production-Ready Code",
                    description: "Ship fast with quality code. We use proven patterns, comprehensive testing, and clean architecture principles."
                  },
                  {
                    title: "Technical Mentorship",
                    description: "Learn as we build together. Code reviews, architectural guidance, and knowledge transfer included."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-implementation-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-implementation-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <Typography variant="h6" className="mb-1 font-display">{item.title}</Typography>
                      <Typography variant="small" className="text-neutral-slate font-body">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </ScrollStagger>
            </div>
          </ScrollAnimate>

          <ScrollAnimate direction="right">
            <ScrollStagger direction="up" staggerDelay={150} className="space-y-6">
              {[
                {
                  number: "10+",
                  title: "Years Combined Experience",
                  description: "Deep technical experience across multiple domains",
                  color: "insight-orange"
                },
                {
                  number: "24/7",
                  title: "Dedicated Support", 
                  description: "Complete focus on your project success",
                  color: "implementation-green"
                },
                {
                  number: "100%",
                  title: "Code Ownership",
                  description: "Full documentation and knowledge transfer",
                  color: "deep-blue"
                }
              ].map((stat, index) => (
                <Card key={index} variant="outline" className="p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Typography variant="h4" className={`text-${stat.color} font-bold font-display`}>{stat.number}</Typography>
                      </div>
                      <div>
                        <Typography variant="h6" className="font-display">{stat.title}</Typography>
                        <Typography variant="small" className="text-neutral-slate font-body">{stat.description}</Typography>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </ScrollStagger>
          </ScrollAnimate>
        </div>
      </Section>

      {/* Technical Excellence Showcase */}
      <Section padding="lg" background="white">
        <div className="text-center space-y-12">
          <ScrollAnimate direction="up">
            <div className="space-y-4">
              <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold font-mono">
                Technical Competence
              </Typography>
              <Heading2 className="font-display">Why Tech-First Founders Choose Us</Heading2>
              <Lead className="max-w-2xl mx-auto text-muted-foreground font-body">
                We're a new company with deep technical expertise, ready to prove ourselves with your project
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "10+",
                title: "Years Combined Experience",
                description: "Deep technical experience in full-stack development and startup environments"
              },
              {
                number: "24/7",
                title: "Dedicated Commitment",
                description: "Complete focus on your success as we build our reputation together"
              },
              {
                number: "100%",
                title: "Code Ownership",
                description: "Complete code ownership, documentation, and knowledge transfer included"
              }
            ].map((item, index) => (
              <Card key={index} variant="default" className="text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Typography variant="h3" color="white" className="font-display">{item.number}</Typography>
                    </div>
                    <div>
                      <Typography variant="h6" className="font-semibold font-display">{item.title}</Typography>
                      <Paragraph className="text-sm text-muted-foreground font-body">
                        {item.description}
                      </Paragraph>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>

          <ScrollAnimate direction="up" delay={400}>
            <div className="bg-muted rounded-lg p-8 max-w-3xl mx-auto">
              <Paragraph className="text-lg italic text-center font-body">
                "We believe in earning trust through exceptional work, not empty promises. 
                Let us prove our technical excellence with your project."
              </Paragraph>
              <div className="flex items-center justify-center mt-4">
                <div>
                  <Typography variant="small" className="font-semibold font-display">The SIIT Company Team</Typography>
                  <Typography variant="muted" className="text-xs font-mono">Technical Partners for Tech-First Founders</Typography>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg" className="relative overflow-hidden">
        <div className="relative z-10 text-center space-y-8">
          <ScrollAnimate direction="up">
            <div className="space-y-4">
              <Heading2 color="white" className="font-display">Ready to Build Your Tech Product?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's turn your technical vision into reality. We're a new company eager to prove our expertise 
                with your project - competitive rates, maximum effort.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Free Technical Consultation</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  See Our Technical Capabilities
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
