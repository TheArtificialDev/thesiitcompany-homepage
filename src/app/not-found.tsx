import Link from 'next/link'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-light-technical to-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="text-8xl mb-8">🔍</div>
          
          <Typography variant="h1" className="mb-4 text-deep-blue">
            Page Not Found
          </Typography>
          
          <Typography variant="lead" className="mb-8 text-neutral-slate">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, you can find what you're looking for from our homepage.
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="default" size="lg">
                Back to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-slate/20">
            <Typography variant="h3" className="mb-4 text-deep-blue">
              Quick Links
            </Typography>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/about" className="text-insight-orange hover:underline">
                About Us
              </Link>
              <Link href="/services" className="text-insight-orange hover:underline">
                Services
              </Link>
              <Link href="/portfolio" className="text-insight-orange hover:underline">
                Portfolio
              </Link>
              <Link href="/blog" className="text-insight-orange hover:underline">
                Blog
              </Link>
              <Link href="/contact" className="text-insight-orange hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
