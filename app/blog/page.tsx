import Link from 'next/link'
import Image from 'next/image'
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  image?: string
  featured?: boolean
}

// Mock blog posts data - in a real app, this would come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Web Applications with Next.js',
    slug: 'building-scalable-web-applications-nextjs',
    excerpt: 'Learn how to create high-performance, scalable web applications using Next.js, React, and modern development practices.',
    content: `# Building Scalable Web Applications with Next.js

Next.js has revolutionized the way we build React applications. In this comprehensive guide, we'll explore the key features that make Next.js perfect for building scalable web applications.

## Why Choose Next.js?

Next.js offers several advantages:

- **Server-Side Rendering (SSR)**: Better SEO and initial load performance
- **Static Site Generation (SSG)**: Lightning-fast pages with pre-rendering
- **API Routes**: Built-in API capabilities
- **File-based routing**: Intuitive page structure
- **Optimized bundling**: Automatic code splitting and optimization

## Getting Started

To create a new Next.js application:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Features for Scalability

### 1. App Router
The new app router in Next.js 13+ provides better organization and performance.

### 2. Server Components
Reduce bundle size and improve performance with React Server Components.

### 3. Dynamic Imports
Load components only when needed:

\`\`\`javascript
const DynamicComponent = dynamic(() => import('./MyComponent'))
\`\`\`

## Best Practices

1. Use TypeScript for better code quality
2. Implement proper error boundaries
3. Optimize images with next/image
4. Use proper caching strategies
5. Implement monitoring and analytics

## Conclusion

Next.js provides all the tools you need to build modern, scalable web applications. Start your next project with confidence!`,
    author: 'TAPIWAMLA',
    date: '2025-01-15',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'The Future of E-commerce: Headless Commerce Solutions',
    slug: 'future-ecommerce-headless-commerce',
    excerpt: 'Discover how headless commerce is transforming online retail and why it might be the perfect solution for your business.',
    content: `# The Future of E-commerce: Headless Commerce Solutions

Headless commerce is revolutionizing the e-commerce landscape by decoupling the frontend presentation layer from the backend commerce functionality.

## What is Headless Commerce?

Headless commerce separates the "head" (frontend) from the "body" (backend), allowing for greater flexibility and customization.

## Benefits of Headless Commerce

- **Flexibility**: Use any frontend technology
- **Performance**: Optimized user experiences
- **Scalability**: Handle traffic spikes better
- **Omnichannel**: Consistent experience across platforms

## Implementation Strategies

### 1. Choose Your Stack
Popular headless commerce platforms include:
- Shopify Plus
- WooCommerce
- Magento Commerce
- Commercetools

### 2. Frontend Options
- React/Next.js
- Vue.js/Nuxt.js
- Gatsby
- Angular

### 3. API Integration
Implement robust API connections for:
- Product catalogs
- Shopping cart functionality
- Payment processing
- Order management

## Case Studies

We've successfully implemented headless commerce solutions for clients, resulting in:
- 40% improvement in page load times
- 25% increase in conversion rates
- Better mobile performance scores

## Getting Started

Ready to explore headless commerce? Contact us to discuss your e-commerce transformation journey.`,
    author: 'TAPIWAMLA',
    date: '2025-01-10',
    category: 'E-commerce',
    tags: ['E-commerce', 'Headless', 'API', 'Business'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'WordPress vs Custom Development: Making the Right Choice',
    slug: 'wordpress-vs-custom-development',
    excerpt: 'A comprehensive comparison of WordPress and custom development solutions to help you make the best decision for your project.',
    content: `# WordPress vs Custom Development: Making the Right Choice

Choosing between WordPress and custom development is one of the most important decisions in web development. Let's break down the pros and cons.

## WordPress: The Popular Choice

### Advantages
- Quick development time
- Large ecosystem of plugins and themes
- User-friendly content management
- Cost-effective for standard websites
- Strong SEO capabilities

### Disadvantages
- Performance limitations with heavy customization
- Security vulnerabilities through plugins
- Limited scalability for complex applications
- Maintenance overhead

## Custom Development: The Flexible Solution

### Advantages
- Complete control over functionality
- Optimized performance
- Scalability for complex requirements
- Better security when properly implemented
- Unique user experiences

### Disadvantages
- Higher initial development cost
- Longer development timeline
- Requires ongoing technical maintenance
- Custom CMS development needed

## When to Choose WordPress
- Content-heavy websites
- Blogs and news sites
- Small to medium business websites
- Quick turnaround projects
- Limited budget constraints

## When to Choose Custom Development
- Complex business applications
- Unique functionality requirements
- High-performance needs
- Specific integrations required
- Long-term scalability plans

## Our Approach

At Nyatti, we evaluate each project individually:

1. **Requirements Analysis**: Understanding your specific needs
2. **Budget Consideration**: Balancing features with investment
3. **Timeline Assessment**: Meeting your launch requirements
4. **Future Planning**: Considering growth and scalability

## Hybrid Solutions

Sometimes the best approach combines both:
- WordPress for content management
- Custom applications for specific functionality
- API integrations between systems

## Making Your Decision

Consider these factors:
- Budget and timeline
- Technical requirements
- Team capabilities
- Long-term goals
- Maintenance preferences

## Conclusion

Both WordPress and custom development have their place. The key is choosing the right tool for your specific situation.

Need help deciding? Contact us for a free consultation on your next project.`,
    author: 'TAPIWAMLA',
    date: '2025-01-05',
    category: 'Development',
    tags: ['WordPress', 'Custom Development', 'Web Development', 'CMS'],
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
              NYATTI
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-white font-medium">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, business applications, 
            and the latest technology trends.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Post</h2>
            <div className="bg-gray-900 overflow-hidden hover:bg-gray-800 transition-colors">
              <div className="md:flex">
                {featuredPost.image && (
                  <div className="md:w-1/2">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                )}
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="bg-gray-700 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt size={14} />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser size={14} />
                      {featuredPost.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                  >
                    Read More
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-gray-900 overflow-hidden hover:bg-gray-800 transition-colors">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt size={12} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-gray-500">+{post.tags.length - 2}</span>
                    )}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium transition-colors"
                  >
                    Read More
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Nyatti. All Rights Reserved.
          </p>
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}