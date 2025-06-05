import {
  RiLinksLine,
  RiPlugLine,
  RiShieldKeyholeLine,
  RiStackLine,
} from "@remixicon/react";

import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import { InfiniteSlider } from "@/components/infinite-slider";
import { Logo } from "@/components/logo";
import React from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Multiple Export Formats",
    description:
      "Export your scraped data in various formats including CSV, JSON, Excel, and custom formats.",
    icon: RiStackLine,
  },
  {
    name: "Easy Integration",
    description:
      "Seamlessly integrate with your existing tools and workflows through our powerful API.",
    icon: RiPlugLine,
  },
  {
    name: "Advanced Analytics",
    description:
      "Analyze and visualize your scraped data with built-in analytics tools and reporting features.",
    icon: RiLinksLine,
  },
  {
    name: "Secure & Reliable",
    description:
      "Enterprise-grade security with data encryption and reliable scraping infrastructure.",
    icon: RiShieldKeyholeLine,
  },
];

export default function CodeExample() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3">
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto relative overflow-visible px-3 py-12 md:px-[70px] md:py-[70px]  2xl:py-[70px]">
        <div className="w-full flex text-center flex-col items-center border-[rgba(99,114,110,0.23)]  pb-2 ">
        
          <span className="flex items-center mr-2 rounded-md border border-emerald-400 bg-emerald-200 px-1.5 py-0.5 text-xs leading-none text-emerald-700 no-underline dark:bg-emerald-300/10 dark:text-emerald-500 shadow-[0_0_5px_theme(colors.emerald.400),0_0_10px_theme(colors.emerald.400)] dark:shadow-[0_0_5px_theme(colors.emerald.500),0_0_10px_theme(colors.emerald.500)]">
              <span className="w-2 h-2 bg-emerald-500  rounded-full mr-1.5"></span>
              Platform Highlights
            </span>
      
          
         

          <div className="my-4">
            <p className=" text-[clamp(36px,5vw,50px)] inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent tracking-[-0.05em] leading-none text-left dark:text-white">
              Powerful Web Scraping Tools for Modern Data Collection
            </p>
          </div>

          <div className="mb-6">
            <p className=" text-base text-left leading-[1.29] text-left text-[rgba(72,73,84,0.7)] dark:text-[rgba(255,255,255,0.7)]">
              Extract, process, and analyze web data with our comprehensive suite of scraping tools. 
              From product information to blog content, we provide everything you need for efficient data collection.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
        <div
          role="presentation"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
        ></div>
        <div>
          <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
            <IntegrationCard>
              <VSCodium />
            </IntegrationCard>
            <IntegrationCard>
              <MediaWiki />
            </IntegrationCard>
            <IntegrationCard>
              <GooglePaLM />
            </IntegrationCard>
            <IntegrationCard>
              <Gemini />
            </IntegrationCard>
            <IntegrationCard>
              <Replit />
            </IntegrationCard>
            <IntegrationCard>
              <MagicUI />
            </IntegrationCard>
          </InfiniteSlider>
        </div>

        <div>
          <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
            <IntegrationCard>
              <Gemini />
            </IntegrationCard>
            <IntegrationCard>
              <Replit />
            </IntegrationCard>
            <IntegrationCard>
              <MediaWiki />
            </IntegrationCard>
            <IntegrationCard>
              <MagicUI />
            </IntegrationCard>
            <IntegrationCard>
              <VSCodium />
            </IntegrationCard>
            <IntegrationCard>
              <GooglePaLM />
            </IntegrationCard>
          </InfiniteSlider>
        </div>
        <div>
          <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
            <IntegrationCard>
              <Replit />
            </IntegrationCard>
            <IntegrationCard>
              <MagicUI />
            </IntegrationCard>
            <IntegrationCard>
              <Gemini />
            </IntegrationCard>
            <IntegrationCard>
              <VSCodium />
            </IntegrationCard>
            <IntegrationCard>
              <MediaWiki />
            </IntegrationCard>
            <IntegrationCard>
              <GooglePaLM />
            </IntegrationCard>
          </InfiniteSlider>
        </div>
        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
          <IntegrationCard
            className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
            isCenter={true}
          >
            <Logo />
          </IntegrationCard>
        </div>
      </div>
      <dl className=" grid grid-cols-4 gap-10 m-6">
        {features.map((item) => (
          <div
            key={item.name}
            className="col-span-full sm:col-span-2 lg:col-span-1"
          >
            <div className="w-fit rounded-lg p-2 shadow-md shadow-blue-400/30 ring-1 ring-black/5  dark:ring-white/5">
              <item.icon
                aria-hidden="true"
                className="size-6 text-white-600 dark:text-white-600"
              />
            </div>
            <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
              {item.name}
            </dt>
            <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative z-20 flex size-12 rounded-full ",
        className
      )}
    >
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};
