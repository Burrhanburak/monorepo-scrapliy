"use client"; // Eğer Next.js App Router kullanıyorsanız bu satır gerekli olabilir
import React, { useState } from "react";
import { ShieldQuestion } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// Placeholder for the first SVG icon
const SvgIconPlaceholder: React.FC = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    className="shrink-0 fill-black text-black"
    style={{ imageRendering: "pixelated" }}
  >
    <rect width="18" height="19" fill="currentColor" />
  </svg>
);

// Icon used in the "Learn more" button
const LearnMoreIcon: React.FC = () => (
  <Image
    decoding="async"
    loading="lazy"
    width="32"
    height="32"
    // sizes="31px" // Bu satırı geçici olarak kaldırın
    src="/learnmore.svg"
    alt="Learn more icon"
    className="block w-full h-full object-cover"
  />
);

// Arrow icon for the FAQ items
const ArrowIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    className={`shrink-0 transition-transform duration-300 fill-[rgb(4,5,54)] dark:fill-gray-200 ${
      isOpen ? "rotate-180" : ""
    }`} // Döndürme efekti eklendi
    aria-hidden="true"
  >
    {/* Orijinal ok yukarıyı gösteriyor, açıldığında aşağıyı göstermesi için path'i değiştirebiliriz veya transform kullanabiliriz.
        Mevcut path yukarı-sağ çaprazı gösteriyor. Basitlik için sadece döndürme ekledim.
        Eğer farklı bir "açık" ve "kapalı" ikonunuz varsa, burada koşullu render edebilirsiniz.
        Bu path, orijinal "kapalı" durumdaki gibi kalacak, CSS ile döndürülecek.
    */}
    <path d="M 13.655 6.445 C 13.655 6.113 13.387 5.845 13.055 5.845 L 7.655 5.845 C 7.324 5.845 7.055 6.113 7.055 6.445 C 7.055 6.776 7.324 7.045 7.655 7.045 L 12.455 7.045 L 12.455 11.845 C 12.455 12.176 12.724 12.445 13.055 12.445 C 13.387 12.445 13.655 12.176 13.655 11.845 Z M 6.924 13.424 L 13.479 6.869 L 12.631 6.02 L 6.076 12.576 Z" />
  </svg>
);

interface FaqItem {
  question: string;
  answer: string; // Cevaplar için bir alan ekledik
}

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "What is Scrapliy?",
      answer:
        "Scrapliy is a powerful web scraping platform that enables you to extract, analyze, and export data from websites. Our platform offers advanced features for product data extraction, blog content scraping, and URL analysis with high success rates and reliable performance.",
    },
    {
      question: "What types of data can I scrape with Scrapliy?",
      answer:
        "Scrapliy supports various types of data extraction including product information, blog content, URLs, and structured data. You can extract prices, descriptions, specifications, articles, and more. Our platform is designed to handle both simple and complex scraping tasks efficiently.",
    },
    {
      question: "How does Scrapliy ensure reliable data extraction?",
      answer:
        "Scrapliy uses advanced algorithms and infrastructure to ensure reliable data extraction. We implement rate limiting, proxy rotation, and error handling to maintain high success rates. Our platform also includes automatic retry mechanisms and data validation to ensure data quality.",
    },
    {
      question: "What export formats does Scrapliy support?",
      answer:
        "Scrapliy supports multiple export formats including CSV, JSON, Excel, and custom formats. You can easily export your scraped data and integrate it with your existing tools and workflows. We also offer API access for programmatic data retrieval.",
    },
    {
      question: "Is Scrapliy suitable for large-scale data extraction?",
      answer:
        "Yes, Scrapliy is designed to handle both small and large-scale data extraction projects. Our platform offers scalable infrastructure, concurrent scraping capabilities, and efficient data processing to handle high volumes of data extraction tasks.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center w-full max-w-[1440px] mx-auto relative overflow-visible px-6 py-12 md:px-[70px] md:py-[70px] 2xl:px-[250px] 2xl:py-[70px]"
    >
      <div className="w-full flex flex-col items-start border-[rgba(99,114,110,0.23)]  pb-2 ">
        <span className="flex items-center mr-2 rounded-md border border-emerald-400 bg-emerald-200 px-1.5 py-0.5 text-xs leading-none text-emerald-700 no-underline dark:bg-emerald-300/10 dark:text-emerald-500 shadow-[0_0_5px_theme(colors.emerald.400),0_0_10px_theme(colors.emerald.400)] dark:shadow-[0_0_5px_theme(colors.emerald.500),0_0_10px_theme(colors.emerald.500)]">
          <ShieldQuestion className="w-3 h-3 mr-1.5" />
          FAQ
        </span>

        <div className="my-4">
          <p className=" text-[clamp(36px,5vw,50px)] inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent tracking-[-0.05em] leading-none text-left dark:text-white">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mb-6">
          <p className=" text-base leading-[1.29] text-left text-[rgba(72,73,84,0.7)] dark:text-[rgba(255,255,255,0.7)]">
            Everything you need to know about web scraping with Scrapliy—
            simplified and straight to the point.
          </p>
        </div>

        <div className="mb-10">
          <Link
            href="/docs"
            className="inline-flex items-center  border border-[rgba(99,114,110,0.23)]  bg-white dark:bg-background rounded-[20px] py-2 px-3 hover:opacity-80 dark:hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 border border-[rgba(99,114,110,0.23)] dark:bg-transparent dark:bg-white rounded-full flex items-center justify-center mr-2.5 shrink-0">
              <div className="w-[24px] h-[24px]">
                {" "}
                <LearnMoreIcon />
              </div>
            </div>
            <div className="opacity-100">
              <p className=" text-[rgb(4,5,54)] dark:text-white text-[15px] leading-[1.29] ">
                Learn more
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full space-y-3 md:space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="w-full opacity-100 group" // Removed cursor-pointer as the button inside will handle it
          >
            <button // Changed div to button for better accessibility
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
              className="flex justify-between items-center w-full text-left border border-[rgba(99,114,110,0.23)]  bg-white dark:bg-background rounded-[20px] p-4 pr-2 md:p-5 md:pr-4 group-hover:bg-gray-10 dark:group-hover:bg-white/[.07] dark:group-hover:border-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400"
            >
              <div className="flex-1 mr-2">
                <p className="text-[16px] leading-[1.29] text-[rgb(4,5,54)] dark:text-gray-100 dark:group-hover:text-white">
                  {item.question}
                </p>
              </div>
              <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 border border-[rgba(99,114,110,0.23)] rounded-full shrink-0">
                <ArrowIcon isOpen={openIndex === index} />
              </div>
            </button>
            {openIndex === index && (
              <div
                id={`faq-content-${index}`}
                className="mt-2 p-4 pl-6 pr-6 md:pl-10 md:pr-10 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-transparent rounded-b-[30px] rounded-t-lg border border-t-0 border-[rgba(99,114,110,0.23)] dark:hover:bg-white/[.05] dark:hover:border-neutral-500 transition-colors"
              >
                <p className=" text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
