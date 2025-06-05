import Image from "next/image"
import Balancer from "react-wrap-balancer"

export default function Testimonial() {
  return (
    <section id="testimonial" aria-label="Testimonial">
      <figure className="mx-auto">
        <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-gray-50">
          <p>
            <Balancer>
              “Scrapliy has revolutionized how we gather market intelligence. Their automated web scraping and data analysis tools provide us with accurate, up-to-date insights, allowing us to make faster, data-driven decisions.”
            </Balancer>
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center justify-center gap-x-5">
          <Image
            className="h-11 w-11 rounded-full object-cover shadow-lg shadow-indigo-500/50 ring-2 ring-white dark:ring-gray-700"
            width={200}
            height={200}
            src="/testimonial.webp"
            alt="Image of Sarah Miller"
          />
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-50">
              Sarah Miller
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Head of Analytics, MarketScope Corp.
            </p>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
