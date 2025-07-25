'use client'

import { useState } from 'react'
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input,
  Textarea,
  Typography,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Lead,
  Muted,
  Loading,
  Spinner,
  LoadingDots,
  LoadingBars
} from '@/components/ui'

export default function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div className="min-h-screen bg-light-technical p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Heading1>Design System Components</Heading1>
          <Lead>
            A comprehensive showcase of our UI component library built with Tailwind CSS and TypeScript
          </Lead>
        </div>

        {/* Typography Section */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>
              Consistent typography system with semantic meaning and proper hierarchy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Heading1>Heading 1 - Main Page Title</Heading1>
              <Heading2>Heading 2 - Section Title</Heading2>
              <Heading3>Heading 3 - Subsection Title</Heading3>
              <Paragraph>
                This is a regular paragraph with proper spacing and line height. 
                It provides comfortable reading experience with balanced text layout.
              </Paragraph>
              <Lead>
                This is a lead paragraph that stands out with larger text and 
                muted color to introduce sections.
              </Lead>
              <Muted>
                This is muted text for secondary information or captions.
              </Muted>
            </div>
          </CardContent>
        </Card>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Various button styles and sizes for different use cases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <Typography variant="h6">Variants</Typography>
                <div className="space-y-2">
                  <Button className="w-full">Default</Button>
                  <Button variant="secondary" className="w-full">Secondary</Button>
                  <Button variant="accent" className="w-full">Accent</Button>
                  <Button variant="success" className="w-full">Success</Button>
                  <Button variant="outline" className="w-full">Outline</Button>
                  <Button variant="ghost" className="w-full">Ghost</Button>
                  <Button variant="link" className="w-full">Link</Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <Typography variant="h6">Sizes</Typography>
                <div className="space-y-2">
                  <Button size="sm" className="w-full">Small</Button>
                  <Button size="default" className="w-full">Default</Button>
                  <Button size="lg" className="w-full">Large</Button>
                  <Button size="xl" className="w-full">Extra Large</Button>
                </div>
              </div>

              <div className="space-y-3">
                <Typography variant="h6">States</Typography>
                <div className="space-y-2">
                  <Button className="w-full">Normal</Button>
                  <Button disabled className="w-full">Disabled</Button>
                  <Button className="w-full" onClick={handleLoadingDemo}>
                    {isLoading ? <Spinner size="sm" color="white" /> : 'Click for Loading'}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements Section */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>
              Input fields and form controls with validation states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  helperText="We'll never share your email"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  variant="default"
                />
                <Input
                  label="Error State"
                  type="text"
                  placeholder="This field has an error"
                  error="This field is required"
                />
                <Input
                  label="Success State"
                  type="text"
                  placeholder="This field is valid"
                  variant="success"
                  helperText="Looks good!"
                />
              </div>
              
              <div className="space-y-4">
                <Textarea
                  label="Message"
                  placeholder="Enter your message here..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  helperText="Minimum 10 characters"
                />
                <Input
                  label="Large Input"
                  inputSize="lg"
                  placeholder="Large size input"
                />
                <Input
                  label="Small Input"
                  inputSize="sm"
                  placeholder="Small size input"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <Card>
          <CardHeader>
            <CardTitle>Card Variants</CardTitle>
            <CardDescription>
              Different card styles for various content types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="default" hover="lift">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    Standard card with subtle shadow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Paragraph>
                    This is the default card variant with hover lift effect.
                  </Paragraph>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Learn More</Button>
                </CardFooter>
              </Card>

              <Card variant="elevated" hover="glow">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>
                    Card with enhanced shadow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Paragraph>
                    This card has elevated styling with glow hover effect.
                  </Paragraph>
                </CardContent>
                <CardFooter>
                  <Button variant="accent" size="sm">Get Started</Button>
                </CardFooter>
              </Card>

              <Card variant="accent" hover="scale">
                <CardHeader>
                  <CardTitle>Accent Card</CardTitle>
                  <CardDescription>
                    Special card with accent styling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Paragraph>
                    This card features accent colors with scale hover effect.
                  </Paragraph>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Explore</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Loading States Section */}
        <Card>
          <CardHeader>
            <CardTitle>Loading States</CardTitle>
            <CardDescription>
              Various loading indicators for different scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4 text-center">
                <Typography variant="h6">Spinner</Typography>
                <div className="space-y-3">
                  <Spinner size="sm" />
                  <Spinner size="default" />
                  <Spinner size="lg" />
                  <Spinner size="xl" />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <Typography variant="h6">Dots</Typography>
                <div className="space-y-3">
                  <LoadingDots size="sm" />
                  <LoadingDots size="default" />
                  <LoadingDots size="lg" />
                  <LoadingDots size="xl" />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <Typography variant="h6">Bars</Typography>
                <div className="space-y-3">
                  <LoadingBars size="sm" />
                  <LoadingBars size="default" />
                  <LoadingBars size="lg" />
                  <LoadingBars size="xl" />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <Typography variant="h6">With Text</Typography>
                <div className="space-y-3">
                  <Loading text="Loading..." />
                  <LoadingDots text="Please wait..." color="accent" />
                  <LoadingBars text="Processing..." color="muted" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Brand Colors</CardTitle>
            <CardDescription>
              Our brand color palette and their usage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center space-y-2">
                <div className="h-16 bg-deep-blue rounded-lg"></div>
                <Typography variant="small">Deep Blue</Typography>
                <Muted>#1B2951</Muted>
              </div>
              <div className="text-center space-y-2">
                <div className="h-16 bg-insight-orange rounded-lg"></div>
                <Typography variant="small">Insight Orange</Typography>
                <Muted>#FF6B35</Muted>
              </div>
              <div className="text-center space-y-2">
                <div className="h-16 bg-implementation-green rounded-lg"></div>
                <Typography variant="small">Implementation Green</Typography>
                <Muted>#2ECC71</Muted>
              </div>
              <div className="text-center space-y-2">
                <div className="h-16 bg-neutral-slate rounded-lg"></div>
                <Typography variant="small">Neutral Slate</Typography>
                <Muted>#64748B</Muted>
              </div>
              <div className="text-center space-y-2">
                <div className="h-16 bg-light-technical rounded-lg border border-neutral-slate/20"></div>
                <Typography variant="small">Light Technical</Typography>
                <Muted>#F8FAFC</Muted>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
