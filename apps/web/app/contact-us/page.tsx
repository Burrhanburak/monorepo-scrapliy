"use client";

import { Facebook, Twitter, Linkedin, Link, Instagram, X } from 'lucide-react';

import { ContactForm } from '@/components/form/contact-form';
// If you have a Separator component and want to use it:
// import { Separator } from "@/components/ui/separator";


export default function ContactUsPage() {
  // Form submission logic would go here in a real application
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // ... form handling
  // };

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-[#0900FF] via-background to-background py-32 lg:mx-4 dark:from-[#0900FF]">
      <div className="container mx-auto max-w-2xl px-5">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl text-white">Contact us</h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto text-white">
          Hopefully this form gets through our spam filters.
        </p>
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12 text-white">
          <div>
            <h2 className="font-semibold text-white">Corporate office</h2>
            <p className="mt-3 text-muted-foreground text-white">
              123 Tech City Road<br />
              London, EC1V 9LT, UK
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Email us</h2>
            <div className="mt-3">
              <div>
                <p className="text-primary text-white">Careers On Scrapliy</p>
                <a href="#" className="text-muted-foreground hover:text-foreground text-white">
                  support@scrapliy.com
                </a>
              </div>
            </div>
          </div>
            <div>
              <h2 className="font-semibold">Follow us</h2>
            <div className="mt-3 flex gap-6 lg:gap-10">
            <Link href="https://www.facebook.com/scrapliy" className="text-muted-foreground hover:text-foreground text-white">
                <Facebook className="size-5" aria-hidden="true" />
              </Link>
              <Link href="https://x.com/scrapliy" className="text-muted-foreground hover:text-foreground text-white">
                <X className="size-5" aria-hidden="true" />
              </Link>
              <Link href="https://www.instagram.com/scrapliy/" className="text-muted-foreground hover:text-foreground text-white">
                <Instagram className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Custom Divider - alternatively use <Separator className="my-12" /> if available and preferred */}
        <div className="relative text-muted-foreground h-px w-full my-12 text-white">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>

        <div className="mx-auto">
          <h2 className="text-lg font-semibold mb-8">Contact us for more information</h2>
          {/* <form onSubmit={handleSubmit} className="mt-8 space-y-5"> */}
          <ContactForm />
          
        </div>
      </div>
    </section>
  );
}
