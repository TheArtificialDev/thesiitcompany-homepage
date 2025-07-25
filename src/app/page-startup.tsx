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
          <div className="space-y-4 sm:space-y-6">
            <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold">
              For Solo Founders & Startups
            </Typography>
            <Heading1 color="white" className="max-w-4xl mx-auto px-4">
              Turn Your Big Ideas Into Profitable Digital Products
            </Heading1>
            <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4">
              From MVP to market leader. We help solo founders and early-stage startups build, launch, 
              and scale their tech products without the overhead of a full development team.
            </Lead>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Get Your Free Strategy Call
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-deep-blue">
                See How We Help Startups
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background gradient with image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue to-insight-orange/20" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </Section>

      {/* Services Overview */}
      <Section padding="lg" background="light" containerSize="default">
        <div className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <Heading2>How We Accelerate Your Startup Journey</Heading2>
            <Lead className="max-w-2xl mx-auto px-4">
              From idea validation to scaling your product, we provide the technical expertise 
              you need without the overhead of hiring a full development team.
            </Lead>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card variant="default" hover="lift" className="text-left h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-insight-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-insight-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>MVP Development</CardTitle>
                <CardDescription>
                  Get to market fast with a lean, validated product.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Paragraph className="text-sm">
                  Build and launch your minimum viable product in weeks, not months. 
                  We focus on core features that matter to your users and your business.
                </Paragraph>
              </CardContent>
            </Card>

            <Card variant="default" hover="lift" className="text-left h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-implementation-green/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-implementation-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <CardTitle>Product Scaling</CardTitle>
                <CardDescription>
                  Scale your product as your user base grows.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Paragraph className="text-sm">
                  From hundreds to millions of users. We build scalable architectures 
                  that grow with your success without breaking your budget.
                </Paragraph>
              </CardContent>
            </Card>

            <Card variant="default" hover="lift" className="text-left h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-deep-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle>Tech Strategy</CardTitle>
                <CardDescription>
                  Make smart technology decisions that save money and time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Paragraph className="text-sm">
                  Avoid costly mistakes with expert guidance on tech stack selection, 
                  architecture decisions, and product roadmap planning.
                </Paragraph>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visual Success Stories */}
      <Section background="light" padding="lg">
        <div className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <Heading2>Startup Success in Action</Heading2>
            <Lead className="max-w-2xl mx-auto px-4">
              See how we've helped founders transform their ideas into thriving businesses
            </Lead>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover="lift" className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" 
                alt="Founders collaborating on startup idea" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="mb-2">Collaborative Innovation</CardTitle>
                <CardDescription>
                  Teams working together to build the next big thing
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card hover="lift" className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Data analytics and growth charts" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="mb-2">Data-Driven Growth</CardTitle>
                <CardDescription>
                  Analytics and insights that drive business decisions
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card hover="lift" className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                alt="Startup team celebrating success" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="mb-2">Success Stories</CardTitle>
                <CardDescription>
                  From MVP to market leader - celebrating wins together
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold">
                Why Startup Founders Choose Us
              </Typography>
              <Heading2>Built by Founders, For Founders</Heading2>
              <Paragraph>
                We understand the unique challenges of building a startup. Limited budget, 
                tight deadlines, and the need to move fast without breaking things. 
                That's exactly what we help you navigate.
              </Paragraph>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-implementation-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-implementation-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <Typography variant="h6" className="mb-1">Founder-First Approach</Typography>
                  <Typography variant="small" className="text-neutral-slate">
                    We think like founders, not just developers. Every decision considers your runway, timeline, and growth goals.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-implementation-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-implementation-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <Typography variant="h6" className="mb-1">Speed Without Compromise</Typography>
                  <Typography variant="small" className="text-neutral-slate">
                    Launch fast with quality code. We use proven frameworks and best practices to deliver quickly without technical debt.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-implementation-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-implementation-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <Typography variant="h6" className="mb-1">Transparent Partnership</Typography>
                  <Typography variant="small" className="text-neutral-slate">
                    No hidden costs, clear timelines, and regular updates. You always know where your project stands.
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card variant="outline" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-insight-orange/10 rounded-lg flex items-center justify-center">
                    <Typography variant="h4" className="text-insight-orange font-bold">150+</Typography>
                  </div>
                  <div>
                    <Typography variant="h6">Startups Launched</Typography>
                    <Typography variant="small" className="text-neutral-slate">From MVP to successful exit</Typography>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="outline" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-implementation-green/10 rounded-lg flex items-center justify-center">
                    <Typography variant="h4" className="text-implementation-green font-bold">85%</Typography>
                  </div>
                  <div>
                    <Typography variant="h6">Success Rate</Typography>
                    <Typography variant="small" className="text-neutral-slate">Startups that reach profitability</Typography>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="outline" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-deep-blue/10 rounded-lg flex items-center justify-center">
                    <Typography variant="h4" className="text-deep-blue font-bold">6</Typography>
                  </div>
                  <div>
                    <Typography variant="h6">Months Average MVP</Typography>
                    <Typography variant="small" className="text-neutral-slate">From idea to market validation</Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section padding="lg" background="white">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold">
              Success Stories
            </Typography>
            <Heading2>What Startup Founders Say About Us</Heading2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="default" className="text-left">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Paragraph className="text-sm italic">
                    "They built our MVP in 3 weeks and helped us get our first paying customers within a month. 
                    The speed and quality were incredible."
                  </Paragraph>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=100&auto=format&fit=crop&w=40&h=40" 
                      alt="Sarah Chen, Founder of TaskFlow"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <Typography variant="small" className="font-semibold">Sarah Chen</Typography>
                      <Typography variant="muted" className="text-xs">Founder, TaskFlow</Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="default" className="text-left">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Paragraph className="text-sm italic">
                    "From idea to $2M in revenue in 18 months. They understood our vision and helped us execute flawlessly."
                  </Paragraph>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&w=40&h=40" 
                      alt="Marcus Rodriguez, Founder of FitTrack Pro"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <Typography variant="small" className="font-semibold">Marcus Rodriguez</Typography>
                      <Typography variant="muted" className="text-xs">Founder, FitTrack Pro</Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="default" className="text-left">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Paragraph className="text-sm italic">
                    "Best technical partner we could ask for. They helped us scale from 100 to 100,000 users seamlessly."
                  </Paragraph>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop&w=40&h=40" 
                      alt="Alex Johnson, Co-founder of InvoiceAI"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <Typography variant="small" className="font-semibold">Alex Johnson</Typography>
                      <Typography variant="muted" className="text-xs">Co-founder, InvoiceAI</Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Heading2 color="white">Ready to Build Your Startup?</Heading2>
            <Lead color="white" className="max-w-2xl mx-auto opacity-90">
              Join 150+ founders who've turned their ideas into successful businesses. 
              Let's make your startup the next success story.
            </Lead>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Start Your Free Strategy Call
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
                See Our Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
