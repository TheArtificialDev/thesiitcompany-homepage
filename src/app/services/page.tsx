import { Metadata } from 'next'
import Link from 'next/link'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Technology Services - The SIIT Company',
  description: 'Mobile app development, web development, API services, cloud infrastructure, e-commerce, and data analytics for modern businesses.',
}

const services = [
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: [
      "Cross-platform development",
      "Native performance optimization",
      "Real-time data synchronization",
      "App store deployment"
    ],
    icon: "📱",
    pricing: "Starting at $15,000",
    timeline: "6-12 weeks",
    ideal: "Mobile-first businesses, consumer applications",
    link: "/services/mobile-app-development"
  },
  {
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks and scalable architecture.",
    features: [
      "React & Next.js development",
      "Responsive design",
      "SEO optimization",
      "Performance optimization"
    ],
    icon: "🌐",
    pricing: "Starting at $5,000",
    timeline: "4-8 weeks",
    ideal: "SaaS platforms, business websites",
    link: "/services/web-development"
  },
  {
    title: "API Development",
    description: "RESTful APIs, GraphQL services, and microservices for seamless integrations.",
    features: [
      "REST & GraphQL APIs",
      "Microservices architecture",
      "Third-party integrations",
      "Real-time capabilities"
    ],
    icon: "🔌",
    pricing: "Starting at $8,000",
    timeline: "3-6 weeks",
    ideal: "Data-driven applications, system integrations",
    link: "/services/api-development"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions on AWS, Azure, and Google Cloud Platform.",
    features: [
      "Cloud migration strategy",
      "Infrastructure as Code",
      "Auto-scaling setup",
      "Security & compliance"
    ],
    icon: "☁️",
    pricing: "Starting at $10,000",
    timeline: "4-8 weeks",
    ideal: "Growing businesses, enterprise applications",
    link: "/services/cloud-infrastructure"
  },
  {
    title: "E-commerce Development",
    description: "Custom online stores and e-commerce platforms that drive sales and growth.",
    features: [
      "Shopify & custom platforms",
      "Payment gateway integration",
      "Inventory management",
      "Mobile commerce optimization"
    ],
    icon: "�",
    pricing: "Starting at $8,000",
    timeline: "6-10 weeks",
    ideal: "Retail businesses, online marketplaces",
    link: "/services/e-commerce"
  },
  {
    title: "Data Analytics",
    description: "Business intelligence, data visualization, and machine learning solutions.",
    features: [
      "Interactive dashboards",
      "Predictive analytics",
      "Data pipeline automation",
      "Machine learning models"
    ],
    icon: "�",
    pricing: "Starting at $12,000",
    timeline: "4-8 weeks",
    ideal: "Data-driven businesses, enterprise analytics",
    link: "/services/data-analytics"
  }
]

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We start by understanding your vision, goals, and constraints. What problem are you solving and for whom?"
  },
  {
    step: "02", 
    title: "Design",
    description: "Together we design a solution that fits your budget, timeline, and technical requirements."
  },
  {
    step: "03",
    title: "Develop",
    description: "We build your product using proven technologies and best practices, with regular check-ins and demos."
  },
  {
    step: "04",
    title: "Deploy",
    description: "Launch your product with confidence, including monitoring, analytics, and ongoing support."
  }
]

const industries = [
  {
    name: "SaaS & Software",
    description: "B2B and B2C software solutions",
    examples: ["CRM platforms", "Project management tools", "Analytics dashboards"],
    icon: "💻"
  },
  {
    name: "E-commerce & Marketplaces", 
    description: "Online retail and marketplace platforms",
    examples: ["Online stores", "Multi-vendor marketplaces", "Subscription services"],
    icon: "🛒"
  },
  {
    name: "FinTech & Financial Services",
    description: "Financial technology solutions",
    examples: ["Payment platforms", "Investment apps", "Banking solutions"],
    icon: "💰"
  },
  {
    name: "HealthTech & Wellness",
    description: "Healthcare and wellness applications",
    examples: ["Telemedicine platforms", "Health tracking apps", "Medical software"],
    icon: "🏥"
  },
  {
    name: "EdTech & Learning",
    description: "Educational technology platforms",
    examples: ["Learning management systems", "Online courses", "Educational games"],
    icon: "🎓"
  },
  {
    name: "MarketTech & PropTech",
    description: "Marketing and real estate technology",
    examples: ["Marketing automation", "Property management", "Real estate platforms"],
    icon: "🏢"
  }
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            Technology Services That Scale
          </Typography>
          <Typography variant="lead" className="opacity-90 mb-8">
            From mobile apps to cloud infrastructure, we provide comprehensive technology solutions 
            that help businesses innovate, grow, and stay competitive in the digital landscape.
          </Typography>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">Our Technology Services</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Comprehensive technology solutions from mobile apps to cloud infrastructure, 
              designed to help your business thrive in the digital economy.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full" hover="lift">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <Typography variant="h3" className="mb-2">{service.title}</Typography>
                    <Typography variant="small" className="text-neutral-slate mb-4">
                      {service.description}
                    </Typography>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Typography variant="h6" className="text-deep-blue">What's Included:</Typography>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-neutral-slate flex items-start">
                          <span className="text-implementation-green mr-2 mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">Investment:</span>
                      <span className="text-insight-orange font-bold">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">Timeline:</span>
                      <span>{service.timeline}</span>
                    </div>
                    <div className="text-xs text-neutral-slate">
                      <strong>Ideal for:</strong> {service.ideal}
                    </div>
                  </div>

                  <Link href={service.link}>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-light-technical">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">Our Development Process</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds your expectations.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-insight-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <Typography variant="h4" className="mb-3">{step.title}</Typography>
                <Typography variant="small" className="text-neutral-slate">
                  {step.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">Industries We Serve</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              From SaaS to FinTech, we've helped startups across industries build 
              successful products that scale.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} hover="glow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <Typography variant="h4" className="mb-2">{industry.name}</Typography>
                    <Typography variant="small" className="text-neutral-slate mb-4">
                      {industry.description}
                    </Typography>
                  </div>
                  
                  <div>
                    <Typography variant="small" className="font-semibold mb-2 block">Examples:</Typography>
                    <ul className="space-y-1">
                      {industry.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-neutral-slate">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-deep-blue to-deep-blue/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h2" className="mb-6">Ready to Transform Your Business?</Typography>
          <Typography variant="p" className="mb-8 opacity-90 text-lg">
            Join hundreds of businesses who've accelerated their growth with our technology solutions. 
            Let's discuss your project and create a custom plan for your success.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
                Get Your Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
