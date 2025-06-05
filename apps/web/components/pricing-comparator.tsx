import { Button } from "@/components/ui/button";
import { Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

// Helper component for the checkmark icon to avoid repetition
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-4"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const tableData = [
  // Core Scraping Features
  {
    feature: "Website URL Scraping",
    free: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Product Data Extraction",
    free: "Basic",
    professional: "Advanced",
    enterprise: "Full Suite",
  },
  {
    feature: "Blog Content Scraping",
    free: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "URL Analysis & Categorization",
    free: "Basic",
    professional: "Advanced",
    enterprise: "Custom Rules",
  },
  // Data Output & Integration
  {
    feature: "Data Export (CSV)",
    free: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Data Export (JSON, Excel)",
    free: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Bulk Export",
    free: "Limited",
    professional: "Standard",
    enterprise: "Enhanced",
  },
  {
    feature: "API Access",
    free: false,
    professional: false, // Assuming Pro doesn't have API, adjust if needed
    enterprise: true,
  },
  // Limits & Usage
  {
    feature: "Monthly URL Quota",
    free: "5,000",
    professional: "50,000",
    enterprise: "Unlimited",
  },
  {
    feature: "Concurrent Scraping Tasks",
    free: "1",
    professional: "5",
    enterprise: "Unlimited",
  },
  // Support
  {
    feature: "Community Support",
    free: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Email & Chat Support",
    free: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: "Dedicated Support Manager",
    free: false,
    professional: false,
    enterprise: true,
  },
];


export default function PricingComparator() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] mx-auto relative overflow-visible 2xl:py-[70px]">
      <div className="w-full max-w-7xl px-6 pb-8 sm:pt-24 lg:pt-32">
        <div className="w-full overflow-auto lg:overflow-visible">
          <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
            <thead className="bg-background sticky top-0">
              <tr className="*:py-4 *:text-left *:font-medium">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3">
                  <span className="block">Free</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </th>
                <th className="space-y-3 px-4 bg-[#0025ff] text-white rounded-t-lg">
                  <span className="block">Professional</span>
                  <Button asChild size="sm" variant="default">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </th>
                <th className="space-y-3">
                  <span className="block">Enterprise</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              <tr className="*:py-3">
                <td className="flex items-center gap-2 font-medium">
                  <Cpu className="size-4" />
                  <span>Core Scraping</span>
                </td>
                <td></td>
                <td className="px-4 bg-[#0025ff] text-white"></td>
                <td></td>
              </tr>
              {tableData.slice(0, 4).map((row, index) => (
                <tr key={`core-${index}`} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>
                    {row.free === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.free || "-"
                    )}
                  </td>
                  <td className="px-4 bg-[#0025ff] text-white">
                    <div className="-mb-3 border-b border-blue-300 py-3">
                      {row.professional === true ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        row.professional || "-"
                      )}
                    </div>
                  </td>
                  <td>
                    {row.enterprise === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.enterprise || "-"
                    )}
                  </td>
                </tr>
              ))}

              <tr className="*:py-3">
                <td className="flex items-center gap-2 pt-8 font-medium">
                  <Sparkles className="size-4" />
                  <span>Data Output & Integration</span>
                </td>
                <td></td>
                <td className="px-4 bg-[#0025ff] text-white"></td>
                <td></td>
              </tr>
              {tableData.slice(4, 8).map((row, index) => (
                <tr key={`output-${index}`} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>{row.free === true ? <CheckIcon /> : (row.free || "-")}</td>
                  <td className="px-4 bg-[#0025ff] text-white">
                    <div className="-mb-3 border-b border-blue-300 py-3">
                      {row.professional === true ? <CheckIcon /> : (row.professional || "-")}
                    </div>
                  </td>
                  <td>{row.enterprise === true ? <CheckIcon /> : (row.enterprise || "-")}</td>
                </tr>
              ))}

              <tr className="*:py-3">
                <td className="flex items-center gap-2 pt-8 font-medium">
                  <span>Limits & Usage</span>
                </td>
                <td></td>
                <td className="px-4 bg-[#0025ff] text-white"></td>
                <td></td>
              </tr>
              {tableData.slice(8, 10).map((row, index) => (
                <tr key={`limits-${index}`} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>{row.free === true ? <CheckIcon /> : (row.free || "-")}</td>
                  <td className="px-4 bg-[#0025ff] text-white">
                    <div className="-mb-3 border-b border-blue-300 py-3">
                      {row.professional === true ? <CheckIcon /> : (row.professional || "-")}
                    </div>
                  </td>
                  <td>{row.enterprise === true ? <CheckIcon /> : (row.enterprise || "-")}</td>
                </tr>
              ))}
              
              <tr className="*:py-3">
                <td className="flex items-center gap-2 pt-8 font-medium">
                  <span>Support</span>
                </td>
                <td></td>
                <td className="px-4 bg-[#0025ff] text-white"></td>
                <td></td>
              </tr>
              {tableData.slice(10, 13).map((row, index) => (
                <tr key={`support-${index}`} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>{row.free === true ? <CheckIcon /> : (row.free || "-")}</td>
                  <td className="px-4 bg-[#0025ff] text-white">
                    <div className="-mb-3 border-b border-blue-300 py-3">
                      {row.professional === true ? <CheckIcon /> : (row.professional || "-")}
                    </div>
                  </td>
                  <td>{row.enterprise === true ? <CheckIcon /> : (row.enterprise || "-")}</td>
                </tr>
              ))}

              <tr className="*:py-6">
                <td></td>
                <td></td>
                <td className="px-4 bg-[#0025ff] text-white rounded-b-lg"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
