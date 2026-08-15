import PageShell from "@/components/PageShell";

export default function TermsAndConditionsPage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Welcome to BoonWare. These Terms and Conditions govern your use of our
                website and services, including our pre-built applications and custom
                development projects. By accessing or using our services, you agree to be
                bound by these terms.
              </p>
              <p className="mt-3">
                If you disagree with any part of these terms, you may not access or use our
                services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Services & Delivery</h2>
              <p>
                We provide both pre-built software solutions and custom development
                services. Specific deliverables, timelines, and costs are outlined in your
                individual project agreement or invoice.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Pre-built Solutions:</strong> Delivered as described on our
                  product pages.
                </li>
                <li>
                  <strong>Custom Development:</strong> Timelines are estimates and may vary
                  depending on project scope and timely provision of required materials by
                  the client.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
              <p>
                Upon full payment, BoonWare transfers ownership and authority over the
                delivered source code to the client, as specified in our FAQ and project
                agreement.
              </p>
              <p className="mt-3">
                Until final payment is received, all code, designs, documentation, and
                related assets remain the intellectual property of BoonWare.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Payment Terms</h2>
              <p>
                Payments are due upon receipt of invoice unless otherwise agreed in writing.
                BoonWare reserves the right to suspend services, withhold deliverables, or
                restrict access to source code for overdue accounts.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
              <p>
                In no event shall BoonWare, its directors, employees, partners, agents,
                suppliers, or affiliates be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of
                profits, data, goodwill, business interruption, or other intangible losses
                arising from the use of our services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
              <p>
                If you have any questions regarding these Terms & Conditions, please contact
                us:
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
