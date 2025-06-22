"use client"

import PageHeader from "@/components/page-header"

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Terms of Service"
        description="Last updated: June 22, 2024"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <h3>Welcome to Beyond Economy Travels!</h3>
            <p>By using our website and services, you agree to the following terms:</p>

            <h4>1. Use of Services</h4>
            <p>You agree to use our services lawfully and not to interfere with the website's operation or other users' enjoyment.</p>

            <h4>2. Services Provided</h4>
            <p>We provide travel consulting services including planning, advice, and booking facilitation. We act as an intermediary between you and travel providers.</p>

            <h4>3. Booking and Payments</h4>
            <p>Travel service availability is subject to providers' terms and conditions.</p>
            <p>Payments are processed securely by third parties; their terms apply.</p>
            <p>You agree to pay all fees for services you order.</p>

            <h4>4. Accuracy of Information</h4>
            <p>We strive for accuracy but do not guarantee all content, pricing, or availability is error-free.</p>

            <h4>5. Intellectual Property</h4>
            <p>All website content is owned or licensed by Beyond Economy Travels. You may not reproduce or use it without permission.</p>

            <h4>6. Privacy</h4>
            <p>Your use of our services is governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.</p>

            <h4>7. Limitation of Liability</h4>
            <p>We are not liable for indirect, incidental, or consequential damages arising from your use of our website or services.</p>

            <h4>8. Indemnity</h4>
            <p>You agree to indemnify Beyond Economy Travels against any claims arising from your breach of these Terms.</p>

            <h4>9. Changes to Terms</h4>
            <p>We may update these Terms; your continued use indicates acceptance of changes.</p>

            <h4>10. Governing Law</h4>
            <p>These Terms are governed by Australian law.</p>

            <h4>11. Contact Us</h4>
            <p>Questions? Contact us at:</p>
            <ul>
              <li>Email: contact@beyondeconomytravels.com</li>
              <li>Phone: +61 2 8000 0000</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
