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
import { ScrollAnimate, ScrollStagger } from '@/components/ui/ScrollAnimate'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Development Services - The SIIT Company',
  description: 'Custom e-commerce solutions, Shopify development, WooCommerce, and online store optimization.',
}

const ecommerceFeatures = [
  {
    icon: "🛒",
    title: "Custom E-commerce Platforms",
    description: "Tailored online stores built for your unique business needs"
  },
  {
    icon: "💳",
    title: "Payment Integration",
    description: "Secure payment gateways supporting multiple payment methods"
  },
  {
    icon: "📦",
    title: "Inventory Management",
    description: "Real-time stock tracking and automated inventory updates"
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description: "Comprehensive sales analytics and business intelligence"
  },
  {
    icon: "📱",
    title: "Mobile Commerce",
    description: "Mobile-optimized shopping experiences and native apps"
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    description: "PCI DSS compliance and enterprise-grade security"
  }
]

const ecommercePlatforms = [
  {
    name: "Shopify Plus",
    description: "Enterprise e-commerce platform for high-volume stores",
    features: ["Advanced automation", "Multi-store management", "Custom integrations", "Scalable infrastructure"],
    best_for: "Large businesses, enterprise retailers, high-volume stores"
  },
  {
    name: "Custom E-commerce",
    description: "Fully custom e-commerce solution built from scratch",
    features: ["Complete customization", "Unique functionality", "Full control", "Scalable architecture"],
    best_for: "Unique business models, complex requirements, specific integrations"
  },
  {
    name: "WooCommerce",
    description: "WordPress-based e-commerce for content-rich stores",
    features: ["Content integration", "SEO-friendly", "Plugin ecosystem", "Cost-effective"],
    best_for: "Content marketers, small to medium businesses, WordPress users"
  },
  {
    name: "Magento Commerce",
    description: "Feature-rich platform for complex e-commerce needs",
    features: ["Multi-store capability", "B2B functionality", "Advanced catalog", "Enterprise features"],
    best_for: "B2B businesses, complex catalogs, international commerce"
  }
]

const ecommerceServices = [
  {
    category: "Store Development",
    services: [
      { name: "Custom Theme Design", description: "Unique brand-focused designs" },
      { name: "Product Catalog Setup", description: "Organized product categorization" },
      { name: "Shopping Cart Optimization", description: "Streamlined checkout process" },
      { name: "Search & Filtering", description: "Advanced product discovery" }
    ]
  },
  {
    category: "Payment & Logistics",
    services: [
      { name: "Payment Gateway Integration", description: "Multiple payment options" },
      { name: "Shipping Configuration", description: "Automated shipping calculations" },
      { name: "Tax Management", description: "Multi-region tax handling" },
      { name: "Order Management", description: "Streamlined fulfillment process" }
    ]
  },
  {
    category: "Marketing & Growth",
    services: [
      { name: "SEO Optimization", description: "Search engine visibility" },
      { name: "Email Marketing Integration", description: "Automated customer communication" },
      { name: "Social Media Integration", description: "Social commerce features" },
      { name: "Analytics Setup", description: "Performance tracking and insights" }
    ]
  },
  {
    category: "Advanced Features",
    services: [
      { name: "Multi-vendor Marketplace", description: "Support for multiple sellers" },
      { name: "Subscription Commerce", description: "Recurring payment management" },
      { name: "B2B Functionality", description: "Wholesale and bulk ordering" },
      { name: "Mobile App Development", description: "Native shopping apps" }
    ]
  }
]

export default function EcommerceDevelopmentPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section 
        background="dark" 
        padding="xl"
        fullHeight="viewport"
        className="relative overflow-hidden"
      >
        <div className="relative z-10 text-center space-y-6 flex flex-col justify-center min-h-screen-75">
          <ScrollAnimate direction="fade" delay={200}>
            <div className="space-y-4">
              <Typography variant="small" color="accent" className="uppercase tracking-wide font-semibold font-mono">
                E-commerce Development
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display">
                Online Stores That Drive Sales & Growth
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body">
                Custom e-commerce solutions that convert visitors into customers. From Shopify to custom platforms, we build stores that scale with your business.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Build Your Store</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View E-commerce Projects
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        
        {/* Background video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://videos.pexels.com/video-files/3843433/3843433-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/90 via-orange-600/70 to-red-600/50" />
      </Section>

      {/* E-commerce Features */}
      <Section padding="lg" background="light">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">E-commerce Development Capabilities</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Everything you need to launch and grow a successful online business
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <Card key={index} variant="default" className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl group-hover:animate-bounce-subtle">{feature.icon}</span>
                  </div>
                  <Typography variant="h6" className="font-display">{feature.title}</Typography>
                  <Typography variant="p" className="text-muted-foreground font-body">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* E-commerce Platforms */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">E-commerce Platforms We Work With</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                From turnkey solutions to custom development, we choose the right platform for your needs
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="space-y-8">
            {ecommercePlatforms.map((platform, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Typography variant="h4" className="font-display text-gradient-primary">{platform.name}</Typography>
                      <Typography variant="p" className="text-muted-foreground font-body text-lg">
                        {platform.description}
                      </Typography>
                      <div>
                        <Typography variant="small" className="font-semibold font-display mb-2 text-orange-600">
                          Best For:
                        </Typography>
                        <Typography variant="small" className="font-body text-muted-foreground">
                          {platform.best_for}
                        </Typography>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Typography variant="h6" className="font-display">Key Features</Typography>
                      <div className="grid grid-cols-1 gap-3">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></span>
                            <Typography variant="small" className="font-body">{feature}</Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* E-commerce Services */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Comprehensive E-commerce Services</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                End-to-end e-commerce development from concept to conversion optimization
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecommerceServices.map((category, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-display text-gradient-primary text-center">{category.category}</Typography>
                    <div className="space-y-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="border-l-4 border-orange-500/20 pl-4 space-y-1">
                          <Typography variant="small" className="font-semibold font-display">{service.name}</Typography>
                          <Typography variant="small" className="text-muted-foreground font-body">{service.description}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Development Process */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">E-commerce Development Process</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Systematic approach to building high-converting online stores
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: "01",
                title: "Strategy",
                description: "Business analysis and e-commerce strategy planning"
              },
              {
                step: "02", 
                title: "Design",
                description: "UX/UI design focused on conversion optimization"
              },
              {
                step: "03",
                title: "Development",
                description: "Platform setup and custom feature development"
              },
              {
                step: "04",
                title: "Integration",
                description: "Payment, shipping, and third-party integrations"
              },
              {
                step: "05",
                title: "Testing",
                description: "Comprehensive testing and optimization"
              },
              {
                step: "06",
                title: "Launch",
                description: "Go-live support and ongoing optimization"
              }
            ].map((phase, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  <Typography variant="h6" className="font-display">{phase.title}</Typography>
                  <Typography variant="small" className="text-muted-foreground font-body">
                    {phase.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">E-commerce Development Pricing</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Transparent pricing for e-commerce projects of all sizes and complexity levels
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Store",
                price: "$5,000 - $15,000",
                description: "Perfect for small businesses getting started online",
                features: [
                  "Platform setup (Shopify/WooCommerce)",
                  "Custom theme design",
                  "Product catalog setup",
                  "Payment integration",
                  "Basic SEO optimization"
                ]
              },
              {
                name: "Professional Store",
                price: "$15,000 - $40,000",
                description: "Advanced features for growing businesses",
                features: [
                  "Custom functionality",
                  "Advanced integrations",
                  "Mobile optimization",
                  "Analytics setup",
                  "6 months support"
                ],
                popular: true
              },
              {
                name: "Enterprise Store",
                price: "$40,000 - $150,000+",
                description: "Custom e-commerce platforms for large businesses",
                features: [
                  "Fully custom platform",
                  "Advanced features",
                  "Multi-store management",
                  "Enterprise integrations",
                  "12 months support"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} variant="default" className={`relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <Typography variant="h5" className="font-display mb-2">{plan.name}</Typography>
                    <Typography variant="h3" className="font-display text-orange-600 mb-2">{plan.price}</Typography>
                    <Typography variant="small" className="text-muted-foreground font-body">{plan.description}</Typography>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <Typography variant="small" className="font-body">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "accent" : "outline"} 
                    size="lg" 
                    className="w-full group"
                  >
                    <span>Get Started</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="lg" className="relative overflow-hidden">
        <div className="relative z-10 text-center space-y-8">
          <ScrollAnimate direction="up">
            <div className="space-y-4">
              <Heading2 color="white" className="font-display">Ready to Launch Your Online Store?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's build an e-commerce platform that drives sales and grows your business online.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your E-commerce Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
