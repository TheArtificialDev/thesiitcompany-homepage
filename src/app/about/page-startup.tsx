import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
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
      icon: '📈'
    },
    {
      title: 'Transparency',
      description: 'No hidden costs, clear timelines, regular updates. You always know where your project stands.',
      icon: '🎯'
    }
  ]

  const milestones = [
    {
      year: '2019',
      title: 'Founded by Startup Veterans',
      description: 'Started by founders who experienced the challenges of building startups firsthand.'
    },
    {
      year: '2020',
      title: 'First 50 Startups',
      description: 'Helped our first 50 startups launch their MVPs and achieve initial traction.'
    },
    {
      year: '2021',
      title: 'Major Exits',
      description: 'Celebrated our first startup acquisitions and successful funding rounds.'
    },
    {
      year: '2022',
      title: '100+ Success Stories',
      description: 'Reached 100+ launched startups with a combined valuation of $500M+.'
    },
    {
      year: '2023',
      title: 'Series A Successes',
      description: 'Multiple portfolio companies raised Series A funding rounds.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to serve startup founders across 15+ countries.'
    }
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
              <Typography variant="p" className="text-slate-600 mb-6">
                To help solo founders and early-stage startups turn their ideas into profitable, 
                scalable businesses without the traditional barriers of hiring a full development team.
              </Typography>
              <Typography variant="p" className="text-slate-600">
                We believe that every great startup begins with a founder who sees a problem 
                and has the courage to solve it. Our job is to give you the technical superpowers 
                to make that vision reality.
              </Typography>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
                alt="Startup team collaborating" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-slate-900 mb-4">
              Our Values
            </Typography>
            <Typography variant="lead" className="text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we take on.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <Typography variant="h4" className="text-slate-900 mb-3">{value.title}</Typography>
                <Typography variant="small" className="text-slate-600">{value.description}</Typography>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-slate-900 mb-4">
              Meet the Team
            </Typography>
            <Typography variant="lead" className="text-slate-600 max-w-3xl mx-auto">
              Experienced founders and builders who've walked the startup journey and want to help you succeed.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <Typography variant="h4" className="text-slate-900 mb-1">{member.name}</Typography>
                  <Typography variant="small" className="text-blue-600 font-semibold mb-3">{member.role}</Typography>
                  <Typography variant="small" className="text-slate-600">{member.bio}</Typography>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-slate-900 mb-4">
              Our Journey
            </Typography>
            <Typography variant="lead" className="text-slate-600 max-w-3xl mx-auto">
              From helping our first startup to celebrating major exits, here's how we've grown together with the startup community.
            </Typography>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <Typography variant="h4" className="text-blue-600 font-bold">{milestone.year}</Typography>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-grow">
                    <Typography variant="h4" className="text-slate-900 mb-2">{milestone.title}</Typography>
                    <Typography variant="p" className="text-slate-600">{milestone.description}</Typography>
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
          <div className="text-center max-w-4xl mx-auto">
            <Typography variant="h2" className="text-white mb-6">
              Ready to Join Our Success Stories?
            </Typography>
            <Typography variant="lead" className="text-blue-100 mb-8">
              Let's discuss how we can help turn your startup idea into a thriving business. 
              Get started with a free strategy consultation.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Your Free Call
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
