import { Metadata } from 'next'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Startup Services - The SIIT Company',
  description: 'MVP development, product scaling, and technical strategy services designed specifically for solo founders and early-stage startups.',
}

const services = [
  {
    title: "MVP Development & Validation",
    description: "Get your product to market fast with a lean, validated minimum viable product that users actually want.",
    features: [
      "Rapid prototyping in 2-4 weeks",
      "User testing & feedback integration", 
      "Core feature prioritization",
      "Technical debt minimization"
    ],
    icon: "⚡",
    pricing: "Starting at $15,000",
    timeline: "3-6 weeks",
    ideal: "Pre-seed startups, solo founders with validated ideas"
  },
  {
    title: "Product Scaling & Optimization",
    description: "Scale your successful MVP to handle growth without breaking your budget or timeline.",
    features: [
      "Performance optimization",
      "Database scaling strategies",
      "Infrastructure automation",
      "Load testing & monitoring"
    ],
    icon: "📈",
    pricing: "Starting at $25,000",
    timeline: "6-12 weeks",
    ideal: "Post-MVP startups experiencing growth"
  },
  {
    title: "Technical Strategy & Architecture",
    description: "Make smart technology decisions that save money and avoid costly mistakes down the road.",
    features: [
      "Tech stack recommendations",
      "Architecture planning",
      "Security best practices",
      "Cost optimization strategies"
    ],
    icon: "🧠",
    pricing: "Starting at $8,000",
    timeline: "2-4 weeks",
    ideal: "Technical founders needing validation, non-technical founders"
  },
  {
    title: "No-Code/Low-Code Solutions",
    description: "Validate your idea and build your first version without writing code from scratch.",
    features: [
      "Rapid prototype development",
      "Integration setup",
      "Workflow automation",
      "Custom business logic"
    ],
    icon: "🔧",
    pricing: "Starting at $5,000",
    timeline: "1-3 weeks",
    ideal: "Early-stage validation, non-technical founders"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that engage users and drive business growth.",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "App store optimization",
      "Push notifications & analytics"
    ],
    icon: "📱",
    pricing: "Starting at $30,000",
    timeline: "8-16 weeks",
    ideal: "Mobile-first startups, consumer applications"
  },
  {
    title: "Technical Due Diligence",
    description: "Get your technology ready for funding rounds with comprehensive technical assessments.",
    features: [
      "Code quality assessment",
      "Security audit",
      "Scalability analysis",
      "Technical debt evaluation"
    ],
    icon: "🔍",
    pricing: "Starting at $10,000",
    timeline: "2-3 weeks",
    ideal: "Pre-funding startups, acquisition preparation"
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
            Services Built for Startup Success
          </Typography>
          <Typography variant="lead" className="opacity-90 mb-8">
            From MVP to market leader. We provide the technical expertise and strategic guidance 
            that solo founders and startup teams need to build, launch, and scale successfully.
          </Typography>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Project Today
          </Button>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4">Choose Your Growth Path</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Whether you're validating an idea or scaling to millions of users, 
              we have the right service to accelerate your startup journey.
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

                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
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
            <Typography variant="h2" className="mb-4">Our Startup-Focused Process</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              A proven 4-step process designed specifically for the speed and constraints 
              that startups face.
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
          <Typography variant="h2" className="mb-6">Ready to Build Your Startup?</Typography>
          <Typography variant="p" className="mb-8 opacity-90 text-lg">
            Join 150+ founders who've turned their ideas into successful businesses. 
            Let's discuss your project and create a custom plan for your success.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
              Get Your Free Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              View Success Stories
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
