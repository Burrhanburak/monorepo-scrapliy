"use client";

// import { Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react'; // ChevronRight might be useful for lists if any

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 26, 2023'; // Update this date as needed. Using single quotes for JSX compatibility.

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-[#0900FF] via-background to-background py-16 lg:mx-4 dark:from-[#0900FF]">
      <div className="container mx-auto max-w-3xl px-5 text-white">
        <h1 className="text-left text-4xl font-semibold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#fff6f8] via-white-400 to-black-500 py-2">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground text-gray-300">Last Updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-left leading-relaxed text-gray-200">
          <p>
            Welcome to Scrapliy (&quot;Scrapliy&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and our web scraping SaaS application (collectively, the &quot;Service&quot;). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Service includes:
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, email address, and payment information (if you subscribe to a paid plan), that you voluntarily give to us when you register for the Service or when you choose to participate in various activities related to the Service.
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">Usage Data and Analytics</h3>
          <p>
            Information our servers automatically collect when you access the Service, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Service. We may also collect information about your use of the Service, such as features utilized and tasks performed.
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">Data You Provide for Scraping</h3>
          <p>
            URLs, website credentials (if provided by you for sites requiring login), and scraping configurations that you input into the Service to perform web scraping tasks. We process this data as per your instructions to provide the Service.
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">Cookies and Similar Technologies</h3>
          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Service to help customize the Service and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy (if applicable, or a brief explanation here).
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">2. How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Create and manage your account.</li>
            <li>Provide, operate, and maintain our Service.</li>
            <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
            <li>Improve, personalize, and expand our Service.</li>
            <li>Understand and analyze how you use our Service.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes (you can opt-out of marketing communications).</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Service.</li>
            <li>Detect, prevent, and address technical issues and fraudulent or illegal activities.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">3. How We Share Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">Third-Party Service Providers</h3>
          <p>
            We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., payment processing, data analysis, email delivery, hosting services, customer service).
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">Business Transfers</h3>
          <p>
            We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
          </p>
          <h3 className="text-xl font-medium pt-2 text-slate-200">With Your Consent</h3>
          <p>We may disclose your personal information for any other purpose with your consent.</p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">4. Data Scraped by Users</h2>
          <p>
            Scrapliy is a tool that allows users to scrape data from websites. Users are solely responsible for the data they scrape using our Service and must ensure they have the legal right to collect and process such data. We do not own, control, or direct the use of any of the information stored or processed by a user via the Service. We process user-scraped data only as directed by our users.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">5. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">6. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">7. Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p className="mt-2">
            If you wish to exercise any of these rights, please contact us at the email address provided below.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">8. Third-Party Websites</h2>
          <p>
            The Service may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Service, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">9. Children&apos;s Privacy</h2>
          <p>
            Our Service is not intended for use by children under the age of 13 (or 16 in certain jurisdictions). We do not knowingly collect personally identifiable information from children under this age. If you become aware that a child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">11. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            <br />
            Email: <a href="mailto:support@scrapliy.com" className="text-sky-400 hover:underline">support@scrapliy.com</a>
            {/* You can also add a physical address or link to a contact form if preferred */}
          </p>
        </div>
      </div>
    </section>
  );
}