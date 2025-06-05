"use client";
import { Button } from "@/components/ui/Pricing-button";
import { Label } from "@/components/LabelTre";
import { Switch } from "@/components/Switch";
import Faqs from "@/components/Costum-Faqs";
import Testimonial from "@/components/Testimonial";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { User, Users, DollarSign } from "lucide-react";
import PricingComparator from "@/components/pricing-comparator";

const pricingColumnStylingKey = {
  default: "glass-1 to-transparent dark:glass-3 overflow-hidden",
  glow: "glass-2 to-trasparent dark:glass-3 overflow-hidden after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  "glow-brand":
    "glass-3 dark:glass-4 overflow-visible [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)] after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
};

type FixedPrice = string;

interface VariablePrice {
  monthly: string;
  annually: string;
}

interface Plan {
  name: string;
  icon?: React.ReactNode;
  description: string;
  price: FixedPrice | VariablePrice;
  cta: {
    label: string;
    href: string;
    variant: "glow" | "default";
  };
  features: string[];
  variant: keyof typeof pricingColumnStylingKey;
}

const isVariablePrice = (
  price: FixedPrice | VariablePrice
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined;
};

const plansData: Plan[] = [
  {
    name: "Starter",
    description:
      "Perfect for individuals and small projects that need basic web scraping capabilities.",
    price: "$0",
    cta: {
      label: "Get started for free",
      href: "/signup",
      variant: "default",
    },
    features: [
      "Up to 5,000 URLs per month",
      "Basic product data extraction",
      "CSV export format",
      "Community support",
    ],
    variant: "default",
  },
  {
    name: "Professional",
    icon: <User className="size-4" />,
    description:
      "Ideal for growing businesses that need advanced scraping features.",
    price: {
      monthly: "$49",
      annually: "$39",
    },
    cta: {
      label: "Start 14-day trial",
      href: "/signup",
      variant: "default",
    },
    features: [
      "Up to 50,000 URLs per month",
      "Advanced data extraction",
      "Multiple export formats",
      "Priority support",
      "URL categorization",
    ],
    variant: "glow-brand",
  },
  {
    name: "Enterprise",
    icon: <Users className="size-4" />,
    description:
      "For large organizations requiring comprehensive web scraping solutions.",
    price: {
      monthly: "$99",
      annually: "$79",
    },
    cta: {
      label: "Start 14-day trial",
      href: "/signup",
      variant: "default",
    },
    features: [
      "Unlimited URLs",
      "Full data extraction suite",
      "Custom export formats",
      "Dedicated support",
      "Advanced analytics",
      "API access",
    ],
    variant: "glow",
  },
];

export default function Pricing() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly");
  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto relative overflow-visible px-6 py-12  2xl:py-[70px]">
      <div className="w-full flex text-center flex-col items-center border-[rgba(99,114,110,0.23)] pb-2">
        <div className="relative border border-emerald-400 px-1.5 py-0.5 text-xs leading-none text-emerald-700 no-underline dark:bg-emerald-300/10 dark:text-emerald-500 flex flex-none flex-row flex-nowrap items-center justify-center gap-[5px] h-min w-min py-[4px] px-[4px] rounded-[50px] border-[1.5px] border-solid border-[rgba(0,179,62,0.15)] dark:border-green-700 bg-[#dfffde66] backdrop-blur-[10px] overflow-visible">
          <div className="w-[15px] h-[19px] flex items-center justify-center">
            <DollarSign
              color="green"
              className="dark:text-green-300 dark:border-white dark:fill-white text-[rgb(0,179,62)] w-full h-full"
            />
          </div>
          <div>
            <p className="text-[14px] fonte-bold leading-[1.29] dark:text-green-300">
              Pricing
            </p>
          </div>
        </div>

        <div className="my-4">
          <p className="text-[clamp(36px,5vw,50px)] inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent tracking-[-0.05em] leading-none text-left dark:text-white">
            All the tools you need to scrape the web, in one place.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-base text-left leading-[1.29] text-left text-[rgba(72,73,84,0.7)] dark:text-[rgba(255,255,255,0.7)]">
            Everything you need to get started with web scraping—simplified and
            straight to the point.
          </p>
        </div>

        <div className="mb-10 relative z-10">
          <div className="flex items-center justify-center gap-2">
            <Label
              htmlFor="switch"
              className="text-base font-medium sm:text-sm dark:text-gray-400"
            >
              Monthly
            </Label>
            <Switch
              id="switch"
              checked={billingFrequency === "annually"}
              onCheckedChange={() =>
                setBillingFrequency(
                  billingFrequency === "monthly" ? "annually" : "monthly"
                )
              }
            />
            <Label
              htmlFor="switch"
              className="text-base font-medium sm:text-sm dark:text-gray-400"
            >
              Yearly (-20%)
            </Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-20">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "max-w-container relative border border-gray flex flex-col gap-6 rounded-2xl p-8 shadow-xl",
              pricingColumnStylingKey[plan.variant]
            )}
          >
            {plan.variant === "glow-brand" && (
              <div className="flex h-4 items-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto px-3">
                <div className="relative w-full">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-indigo-600 dark:border-indigo-400" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs font-medium text-indigo-600 dark:bg-gray-950 dark:text-indigo-400">
                      Most popular
                    </span>
                  </div>
                </div>
              </div>
            )}
            <hr
              className={cn(
                "absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
                plan.variant === "glow-brand"
                  ? "via-brand"
                  : "via-foreground/60"
              )}
            />
            <div className="relative flex flex-col gap-7 mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {plan.icon && (
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary [&>svg]:size-5">
                      {plan.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="flex flex-col items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
                <p className="flex items-baseline">
                  <span className="text-5xl font-semibold tabular-nums text-gray-900 dark:text-gray-50">
                    {isVariablePrice(plan.price)
                      ? billingFrequency === "monthly"
                        ? plan.price.monthly
                        : plan.price.annually
                      : plan.price}
                  </span>
                  {isVariablePrice(plan.price) && (
                    <span className="ml-1 text-sm font-semibold text-muted-foreground">
                      {billingFrequency === "monthly"
                        ? "per month"
                        : "per month, billed annually"}
                    </span>
                  )}
                </p>
                {!isVariablePrice(plan.price) && plan.price === "$0" && (
                  <span className="ml-1 text-sm font-semibold text-muted-foreground">
                    Free forever
                  </span>
                )}
              </div>
              <Button
                variant={plan.cta.variant}
                size="lg"
                asChild
                className="w-full group"
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
              <hr className="border-input" />
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className="size-5 flex-shrink-0 fill-primary text-background"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section
        id="testimonial"
        className="mx-auto max-w-xl pt-4 lg:max-w-6xl"
        aria-labelledby="testimonial"
      >
        <Testimonial />
      </section>

      <PricingComparator />

      <Faqs />
    </div>
  );
}
