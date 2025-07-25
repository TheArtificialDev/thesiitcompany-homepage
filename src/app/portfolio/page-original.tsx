import { Metadata } from 'next'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Portfolio - The SIIT Company',
  description: 'Explore our successful projects and case studies showcasing innovative technology solutions across various industries.',
}

const caseStudies = [
  {
    title: "E-commerce Platform Modernization",
    client: "RetailTech Solutions",
    industry: "E-commerce",
    challenge: "Legacy system unable to handle increased traffic and modern payment methods",
    solution: "Complete platform rebuild using React, Node.js, and microservices architecture",
    results: [
      "300% increase in page load speed",
      "99.9% uptime improvement",
      "40% increase in conversion rates",
      "Reduced infrastructure costs by 60%"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    image: "🛒",
    timeline: "6 months",
    budget: "$150,000"
  },
  {
    title: "Healthcare Data Analytics Platform",
    client: "MedInsight Corp",
    industry: "Healthcare",
    challenge: "Need for real-time patient data analysis and HIPAA-compliant reporting",
    solution: "Cloud-based analytics platform with ML-powered insights and secure data handling",
    results: [
      "Reduced diagnosis time by 45%",
      "Improved patient outcomes by 30%",
      "Full HIPAA compliance achieved",
      "Automated 80% of reporting processes"
    ],
    technologies: ["Python", "TensorFlow", "PostgreSQL", "Azure", "React"],
    image: "🏥",
    timeline: "8 months",
    budget: "$250,000"
  },
  {
    title: "Financial Trading System",
    client: "FinanceFlow Ltd",
    industry: "Financial Services",
    challenge: "Real-time trading platform with microsecond latency requirements",
    solution: "High-frequency trading system with advanced risk management and real-time analytics",
    results: [
      "Sub-millisecond trade execution",
      "Zero downtime in 18 months",
      "50% reduction in operational costs",
      "99.99% accuracy in trade processing"
    ],
    technologies: ["C++", "Python", "Redis", "Kafka", "React"],
    image: "📈",
    timeline: "12 months",
    budget: "$500,000"
  },
  {
    title: "Smart Manufacturing IoT Solution",
    client: "IndustrialTech Inc",
    industry: "Manufacturing",
    challenge: "Need for predictive maintenance and real-time equipment monitoring",
    solution: "IoT-enabled monitoring system with predictive analytics and automated alerts",
    results: [
      "60% reduction in unplanned downtime",
      "35% increase in overall equipment efficiency",
      "Prevented $2M in potential equipment failures",
      "ROI achieved within 8 months"
    ],
    technologies: ["IoT Sensors", "Python", "InfluxDB", "Grafana", "AWS IoT"],
    image: "🏭",
    timeline: "10 months",
    budget: "$300,000"
  },
  {
    title: "AI-Powered Customer Service Platform",
    client: "ServiceFirst Technologies",
    industry: "SaaS",
    challenge: "High customer service costs and inconsistent response quality",
    solution: "AI chatbot with natural language processing and seamless human handoff",
    results: [
      "70% reduction in response time",
      "90% customer satisfaction score",
      "50% reduction in support costs",
      "Handles 80% of inquiries automatically"
    ],
    technologies: ["Python", "NLP", "OpenAI", "React", "Node.js"],
    image: "🤖",
    timeline: "4 months",
    budget: "$120,000"
  },
  {
    title: "Educational Learning Management System",
    client: "EduTech Academy",
    industry: "Education",
    challenge: "Need for scalable online learning platform with interactive features",
    solution: "Full-featured LMS with video conferencing, assignment tracking, and progress analytics",
    results: [
      "Supports 50,000+ concurrent users",
      "95% student engagement rate",
      "Reduced administrative overhead by 40%",
      "Increased course completion by 25%"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS"],
    image: "🎓",
    timeline: "7 months",
    budget: "$180,000"
  }
]

const testimonials = [
  {
    quote: "The SIIT Company transformed our entire e-commerce infrastructure. The new platform handles 10x our previous traffic with incredible performance.",
    author: "Sarah Johnson",
    role: "CTO, RetailTech Solutions",
    company: "RetailTech Solutions"
  },
  {
    quote: "Their healthcare analytics platform has revolutionized how we analyze patient data. The insights we're getting are game-changing.",
    author: "Dr. Michael Chen",
    role: "Chief Medical Officer",
    company: "MedInsight Corp"
  },
  {
    quote: "The trading system they built exceeds our most optimistic expectations. Zero downtime and lightning-fast execution.",
    author: "Robert Williams",
    role: "Head of Technology",
    company: "FinanceFlow Ltd"
  }
]

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries"
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys"
  },
  {
    number: "$10M+",
    label: "Cost Savings Generated",
    description: "For our clients through optimization"
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Ongoing maintenance and support"
  }
]

export default function PortfolioPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            Our Portfolio
          </Typography>
          <Typography variant="lead" className="opacity-90">
            Discover how we've helped businesses across industries achieve their goals 
            through innovative technology solutions and strategic implementation.
          </Typography>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-light-technical">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center" hover="lift">
                <CardContent className="p-6">
                  <Typography variant="h2" className="text-insight-orange mb-2">{stat.number}</Typography>
                  <Typography variant="h4" className="mb-2">{stat.label}</Typography>
                  <Typography variant="small" className="text-neutral-slate">{stat.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">Case Studies</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Dive deep into our most impactful projects and see how we've solved 
              complex challenges for our clients.
            </Typography>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden" hover="lift">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Project Image/Icon */}
                    <div className="bg-gradient-to-br from-deep-blue to-insight-orange p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">{study.image}</div>
                        <Typography variant="h4" className="mb-2">{study.industry}</Typography>
                        <Typography variant="small" className="opacity-80">{study.timeline}</Typography>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-6">
                        <Typography variant="h3" className="mb-2">{study.title}</Typography>
                        <Typography variant="small" className="text-insight-orange font-semibold">
                          {study.client} • {study.budget}
                        </Typography>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Typography variant="h6" className="mb-2 text-deep-blue">Challenge</Typography>
                          <Typography variant="small" className="text-neutral-slate mb-4">
                            {study.challenge}
                          </Typography>

                          <Typography variant="h6" className="mb-2 text-deep-blue">Solution</Typography>
                          <Typography variant="small" className="text-neutral-slate">
                            {study.solution}
                          </Typography>
                        </div>

                        <div>
                          <Typography variant="h6" className="mb-2 text-deep-blue">Results</Typography>
                          <ul className="space-y-1 mb-4">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="text-sm text-neutral-slate flex items-start">
                                <span className="text-implementation-green mr-2">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-light-technical text-deep-blue text-xs rounded-full border border-neutral-slate/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Button variant="outline" size="sm">
                        Read Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-light-technical">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">What Our Clients Say</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center" hover="glow">
                <CardContent className="p-8">
                  <svg className="w-8 h-8 text-insight-orange mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <Typography variant="p" className="mb-6 italic">
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="h6" className="mb-1">{testimonial.author}</Typography>
                  <Typography variant="small" className="text-neutral-slate">
                    {testimonial.role} at {testimonial.company}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-deep-blue to-deep-blue/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h2" className="mb-6">Ready to Start Your Project?</Typography>
          <Typography variant="p" className="mb-8 opacity-90 text-lg">
            Let's discuss how we can help you achieve similar results for your business.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
              Start Your Project
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Download Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
