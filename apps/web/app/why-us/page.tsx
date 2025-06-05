import React from "react";
import { ChartLine, HandCoins } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WhyUs = () => {
  return (
    <div className="py-12 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* Start of the first new section (Hero) */}
        <div className="flex flex-col items-center content-center justify-center flex-nowrap gap-0 h-min overflow-hidden  relative w-full">
          <div className=" text-foreground flex flex-row items-start content-start justify-center flex-nowrap gap-[10px] h-[592px] overflow-hidden p-[10px] relative w-full rounded-[30px]">
            <div className="flex flex-1 shrink-0 basis-0 flex-col items-center content-center justify-center flex-nowrap gap-6 h-min overflow-visible p-0 relative z-[2]">
              <div
                className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4"
                style={{
                  fontFamily:
                    '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                }}
              >
               
                  <ChartLine   className="w-4 h-auto" />
                <span>For Content Strategists & Data Analysts</span>
              </div>
              <h1
                className=" text-5xl md:text-6xl dark:text-white font-bold tracking-tighter leading-tight mb-6 text-center"
                style={{
                  fontFamily:
                    '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                  lineHeight: "82%",
                }}
              >
                <span
                  className="dark:bg-clip-text dark:text-white dark:bg-[radial-gradient(50%_307%_at_50%_57%,_rgb(255_255_255)_0%,_rgba(255_255_255_0.3)_100%)]"
                >
                  Scrape. Categorize. Visualize. <br />
                  Master Any Website&apos;s Data.
                </span>
              </h1>
              <p
                className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-xl mb-8"
                style={{
                  fontFamily:
                    '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                }}
              >
                Scrapliy dives deep into websites, extracts all URLs—product pages, blogs, and more—then categorizes them for clear, tabular display and easy export.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/signup"
                
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 font-medium flex items-center space-x-2 hover:bg-gray-200 transition-colors duration-150 border border-slate-900 dark:border-white"
                  style={{
                    borderRadius: "50px",
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                 <Image
                    decoding="async"
                    loading="lazy"
                    width="26"
                    height="26"
                    sizes="16px"
                    src="/logo.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span>Explore Scrapliy</span>
                </Link>
              </div>
            </div>
      
            <div className="absolute left-0 top-0 w-[625px] h-[471px] dark:mix-blend-screen overflow-hidden pointer-events-none z-[6] ">
             <Image
                decoding="async"
                width="963"
                height="764"
                sizes="952px"
                src="/light-blue.svg"
                alt="abstract lightning graphic"
                className="block w-full h-full object-cover"
              />
            </div>
        
        
          </div>
        </div>
        {/* End of the first new section (Hero) */}

        {/* Start of the second new section (Why Scrapliy) */}
        <div className=" text-gray-800 flex flex-col items-center content-center flex-nowrap justify-start gap-0 h-min max-w-[1440px] mx-auto relative w-full overflow-hidden">
          <div className="flex flex-col items-center content-center justify-center flex-nowrap gap-[37px] h-min overflow-visible p-0 relative w-full">
            <div className="text-center dark:text-gray-200">
              <div
                className="inline-flex items-center  space-x-2 border border-green-500 text-green-600 px-3 py-1 rounded-full text-sm mb-4"
                style={{
                  fontFamily:
                    '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                }}
              >
                   <HandCoins className="w-4 h-auto" />
                <span>Why Choose Scrapliy?</span>
             
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4 text-center"
                style={{
                  fontFamily:
                    '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                  lineHeight: "82%",
                }}
              >
                Understand Any Website, Effortlessly
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto text-center"
                style={{
                  fontFamily:
                    '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                }}
              >
                Scrapliy provides powerful tools to extract, organize, and analyze web data for your strategic needs.
              </p>
            </div>

            {/* Card Grid Container */}
            <div className="grid grid-cols-1 p-2 md:grid-cols-2 gap-[10px] w-full mb-10">
              {/* Card 1: Comprehensive Site Scraping */}
              <div className="bg-white border border-gray-300 rounded-[25px] flex flex-col items-start justify-between h-full overflow-hidden p-[30px] relative">
                <div
                  className="flex items-center space-x-2 text-sm text-gray-700 mb-3 border border-gray-300 rounded-full px-3 py-1 self-start"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  <span>Comprehensive Site Scraping</span>
                </div>
                <h3
                  className="text-3xl font-bold mb-2 text-left"
                  style={{
                    fontFamily:
                      '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                    lineHeight: "82%",
                  }}
                >
                  Extract Every URL, Automatically
                </h3>
                <p
                  className="text-gray-600 mb-4 text-left"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  Scrapliy meticulously crawls websites to capture all link types—from product and service pages to blog posts and internal links—giving you a complete site map.
                </p>
                <div className="w-full mt-auto">
                 <Image
                    decoding="async"
                    loading="lazy"
                    width="686"
                    height="514"
                    sizes="299px"
                    src="/image14.png"
                    alt="Illustration of automated full-site web scraping"
                    className="block w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>

              {/* Card 2: Smart URL Organization */}
              <div className="bg-white border border-gray-300 rounded-[25px] flex flex-col items-start justify-between h-full overflow-hidden p-[30px] relative">
                <div
                  className="flex items-center space-x-2 text-sm text-gray-700 mb-3 border border-gray-300 rounded-full px-3 py-1 self-start"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  <span>Smart URL Organization</span>
                </div>
                <h3
                  className="text-3xl font-bold mb-2 text-left"
                  style={{
                    fontFamily:
                      '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                    lineHeight: "82%",
                  }}
                >
                  Intelligent Link Categorization
                </h3>
                <p
                  className="text-gray-600 mb-4 text-left"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  Our system automatically classifies extracted URLs (e.g., /product, /blog, /about-us), making it easy to understand site structure and content distribution.
                </p>
                <div className="w-full mt-auto flex justify-center items-center">
                 <Image
                    decoding="async"
                    loading="lazy"
                    width="495"
                    height="422"
                    src="/image13.png"
                    alt="Illustration of intelligent URL categorization and organization"
                    className="block max-w-full h-auto object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Card 3: Clear Data Visualization & Export */}
              <div className="bg-white border border-gray-300 rounded-[25px] flex flex-col items-start justify-between h-full overflow-hidden p-[30px] relative">
                <div
                  className="flex items-center space-x-2 text-sm text-gray-700 mb-3 border border-gray-300 rounded-full px-3 py-1 self-start"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  <span>Clear Data Visualization & Export</span>
                </div>
                <h3
                  className="text-3xl font-bold mb-2 text-left"
                  style={{
                    fontFamily:
                      '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                    lineHeight: "82%",
                  }}
                >
                  View Data in Tables, Export with Ease
                </h3>
                <p
                  className="text-gray-600 mb-4 text-left"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  All scraped and categorized URLs are presented in clear, sortable tables. Easily export your data for further analysis or integration with other tools.
                </p>
                <div className="w-full mt-auto">
             <Image
                    decoding="async"
                    loading="lazy"
                    width="686"
                    height="514"
                    sizes="329px"
                    src="/image12.png"
                    alt="Illustration of clear data visualization and export"
                    className="block w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>

              {/* Card 4: Flexible & Scalable */}
              <div className=" bg-white border border-gray-300 rounded-[25px] flex flex-col items-start justify-between h-full overflow-hidden p-[30px] relative">
                <div
                  className="flex items-center space-x-2 text-sm text-gray-700 mb-3 border border-gray-300 rounded-full px-3 py-1 self-start"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  <span>Flexible & Scalable</span>
                </div>
                <h3
                  className="text-3xl font-bold mb-2 text-left"
                  style={{
                    fontFamily:
                      '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                    lineHeight: "82%",
                  }}
                >
                  Adapts to Your Data Needs
                </h3>
                <p
                  className="text-gray-600 mb-4 text-left"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  Whether you&apos;re analyzing a single site or managing extensive data projects, Scrapliy scales to provide reliable data extraction and organization.
                </p>
                <div className="w-full mt-auto">
                 <Image
                    decoding="async"
                    loading="lazy"
                    width="686"
                    height="514"
                    sizes="329px"
                    src="/image9.png"
                    alt="Illustration representing flexibility and scalability of data scraping"
                    className="block w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Strategic Content Insights Section */}
            <div className="content-start items-start self-stretch bg-[#040406] rounded-[25px] flex flex-none flex-col flex-nowrap h-auto justify-between overflow-hidden p-[30px] relative w-full text-white lg:self-auto lg:h-auto lg:w-full 2xl:self-stretch">
              {/* Dots background image */}
         
              {/* Decorative effects */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-auto z-0">
                 <Image
                    decoding="async"
                    loading="lazy"
                    width="963"
                    height="764"
                    sizes="515px"
                    src="/light-blue.svg"
                    alt="decorative lightning effect left"
                    className="block w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-auto  transform scale-x-[-1] z-0">
                 <Image
                    decoding="async"
                    loading="lazy"
                    width="963"
                    height="764"
                    sizes="515px"
                    src="/light-blue.svg"
                    alt="decorative lightning effect right"
                    className="block w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="inline-flex items-center space-x-2 text-sm mb-4 border border-white/50 rounded-full px-3 py-1 self-start relative z-[1]"
                style={{
                  fontFamily:
                    '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                }}
              >
                <span>Strategic Content Insights</span>
              </div>

              <div className="relative z-[1]">
                <h3
                  className="sm:text-3xl text-md md:text-4xl font-bold mb-3 text-left"
                  style={{
                    fontFamily:
                      '"Almarena Neue Regular", "Almarena Neue Regular Placeholder", sans-serif',
                    lineHeight: "82%",
                  }}
                >
                  Unlock Full Site Structures & Content Maps
                </h3>
                <p
                  className="sm:text-lg text-white/70  text-sm max-w-xl text-left"
                  style={{
                    fontFamily:
                      '"SF Pro Display Regular", "SF Pro Display Regular Placeholder", sans-serif',
                  }}
                >
                  Understand how content is organized across any website. Use Scrapliy&apos;s categorized URL data and export features to inform your content strategy, competitive analysis, and identify new opportunities for growth.
                </p>
              </div>

         
            </div>
          </div>
        </div>
        {/* End of the second new section */}

        <section className="text-center mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Start Extracting Actionable Web Data Today
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We&apos;re committed to providing powerful, user-friendly tools for web data extraction and organization. Explore Scrapliy and transform how you access and utilize website information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
