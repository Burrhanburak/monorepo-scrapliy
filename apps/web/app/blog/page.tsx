import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import CategoryPill from '@/components/CategoryPill'
import Image from 'next/image' // Import next/image

export const metadata = {
  title: 'Web Scraping & Data Insights Blog | Scrapliy',
  description: 'Explore the latest articles, tutorials, and insights on web scraping, data extraction, and turning data into actionable intelligence with Scrapliy.'
}

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  let filenames: string[] = []
  try {
    filenames = fs.readdirSync(postsDirectory)
  } catch (error) {
    console.error("Could not read posts directory:", error)
    return []
  }

  const postsData = filenames
    .filter((filename) => filename.endsWith('.mdx') || filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      const slug = filename.replace(/\.(mdx|md)$/, '')
      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        categories: data.categories || [],
        description: data.description || "Read more...",
        thumbnail: data.thumbnail || "https://ui.shadcn.com/placeholder.svg", 
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return postsData
}

export default async function BlogIndexPage() {
  const posts = await getPosts()

  return (
    <section className="bg-background section-padding-y py-12 md:py-16 lg:py-20" aria-labelledby="blog-section-heading">
      <div className="container-padding-x container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center gap-4 md:gap-5">
            <div className="flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0 bg-transparent text-muted-foreground dark:text-gray-400">
              Scrapliy Blog
            </div>
            <h1 id="blog-section-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Web Scraping & Data Insights Blog
            </h1>
            <p className="text-muted-foreground dark:text-gray-300">
              Stay informed with our latest articles, tips, and news. Discover valuable insights and stay ahead with our expert content.
            </p>
          </div>

          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10" role="list">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="text-card-foreground group flex flex-col border bprder-gray-200 justify-between gap-4 bg-white dark:bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" role="listitem">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-left flex-wrap mb-2">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 items-center">
                          {/* <span className="text-gray-500 dark:text-gray-400 text-sm"></span> */}
                          {post.categories.map((cat: string) => (
                               <CategoryPill key={cat} category={cat} className="text-xs !px-2 !py-0.5" />
                             ))
                           }
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg leading-snug font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-gray-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center mt-auto pt-4">
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} > {/* 16:9 Aspect Ratio */}
                       <Image 
                        alt={`${post.title} thumbnail`}
                        src={post.thumbnail}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                        />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
           ) : (
            <div className="text-center w-full py-12">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Blog Posts Yet</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Check back soon for our latest articles and updates!</p>
            </div>
           )
          }
        </div>
      </div>
    </section>
  )
} 