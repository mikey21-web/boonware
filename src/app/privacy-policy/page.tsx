import PageShell from "@/components/PageShell";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p>
                At Boonware, we prioritize the protection of your data. We collect
                information that you provide directly to us, such as when you subscribe to
                our newsletter, request a quote, or purchase a pre-built solution.
              </p>
              <p className="mt-3 font-medium">Types of data collected:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Personal identifiers (Name, Email Address, Phone Number).</li>
                <li>Project details and specifications for custom development.</li>
                <li>
                  Payment information (processed securely through third-party providers).
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p>
                We use the collected data for specific business purposes, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Delivering your custom or pre-built software solutions.</li>
                <li>Communicating project updates and support.</li>
                <li>
                  Sending newsletters only if you have opted in through our website.
                </li>
                <li>
                  Improving our website functionality and overall user experience.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Code Authority & Data Security</h2>
              <p>
                We respect the confidentiality of your projects. As outlined in our FAQ,
                once full payment is received, complete source code ownership and authority
                are transferred to you.
              </p>
              <p className="mt-3">
                We do not retain rights to use your custom project code for other clients
                without your explicit written permission. We implement reasonable technical
                and organizational measures to protect your data from unauthorized access,
                disclosure, or misuse.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. These cookies
                help us understand user behavior, improve website performance, and provide a
                better experience.
              </p>
              <p className="mt-3">
                You may choose to disable cookies through your browser settings. However,
                doing so may affect the functionality of certain features of the website.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. If you click on a
                third-party link, you will be redirected to that website.
              </p>
              <p className="mt-3">
                Please note that these external websites are not operated by us. We strongly
                recommend reviewing the Privacy Policies of any third-party sites you visit,
                as we have no control over their content, privacy practices, or services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
              <p>
                If you have any questions, concerns, or suggestions regarding this Privacy
                Policy, please contact us:
              </p>
              <div className="mt-3 p-4 rounded-lg border bg-gray-50 dark:bg-slate-800">
                <p>
                  <strong>Email:</strong> info@boonware.in
                </p>
                <p>
                  <strong>Website:</strong> https://www.boonware.in
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
