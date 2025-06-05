"use client";
import { Logo } from "@/components/logo";
import { Activity, Map as MapIcon, MessageCircle, SendHorizonal } from "lucide-react";
import DottedMap from "dotted-map";
import { Area, AreaChart, CartesianGrid } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function FeaturesSection() {
  return (
    <section className="px-4">
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto relative overflow-visible px-3 py-12 md:px-[70px] md:py-[70px]  2xl:py-[70px]">
        <div className="mx-auto grid max-w-5xl text-left m-3 pr-20 justify-center items-start gap-4 mb-10 sm:text-left sm:gap-6 md:gap-8">
          <div className="flex items-center w-full md:justify-start">
            <span className="flex items-center mr-2 rounded-md border border-emerald-400 bg-emerald-200 px-1.5 py-0.5 text-xs leading-none text-emerald-700 no-underline dark:bg-emerald-300/10 dark:text-emerald-500 shadow-[0_0_5px_theme(colors.emerald.400),0_0_10px_theme(colors.emerald.400)] dark:shadow-[0_0_5px_theme(colors.emerald.500),0_0_10px_theme(colors.emerald.500)]">
              <span className="w-2 h-2 bg-emerald-500  rounded-full mr-1.5"></span>
              New Scrapliy 
            </span>
          </div>
          <h2 className=" text-[clamp(36px,5vw,50px)] inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent tracking-[-0.05em] leading-none text-left dark:text-white">
            Scrapliy: Intelligent Scraping for Comprehensive Data Insights
          </h2>
          <p className="text-base text-muted-foreground max-w-[920px] font-medium text-balance sm:text-lg md:text-xl">
            Leverage Scrapliy&apos;s versatile scraping tools to efficiently collect, analyze, and export data from products, blogs, and any URL.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl border md:grid-cols-2 rounded-(--radius) border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-background md:gap-0 ">
          <div>
            <div className="relative z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"></div>

              <span className="text-muted-foreground flex items-center gap-2">
                <Activity className="size-4" />
                Dynamic Data Extraction
              </span>

              <p className="my-8 text-2xl font-semibold">
                Extract dynamic content, including product prices, stock levels, and real-time blog updates, with Scrapliy&apos;s advanced scraping engine.
              </p>
            </div>
            <div className="p-6 sm:p-12">
              <span className="text-muted-foreground flex items-center gap-2">
                <MapIcon className="size-4" />
                Targeted URL Analysis & Categorization
              </span>

              <p className="mt-8 text-2xl font-semibold">
                Efficiently analyze and categorize URLs for precise data collection, enabling targeted scraping of specific product pages or blog sections.
              </p>
            </div>

            <div aria-hidden className="relative">
              <div className="absolute inset-0 z-10 m-auto size-fit">
                <div className="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                  <span className="text-lg">📊</span> New data from <strong>Any URL in site</strong>we scraped!
                </div>

                <div className="rounded-(--radius) bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
              </div>

              <div className="relative overflow-hidden">
                <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                <Map />
              </div>
            </div>
          </div>
          <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
            <div className="relative z-10">
              <span className="text-muted-foreground flex items-center gap-2">
                <MessageCircle className="size-4" />
                Flexible Data Export & Integration
              </span>

              <p className="my-8 text-2xl font-semibold">
                Export your scraped data in various formats (CSV, JSON, etc.) and seamlessly integrate with your existing workflows and tools.
              </p>
            </div>
            <div aria-hidden className="flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex size-5 rounded-full border">
                    <Logo className="m-auto size-3" />
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Sat 22 Feb
                  </span>
                </div>
                <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">
                  Please scrape all product names and prices from example.com/products.
                </div>
              </div>

              <div>
                <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">
                  Sure, initiating scrape for product names and prices on example.com/products.
                </div>
                <span className="text-muted-foreground block text-right text-xs">
                  Now
                </span>
              </div>

              <div>
                <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">
                  Can you also extract blog post titles from example.com/blog?
                </div>
                <span className="text-muted-foreground block text-right text-xs">
                  A moment ago
                </span>
              </div>

              <div>
                <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">
                  Certainly, adding blog post title extraction from example.com/blog to the queue.
                </div>
                <span className="text-muted-foreground block text-left text-xs">
                  Just now
                </span>
              </div>
              <div className="mt-4 relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter URL to scrape..."
                  className="w-full p-3 text-xs border rounded-(--radius) bg-background dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#0025ff] shadow-[0_0_5px_#0025ff,0_0_10px_#0025ff]"
                />
                <button className="absolute right-2 p-1.5 bg-[#0025ff] text-white rounded-md hover:bg-blue-700 transition-colors">
                  <SendHorizonal className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-full border-y p-12">
            <p className="text-center text-4xl font-semibold lg:text-7xl">
             99.9% Success Rate
            </p>
          </div>
          <div className="col-span-full p-6 md:p-12">
            <div className="max-w-lg pr-12 ">
              <span className="text-muted-foreground flex items-center gap-2">
                <Activity className="size-4" />
                Advanced Data Processing & Structuring
              </span>
              <p className="my-8 text-2xl font-semibold">
                Clean, structure, and analyze your scraped data in real-time.{" "}
                <span className="text-muted-foreground">
                  {" "}
                  Transform raw web data into organized, actionable insights, ready for table views or export.
                </span>
              </p>
            </div>
            <MonitoringChart />
          </div>
        </div>
      </div>
    </section>
  );
}

const map = new DottedMap({ height: 55, grid: "diagonal" });

const points = map.getPoints();

const svgOptions = {
  backgroundColor: "var(--color-background)",
  color: "currentColor",
  radius: 0.15,
};

const Map = () => {
  const viewBox = `0 0 120 60`;
  return (
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={svgOptions.radius}
          fill={svgOptions.color}
        />
      ))}
    </svg>
  );
};

const chartConfig = {
  siteScrapes: {
    label: "Site Analysis",
    color: "#10b981", // Emerald 500
  },
  productBlog: {
    label: "Product & Blog",
    color: "#0900ff", // User specified color
  },
} satisfies ChartConfig;

const chartData = [
  { month: "May", siteScrapes: 150, productBlog: 80 },
  { month: "June",  siteScrapes: 160, productBlog: 85 },
  { month: "January", siteScrapes: 170, productBlog: 90 },
  { month: "February", siteScrapes: 180, productBlog: 95 },
  { month: "March",  siteScrapes: 190, productBlog: 100 },
  { month: "April", siteScrapes: 200, productBlog: 110 },
];

const MonitoringChart = () => {
  return (
    <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <defs>
          <linearGradient id="fillSiteScrapes" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-siteScrapes)"
              stopOpacity={0.8}
            />
            <stop
              offset="55%"
              stopColor="var(--color-siteScrapes)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillProductBlog" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-productBlog)"
              stopOpacity={0.8}
            />
            <stop
              offset="55%"
              stopColor="var(--color-productBlog)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <ChartTooltip
          active
          cursor={false}
          content={<ChartTooltipContent className="dark:bg-muted" />}
        />
        <Area
          strokeWidth={2}
          dataKey="siteScrapes"
          type="stepBefore"
          fill="url(#fillSiteScrapes)"
          fillOpacity={0.1}
          stroke="var(--color-siteScrapes)"
          stackId="a"
        />
        <Area
          strokeWidth={2}
          dataKey="productBlog"
          type="stepBefore"
          fill="url(#fillProductBlog)"
          fillOpacity={0.1}
          stroke="var(--color-productBlog)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
};
