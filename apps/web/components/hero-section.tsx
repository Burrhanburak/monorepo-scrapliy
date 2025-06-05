"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import LogoCloud from "./logo-cloud";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-20 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >

              <Image
                src="/scrapliy-bg.png"
                alt="background"
                className="absolute inset-x-0 top-140 -z-20 hidden dark:block lg:-top-82"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/about"
                    className="hover:bg-background dark:hover:border-t- bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Advanced Web Scraping & Data Export
                    </span>
                    <span className="dark:border-background block h-4 w-0.5  bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

            
                <AnimatedGroup variants={transitionVariants}>
                  <h1 
                   className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem] text-zinc-900 dark:bg-clip-text dark:text-transparent dark:bg-[radial-gradient(50%_306.999%_at_50%_57.0833%,rgb(255,255,255)_0%,rgba(255,255,255,0.3)_100%)]">Scrapliy - Effortless Web Scraping for Products, Blogs & All URLs ↡</h1>
                </AnimatedGroup>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-md"
                >
                  Scrapliy empowers you to effortlessly scrape, analyze, and export web data. Extract product details, blog content, and analyze various URLs, then visualize your data in tables. Utilize our powerful bulk export features, including options for categorized links, to efficiently manage and process your scraped information.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)]  p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="/signup">
                        <span className="text-nowrap">Start Scraping</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 border border-gray-200"
                  >
                    <Link href="/signup">
                      <span className="text-nowrap">View Demo</span>
                    </Link>
                  </Button>
                  <div className="flex px-2 flex-row items-center justify-start gap-4">
    {/* Avatars section */}
    <div className="relative h-10 flex items-center">
        {/* Overlapping avatars */}
        {[
          { src: "/user.png", z: 50, offset: 0 },
          { src: "/user2.png", z: 40, offset: 1 },
          { src: "/user3.png", z: 30, offset: 2 },
         
         
        ].map((avatar, index) => (
          <div
            key={index}
            className={`absolute w-8 h-8 rounded-full overflow-hidden border-2 border-white z-${avatar.z} ${avatar.offset > 0 ? `-ml-2 left-${avatar.offset * 6}` : ''}`}
          >
            <Image
              width={32}
              height={32}
              className="w-full h-full object-cover"
              src={avatar.src}
              alt="User avatar"
            />
          </div>
        ))}
    </div>
    
    {/* Trusted text */}
    <div data-framer-name="Title"> {/* Removed framer-18v5tzb class */}
      <p className="text-sm dark:text-white"> {/* Replaced Framer classes with Tailwind classes */}
        <span className='font-semibold dark:text-white'>--</span> <span>by</span> <span>1.2k+</span>
      </p>
    </div>
</div>
                </AnimatedGroup>
         
              </div>
          
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              
              <div className="relative  mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent "
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-2 shadow-lg shadow-zinc-950/15 ring-1 shadow-[0_-10px_20px_-5px_#0900FF]">
                  <Image
                    className="bg-background  relative hidden rounded-2xl dark:block"
                    src="/image-black.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25  relative rounded-2xl border dark:hidden"
                    src="/image-light.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
    
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <LogoCloud />
        </section>
      </main>
    </>
  );
}
