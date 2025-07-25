import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Sectio              <Typography variant="p" className="text-slate-600 mb-6">
                To help solo founders and early-stage startups turn their ideas into profitable, 
                scalable businesses without the traditional barriers of hiring a full development team.
              </Typography>
              <Typography variant="p" className="text-slate-600">
                We believe that every great startup begins with a founder who sees a problem 
                and has the courage to solve it. Our job is to give you the technical superpowers 
                to make that vision reality.
              </Typography>'@/components/ui/Section'
import { Typography } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
      bio: 'Former startup founder turned technical consultant. Built and sold 2 SaaS companies before starting The SIIT Company to help other founders succeed.'
    },
    {
      name: 'Sarah Kim',
      role: 'Product Strategy Lead',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=300&auto=format&fit=crop',
      bio: 'Ex-product manager at Y Combinator startups. Specializes in MVP planning, user research, and product-market fit validation.'
    },
    {
      name: 'Marcus Chen',
      role: 'Full-Stack Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      bio: 'Senior engineer with 8+ years building scalable web applications. Expert in React, Node.js, and cloud architecture.'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
      bio: 'Design consultant for 20+ successful startups. Creates user experiences that convert visitors into paying customers.'
    }
  ]

  const values = [
    {
      title: 'Speed',
      description: 'We move at startup pace. Fast decisions, rapid prototyping, and quick iterations to get you to market faster.',
      icon: '⚡'
    },
    {
      title: 'Founder-First',
      description: 'We understand the founder journey. Limited budget, big dreams, and the need to validate quickly.',
      icon: '🚀'
    },
    {
      title: 'Results',
      description: 'We measure success by your success. User growth, revenue milestones, and funding rounds matter to us.',
      icon: '⭐'
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, working as their trusted technology partners.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices guide everything we do.',
      icon: '🛡️'
    }
  ]

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2019', event: 'First Major Client', description: 'Secured partnership with Fortune 500 company' },
    { year: '2020', event: 'Team Expansion', description: 'Grew to 25+ talented professionals' },
    { year: '2021', event: 'International Reach', description: 'Expanded services to global markets' },
    { year: '2022', event: 'Industry Recognition', description: 'Awarded "IT Services Company of the Year"' },
    { year: '2023', event: 'Innovation Lab', description: 'Launched R&D lab for emerging technologies' },
    { year: '2024', event: 'Sustainable Growth', description: 'Achieved 200% year-over-year growth' }
  ]

  return (
    <MainLayout>
      
      {/* Hero Section */}
      <Section className="pt-20 bg-gradient-to-br from-blue-50 to-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Typography variant="h1" className="text-slate-900 mb-6">
              Built by Founders, For Founders
            </Typography>
            <Typography variant="lead" className="text-slate-600 mb-8">
              We're a team of former startup founders and operators who understand the unique 
              challenges of building a company from scratch. We've been in your shoes.
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h2" className="text-slate-900 mb-6">
                Our Mission
              </Typography>
              <Typography variant="p" className="text-slate-600 mb-6 text-lg leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create lasting competitive advantages in the digital age.
              </Typography>
              <Typography variant="p" className="text-slate-600 mb-8 text-lg leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our mission is to 
                make advanced IT solutions accessible, reliable, and transformative for businesses 
                of all sizes.
              </Typography>
              <Button variant="accent" size="lg">
                Learn About Our Services
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/api/placeholder/600/400"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-slate-900 mb-4">
              Our Core Values
            </Typography>
            <Typography variant="lead" className="text-slate-600">
              The principles that guide every decision and drive our success
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <Typography variant="h3" className="text-slate-900 mb-4">
                  {value.title}
                </Typography>
                <Typography variant="p" className="text-slate-600">
                  {value.description}
                </Typography>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-slate-900 mb-4">
              Meet Our Leadership Team
            </Typography>
            <Typography variant="lead" className="text-slate-600">
              Experienced professionals driving innovation and excellence
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <Typography variant="h3" className="text-slate-900 mb-2">
                  {member.name}
                </Typography>
                <Typography variant="p" className="text-blue-600 font-medium mb-4">
                  {member.role}
                </Typography>
                <Typography variant="p" className="text-slate-600 text-sm">
                  {member.bio}
                </Typography>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-slate-900 mb-4">
              Our Journey
            </Typography>
            <Typography variant="lead" className="text-slate-600">
              Key milestones that shaped our growth and success
            </Typography>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className="p-6">
                      <Typography variant="h3" className="text-slate-900 mb-2">
                        {milestone.event}
                      </Typography>
                      <Typography variant="p" className="text-slate-600">
                        {milestone.description}
                      </Typography>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-blue-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Typography variant="h2" className="text-white mb-6">
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="lead" className="text-blue-100 mb-8">
              Let's discuss how our expertise can help you achieve your technology goals 
              and drive your business forward.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
