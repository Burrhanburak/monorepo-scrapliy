import React from "react";
import { GitCompareArrows } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface CustomCtaProps {}

const CustomCta: React.FC<CustomCtaProps> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-min max-w-[1440px] overflow-hidden relative 
                 pt-5 px-[70px] pb-[90px] 
                 max-[809px]:order-10 max-[809px]:pt-5 max-[809px]:px-5 max-[809px]:pb-[90px] 
                 mx-auto"
    >
      {/* Inner container with dark background and rounded corners (.framer-1r1t1oa) */}
      <div
        className="relative border-1 border-gray flex flex-col sm:flex-row content-start items-center sm:items-start justify-center w-full bg-background rounded-[30px] overflow-hidden 
                   h-auto min-h-[400px] sm:min-h-0 sm:h-[447px] 
                   py-16 px-6 
                   sm:pt-[104px] sm:pb-[84px] 
                   md:px-[30px] 
                   lg:px-[100px] xl:px-[200px] 
                   min-[1200px]:px-[344px] 
                   min-[810px]:max-[1439px]:h-[425px] 
                   min-[810px]:max-[1439px]:pt-[114px] 
                   min-[810px]:max-[1439px]:pb-[84px]
                   gap-[10px] will-change-transform"
      >
        {/* Decorative Images - Positioned absolutely relative to this inner container */}
        {/* Dots Image */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            width={899}
            height={497}
            sizes="899px"
            decoding="async"
            loading="lazy"
            src="/dot.jpg"
            alt=""
            className="block w-full h-full object-cover "
          />
        </div>

        {/* Bottom Glow Image */}

        <div
          className="absolute bottom-[-242px] left-1/2 transform -translate-x-1/2 w-[899px] h-[497px] mix-blend-lighten overflow-hidden pointer-events-none z-[1]"
          aria-hidden="true"
        >
          {/* Inner div for background image wrapper, ensuring image fills the parent */}
          <div className="absolute">
            <Image
              width={899}
              height={497}
              sizes="899px"
              decoding="async"
              loading="lazy"
              src="/black-botton.jpg"
              alt="scrapliy-black-bottom"
              className="block w-full h-full object-cover object-center "
            />
          </div>
        </div>
        {/* Lightning Image */}
        <div
          className="absolute -top-1/4 -right-1/4 sm:right-0 w-[150%] sm:w-full max-w-[600px] md:max-w-[963px] 
                     transform sm:translate-x-1/4 md:translate-x-1/3 pointer-events-none z-0"
          aria-hidden="true"
        >
          <Image
            width={600}
            height={600}
            sizes="600px"
            decoding="async"
            loading="lazy"
            src="/light-blue.svg"
            alt="scrapliy-lightning"
            className="block w-full h-auto object-cover "
          />
        </div>

        {/* Content Block (.framer-mp0t08) - Above decorative images */}
        <div className="flex flex-col items-center text-center z-10 relative py-10 sm:py-0">
          {/* Title Block */}
          <div className="framer-139b7f3">
            <p className="font-almarena text-[60px] sm:text-[50px] tracking-[-0.05em] leading-[1] text-center">
              <span
                data-text-fill="true"
                className="framer-text"
                style={{
                  backgroundImage:
                    "radial-gradient(50% 306.999% at 50% 57.0833%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.3) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Start Scraping with Scrapliy Today
              </span>
            </p>
          </div>

          {/* Subtitle Block */}
          <div className=" mt-4 sm:mt-6 max-w-md sm:max-w-lg">
            <p className="font-sfpro text-[14px] leading-[1.29] text-center text-white/80 framer-text">
              Join Scrapliy today and transform your web data collection process. Our platform provides powerful tools, 
              advanced analytics, and reliable infrastructure to help you gather and process web data efficiently.
            </p>
          </div>

          {/* Button Block */}
          <div className="container mt-8 sm:mt-10">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-white text-black rounded-[50px] border border-solid border-white hover:bg-gray-100 transition-colors duration-150 h-full"
            >
              <div className=" w-[20px] h-[20px] relative mx-2.5 my-1.5 sm:my-0">
                <GitCompareArrows className="block w-full h-full object-contain" />
              </div>
              <div className="flext" style={{ opacity: 1 }}>
                <div className="" style={{ opacity: 1 }}>
                  <div className=" py-3 sm:py-3.5 pr-4 sm:pr-6">
                    <p className="font-sfpro text-[12px] leading-[1.29] framer-text">
                      Get Started Free
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCta;
