import PageShell from "@/components/PageShell";

export default function RefundPolicyPage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="p-4 rounded-lg border bg-gray-50 dark:bg-slate-800">
              <p>
                <strong>Boonware Services</strong>
              </p>
              <p>
                <strong>Effective Date:</strong> 01 January 2026
              </p>
            </div>
            <section>
              <p>
                At Boonware Services, we are committed to delivering high-quality website
                and application development solutions, including pre-built SaaS platforms
                and custom development services.
              </p>
              <p className="mt-3">
                This Refund Policy outlines the terms regarding payments and refunds for
                all services offered by Boonware Services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. No Refund Policy</h2>
              <p>All payments made to Boonware Services are strictly non-refundable.</p>
              <p className="mt-3">
                Once payment has been received and the project has been initiated, no
                refund requests will be accepted under any circumstances, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Change of mind after payment.</li>
                <li>Change in business plans.</li>
                <li>Delays caused by the client.</li>
                <li>
                  Failure to provide required information, approvals, or materials.
                </li>
                <li>Decision not to continue the project.</li>
                <li>Dissatisfaction after development has begun.</li>
              </ul>
              <p className="mt-3">
                By making payment to Futuredesks Services, the client acknowledges and
                agrees to this No Refund Policy.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Service Commitment</h2>
              <p>
                Boonware Services guarantees that all services and deliverables promised at
                the time of agreement or quotation will be provided to the client.
              </p>
              <p className="mt-3 font-medium">
                Deliverables may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Mobile applications (Android / iOS).</li>
                <li>Website or web platform.</li>
                <li>Admin panel or dashboard.</li>
                <li>Source code (if included in the agreement).</li>
                <li>Technical deployment support.</li>
                <li>Bug fixes during the agreed maintenance period.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Project Execution</h2>
              <p>
                Once payment is received, the project will be scheduled and development
                will begin.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Clients must provide all required content, details, branding materials,
                  and approvals on time.
                </li>
                <li>
                  Any delay caused by the client will not make the project eligible for a
                  refund.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
              <p>
                Boonware Services may integrate third-party tools, APIs, hosting services,
                payment gateways, or external platforms as part of a project.
              </p>
              <p className="mt-3 font-medium">Please note:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Third-party service charges are not controlled by Boonware Services.
                </li>
                <li>
                  Any payment made for third-party services is non-refundable and subject
                  to the policies of the respective service provider.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Project Cancellation</h2>
              <p>If the client decides to cancel the project after payment:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>The project will be considered voluntarily terminated by the client.</li>
                <li>No refund will be issued.</li>
                <li>
                  Any completed work or partially developed modules may be shared at the
                  discretion of Boonware Services.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Agreement Acceptance</h2>
              <p>
                By making payment to Boonware Services or starting a project with us, the
                client confirms that they have:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Read this Refund Policy.</li>
                <li>Understood the terms.</li>
                <li>Agreed to the No Refund condition.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Contact Information</h2>
              <p>For any questions regarding this Refund Policy, please contact:</p>
              <div className="mt-3 p-4 rounded-lg border bg-gray-50 dark:bg-slate-800">
                <p>
                  <strong>Boonware Services</strong>
                </p>
                <p>
                  <strong>Email:</strong> info@boonware.in
                </p>
                <p>
                  <strong>Phone:</strong> +91 9076269629
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
