import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Lightbulb, GitBranch, Package, MessageSquare, Users, BarChart3 } from 'lucide-react'; // Using lucide-react for icons

export const metadata: Metadata = {
  title: 'E-commerce Data Scraping Services | Scrapliy',
  description: 'Get E-commerce data from any website. Scrape product details, pricing, reviews, seller info, stock availability, and more. Drive informed decisions with actionable, structured data from Scrapliy.',
  openGraph: {
    title: 'E-commerce Data Scraping Services | Scrapliy',
    description: 'Unlock e-commerce insights with Scrapliy&apos;s powerful data extraction. Scrape product data, pricing, reviews, and competitor information at scale.',
    images: [{ url: '/scrape-ecom.jpg' }], 
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Data Scraping Services | Scrapliy',
    description: 'Unlock e-commerce insights with Scrapliy&apos;s powerful data extraction capabilities.',
    images: ['/scrape-ecom.jpg'], 
  },
  alternates: {
    canonical: '/ecommerce-data-scraping',
  },
};

const EcommerceDataScrapingPage = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="mb-6 lg:mb-10">
            <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li role="presentation" aria-hidden="true" className="text-muted-foreground">/</li>
              <li className="inline-flex items-center gap-1.5">
                <span role="link" aria-disabled="true" aria-current="page" className="text-foreground font-normal">
                  E-commerce Data Scraping
                </span>
              </li>
            </ol>
          </nav>

          {/* Main Layout: Text on Left, Sticky Sidebar on Right */}
          <div className="relative flex flex-col gap-12 lg:flex-row lg:justify-between">
            {/* Left Column: Main Content */}
            <div className="lg:max-w-[692px] w-full">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl text-pretty">
                E-commerce Data Scraping
              </h1>
              <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
                Get E-commerce data from any website across the web. Scrape E-commerce data such as product details, pricing, deals and sale data, customer reviews, ratings, sellers details, and much more. Make informed decisions about the product you sell or buy by analyzing and understanding the target group.
              </p>
              
              <Image 
                src="/scrape-ecom.jpg" // Replace with your actual image
                alt="Featured image for E-commerce Data Scraping service"
                width={492}
                height={289} // Assuming a 16:9 aspect ratio for width 692
                className="my-5 w-full rounded-lg object-cover shadow-lg"
                priority
              />

              {/* What we can do for you section */}
              <div className="prose prose-lg dark:prose-invert max-w-full lg:max-w-prose text-gray-700 dark:text-gray-300 my-10">
                 <h2 className="text-2xl font-semibold text-gray-900  dark:text-gray-50">What We Can Do For You</h2>
                 <p className='mt-2'>
                   We provide companies quality data related to the online market. We can deliver any E-commerce data such as product descriptions, bestsellers, product images, product demands, stock availability, and limitless data from other sources and multiple types just for you. We provide your business access to actionable, accurate, structured, and reliable data to reach the global markets.
                 </p>
              </div>

              {/* Key Benefits/Stats - Retained for visual appeal */}
              <div className="mb-10 grid grid-cols-2 gap-5 md:grid-cols-4">
                <div className="flex flex-col gap-1 rounded-lg border border-gray-200 bg-card p-4 shadow-sm">
                  <p className="text-3xl font-semibold sm:text-4xl text-primary">99%+</p>
                  <p className="text-sm text-muted-foreground">Data Accuracy</p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-gray-200 bg-card p-4 shadow-sm">
                  <p className="text-3xl font-semibold sm:text-4xl text-primary">Real-time</p>
                  <p className="text-sm text-muted-foreground">Data Delivery</p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-gray-200 bg-card p-4 shadow-sm">
                  <p className="text-3xl font-semibold sm:text-4xl text-primary">Global</p>
                  <p className="text-sm text-muted-foreground">Coverage</p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg border border-gray-200 bg-card p-4 shadow-sm">
                  <p className="text-3xl font-semibold sm:text-4xl text-primary">Scalable</p>
                  <p className="text-sm text-muted-foreground">Solutions</p>
                </div>
              </div>

              {/* Prose Content */}
              <div className="prose prose-lg dark:prose-invert max-w-full lg:max-w-prose text-gray-700 dark:text-gray-300">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">E-commerce Data That We Provide</h2>
                <p className='mt-2'>
                  We can gather product images, product descriptions, product performance, size variations, color variations, product availability data across the internet. We use the latest technologies to gather data so our customers can create the best E-Commerce strategy to stay ahead of competitors.
                </p>

                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mt-6">Key Data Categories:</h3>
                <div className="space-y-4 mt-4">
                  <div className="flex items-start">
                    <Package className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="font-semibold text-gray-800 dark:text-gray-100">Product Information</strong>
                      <p className="text-sm text-muted-foreground">Track demand for E-commerce products, top-ranking products, product specifications, seller details, shipping information, and more.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="font-semibold text-gray-800 dark:text-gray-100">Customer&apos;s Reviews & Ratings</strong>
                      <p className="text-sm text-muted-foreground">Scrape data for customer reviews and ratings from different sites to understand customer&apos;s tastes and preferences.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="font-semibold text-gray-800 dark:text-gray-100">Sellers Information</strong>
                      <p className="text-sm text-muted-foreground">Discover the items of different sellers and evaluate what items can offer the most reliable revenue-generating perspective.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="font-semibold text-gray-800 dark:text-gray-100">Stock Availability</strong>
                      <p className="text-sm text-muted-foreground">Accurate and structured data ensure adequate product supply in the market. Pricing history and stock availability help in optimizing the product index.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mt-8">Comprehensive Data Points Include:</h3>
                <ul className="list-disc pl-5 space-y-1 mt-4">
                  <li>Product Name</li>
                  <li>Category</li>
                  <li>Images</li>
                  <li>Product Id/Model Number</li>
                  <li>Review Counts</li>
                  <li>Delivery Charges</li>
                  <li>Price</li>
                  <li>Description</li>
                  <li>Stock Availability</li>
                  <li>Color</li>
                  <li>Brand Name</li>
                  <li>Video Links</li>
                  <li>Specifications</li>
                  <li>Seller Name</li>
                  <li>Seller Profile Url</li>
                  <li>Seller Ratings</li>
                </ul>

                <div className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-primary dark:bg-primary/10 dark:text-primary-foreground">
                  <Lightbulb className="inline-block h-5 w-5 mr-2 mb-0.5 opacity-80 dark:text-white" />
                  <strong className="font-semibold dark:text-white">Unlock Granular Insights:</strong> <span className="dark:text-white">We can customize scrapes to capture specific data fields crucial for your unique analysis.</span>
                </div>

                <h2 className='text-xl font-medium text-gray-800 dark:text-gray-100 mt-6'>How It Benefits Your Business</h2>
                <p className='mt-2'>
                  Leveraging scraped e-commerce data provides a significant competitive advantage:
                </p>
                <ul className='list-disc pl-5 space-y-1 mt-4'>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Competitive Analysis:</strong> Monitor competitor pricing, product assortment, and marketing strategies in real-time.</li>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Price Optimization:</strong> Implement dynamic pricing strategies based on market demand and competitor actions.</li>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Market Research:</strong> Identify emerging trends, popular products, and gaps in the market.</li>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Enhanced Product Development:</strong> Understand customer preferences and pain points from reviews to inform new product creation.</li>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Lead Generation:</strong> Identify potential B2B customers or new sellers for your marketplace.</li>
                </ul>

                <h2 className='text-xl font-medium text-gray-800 dark:text-gray-100 mt-6'>Example Use Cases</h2>
                <p className='mt-2'>Our clients utilize e-commerce data for a wide range of applications:</p>
                <blockquote>
                  <p>&quot;Scrapliy&apos;s data feeds allowed us to dynamically adjust our pricing across 50,000+ SKUs, resulting in a 15% increase in profit margins within the first quarter.&quot; - <cite>Head of E-commerce, Retail Giant</cite></p>
                </blockquote>
                <ol className='list-decimal pl-5 space-y-1 mt-4'>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">MAP Monitoring:</strong> Ensure partners adhere to Minimum Advertised Price policies.</li>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Sentiment Analysis:</strong> Analyze customer reviews at scale to understand brand perception and product feedback.</li>
                  <li><strong className="font-semibold text-gray-800 dark:text-gray-100">Competitor Benchmarking:</strong> Track key performance indicators against your main competitors.</li>
                </ol>
                
                <h2 className='text-xl font-medium text-gray-800 dark:text-gray-100 mt-6'>Why Choose Scrapliy?</h2>
                <p className='mt-2'>
                  Scrapliy is a full-service provider. We provide you with Unique, Real-time, and Custom data based on your exact business requirements. Scraped E-commerce data is never going to be the same as your competitor&apos;s data that you buy from existing providers. We provide unique and updated data you can rely on.
                </p>
                <p>
                  Our expertise ensures high-quality data delivery, tailored to your specific requirements. We handle the complexities of web scraping, from proxy management to anti-bot bypasses, so you can focus on leveraging the insights.
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:w-[320px] xl:w-[360px] w-full flex-shrink-0 lg:sticky lg:top-24 h-fit">
              <div className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-sm">
                <div>
                  <Image 
                    src="/logo-light.svg" 
                    alt="Scrapliy Company Logo"
                    width={120}
                    height={30} // Adjust height based on logo aspect ratio
                    className="mb-4 hidden dark:block"
                  />
                  <Image 
                    // Replace with your actual logo
                     src="/logo.svg"
                      alt="Scrapliy Company Logo"
                    width={120}
                    height={30} // Adjust height based on logo aspect ratio
                    className="mb-4 dark:hidden"
                  />
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Service Overview</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tailored data extraction from any e-commerce site. Get clean, structured data ready for analysis.
                  </p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Key Sectors</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    E-commerce, Retail, Market Research, Brand Management, Investment Analysis.
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Solution Delivery</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                      <GitBranch className="h-3.5 w-3.5 opacity-80" /> Custom Data Feeds
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                      <GitBranch className="h-3.5 w-3.5 opacity-80" /> API Access
                    </span>
                     <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                      <GitBranch className="h-3.5 w-3.5 opacity-80" /> Scheduled Reports
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Want to learn more?</h3>
                  <p className="mt-1 mb-3 text-sm text-muted-foreground">
                    Discuss your specific data needs with our experts.
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceDataScrapingPage; 