"use client";

import { Facebook, Twitter, Linkedin, ChevronRight, Link, Instagram, X } from 'lucide-react';

// If you have a Separator component and want to use it:
// import { Separator } from "@/components/ui/separator";


export default function AboutUsPage() {
  // Form submission logic would go here in a real application
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // ... form handling
  // };

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b  from-[#0900FF] via-background to-background py-15 lg:mx-4 dark:from-[#0900FF]">
      <div className="container mx-auto max-w-2xl px-5">
        <h1 className="text-left text-4xl font-semibold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#fff6f8] via-white-400 to-black-500">
          About Scrapliy: Intelligent E-commerce Data Extraction
        </h1>
        <p className="mt-4 text-left leading-snug font-medium text-white">
          Scrapliy is a powerful SaaS application designed to revolutionize how you interact with e-commerce data. We empower businesses and individuals by providing sophisticated tools to scrape, categorize, and analyze information from online stores with unparalleled ease and precision.
        </p>

        <div className="my-10 text-foreground">
          <h2 className="text-2xl font-semibold text-left mb-6 text-white text-bold">Unlock the Power of Web Data with Scrapliy</h2>
          <p className="mt-4 text-left leading-snug font-medium text-white">
            At Scrapliy, we specialize in transforming the vast and complex landscape of e-commerce websites into structured, actionable insights. Our intelligent scraping technology meticulously navigates online stores to identify and extract crucial information.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4 text-left">Key Capabilities:</h3>
          <ul className="space-y-2 text-muted-foreground text-left">
            <li className="flex items-start">
              <ChevronRight className="size-5 mr-2 mt-1 flex-shrink-0 text-foreground" />
              <span><strong>Comprehensive E-commerce Scraping:</strong> Target any e-commerce site and let Scrapliy gather the data you need.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="size-5 mr-2 mt-1 flex-shrink-0 text-foreground" />
              <span><strong>Smart Link Categorization:</strong> Our system automatically identifies and categorizes all links – whether they lead to product pages, blog articles, or other valuable content.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="size-5 mr-2 mt-1 flex-shrink-0 text-foreground" />
              <span><strong>Detailed Product Data Extraction:</strong> For product pages, Scrapliy extracts comprehensive details including titles, descriptions, prices, SKUs, images, and more, presenting it all in an organized table.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="size-5 mr-2 mt-1 flex-shrink-0 text-foreground" />
              <span><strong>Blog & Content Aggregation:</strong> Easily collect and review all blog posts and other textual content from target sites.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="size-5 mr-2 mt-1 flex-shrink-0 text-foreground" />
              <span><strong>Structured & Accessible Output:</strong> All scraped data is neatly organized and displayed, making it easy for you to analyze and utilize for your strategic goals, be it market research, competitor analysis, or data-driven decision-making.</span>
            </li>
          </ul>
          <p className="mt-8 text-left leading-snug font-medium text-muted-foreground">
            For inquiries or to learn more about how Scrapliy can help your business, please <a href="/contact" className="text-foreground underline hover:text-blue-300">Contact Us</a>.
          </p>
        </div>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12 text-foreground">
          <div>
            <h2 className="font-semibold">Corporate office</h2>
            <p className="mt-3 text-muted-foreground">
              123 Tech City Road<br />
              London, EC1V 9LT, UK
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Email us</h2>
            <div className="mt-3">
              <div>
                <p className="text-primary">Careers On Scrapliy</p>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  support@scrapliy.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Follow us</h2>
            <div className="mt-3 flex gap-6 lg:gap-10">
              <Link href="https://www.facebook.com/scrapliy" className="text-muted-foreground hover:text-foreground">
                <Facebook className="size-5" aria-hidden="true" />
              </Link>
              <Link href="https://x.com/scrapliy" className="text-muted-foreground hover:text-foreground">
                <X className="size-5" aria-hidden="true" />
              </Link>
              <Link href="https://www.instagram.com/scrapliy/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Custom Divider - alternatively use <Separator className="my-12" /> if available and preferred */}
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
      </div>
    </section>
  );
}