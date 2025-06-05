
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-9";

import CodeExample from "@/components/CodeExample";
import Pricing from "@/components/sections/pricing/default";

import Faqs from "@/components/Costum-Faqs";
import CustomCta from "@/components/custom-cta";
export default function Home() {
  return (
 <>
 <HeroSection />
      <FeaturesSection />
      <CodeExample />
      <Pricing />
      <Faqs />
      <CustomCta />
 </>
  );
}
