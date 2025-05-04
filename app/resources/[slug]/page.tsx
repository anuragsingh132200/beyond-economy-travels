"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedElement from "@/components/animated-element"

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Maximize Your Credit Card Points for Business Class Travel",
    excerpt:
      "Learn the insider strategies for turning everyday spending into premium cabin experiences with these expert tips.",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "May 15, 2023",
    author: "Jessica Chen",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    authorBio:
      "Jessica is a points expert with over 10 years of experience in the travel industry. She has helped hundreds of clients book premium travel experiences using points.",
    readTime: "8 min read",
    category: "Points Strategy",
    slug: "maximize-credit-card-points",
    content: `
      <h2>Introduction</h2>
      <p>Credit card points are one of the most powerful tools for accessing premium travel experiences without paying premium prices. With the right strategy, you can turn your everyday spending into business class flights that would otherwise cost thousands of dollars.</p>
      
      <p>In this comprehensive guide, we'll explore ten proven strategies to maximize your credit card points specifically for business class travel. These techniques have helped our clients save millions of dollars collectively on premium cabin bookings.</p>
      
      <h2>1. Choose the Right Credit Cards</h2>
      <p>Not all credit cards are created equal when it comes to earning travel rewards. Cards that earn transferable points (like Chase Ultimate Rewards, American Express Membership Rewards, or Capital One Venture miles) offer the most flexibility and typically provide the best value for business class redemptions.</p>
      
      <p>Look for cards that offer:</p>
      <ul>
        <li>Generous sign-up bonuses (50,000+ points)</li>
        <li>Category spending bonuses that align with your spending habits</li>
        <li>Transfer partnerships with airlines that fly your preferred routes</li>
        <li>Annual benefits that offset the annual fee</li>
      </ul>
      
      <h2>2. Strategically Time Your Applications</h2>
      <p>Credit card sign-up bonuses are the fastest way to accumulate large quantities of points. However, timing is crucial. Wait for elevated bonus offers before applying, as these can sometimes be 20-30% higher than the standard offer.</p>
      
      <p>Additionally, be mindful of application rules like Chase's 5/24 rule or American Express's once-per-lifetime bonus policy. Planning your applications strategically can help you maximize the total bonuses you receive.</p>
      
      <h2>3. Leverage Category Bonuses</h2>
      <p>Most rewards credit cards offer bonus points for spending in specific categories. By aligning your spending with these categories, you can significantly increase your points earning rate.</p>
      
      <p>For example:</p>
      <ul>
        <li>Use a card that offers 3-5x points on dining when eating out</li>
        <li>Use a card that offers 3-5x points on travel for flights, hotels, and transportation</li>
        <li>Use a card that offers 2-3x points on groceries for your weekly shopping</li>
      </ul>
      
      <h2>4. Utilize Shopping Portals</h2>
      <p>Credit card issuers and airlines often have shopping portals that allow you to earn additional points for online purchases. By starting your shopping through these portals, you can earn 1-15+ extra points per dollar spent, on top of what your credit card already earns.</p>
      
      <p>This strategy works particularly well for large purchases or during promotional periods when bonus rates are increased.</p>
      
      <h2>5. Pay Attention to Transfer Bonuses</h2>
      <p>Periodically, credit card rewards programs offer transfer bonuses to specific airline partners. These bonuses typically range from 20-40% and can significantly increase the value of your points.</p>
      
      <p>For example, if you transfer 100,000 points during a 30% bonus promotion, you'll receive 130,000 airline miles instead of the standard 100,000. This can be the difference between economy and business class on long-haul flights.</p>
      
      <h2>6. Book During Off-Peak Seasons</h2>
      <p>Many airline award charts offer discounted rates for travel during off-peak seasons. By being flexible with your travel dates, you can save 20-30% on the points required for business class redemptions.</p>
      
      <p>Additionally, award availability tends to be better during these periods, increasing your chances of finding business class seats on your preferred routes.</p>
      
      <h2>7. Look for Sweet Spot Redemptions</h2>
      <p>Each airline's award chart has "sweet spots" where the points required for certain routes offer exceptional value. Identifying and targeting these sweet spots can help you maximize the value of your points.</p>
      
      <p>For example, using ANA miles (transferable from American Express) to book round-trip business class to Europe or Japan often requires fewer points than other programs for the same routes.</p>
      
      <h2>8. Consider Positioning Flights</h2>
      <p>Sometimes, starting your journey from a different city can result in better award availability or lower point requirements. By booking a separate positioning flight to that city, you can access these better redemption opportunities.</p>
      
      <p>This strategy works particularly well for international business class redemptions, where the savings can be substantial.</p>
      
      <h2>9. Use Points for One-Way Business, Cash for Return</h2>
      <p>If you don't have enough points for round-trip business class, consider using points for one direction (typically the longer overnight flight where a lie-flat seat is most valuable) and paying cash for the return in economy.</p>
      
      <p>This hybrid approach allows you to experience business class while stretching your points further.</p>
      
      <h2>10. Book Through Airline Partners</h2>
      <p>Often, booking flights through an airline's partners can require fewer points than booking directly. For example, using Virgin Atlantic miles to book Delta business class or using Avianca LifeMiles to book Lufthansa business class can result in significant savings.</p>
      
      <p>Understanding these partner relationships and sweet spots is key to maximizing the value of your points.</p>
      
      <h2>Conclusion</h2>
      <p>Maximizing credit card points for business class travel requires strategic planning, knowledge of loyalty programs, and careful execution. By implementing these ten strategies, you can significantly increase your points earning potential and unlock premium travel experiences that might otherwise be financially out of reach.</p>
      
      <p>Remember that the world of points and miles is constantly evolving, so staying informed about program changes and new opportunities is essential. Consider working with a points travel expert who can help you navigate the complexities and develop a personalized strategy based on your travel goals and spending habits.</p>
      
      <p>With patience and the right approach, you'll soon be enjoying the comfort and luxury of business class without the premium price tag.</p>
    `,
    relatedPosts: [2, 4, 5],
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
    id: 4,
    title: "The Best Credit Cards for Travel Points in 2023",
    excerpt:
      "Our annual roundup of the top credit cards for travelers looking to maximize their points earning potential.",
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
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug)

  // If no post is found, show a message
  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild variant="navy">
          <Link href="/resources">Back to Resources</Link>
        </Button>
      </div>
    )
  }

  // Find related posts
  const relatedPosts = post.relatedPosts ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id)).slice(0, 3) : []

  return (
    <main className="flex-1">
      <div className="bg-navy-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/resources" className="inline-flex items-center text-gray-300 hover:text-gold-300 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
              <div className="relative h-[400px]">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="p-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={
                      post.authorImage ||
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                    }
                    alt={post.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">About {post.author}</h3>
                  <p className="text-sm text-muted-foreground">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Related Articles</h3>
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/resources/${relatedPost.slug}`} className="block group">
                    <div className="flex gap-4">
                      <div className="relative h-16 w-24 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-navy-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}

                {relatedPosts.length === 0 && (
                  <p className="text-muted-foreground text-sm">No related articles found.</p>
                )}
              </div>
            </div>

            <div className="bg-navy-50 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest points travel tips and strategies delivered straight to your inbox.
              </p>
              <form className="space-y-4">
                <input type="email" placeholder="Your email address" className="w-full px-3 py-2 border rounded-md" />
                <Button variant="navy" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-navy-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">More Articles You Might Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((post) => (
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
                        <h3 className="text-lg font-bold mb-2 group-hover:text-navy-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <div className="text-xs text-muted-foreground">{post.date}</div>
                          <span className="text-navy-600 font-medium flex items-center text-sm">
                            Read more <ArrowRight className="ml-1 h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline-navy">
              <Link href="/resources">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
