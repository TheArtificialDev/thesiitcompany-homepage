import { NextRequest, NextResponse } from 'next/server'
import { 
  createSuccessResponse,
  withApiHandler 
} from '@/lib/api-response'
import { 
  paginationSchema,
  validateSearchParams 
} from '@/lib/validation'
import { 
  withMiddleware,
  withRateLimit 
} from '@/lib/middleware'

/**
 * Mock content data (replace with database)
 */
interface ContentItem {
  id: string
  title: string
  slug: string
  description?: string
  content: string
  status: 'draft' | 'published' | 'archived'
  publishedAt?: string
  tags?: string[]
  category?: string
  featuredImage?: string
  seoTitle?: string
  seoDescription?: string
  createdAt: string
  updatedAt: string
}

const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Digital Transformation in Manufacturing: A Strategic Approach',
    slug: 'digital-transformation-manufacturing-strategic-approach',
    description: 'Explore how manufacturers can leverage digital technologies to streamline operations, improve efficiency, and drive innovation.',
    content: `# Digital Transformation in Manufacturing

Digital transformation is reshaping the manufacturing landscape, offering unprecedented opportunities for operational excellence and competitive advantage. This comprehensive guide explores strategic approaches to modernizing manufacturing operations.

## Key Areas of Focus

### 1. Industrial IoT Implementation
- Sensor integration for real-time monitoring
- Predictive maintenance strategies
- Energy optimization systems

### 2. Data Analytics and Intelligence
- Production optimization algorithms
- Quality control automation
- Supply chain visibility

### 3. Automation and Robotics
- Collaborative robot deployment
- Process automation workflows
- Human-machine interface design

## Implementation Roadmap

The journey to digital transformation requires careful planning and phased execution...`,
    status: 'published',
    publishedAt: '2024-07-15T10:00:00Z',
    tags: ['digital-transformation', 'manufacturing', 'iot', 'automation'],
    category: 'industry-insights',
    featuredImage: '/images/content/manufacturing-digital-transformation.jpg',
    seoTitle: 'Manufacturing Digital Transformation Guide | ThesIIT Company',
    seoDescription: 'Strategic guide to digital transformation in manufacturing. Learn IoT implementation, automation, and data analytics for operational excellence.',
    createdAt: '2024-07-15T09:00:00Z',
    updatedAt: '2024-07-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Healthcare Technology Integration: Bridging Systems for Better Patient Care',
    slug: 'healthcare-technology-integration-patient-care',
    description: 'Learn how healthcare organizations can integrate disparate systems to improve patient outcomes and operational efficiency.',
    content: `# Healthcare Technology Integration

Healthcare organizations face the complex challenge of integrating multiple systems while maintaining high standards of patient care and regulatory compliance.

## Integration Challenges

### 1. Legacy System Modernization
- EHR system upgrades
- Medical device connectivity
- Compliance maintenance

### 2. Interoperability Standards
- HL7 FHIR implementation
- API strategy development
- Data standardization

### 3. Security and Compliance
- HIPAA compliance frameworks
- Cybersecurity protocols
- Audit trail management

## Best Practices

Successful healthcare integration requires a patient-centric approach...`,
    status: 'published',
    publishedAt: '2024-07-10T14:30:00Z',
    tags: ['healthcare', 'system-integration', 'ehr', 'compliance'],
    category: 'case-studies',
    featuredImage: '/images/content/healthcare-integration.jpg',
    seoTitle: 'Healthcare System Integration Guide | Patient Care Technology',
    seoDescription: 'Comprehensive guide to healthcare technology integration. EHR systems, compliance, and patient care optimization strategies.',
    createdAt: '2024-07-10T13:00:00Z',
    updatedAt: '2024-07-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Cloud Migration Strategies for Financial Services',
    slug: 'cloud-migration-strategies-financial-services',
    description: 'Strategic approaches to cloud adoption in financial services, addressing security, compliance, and scalability requirements.',
    content: `# Cloud Migration for Financial Services

Financial institutions require specialized cloud migration strategies that address stringent security, compliance, and performance requirements.

## Key Considerations

### 1. Regulatory Compliance
- SOX compliance in cloud environments
- PCI DSS requirements
- Basel III implications

### 2. Security Architecture
- Zero-trust security models
- Encryption strategies
- Identity and access management

### 3. Performance and Scalability
- High-frequency trading requirements
- Real-time transaction processing
- Disaster recovery planning

## Migration Approaches

A phased migration approach minimizes risk while maximizing benefits...`,
    status: 'published',
    publishedAt: '2024-07-05T11:15:00Z',
    tags: ['cloud-migration', 'financial-services', 'compliance', 'security'],
    category: 'technical-guides',
    featuredImage: '/images/content/cloud-migration-finance.jpg',
    seoTitle: 'Financial Services Cloud Migration | Security & Compliance',
    seoDescription: 'Expert guide to cloud migration for financial services. Security, compliance, and performance strategies for successful cloud adoption.',
    createdAt: '2024-07-05T10:00:00Z',
    updatedAt: '2024-07-05T11:15:00Z'
  }
]

/**
 * Filter and paginate content
 */
function filterAndPaginateContent(
  content: ContentItem[],
  params: {
    page: number;
    limit: number;
    category?: string;
    status?: string;
    search?: string;
    tags?: string[];
  }
) {
  let filtered = [...content]
  
  // Filter by status
  if (params.status && params.status !== 'all') {
    filtered = filtered.filter(item => item.status === params.status)
  }
  
  // Filter by category
  if (params.category) {
    filtered = filtered.filter(item => item.category === params.category)
  }
  
  // Filter by tags
  if (params.tags && params.tags.length > 0) {
    filtered = filtered.filter(item => 
      item.tags?.some(tag => params.tags!.includes(tag))
    )
  }
  
  // Search in title and description
  if (params.search) {
    const searchTerm = params.search.toLowerCase()
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description?.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm)
    )
  }
  
  // Sort by publishedAt (newest first), fallback to createdAt
  filtered.sort((a, b) => {
    const dateA = new Date(a.publishedAt || a.createdAt).getTime()
    const dateB = new Date(b.publishedAt || b.createdAt).getTime()
    return dateB - dateA
  })
  
  // Paginate
  const total = filtered.length
  const totalPages = Math.ceil(total / params.limit)
  const start = (params.page - 1) * params.limit
  const end = start + params.limit
  const paginatedContent = filtered.slice(start, end)
  
  return {
    content: paginatedContent,
    pagination: {
      page: params.page,
      limit: params.limit,
      total,
      totalPages
    }
  }
}

/**
 * Handle content listing with filters and pagination
 */
async function handleGetContent(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    
    // Validate pagination parameters
    const paginationQuery = validateSearchParams(searchParams, paginationSchema)
    
    // Additional query parameters
    const category = searchParams.get('category')
    const status = searchParams.get('status') || 'published'
    const search = searchParams.get('search')
    const tags = searchParams.getAll('tags')
    
    const queryParams: {
      page: number
      limit: number
      category?: string
      status?: string
      search?: string
      tags?: string[]
    } = {
      page: paginationQuery.page || 1,
      limit: paginationQuery.limit || 10
    }
    
    if (category) queryParams.category = category
    if (status) queryParams.status = status
    if (search) queryParams.search = search
    if (tags.length > 0) queryParams.tags = tags
    
    const result = filterAndPaginateContent(mockContent, queryParams)
    
    return NextResponse.json(
      createSuccessResponse(result.content, result.pagination)
    )
    
  } catch (error) {
    console.error('Content API error:', error)
    throw error
  }
}

/**
 * Get content categories and tags for filtering
 */
async function handleGetContentMeta(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  
  if (type === 'categories') {
    const categories = [...new Set(mockContent.map(item => item.category).filter(Boolean))]
    return NextResponse.json(createSuccessResponse({ categories }))
  }
  
  if (type === 'tags') {
    const allTags = mockContent.flatMap(item => item.tags || [])
    const tags = [...new Set(allTags)]
    return NextResponse.json(createSuccessResponse({ tags }))
  }
  
  // Return both categories and tags
  const categories = [...new Set(mockContent.map(item => item.category).filter(Boolean))]
  const allTags = mockContent.flatMap(item => item.tags || [])
  const tags = [...new Set(allTags)]
  
  return NextResponse.json(
    createSuccessResponse({
      categories,
      tags,
      totalContent: mockContent.length,
      publishedContent: mockContent.filter(item => item.status === 'published').length
    })
  )
}

// Export handlers with middleware
export const GET = withMiddleware(
  withApiHandler(async (request: NextRequest) => {
    const { searchParams } = new URL(request.url)
    
    // Check if requesting metadata
    if (searchParams.has('meta')) {
      return handleGetContentMeta(request)
    }
    
    return handleGetContent(request)
  }),
  withRateLimit(60000, 60) // 60 requests per minute
)
