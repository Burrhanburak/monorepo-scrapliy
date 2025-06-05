import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";

import ThemeSwitch from "@/components/ThemeSwitch";
import { Logo } from "@/components/logo";

const navigation = {
  product: [
  
    { name: "Pricing Plans", href: "/pricing", external: false },
    { name: "Docs", href: "/docs", external: false },
    { name: "Why Us", href: "/why-us", external: false },
  ],
  resources: [
  
    { name: "X", href: "https://x.com/scrapliy", external: true },
    { name: "Youtube", href: "https://www.youtube.com/@scrapliy", external: true },
    { name: "Instagram", href: "https://www.instagram.com/scrapliy", external: true },
    { name: "Blog", href: "/blog", external: false },
  ],
  services: [
    { name: "E-commerce Data Scraping", href: "/ecommerce-data-scraping", external: false },
    // Add more services here in the future
  ],
  company: [
    { name: "About Scrapliy", href: "/about", external: false },
    { name: "Contact Us", href: "/contact-us", external: false },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy", external: false },
    { name: "Terms of Service", href: "/terms-of-service", external: false },
  ],
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto relative overflow-visible px-6   2xl:py-[70px]">
        <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 ">
          <div className="xl:grid xl:grid-cols-3 xl:gap-20">
            <div className="space-y-6">
              <Link href="/" aria-label="home" className="flex items-center">
                <Logo />
                <span className="text-lg font-semibold lg:inline-block">
                  Scrapliy
                </span>
              </Link>

              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                Scrapliy: Powerful web scraping and data extraction made simple. Turn web data into actionable insights.
              </p>
              <div className="flex space-x-6">
                <ThemeSwitch />
              </div>
              <div></div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-14 gap-x-8 sm:grid-cols-2 md:grid-cols-3 xl:col-span-2 xl:mt-0">
              {/* Product Section */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Product
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources Section */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Resources
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Resources"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Services Section - NEW */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Services
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Services"
                >
                  {navigation.services.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company Section */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Company
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Company"
                >
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Legal Section */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Legal
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Legal"
                >
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
            <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Scrapliy. All rights reserved.
            </p>
            <div className="rounded-full border border-gray-200 py-1 pl-1 pr-2 dark:border-gray-800">
              <div className="flex items-center gap-1.5">
                <div className="relative size-4 shrink-0">
                  <div className="absolute inset-[1px] rounded-full bg-emerald-500/20 dark:bg-emerald-600/20" />
                  <div className="absolute inset-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-50">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
