"use client"

import PageHeader from "@/components/page-header"

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Privacy Policy"
        description="Last updated: June 22, 2024"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>Beyond Economy Travels is committed to protecting your privacy and handling your personal information with care and respect.</p>

            <h4>What personal information do we collect?</h4>
            <p>We collect personal details needed to provide our travel consulting services, including your name, contact info, travel preferences, and payment details.</p>

            <h4>How do we use your personal information?</h4>
            <p>We use your information to:</p>
            <ul>
              <li>Arrange and manage your travel bookings</li>
              <li>Communicate important updates and information</li>
              <li>Personalize your experience and improve our services</li>
              <li>Fulfill legal and regulatory requirements</li>
            </ul>

            <h4>Who do we share your information with?</h4>
            <p>We may share your information with:</p>
            <ul>
              <li>Travel providers like airlines, hotels, and tour operators</li>
              <li>Payment processors to handle secure payments</li>
              <li>Authorities if required by law</li>
            </ul>
            <p>We do not sell or trade your personal information for marketing purposes.</p>

            <h4>How do we protect your information?</h4>
            <p>We take reasonable steps to keep your information secure from unauthorized access, loss, or misuse.</p>

            <h4>Your rights</h4>
            <p>You can request access to or correction of your personal information at any time. For questions or to exercise your privacy rights, please contact us:</p>
            <ul>
              <li>Email: info@beyondeconomy.com</li>
              <li>Phone: +61481821245</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
