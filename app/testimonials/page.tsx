"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star, Quote } from "lucide-react"
import PageHeader from "@/components/page-header"
import AnimatedElement from "@/components/animated-element"

export default function TestimonialsPage() {
  const router = useRouter()
  
  const testimonials = [
    {
      id: 1,
      name: "Sunny",
      location: "Melbourne",
      image: "/placeholder.svg?height=120&width=120",
      content:
        "I've always flown economy, but Maddy helped me book a business class ticket with Singapore Airlines, saving me over $3500! It was my dream to fly business, and now it's a reality. Highly recommend!",
      rating: 5,
      destination: "Melbourne to Guangzhou",
      savings: "$3,500+",
    },
    {
      id: 2,
      name: "Ravi",
      role: "IT Professional",
      image: "/placeholder.svg?height=120&width=120",
      content:
        "I wanted to fly business class but couldn't afford it as the cash price was over $4k one way. Maddy saved me $2600 and I flew on Thai Airways Business Class and made my dream trip possible. I'll never fly economy again!",
      rating: 5,
      destination: "Delhi to Melbourne",
      savings: "$2,600",
    },
    {
      id: 3,
      name: "Family of 3",
      location: "Melbourne",
      image: "/placeholder.svg?height=120&width=120",
      content:
        "Maddy booked us 3 JAL business class tickets to Japan, saving us $10,000. Initially we thought that it wasn't possible but when we saw the ticket, we were shocked. Amazing service, and a trip we'll never forget!",
      rating: 5,
      destination: "Melbourne to Japan",
      savings: "$10,000",
    },
    {
      id: 4,
      name: "Mark",
      role: "Home Builder",
      image: "/placeholder.svg?height=120&width=120",
      content:
        "Maddy booked 4 Qatar Airways business class tickets for me and my family, saving us $5800 per ticket. I had no points and somehow Maddy made it happen. Me and Family were so comfortable on our 15hr journey and we will never forget the lounge in Qatar. Thank you Maddy for guiding me. Outstanding service!",
      rating: 5,
      destination: "Melbourne to Mumbai",
      savings: "$23,200",
    },
  ]

  return (
    <main className="flex-1">
      <PageHeader
        title="Client Testimonials"
        description="Hear from travelers who have transformed their journey with our expertise"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <AnimatedElement animation="stagger" className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <AnimatedElement
                key={testimonial.id}
                animation="fadeIn"
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location || testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10" />
                  <p className="mb-4 relative z-10 pl-4">{testimonial.content}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Route: </span>
                      <span className="font-medium">{testimonial.destination}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Savings: </span>
                      <span className="font-medium text-green-600">{testimonial.savings}</span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
            alt="World Map"
            fill
            className="object-cover opacity-10"
            unoptimized
          />
        </div>
        <div className="container-wide relative z-10">
          <AnimatedElement animation="fadeIn" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success by the Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our results speak for themselves. Here's what we've achieved for our clients.
            </p>
          </AnimatedElement>
          <AnimatedElement animation="stagger" className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedElement animation="fadeIn" className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$500K+</div>
              <p className="text-muted-foreground">Client savings</p>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
              <p className="text-muted-foreground">Premium flights booked</p>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client satisfaction</p>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">26</div>
              <p className="text-muted-foreground">Countries served</p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <AnimatedElement animation="fadeIn" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into some of our most impressive client success stories.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="stagger" className="space-y-12">
            <AnimatedElement animation="fadeIn">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src="/images/WhatsApp Image 2025-05-27 at 20.21.06_0ace5a33.jpg"
                      alt="Business Class Suite"
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">The Family Vacation Upgrade</h3>
                    <p className="text-muted-foreground">
                      A family of four was planning their dream vacation to Japan but couldn't afford business class
                      tickets at $6,000 each. Using a combination of credit card points and strategic transfers, we
                      secured four business class seats for just 80,000 points each plus minimal taxes and fees.
                    </p>
                    <div className="pt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Cash Price</p>
                        <p className="text-xl font-bold text-red-500 line-through">$24,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Points Price</p>
                        <p className="text-xl font-bold text-green-600">$2,800</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-muted-foreground">Total Savings</p>
                      <p className="text-2xl font-bold text-primary">$21,200</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="order-2 md:order-1">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">The Honeymoon Surprise</h3>
                      <p className="text-muted-foreground">
                        A newlywed couple wanted to celebrate their honeymoon in style but had a limited budget. We
                        helped them leverage sign-up bonuses from two premium credit cards to book first-class tickets
                        to the Maldives, complete with a stopover in Dubai.
                      </p>
                      <div className="pt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Cash Price</p>
                          <p className="text-xl font-bold text-red-500 line-through">$18,500</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Points Price</p>
                          <p className="text-xl font-bold text-green-600">$1,200</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-muted-foreground">Total Savings</p>
                        <p className="text-2xl font-bold text-primary">$17,300</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="/images/WhatsApp Image 2025-05-27 at 20.21.05_41eed4f8.jpg"
                      alt="Business Class Dining"
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <AnimatedElement animation="fadeIn">
            <h2 className="text-3xl font-bold mb-6">Ready to Write Your Own Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our satisfied clients and experience premium travel without the premium price tag.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors" onClick={() => router.push('/consultation')}>
                Book a Consultation
              </button>
              <button className="bg-transparent border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                View Our Services
              </button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </main>
  )
}
