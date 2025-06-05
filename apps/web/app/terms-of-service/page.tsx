"use client";

// import { Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react'; // ChevronRight might be useful for lists if any

export default function TermsOfServicePage() {
  const lastUpdated = 'October 26, 2023'; // Update this date as needed

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-[#0900FF] via-background to-background py-16 lg:mx-4 dark:from-[#0900FF]">
      <div className="container mx-auto max-w-3xl px-5 text-white">
        <h1 className="text-left text-4xl font-semibold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#fff6f8] via-white-400 to-black-500 py-2">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground text-gray-300">Last Updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 text-left leading-relaxed text-gray-200">
          <p>
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Scrapliy website and the Scrapliy web scraping SaaS application (the &quot;Service&quot;) operated by Scrapliy (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">1. Description of Service</h2>
          <p>
            Scrapliy provides a SaaS application designed to enable users to extract publicly available data from websites (&quot;Scraping&quot;). The Service includes tools to configure, manage, and execute scraping tasks, and to access the extracted data. The specifics of the service, including features and limitations, may vary based on the subscription plan chosen by the user.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">2. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">3. Acceptable Use of the Service</h2>
          <p>You agree not to use the Service for any unlawful purpose or in any way that violates these Terms. Specifically, you agree to the following:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>You will comply with all applicable local, state, national, and international laws and regulations in your use of the Service.</li>
            <li>You will not use the Service to scrape or collect data from any website that explicitly prohibits scraping in its terms of service or through technical measures (e.g., robots.txt), unless you have obtained explicit permission from the website owner.</li>
            <li>You are solely responsible for ensuring that your use of the Service and the data you scrape is compliant with all applicable laws, including but not limited to data privacy laws (e.g., GDPR, CCPA), copyright laws, and anti-hacking laws.</li>
            <li>You will not use the Service to scrape personal data unless you have a legal basis to do so and comply with all relevant data protection regulations.</li>
            <li>You will not use the Service in any manner that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party&apos;s use and enjoyment of the Service.</li>
            <li>You will not attempt to gain unauthorized access to any part of the Service, other accounts, computer systems, or networks connected to the Service, through hacking, password mining, or any other means.</li>
            <li>You will not use the Service to distribute malware, viruses, or any other harmful software.</li>
            <li>You will not use the Service to engage in any activity that is abusive, defamatory, harassing, or otherwise objectionable.</li>
            <li>Scrapliy does not pre-screen content scraped by users but reserves the right to remove any content or suspend/terminate accounts found to be in violation of these Terms.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">4. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Scrapliy and its licensors. The Service is protected by copyright, trademark, and other laws of both your country and foreign countries.
          </p>
          <p>
            You retain all ownership rights to the data you lawfully scrape using the Service (&quot;User Content&quot;). By using the Service, you grant Scrapliy a worldwide, non-exclusive, royalty-free license to use, reproduce, process, and display User Content solely for the purpose of providing and improving the Service to you.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">5. Fees and Payment</h2>
          <p>
            Some parts of the Service may be billed on a subscription basis (&quot;Subscription(s)&quot;). You will be billed in advance on a recurring and periodic basis (&quot;Billing Cycle&quot;). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
          </p>
          <p>
            At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Scrapliy cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Scrapliy customer support.
          </p>
          <p>
            A valid payment method, including credit card, is required to process the payment for your Subscription. You shall provide Scrapliy with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Scrapliy to charge all Subscription fees incurred through your account to any such payment instruments.
          </p>
          <p>
            Scrapliy, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Billing Cycle. Scrapliy will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">6. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">7. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
          <p>
            Scrapliy its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">8. Limitation of Liability</h2>
          <p>
            In no event shall Scrapliy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">9. Indemnification</h2>
          <p>
            You agree to defend, indemnify and hold harmless Scrapliy and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content scraped or posted on the Service.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction - e.g., State of California, United States], without regard to its conflict of law provisions. You should replace `[Your Jurisdiction]` with the actual jurisdiction whose laws will govern the agreement.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>

          <h2 className="text-2xl font-semibold pt-4 text-slate-100">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
            <br />
            Email: <a href="mailto:support@scrapliy.com" className="text-sky-400 hover:underline">support@scrapliy.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}