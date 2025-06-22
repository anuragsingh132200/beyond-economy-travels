"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"

const faqs = [
  {
    question: "Do I need to already have points to use your service?",
    answer: "Not necessarily. I can also help you buy points at great value to secure reward seats."
  },
  {
    question: "What airlines do you book with?",
    answer: "I work with all major airlines that offer points-based reward seats—like Singapore Airlines, Air India, Air Canada, Qatar, Emirates, Thai Airways, Qantas, Virgin and more."
  },
  {
    question: "Can you book flights for families?",
    answer: "Yes, up to 4 passengers per booking. Kids under 12 are charged at 50% of the adult booking fee."
  },
  {
    question: "What if I don't proceed after you find a flight?",
    answer: "There's a $100 non-refundable search fee. If you proceed, it's credited toward your final booking."
  },
  {
    question: "Can you book last-minute travel?",
    answer: "Yes, I offer a rush booking service for travel within 14 days for an additional $100."
  },
  {
    question: "How do I pay for your services?",
    answer: "Once the reward flight is found, I'll send you payment details to finalize your booking."
  },
  {
    question: "Do you guarantee reward seat availability?",
    answer: "No guarantees—but I use smart strategies to find seats that others miss."
  },
  {
    question: "Where are you based?",
    answer: "I'm based in Australia but can help clients anywhere."
  }
]

export default function FAQPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our points booking service"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 bg-primary/5 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                We're here to help! Contact us for any other questions you might have.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
