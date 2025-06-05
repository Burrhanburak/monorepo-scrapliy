import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import * as mdxComponents from '@/mdx-components' // Import all components
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc' // For App Router (RSC)
import CategoryPill from '@/components/CategoryPill' // Import the new component
import { Metadata } from 'next' // Import Metadata type

// This function generates the paths for all blog posts
// So Next.js knows which pages to pre-render at build time.
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  let filenames: string[] = []
  try {
    filenames = fs.readdirSync(postsDirectory)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) { // Catch and ignore the error, or log it if preferred
    // If the posts directory doesn't exist, return empty array
    // This might happen during initial setup or if no posts are present
    console.warn("Posts directory not found during generateStaticParams. This might be expected if no posts exist yet.")
    return []
  }

  return filenames
    .filter(filename => filename.endsWith('.mdx') || filename.endsWith('.md'))
    .map(filename => ({
      slug: filename.replace(/\.(mdx|md)$/, ''),
    }))
}

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdPath = path.join(postsDirectory, `${slug}.md`)

  let filePath = ''
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else {
    return null // Post not found
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)

  return {
    source: content,
    frontmatter: data,
    slug: slug, // Add slug to the returned object
  }
}

// This function generates metadata for each blog post page.
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrapliy.com';
  const ogImage = post.frontmatter.thumbnail ? `${siteUrl}${post.frontmatter.thumbnail}` : `${siteUrl}/og-default.png`;


  return {
    title: `${post.frontmatter.title || params.slug} | Scrapliy Blog`,
    description: post.frontmatter.description || 'A blog post from Scrapliy.',
    keywords: post.frontmatter.categories || [],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.frontmatter.title || params.slug,
      description: post.frontmatter.description || 'A blog post from Scrapliy.',
      url: `/blog/${post.slug}`,
      siteName: 'Scrapliy Blog',
      images: [
        {
          url: ogImage,
          width: 1200, // Adjust if your thumbnail has different dimensions
          height: 630, // Adjust if your thumbnail has different dimensions
          alt: post.frontmatter.title || 'Blog post image',
        },
      ],
      locale: 'en_US', // Adjust if you support other locales
      type: 'article',
      publishedTime: post.frontmatter.date ? new Date(post.frontmatter.date).toISOString() : undefined,
      authors: ['Scrapliy Team'], // You can make this dynamic if needed
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title || params.slug,
      description: post.frontmatter.description || 'A blog post from Scrapliy.',
      images: [ogImage],
      // site: '@yourTwitterHandle', // Add your Twitter handle
      // creator: '@authorTwitterHandle', // Add author's Twitter handle if available
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound() // This will render the not-found.tsx page
  }

  // Directly use the imported components for MDXRemote in Server Components
  const components = {
    ...mdxComponents.customComponents, // Spread your custom components
    // You can add other global components here if needed
  }

  return (
    <main className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
    style={{
      animationDuration: "600ms",
      animationFillMode: "backwards",
    }}>
    <article className="prose prose-quoteless prose-neutral dark:prose-invert mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          {post.frontmatter.title || params.slug}
        </h1>
        <div className="flex flex-wrap items-center space-x-2 mb-4">
          {post.frontmatter.date && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          {post.frontmatter.categories && post.frontmatter.categories.length > 0 && (
            <div className="flex flex-wrap items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2 hidden sm:inline">|</span>
              {post.frontmatter.categories.map((category: string) => (
                <CategoryPill key={category} category={category} className="my-1" />
              ))}
            </div>
          )}
        </div>
      </header>

      
      <MDXRemote source={post.source} components={components} />
    </article>
    </main>
  )
} 