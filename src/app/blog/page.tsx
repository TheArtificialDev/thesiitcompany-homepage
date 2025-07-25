import { Metadata } from 'next'
import { Typography } from '@/components/ui/Typography'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MainLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Startup Success Blog - The SIIT Company',
  description: 'Essential insights for startup founders: from MVP development to scaling strategies, fundraising tips, and technology decisions that drive growth.',
}

const featuredPost = {
  title: "From Zero to Series A: A Technical Founder's Complete Guide",
  excerpt: "Everything you need to know about building, scaling, and fundraising for your startup from a technical perspective. Real lessons from founders who've been there.",
  author: "Alex Chen",
  role: "Former Startup Founder & CTO",
  date: "January 15, 2024",
  readTime: "12 min read",
  category: "Founder Journey",
  image: "☁️",
  tags: ["Serverless", "Containers", "AWS", "Architecture"]
}

const recentPosts = [
  {
    title: "Implementing Zero-Trust Security in Modern Web Applications",
    excerpt: "A comprehensive guide to implementing zero-trust security principles in your web applications and APIs.",
    author: "Michael Rodriguez",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "Security",
    image: "🔐",
    tags: ["Security", "Zero-Trust", "Web Development"]
  },
  {
    title: "AI-Powered Code Review: Tools and Best Practices",
    excerpt: "Discover how AI can enhance your code review process and improve code quality across your development team.",
    author: "Emily Johnson",
    date: "January 8, 2024",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    image: "🤖",
    tags: ["AI", "Code Review", "Development"]
  },
  {
    title: "Database Performance Optimization for High-Traffic Applications",
    excerpt: "Learn practical strategies for optimizing database performance when dealing with millions of users and high transaction volumes.",
    author: "David Kim",
    date: "January 5, 2024",
    readTime: "7 min read",
    category: "Database",
    image: "📊",
    tags: ["Database", "Performance", "Optimization"]
  },
  {
    title: "The Rise of Edge Computing: Bringing Processing Closer to Users",
    excerpt: "Understanding edge computing benefits and how to implement edge solutions for improved user experience.",
    author: "Sarah Chen",
    date: "January 3, 2024",
    readTime: "6 min read",
    category: "Edge Computing",
    image: "🌐",
    tags: ["Edge Computing", "CDN", "Performance"]
  },
  {
    title: "Microservices vs. Monolith: Making the Right Choice",
    excerpt: "A detailed comparison of microservices and monolithic architectures to help you make informed decisions.",
    author: "Michael Rodriguez",
    date: "December 28, 2023",
    readTime: "9 min read",
    category: "Architecture",
    image: "🏗️",
    tags: ["Microservices", "Architecture", "Scalability"]
  },
  {
    title: "React Server Components: The Future of React Development",
    excerpt: "Exploring React Server Components and how they're changing the way we build React applications.",
    author: "Emily Johnson",
    date: "December 25, 2023",
    readTime: "8 min read",
    category: "Frontend Development",
    image: "⚛️",
    tags: ["React", "Server Components", "Frontend"]
  }
]

const categories = [
  { name: "Cloud Architecture", count: 12, color: "bg-blue-100 text-blue-800" },
  { name: "Web Development", count: 18, color: "bg-green-100 text-green-800" },
  { name: "Artificial Intelligence", count: 8, color: "bg-purple-100 text-purple-800" },
  { name: "Security", count: 10, color: "bg-red-100 text-red-800" },
  { name: "Database", count: 6, color: "bg-yellow-100 text-yellow-800" },
  { name: "DevOps", count: 9, color: "bg-indigo-100 text-indigo-800" }
]

const popularTags = [
  "React", "Node.js", "AWS", "TypeScript", "Docker", "Kubernetes", 
  "Machine Learning", "API Design", "Performance", "Security"
]

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            The Startup Founder's Playbook
          </Typography>
          <Typography variant="lead" className="opacity-90">
            Essential insights for building, scaling, and exiting your startup successfully. 
            Learn from founders who've raised millions and built companies that matter.
          </Typography>
        </div>
      </Section>

      {/* Featured Post */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <Typography variant="h2" className="mb-8 text-center">Featured Article</Typography>
          
          <Card className="overflow-hidden" hover="lift">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-deep-blue to-insight-orange p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-6">{featuredPost.image}</div>
                    <Typography variant="small" className="opacity-80 uppercase tracking-wide">
                      {featuredPost.category}
                    </Typography>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-light-technical text-deep-blue text-xs rounded-full border border-neutral-slate/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Typography variant="h3" className="mb-4">
                    {featuredPost.title}
                  </Typography>
                  
                  <Typography variant="p" className="mb-6 text-neutral-slate">
                    {featuredPost.excerpt}
                  </Typography>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <Typography variant="small" className="font-semibold">
                        {featuredPost.author}
                      </Typography>
                      <Typography variant="small" className="text-neutral-slate">
                        {featuredPost.role}
                      </Typography>
                    </div>
                    <div className="text-right">
                      <Typography variant="small" className="text-neutral-slate">
                        {featuredPost.date}
                      </Typography>
                      <Typography variant="small" className="text-neutral-slate">
                        {featuredPost.readTime}
                      </Typography>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Recent Posts and Sidebar */}
      <Section className="bg-light-technical">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <Typography variant="h2" className="mb-8">Recent Articles</Typography>
              
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <Card key={index} hover="lift">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-deep-blue to-insight-orange rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{post.image}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {post.tags.map((tag, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-neutral-slate/10 text-neutral-slate text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Typography variant="h4" className="mb-2">
                            {post.title}
                          </Typography>
                          
                          <Typography variant="small" className="text-neutral-slate mb-3">
                            {post.excerpt}
                          </Typography>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Typography variant="small" className="font-medium">
                                {post.author}
                              </Typography>
                              <Typography variant="small" className="text-neutral-slate">
                                {post.date} • {post.readTime}
                              </Typography>
                            </div>
                            
                            <Button variant="ghost" size="sm">
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h4" className="mb-4">Stay Updated</Typography>
                  <Typography variant="small" className="text-neutral-slate mb-4">
                    Get the latest articles and insights delivered to your inbox.
                  </Typography>
                  
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-neutral-slate/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue"
                    />
                    <Button className="w-full" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h4" className="mb-4">Categories</Typography>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <Typography variant="small" className="text-neutral-slate">
                          {category.name}
                        </Typography>
                        <span className={`px-2 py-1 rounded-full text-xs ${category.color}`}>
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h4" className="mb-4">Popular Tags</Typography>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-light-technical text-deep-blue text-xs rounded-full border border-neutral-slate/20 hover:bg-deep-blue hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-deep-blue to-deep-blue/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h2" className="mb-6">Want to Contribute?</Typography>
          <Typography variant="p" className="mb-8 opacity-90 text-lg">
            We're always looking for guest writers and technical experts to share their insights with our community.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-deep-blue">
              Submit an Article
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              Writing Guidelines
            </Button>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
