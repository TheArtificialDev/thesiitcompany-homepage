import { Metadata } from 'next'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Services - The SIIT Company',
  description: 'Comprehensive technology solutions including cloud architecture, web development, AI integration, and strategic consulting.',
}

const services = [
  {
    title: "Strategic Technology Consulting",
    description: "Expert guidance to align your technology strategy with business objectives for sustainable growth.",
    features: [
      "Digital transformation roadmapping",
      "Technology stack optimization", 
      "Process automation consulting",
      "Innovation workshops"
    ],
    icon: "🎯",
    pricing: "Starting at $5,000",
    timeline: "2-4 weeks"
  },
  {
    title: "Cloud Architecture & Migration",
    description: "Scalable, secure cloud solutions that grow with your business and reduce operational overhead.",
    features: [
      "AWS, Azure, GCP expertise",
      "Containerization with Docker/Kubernetes",
      "Serverless architecture design",
      "Legacy system migration"
    ],
    icon: "☁️",
    pricing: "Starting at $15,000",
    timeline: "4-12 weeks"
  },
  {
    title: "Custom Web Development",
    description: "High-performance web applications built with modern frameworks and best practices.",
    features: [
      "React, Next.js, Vue.js",
      "Node.js, Python, .NET",
      "Progressive Web Apps (PWA)",
      "API development & integration"
    ],
    icon: "💻",
    pricing: "Starting at $10,000", 
    timeline: "6-16 weeks"
  },
  {
    title: "AI & Machine Learning Integration",
    description: "Intelligent solutions that automate processes and provide actionable insights from your data.",
    features: [
      "Natural Language Processing",
      "Computer Vision applications",
      "Predictive analytics",
      "ChatBot development"
    ],
    icon: "🤖",
    pricing: "Starting at $20,000",
    timeline: "8-20 weeks"
  },
  {
    title: "DevOps & Infrastructure",
    description: "Streamlined development pipelines and robust infrastructure for continuous delivery.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & logging",
      "Security & compliance"
    ],
    icon: "⚙️",
    pricing: "Starting at $8,000",
    timeline: "3-8 weeks"
  },
  {
    title: "Data Analytics & Visualization",
    description: "Transform raw data into meaningful insights with powerful analytics and visualization tools.",
    features: [
      "Data warehouse design",
      "ETL pipeline development",
      "Business intelligence dashboards",
      "Real-time analytics"
    ],
    icon: "📊",
    pricing: "Starting at $12,000",
    timeline: "4-10 weeks"
  }
]

const industries = [
  {
    name: "Financial Services",
    description: "Secure, compliant solutions for banking, fintech, and investment firms.",
    image: "🏦"
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant systems for hospitals, clinics, and health tech companies.",
    image: "🏥"
  },
  {
    name: "E-commerce",
    description: "Scalable platforms for online retailers and marketplace businesses.",
    image: "🛒"
  },
  {
    name: "Manufacturing",
    description: "IoT solutions and automation for modern manufacturing operations.",
    image: "🏭"
  },
  {
    name: "Education",
    description: "Learning management systems and educational technology platforms.",
    image: "🎓"
  },
  {
    name: "Startups",
    description: "Rapid MVP development and scalable architecture for growing companies.",
    image: "🚀"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, current challenges, and technical requirements through comprehensive discovery sessions."
  },
  {
    step: "02", 
    title: "Strategy & Design",
    description: "Our team develops a tailored strategy and creates detailed technical designs that align with your objectives and constraints."
  },
  {
    step: "03",
    title: "Development & Implementation",
    description: "Using agile methodologies, we build and implement solutions with regular check-ins and iterative feedback cycles."
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous testing ensures quality and reliability before we deploy your solution to production environments."
  },
  {
    step: "05",
    title: "Support & Optimization",
    description: "Post-launch support and continuous optimization ensure your solution performs at peak efficiency and evolves with your needs."
  }
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            Our Services
          </Typography>
          <Typography variant="lead" className="opacity-90">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </Typography>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">What We Offer</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              From strategic consulting to hands-on development, we provide end-to-end 
              technology solutions that drive measurable business results.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full" hover="lift">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <Typography variant="h3" className="mb-3 text-xl">{service.title}</Typography>
                  <Typography variant="p" className="mb-4 text-sm flex-grow">
                    {service.description}
                  </Typography>
                  
                  <div className="mb-4">
                    <Typography variant="h6" className="mb-2 text-sm font-semibold">Key Features:</Typography>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-neutral-slate flex items-start">
                          <span className="text-insight-orange mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 mt-auto">
                    <div className="flex justify-between items-center mb-3">
                      <Typography variant="small" className="text-insight-orange font-semibold">
                        {service.pricing}
                      </Typography>
                      <Typography variant="small" className="text-neutral-slate">
                        {service.timeline}
                      </Typography>
                    </div>
                    <Button className="w-full" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-light-technical">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">Our Process</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to completion.
            </Typography>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-insight-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="flex-1">
                  <Typography variant="h3" className="mb-3">{step.title}</Typography>
                  <Typography variant="p" className="text-neutral-slate">
                    {step.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">Industries We Serve</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Our expertise spans multiple industries, allowing us to deliver solutions 
              that meet specific regulatory and operational requirements.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center" hover="glow">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{industry.image}</div>
                  <Typography variant="h3" className="mb-3 text-lg">{industry.name}</Typography>
                  <Typography variant="p" className="text-sm">{industry.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section className="bg-light-technical">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">Technology Stack</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              We work with cutting-edge technologies to build robust, scalable solutions.
            </Typography>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Typography variant="h4" className="mb-4 text-insight-orange">Frontend</Typography>
              <ul className="space-y-2 text-sm">
                <li>React & Next.js</li>
                <li>Vue.js & Nuxt.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>
            
            <div>
              <Typography variant="h4" className="mb-4 text-insight-orange">Backend</Typography>
              <ul className="space-y-2 text-sm">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>.NET Core</li>
                <li>Java & Spring</li>
                <li>GraphQL & REST APIs</li>
              </ul>
            </div>

            <div>
              <Typography variant="h4" className="mb-4 text-insight-orange">Cloud & DevOps</Typography>
              <ul className="space-y-2 text-sm">
                <li>AWS, Azure, GCP</li>
                <li>Docker & Kubernetes</li>
                <li>Terraform</li>
                <li>GitLab CI/CD</li>
                <li>Monitoring & Analytics</li>
              </ul>
            </div>

            <div>
              <Typography variant="h4" className="mb-4 text-insight-orange">Data & AI</Typography>
              <ul className="space-y-2 text-sm">
                <li>PostgreSQL, MongoDB</li>
                <li>Redis & Elasticsearch</li>
                <li>TensorFlow & PyTorch</li>
                <li>Apache Spark</li>
                <li>Data Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h2" className="mb-6">Ready to Get Started?</Typography>
          <Typography variant="p" className="mb-8 opacity-90 text-lg">
            Let's discuss your project requirements and how our expertise can help you achieve your goals.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
              Schedule Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
