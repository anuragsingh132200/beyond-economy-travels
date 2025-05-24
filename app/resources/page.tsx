"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import AnimatedElement from "@/components/animated-element"

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    "All",
    "Points Strategy",
    "Airlines",
    "Credit Cards",
    "Case Study",
    "Luxury Travel",
    "Destinations",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Ways to Maximise Your Credit Card Points for Business Class Travel",
      excerpt:
        "Learn the insider strategies for turning everyday spending into premium cabin experiences with these expert tips.",
      image:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      author: "Jessica Chen",
      readTime: "8 min read",
      category: "Points Strategy",
      slug: "Maximise-credit-card-points",
      featured: true,
    },
    {
      id: 2,
      title: "The Ultimate Guide to Airline Alliances and Transfer Partners",
      excerpt:
        "Understanding airline partnerships is key to maximizing your points value. This comprehensive guide breaks down everything you need to know.",
      image:
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "April 22, 2023",
      author: "Michael Torres",
      readTime: "12 min read",
      category: "Airlines",
      slug: "airline-alliances-guide",
    },
    {
      id: 3,
      title: "How We Booked a $15,000 First Class Flight for Just 120,000 Points",
      excerpt:
        "A real-world case study of how we helped a client experience ultimate luxury while paying economy prices through strategic points usage.",
      image:
        "https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2023",
      author: "Sarah Johnson",
      readTime: "10 min read",
      category: "Case Study",
      slug: "first-class-case-study",
    },
    {
      id: 4,
      title: "The Best Credit Cards for points in 2023",
      excerpt:
        "Our annual roundup of the top credit cards for travelers looking to Maximise their points earning potential.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "February 28, 2023",
      author: "David Williams",
      readTime: "15 min read",
      category: "Credit Cards",
      slug: "best-travel-credit-cards-2023",
    },
    {
      id: 5,
      title: "Points Pooling: How to Combine Points with Family and Friends",
      excerpt:
        "Discover the strategies for pooling points with family members to reach award thresholds faster and book premium travel together.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "January 15, 2023",
      author: "Emma Rodriguez",
      readTime: "7 min read",
      category: "Points Strategy",
      slug: "points-pooling-guide",
    },
    {
      id: 6,
      title: "Sweet Spots: The Best Value Redemptions for Major Airline Programs",
      excerpt:
        "Not all redemptions are created equal. Learn about the hidden sweet spots that offer exceptional value for your hard-earned points.",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "December 5, 2022",
      author: "Robert Garcia",
      readTime: "11 min read",
      category: "Airlines",
      slug: "sweet-spot-redemptions",
    },
    {
      id: 7,
      title: "Singapore Airlines Business Class Review: Is It Worth the Hype?",
      excerpt:
        "We flew Singapore Airlines' renowned business class to see if it lives up to its reputation. Here's our detailed review and whether it's worth your points.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "November 18, 2022",
      author: "Maddy Chen",
      readTime: "14 min read",
      category: "Airlines",
      slug: "singapore-airlines-business-class-review",
    },
    
    {
      id: 9,
      title: "Luxury for Less: Top 5 Destinations for Premium Travel Value",
      excerpt:
        "Some destinations offer better value for luxury travel than others. Discover our top picks for places where your points go further for premium experiences.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "September 22, 2022",
      author: "David Williams",
      readTime: "9 min read",
      category: "Destinations",
      slug: "luxury-travel-value-destinations",
    },
  ]

  // Filter posts by category
  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <main className="flex-1">
      <PageHeader
        title="Travel Resources & Insights"
        description="Expert guides, tips, and strategies to Maximise your points"
      />

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-navy-50">
          <div className="container-wide">
            <AnimatedElement animation="fadeIn">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-navy-600/10 px-4 py-1.5 text-sm font-medium text-navy-600">
                    Featured Article
                  </div>
                  <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                  <p className="text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild variant="navy" className="mt-4">
                    <Link href={`/resources/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <p className="text-muted-foreground">
                Discover our latest insights on points travel, premium cabins, and maximizing your rewards.
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full md:w-64 border rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                  category === activeCategory
                    ? "bg-navy-600 text-white"
                    : "bg-navy-50 text-foreground hover:bg-navy-100 transition-colors"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatedElement animation="stagger" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <AnimatedElement key={post.id} animation="fadeIn" className="group">
                <Link href={`/resources/${post.slug}`} className="block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4 bg-navy-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 gap-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-navy-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="text-muted-foreground">By </span>
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <span className="text-navy-600 font-medium flex items-center text-sm">
                          Read more <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </AnimatedElement>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                We couldn't find any articles in this category. Please try another category.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* <section className="py-12 md:py-16 lg:py-20 bg-navy-50">
        <div className="container-wide">
          <AnimatedElement animation="fadeIn" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Free Points Travel Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our comprehensive guides to help you navigate the world of points travel like a pro.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="stagger" className="grid md:grid-cols-3 gap-8">
            <AnimatedElement animation="fadeIn">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-navy-600/10 text-navy-600 font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Beginner
                </div>
                <h3 className="text-xl font-bold mb-3">Points Travel 101</h3>
                <p className="text-muted-foreground mb-4">
                  The perfect starting point for anyone new to the world of points and miles. Learn the basics and start
                  your journey to premium travel.
                </p>
                <Button className="w-full" variant="navy">
                  Download Guide
                </Button>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-navy-600/10 text-navy-600 font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Intermediate
                </div>
                <h3 className="text-xl font-bold mb-3">Business Class Hacking</h3>
                <p className="text-muted-foreground mb-4">
                  Take your points game to the next level with advanced strategies for booking business class flights at
                  economy prices.
                </p>
                <Button className="w-full" variant="navy">
                  Download Guide
                </Button>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeIn">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-navy-600/10 text-navy-600 font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Advanced
                </div>
                <h3 className="text-xl font-bold mb-3">First Class Mastery</h3>
                <p className="text-muted-foreground mb-4">
                  For experienced points travelers ready to unlock the ultimate luxury experience with first class
                  redemptions and upgrades.
                </p>
                <Button className="w-full" variant="navy">
                  Download Guide
                </Button>
              </div>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section> */}

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedElement animation="fadeIn">
                <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-muted-foreground">
                  Stay up-to-date with the latest points strategies, travel deals, and exclusive content delivered
                  straight to your inbox.
                </p>
                <form className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input id="consent" type="checkbox" className="mt-1" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive email communications from Beyond Economy Travels. You can unsubscribe at any
                      time.
                    </label>
                  </div>
                  <Button variant="gold" className="btn-shine">
                    Subscribe Now
                  </Button>
                </form>
              </AnimatedElement>
            </div>
            <AnimatedElement animation="fadeIn" className="relative">
              <Image
                src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Business Class Experience"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
                unoptimized
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold">Weekly Points Alert</p>
                <p className="text-sm text-muted-foreground">
                  Get notified about limited-time points promotions and award availability
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </main>
  )
}
