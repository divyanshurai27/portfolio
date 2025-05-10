"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Designing for the Future: Trends to Watch in 2023",
    excerpt:
      "Explore the emerging design trends that will shape the digital landscape in the coming year, from glassmorphism to neumorphism and beyond.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    category: "Design",
    tags: ["UI/UX", "Trends", "Design Systems"],
    url: "#",
  },
  {
    id: 2,
    title: "The Evolution of JavaScript Frameworks",
    excerpt:
      "A deep dive into how JavaScript frameworks have evolved over the years and what the future holds for web development.",
    date: "April 22, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=600",
    category: "Development",
    tags: ["JavaScript", "Frameworks", "Web Development"],
    url: "#",
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Learn practical techniques to improve the performance of your React applications, from code splitting to memoization.",
    date: "March 10, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=600",
    category: "Performance",
    tags: ["React", "Optimization", "Web Performance"],
    url: "#",
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="blog" ref={ref} className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              INSIGHTS & THOUGHTS
            </span>
          </div>
          <h2 className="mb-4 font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">From The Blog</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Articles and insights about design, development, and the latest trends in the tech industry.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} isInView={isInView} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post, index, isInView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 lg:block"></div>

      <div className="relative z-10 overflow-hidden rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/20 group-hover:shadow-[0_0_30px_4px_rgba(var(--primary-rgb),0.1)]">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="relative lg:w-1/3">
            <div className="aspect-[16/9] lg:aspect-auto lg:h-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Category badge */}
            <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {post.category}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-50 lg:bg-gradient-to-r lg:from-transparent lg:to-background/20"></div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-between p-6 lg:w-2/3">
            <div>
              <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="mb-3 font-space text-xl font-bold transition-colors group-hover:text-primary md:text-2xl">
                {post.title}
              </h3>

              <p className="mb-6 text-muted-foreground">{post.excerpt}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1 rounded-full bg-muted/50 px-3 py-1 text-xs">
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href={post.url} className="group/button inline-flex items-center gap-2 text-sm font-medium text-primary">
              Read Article
              <span className="transition-transform duration-300 group-hover/button:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-2 -left-2 h-12 w-12 rounded-full border border-primary/10"></div>
        <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full border border-secondary/10"></div>
      </div>
    </motion.article>
  )
}
