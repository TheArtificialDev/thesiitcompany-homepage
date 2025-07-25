import React from 'react'
import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Typography } from '@/components/ui/Typography'
import { ContactForm } from '@/components/ContactForm'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { Card } from '@/components/ui/Card'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Start Your Startup Journey | The SIIT Company - MVP Development & Startup Strategy',
  description: 'Ready to turn your idea into a profitable startup? Get expert guidance on MVP development, technical strategy, and scaling from founders who\'ve been there.',
  keywords: ['startup consulting', 'MVP development', 'founder support', 'technical strategy', 'startup technology'],
}

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h1" className="text-white mb-6">
              Ready to Turn Your Idea Into Reality?
            </Typography>
            <Typography variant="lead" className="text-blue-100 mb-8">
              From concept to customers in record time. Get a free strategic consultation 
              and discover how we can help you build, launch, and scale your startup 
              with the technical expertise you need.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-blue-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Free consultation</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Typography variant="h2" className="text-deep-blue mb-4">
                  Tell Us About Your Project
                </Typography>
                <Typography variant="p" className="text-neutral-slate">
                  Whether you're looking to modernize legacy systems, implement new technologies, 
                  or optimize your current operations, we're here to help. Fill out the form below 
                  and we'll get back to you with a tailored solution.
                </Typography>
              </div>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <Typography variant="h3" className="text-deep-blue mb-6">
                  Contact Information
                </Typography>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-insight-orange/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-insight-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-deep-blue">Email</p>
                      <p className="text-neutral-slate">info@thesiitcompany.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-insight-orange/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-insight-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-deep-blue">Phone</p>
                      <p className="text-neutral-slate">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-insight-orange/10 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-insight-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-deep-blue">Office</p>
                      <p className="text-neutral-slate">
                        123 Technology Drive<br />
                        Innovation District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Newsletter Signup */}
              <NewsletterSignup variant="card" />

              {/* Office Hours */}
              <Card className="p-6">
                <Typography variant="h3" className="text-deep-blue mb-4">
                  Office Hours
                </Typography>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-slate">Monday - Friday</span>
                    <span className="text-deep-blue font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-slate">Saturday</span>
                    <span className="text-deep-blue font-medium">10:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-slate">Sunday</span>
                    <span className="text-neutral-slate">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-implementation-green/10 rounded-md">
                  <p className="text-sm text-implementation-green font-medium">
                    Emergency support available 24/7 for enterprise clients
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-light-technical">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Typography variant="h2" className="text-deep-blue mb-4">
                Frequently Asked Questions
              </Typography>
              <Typography variant="p" className="text-neutral-slate">
                Quick answers to common questions about our services and process.
              </Typography>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <Typography variant="h3" className="text-deep-blue mb-3">
                  How quickly can you start a project?
                </Typography>
                <Typography variant="p" className="text-neutral-slate">
                  We typically begin discovery and planning within 1-2 weeks of contract signing. 
                  For urgent projects, we can often accelerate this timeline.
                </Typography>
              </Card>

              <Card className="p-6">
                <Typography variant="h3" className="text-deep-blue mb-3">
                  Do you work with small businesses or only enterprises?
                </Typography>
                <Typography variant="p" className="text-neutral-slate">
                  We work with organizations of all sizes, from startups to Fortune 500 companies. 
                  Our solutions are scalable and tailored to your specific needs and budget.
                </Typography>
              </Card>

              <Card className="p-6">
                <Typography variant="h3" className="text-deep-blue mb-3">
                  What industries do you specialize in?
                </Typography>
                <Typography variant="p" className="text-neutral-slate">
                  We have deep expertise in healthcare, manufacturing, financial services, and technology. 
                  However, our framework-based approach allows us to serve virtually any industry.
                </Typography>
              </Card>

              <Card className="p-6">
                <Typography variant="h3" className="text-deep-blue mb-3">
                  Do you provide ongoing support after project completion?
                </Typography>
                <Typography variant="p" className="text-neutral-slate">
                  Yes! We offer comprehensive support packages including monitoring, maintenance, 
                  updates, and training. We believe in long-term partnerships with our clients.
                </Typography>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
