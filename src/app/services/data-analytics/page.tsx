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
  title: 'Data Analytics Services - The SIIT Company',
  description: 'Business intelligence, data visualization, machine learning, and analytics solutions for data-driven decisions.',
}

const analyticsFeatures = [
  {
    icon: "📊",
    title: "Business Intelligence",
    description: "Transform raw data into actionable business insights"
  },
  {
    icon: "📈",
    title: "Data Visualization",
    description: "Interactive dashboards and compelling data stories"
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    description: "Predictive analytics and automated decision making"
  },
  {
    icon: "🔄",
    title: "ETL Pipelines",
    description: "Automated data extraction, transformation, and loading"
  },
  {
    icon: "☁️",
    title: "Cloud Analytics",
    description: "Scalable analytics solutions on AWS, Azure, and GCP"
  },
  {
    icon: "📱",
    title: "Real-time Analytics",
    description: "Live data streaming and instant insights"
  }
]

const analyticsTools = [
  {
    category: "Visualization Tools",
    tools: ["Tableau", "Power BI", "D3.js", "Chart.js", "Plotly", "Grafana"]
  },
  {
    category: "Data Processing",
    tools: ["Apache Spark", "Pandas", "NumPy", "SQL", "MongoDB", "Elasticsearch"]
  },
  {
    category: "Machine Learning",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras", "MLflow"]
  },
  {
    category: "Cloud Platforms",
    tools: ["AWS Analytics", "Azure Synapse", "Google BigQuery", "Snowflake", "Databricks", "Redshift"]
  }
]

const analyticsUseCases = [
  {
    title: "Customer Analytics",
    description: "Understand customer behavior and optimize the customer journey",
    metrics: ["Customer Lifetime Value", "Churn Prediction", "Segmentation Analysis", "Purchase Patterns"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sales Performance",
    description: "Track sales metrics and identify growth opportunities",
    metrics: ["Revenue Forecasting", "Sales Funnel Analysis", "Territory Performance", "Product Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Operational Analytics",
    description: "Optimize operations and improve efficiency",
    metrics: ["Process Optimization", "Resource Utilization", "Quality Metrics", "Cost Analysis"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Financial Analytics",
    description: "Monitor financial performance and risk management",
    metrics: ["Budget Analysis", "Cash Flow Forecasting", "Risk Assessment", "ROI Tracking"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  }
]

const dataServices = [
  {
    service: "Data Strategy",
    description: "Develop comprehensive data strategies aligned with business goals",
    deliverables: ["Data audit", "Strategy roadmap", "Technology recommendations", "Implementation plan"]
  },
  {
    service: "Dashboard Development",
    description: "Interactive dashboards for real-time business monitoring",
    deliverables: ["Custom dashboards", "KPI tracking", "Automated reporting", "Mobile access"]
  },
  {
    service: "Predictive Analytics",
    description: "Machine learning models for forecasting and optimization",
    deliverables: ["ML models", "Prediction engines", "Model deployment", "Performance monitoring"]
  },
  {
    service: "Data Integration",
    description: "Connect and unify data from multiple sources",
    deliverables: ["ETL pipelines", "Data warehousing", "API integrations", "Data quality assurance"]
  }
]

export default function DataAnalyticsPage() {
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
                Data Analytics
              </Typography>
              <Heading1 color="white" className="max-w-4xl mx-auto px-4 font-display">
                Turn Data Into Competitive Advantage
              </Heading1>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 px-4 font-body">
                Advanced analytics, machine learning, and business intelligence solutions that unlock the power of your data for informed decision-making.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Start Analytics Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue transform hover:scale-105 transition-all duration-300">
                  View Analytics Projects
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
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/90 via-indigo-600/70 to-purple-600/50" />
      </Section>

      {/* Analytics Features */}
      <Section padding="lg" background="light">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Data Analytics Capabilities</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                From descriptive analytics to predictive modeling, we help you make data-driven decisions
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <Card key={index} variant="default" className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
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

      {/* Analytics Tools */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Our Analytics Technology Stack</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Industry-leading tools and technologies for comprehensive data analysis
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="scale" staggerDelay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTools.map((category, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Typography variant="h6" className="font-display text-center mb-4 text-gradient-primary">{category.category}</Typography>
                    <div className="space-y-2">
                      {category.tools.map((tool, idx) => (
                        <div key={idx} className="bg-muted rounded-lg p-2 text-center transition-colors duration-300 hover:bg-indigo-50">
                          <Typography variant="small" className="font-mono">{tool}</Typography>
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

      {/* Use Cases */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Analytics Use Cases</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Real-world applications of data analytics across different business areas
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="left" staggerDelay={200} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsUseCases.map((useCase, index) => (
              <Card key={index} variant="default" className="overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="space-y-4">
                      <Typography variant="h5" className="font-display text-gradient-primary">{useCase.title}</Typography>
                      <Typography variant="p" className="text-muted-foreground font-body">
                        {useCase.description}
                      </Typography>
                      <div>
                        <Typography variant="small" className="font-semibold font-display mb-2 text-indigo-600">Key Metrics:</Typography>
                        <div className="grid grid-cols-1 gap-1">
                          {useCase.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
                              <Typography variant="small" className="font-body">{metric}</Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </ScrollStagger>
        </div>
      </Section>

      {/* Data Services */}
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Our Data Analytics Services</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Comprehensive analytics solutions from strategy to implementation
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataServices.map((service, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <Typography variant="h5" className="font-display text-gradient-primary">{service.service}</Typography>
                    <Typography variant="p" className="text-muted-foreground font-body">
                      {service.description}
                    </Typography>
                    <div>
                      <Typography variant="small" className="font-semibold font-display mb-3 text-indigo-600">
                        Deliverables:
                      </Typography>
                      <div className="grid grid-cols-2 gap-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
                            <Typography variant="small" className="font-body">{deliverable}</Typography>
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

      {/* Analytics Process */}
      <Section background="light" padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Data Analytics Process</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Systematic approach to extracting value from your data
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand business goals and identify data sources"
              },
              {
                step: "02", 
                title: "Collection",
                description: "Gather and integrate data from various sources"
              },
              {
                step: "03",
                title: "Processing",
                description: "Clean, transform, and prepare data for analysis"
              },
              {
                step: "04",
                title: "Analysis",
                description: "Apply statistical and ML techniques for insights"
              },
              {
                step: "05",
                title: "Visualization",
                description: "Create dashboards and reports for stakeholders"
              }
            ].map((phase, index) => (
              <Card key={index} variant="default" className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
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
      <Section padding="lg">
        <div className="space-y-12">
          <ScrollAnimate direction="up">
            <div className="text-center space-y-4">
              <Heading2 className="font-display">Data Analytics Pricing</Heading2>
              <Lead className="max-w-2xl mx-auto font-body">
                Flexible pricing options for analytics projects of different scope and complexity
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollStagger direction="up" staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Analytics Starter",
                price: "$8,000 - $20,000",
                description: "Basic analytics and reporting setup",
                features: [
                  "Dashboard development",
                  "Basic KPI tracking",
                  "Data visualization",
                  "Simple reporting",
                  "3 months support"
                ]
              },
              {
                name: "Advanced Analytics",
                price: "$20,000 - $60,000",
                description: "Comprehensive analytics with ML capabilities",
                features: [
                  "Predictive modeling",
                  "Advanced dashboards",
                  "Data integration",
                  "Custom analytics",
                  "6 months support"
                ],
                popular: true
              },
              {
                name: "Enterprise Analytics",
                price: "$60,000 - $200,000+",
                description: "Enterprise-scale analytics and BI platform",
                features: [
                  "Complete analytics platform",
                  "Advanced ML models",
                  "Real-time analytics",
                  "Enterprise integrations",
                  "12 months support"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} variant="default" className={`relative group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <Typography variant="h5" className="font-display mb-2">{plan.name}</Typography>
                    <Typography variant="h3" className="font-display text-indigo-600 mb-2">{plan.price}</Typography>
                    <Typography variant="small" className="text-muted-foreground font-body">{plan.description}</Typography>
                  </div>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
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
              <Heading2 color="white" className="font-display">Ready to Unlock Your Data's Potential?</Heading2>
              <Lead color="white" className="max-w-2xl mx-auto opacity-90 font-body">
                Let's transform your data into actionable insights that drive business growth and competitive advantage.
              </Lead>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Analytics Project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="absolute w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-float top-10 left-10"></div>
          <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed bottom-10 right-10"></div>
        </div>
      </Section>
    </MainLayout>
  )
}
