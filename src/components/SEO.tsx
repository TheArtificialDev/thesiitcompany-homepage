import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
  canonical?: string
}

const defaultSEO = {
  siteName: 'The SIIT Company',
  title: 'The SIIT Company - IT Solutions & Digital Innovation',
  description: 'Leading IT solutions provider specializing in software development, cloud infrastructure, cybersecurity, and digital transformation services.',
  keywords: ['IT solutions', 'software development', 'cloud services', 'cybersecurity', 'digital transformation'],
  image: '/images/og-image.jpg',
  type: 'website' as const,
  author: 'The SIIT Company'
}

export function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  siteName = defaultSEO.siteName,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noIndex = false,
  canonical
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | ${siteName}`
    : defaultSEO.title

  const fullUrl = url ? `https://thesiitcompany.com${url}` : 'https://thesiitcompany.com'
  const imageUrl = image.startsWith('http') ? image : `https://thesiitcompany.com${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@thesiitcompany" />
      <meta name="twitter:site" content="@thesiitcompany" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && (
            <meta property="article:author" content={author} />
          )}
          {section && (
            <meta property="article:section" content={section} />
          )}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? "Article" : "Organization",
            ...(type === 'article' 
              ? {
                  headline: title,
                  description: description,
                  image: imageUrl,
                  author: {
                    "@type": "Person",
                    name: author
                  },
                  publisher: {
                    "@type": "Organization",
                    name: siteName,
                    logo: {
                      "@type": "ImageObject",
                      url: "https://thesiitcompany.com/images/logo.png"
                    }
                  },
                  datePublished: publishedTime,
                  dateModified: modifiedTime || publishedTime
                }
              : {
                  name: siteName,
                  description: description,
                  url: fullUrl,
                  logo: "https://thesiitcompany.com/images/logo.png",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-555-0123",
                    contactType: "customer service",
                    email: "contact@thesiitcompany.com"
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "123 Tech Street",
                    addressLocality: "San Francisco",
                    addressRegion: "CA",
                    postalCode: "94105",
                    addressCountry: "US"
                  },
                  sameAs: [
                    "https://linkedin.com/company/thesiitcompany",
                    "https://twitter.com/thesiitcompany",
                    "https://github.com/thesiitcompany"
                  ]
                }
            )
          })
        }}
      />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#1a56db" />
    </Head>
  )
}

// BlogSEO component for blog posts
interface BlogSEOProps {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  author?: string
  tags?: string[]
  image?: string
  url: string
}

export function BlogSEO({
  title,
  description,
  publishedTime,
  modifiedTime,
  author = defaultSEO.author,
  tags = [],
  image = defaultSEO.image,
  url
}: BlogSEOProps) {
  return (
    <SEO
      title={title}
      description={description}
      image={image}
      url={url}
      type="article"
      publishedTime={publishedTime}
      {...(modifiedTime && { modifiedTime })}
      author={author}
      tags={tags}
      section="Technology"
    />
  )
}

// ProductSEO component for service pages
interface ProductSEOProps {
  title: string
  description: string
  price?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  image?: string
  url: string
}

export function ProductSEO({
  title,
  description,
  price,
  availability = 'InStock',
  image = defaultSEO.image,
  url
}: ProductSEOProps) {
  const fullUrl = `https://thesiitcompany.com${url}`
  const imageUrl = image.startsWith('http') ? image : `https://thesiitcompany.com${image}`

  return (
    <>
      <SEO
        title={title}
        description={description}
        image={image}
        url={url}
        type="website"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: title,
              description: description,
              image: imageUrl,
              url: fullUrl,
              provider: {
                "@type": "Organization",
                name: defaultSEO.siteName,
                url: "https://thesiitcompany.com"
              },
              serviceType: "IT Services",
              areaServed: "Worldwide",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: fullUrl,
                serviceSmsNumber: "+1-555-0123",
                servicePhone: "+1-555-0123"
              },
              ...(price && {
                offers: {
                  "@type": "Offer",
                  price: price,
                  priceCurrency: "USD",
                  availability: `https://schema.org/${availability}`
                }
              })
            })
          }}
        />
      </Head>
    </>
  )
}
