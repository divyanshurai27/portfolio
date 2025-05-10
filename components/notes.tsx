"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, BookOpen, FileText } from "lucide-react"

// Sample notes data
const notesPreviews = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    image: "/placeholder.svg?height=400&width=300&text=React+Hooks",
    description: "Comprehensive notes on React Hooks with practical examples and use cases.",
  },
  {
    id: 2,
    title: "System Architecture Patterns",
    image: "/placeholder.svg?height=400&width=300&text=Architecture+Patterns",
    description: "Visual diagrams and explanations of common system architecture patterns.",
  },
  {
    id: 3,
    title: "Algorithm Visualizations",
    image: "/placeholder.svg?height=400&width=300&text=Algorithms",
    description: "Step-by-step visualizations of complex algorithms with time/space complexity analysis.",
  },
]

export default function Notes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="notes" ref={ref} className="relative py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />

        {/* Notebook lines background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_39px,#6b7280_40px)] bg-[size:100%_40px]"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              KNOWLEDGE SHARING
            </span>
          </div>
          <h2 className="mb-4 font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Handwritten Notes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I create detailed handwritten notes to visualize complex concepts and share knowledge. These notes combine
            visual diagrams, code snippets, and explanations to make learning more intuitive.
          </p>
        </div>

        {/* Notes preview section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-8 backdrop-blur-sm"
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200&text=texture')] opacity-5"></div>

          {/* Decorative elements */}
          <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border border-primary/20"></div>
          <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-secondary/20"></div>

          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-center">
              <BookOpen className="mr-2 h-6 w-6 text-primary" />
              <h3 className="font-space text-xl font-medium">Why I Create These Notes</h3>
            </div>

            <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
              I've always found that visualizing concepts helps me understand and remember them better. These
              handwritten notes are my way of breaking down complex topics into digestible, visual explanations. They
              cover everything from programming concepts to system design patterns, algorithms, and more. I'm sharing
              them in hopes they might help others on their learning journey.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {notesPreviews.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-background/80 transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_0_30px_4px_rgba(var(--primary-rgb),0.1)]"
                >
                  {/* Note preview image */}
                  <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                    <Image
                      src={note.image || "/placeholder.svg"}
                      alt={note.title}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Notebook binding effect */}
                    <div className="absolute left-0 top-0 h-full w-[10px] bg-gradient-to-r from-primary/30 to-transparent"></div>

                    {/* Paper holes */}
                    <div className="absolute left-[5px] top-[15%] h-[10px] w-[10px] translate-x-[-50%] rounded-full bg-background/80"></div>
                    <div className="absolute left-[5px] top-[50%] h-[10px] w-[10px] translate-x-[-50%] rounded-full bg-background/80"></div>
                    <div className="absolute left-[5px] top-[85%] h-[10px] w-[10px] translate-x-[-50%] rounded-full bg-background/80"></div>
                  </div>

                  <div className="p-4">
                    <h4 className="mb-2 font-medium">{note.title}</h4>
                    <p className="text-sm text-muted-foreground">{note.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="https://notes.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-base font-medium backdrop-blur-3xl">
              <FileText className="mr-2 h-5 w-5" />
              Explore All Handwritten Notes
              <ExternalLink className="ml-2 h-4 w-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
