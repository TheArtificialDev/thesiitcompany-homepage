import { Metadata } from 'next'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Startup Success Stories - The SIIT Company',
  description: 'See how we\'ve helped founders and startups scale from MVP to millions in revenue with innovative technology solutions.',
}

const caseStudies = [
  {
    title: "From Idea to $10M ARR SaaS Platform",
    client: "TechFlow Startup",
    industry: "SaaS",
    challenge: "Solo founder needed to validate idea and build MVP with limited budget",
    solution: "Built lean MVP in 3 months, then scaled to full platform with user feedback integration",
    results: [
      "Achieved product-market fit in 6 months",
      "Grew from 0 to 10,000 users in first year",
      "$10M ARR within 24 months",
      "Successful Series A funding round"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    image: "💡",
    timeline: "18 months",
    budget: "$75,000 → $10M ARR"
  },
  {
    title: "E-commerce Startup That Beat Amazon",
    client: "NicheMart",
    industry: "E-commerce",
    challenge: "Bootstrapped founder competing against major players in specialized market",
    solution: "Custom e-commerce platform with unique features tailored to niche market needs",
    results: [
      "300% faster than competitors",
      "40% higher conversion rates",
      "Captured 60% market share in 2 years",
      "Acquired by major retailer for $50M"
    ],
    technologies: ["Next.js", "Shopify Plus", "Algolia", "Vercel", "Stripe"],
    image: "🛒",
    timeline: "12 months",
    budget: "$120,000 → $50M exit"
  },
  {
    title: "FinTech Startup's Regulatory Compliance Win",
    client: "PaySecure",
    industry: "FinTech",
    challenge: "Startup needed bank-grade security and compliance on startup budget",
    solution: "Built secure payment platform with automated compliance and fraud detection",
    results: [
      "Achieved PCI DSS Level 1 compliance",
      "Zero security incidents in 3 years",
      "Processing $100M+ annually",
      "Expanded to 15 countries"
    ],
    technologies: ["Python", "Kubernetes", "PostgreSQL", "AWS", "Plaid"],
    image: "🏦",
    timeline: "15 months",
    budget: "$200,000 → $100M+ processed"
  },
  {
    title: "HealthTech MVP to Series B Success",
    client: "WellnessAI",
    industry: "HealthTech",
    challenge: "Medical startup needed HIPAA-compliant platform with AI capabilities",
    solution: "Secure health platform with ML-powered insights and telemedicine integration",
    results: [
      "FDA breakthrough device designation",
      "Improved patient outcomes by 45%",
      "100,000+ patients served",
      "$25M Series B funding raised"
    ],
    technologies: ["Python", "TensorFlow", "React", "FHIR", "Azure"],
    image: "🏥",
    timeline: "24 months",
    budget: "$300,000 → $25M funding"
  },
  {
    title: "EdTech Platform: From Classroom to Global",
    client: "LearnFast Academy",
    industry: "EdTech",
    challenge: "Teacher-founder wanted to scale personalized learning globally",
    solution: "AI-powered learning platform with adaptive curriculum and progress tracking",
    results: [
      "Scaled to 50,000+ students globally",
      "25% improvement in learning outcomes",
      "95% student retention rate",
      "Partnerships with 200+ schools"
    ],
    technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "GCP"],
    image: "🎓",
    timeline: "20 months",
    budget: "$150,000 → Global reach"
  },
  {
    title: "Mobile App: 0 to 1M Downloads",
    client: "FitnessTracker Pro",
    industry: "Mobile/Fitness",
    challenge: "Solo founder competing against established fitness apps",
    solution: "Unique mobile app with AI coaching and community features",
    results: [
      "1M+ downloads in first year",
      "4.8 star rating with 100k+ reviews",
      "$500K monthly recurring revenue",
      "Featured by Apple as 'App of the Day'"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "ML Kit"],
    image: "📱",
    timeline: "10 months",
    budget: "$80,000 → $500K MRR"
  }
]

const testimonials = [
  {
    quote: "From idea to $10M ARR in 24 months. The SIIT Company didn't just build our platform - they helped us think like successful founders.",
    author: "Alex Rivera",
    role: "Founder & CEO",
    company: "TechFlow (Exited for $85M)"
  },
  {
    quote: "As a solo founder, I needed a technical partner who understood the startup journey. They delivered an MVP that got us to product-market fit fast.",
    author: "Sarah Kim",
    role: "Solo Founder",
    company: "NicheMart (Acquired by Walmart)"
  },
  {
    quote: "They built our FinTech platform like they were co-founders. Every decision was made with our long-term success in mind.",
    author: "Michael Thompson",
    role: "Co-founder",
    company: "PaySecure (Series B)"
  }
]

const stats = [
  {
    number: "150+",
    label: "Startups Launched",
    description: "From MVP to successful exit"
  },
  {
    number: "$500M+",
    label: "Founder Value Created",
    description: "Total valuation of startups we've helped build"
  },
  {
    number: "85%",
    label: "Success Rate",
    description: "Startups that reach profitability"
  },
  {
    number: "6 months",
    label: "Average MVP Timeline",
    description: "From idea to market validation"
  }
]

export default function PortfolioPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            Startup Success Stories
          </Typography>
          <Typography variant="lead" className="opacity-90">
            From MVP to millions in revenue. See how we've helped founders transform 
            their ideas into thriving businesses that scale, grow, and exit successfully.
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
            <Typography variant="h2" className="mb-4">Founder Success Stories</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Real startups. Real results. See how we've helped founders go from idea 
              to IPO, acquisition, and everything in between.
            </Typography>
          </div>
          
          {/* Visual showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Startup team collaborating" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <Typography variant="h6">Team Collaboration</Typography>
                <Typography variant="small" className="opacity-80">Building the future together</Typography>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Growth analytics dashboard" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <Typography variant="h6">Growth Metrics</Typography>
                <Typography variant="small" className="opacity-80">Data-driven success</Typography>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                alt="Celebrating startup milestones" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <Typography variant="h6">Milestone Celebration</Typography>
                <Typography variant="small" className="opacity-80">Success stories we've built</Typography>
              </div>
            </div>
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
            <Typography variant="h2" className="mb-4">What Founders Say About Us</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto">
              Success speaks louder than words. Here's what startup founders say about 
              their journey with us from idea to exit.
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
          <Typography variant="h2" className="mb-6">Ready to Build Your Startup?</Typography>
          <Typography variant="p" className="mb-8 opacity-90 text-lg">
            Join 150+ founders who've turned their ideas into successful businesses. 
            Let's make your startup the next success story.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
              Start Your MVP
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Download Success Stories
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
