import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    // Required for MDX in App Router
    mdxRs: true,
  },
}

const withMDX = createMDX({
  // Add Vercel Analytics if you want it
  // options: {
  //   remarkPlugins: [],
  //   rehypePlugins: [],
  // },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig) 