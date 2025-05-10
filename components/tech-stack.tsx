"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

// Technology data with icons only
const technologies = [
  // Frontend
  { id: "html", name: "HTML", color: "#E34F26" },
  { id: "css", name: "CSS", color: "#1572B6" },
  { id: "javascript", name: "JavaScript", color: "#F7DF1E" },
  { id: "typescript", name: "TypeScript", color: "#3178C6" },
  { id: "react", name: "React", color: "#61DAFB" },
  { id: "nextjs", name: "Next.js", color: "#000000" },
  { id: "tailwind", name: "Tailwind CSS", color: "#06B6D4" },
  { id: "vue", name: "Vue.js", color: "#4FC08D" },
  
  // Backend
  { id: "nodejs", name: "Node.js", color: "#339933" },
  { id: "express", name: "Express", color: "#000000" },
  { id: "python", name: "Python", color: "#3776AB" },
  { id: "django", name: "Django", color: "#092E20" },
  { id: "mongodb", name: "MongoDB", color: "#47A248" },
  { id: "postgresql", name: "PostgreSQL", color: "#4169E1" },
  { id: "graphql", name: "GraphQL", color: "#E10098" },
  
  // Tools & Others
  { id: "git", name: "Git", color: "#F05032" },
  { id: "docker", name: "Docker", color: "#2496ED" },
  { id: "figma", name: "Figma", color: "#F24E1E" },
  { id: "aws", name: "AWS", color: "#FF9900" },
  { id: "firebase", name: "Firebase", color: "#FFCA28" },
]

export default function TechStackCarousel() {
  const containerRef = useRef(null)
  const [duplicatedTech, setDuplicatedTech] = useState([])
  const scrollSpeed = 35 // Lower number = faster scroll

  // Duplicate the technologies array to create an infinite scroll effect
  useEffect(() => {
    // Duplicate the array to ensure smooth infinite scroll
    setDuplicatedTech([...technologies, ...technologies])
  }, [])

  // Auto-scrolling animation
  useEffect(() => {
    const container = containerRef.current
    if (!container || duplicatedTech.length === 0) return

    let animationFrameId
    let startTime
    let currentPosition = 0

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      
      // Calculate new position
      currentPosition = (elapsed / scrollSpeed) % (container.scrollWidth / 2)
      
      // Apply the scroll position
      container.scrollLeft = currentPosition
      
      // If we've scrolled through the first set of items, jump back to start
      if (currentPosition >= container.scrollWidth / 2) {
        startTime = timestamp
        currentPosition = 0
        container.scrollLeft = 0
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate)
    
    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId)
    }
    
    const handleMouseLeave = () => {
      startTime = null
      animationFrameId = requestAnimationFrame(animate)
    }
    
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [duplicatedTech])

  return (
    <section id="tech" className="relative py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[30%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TECH STACK
            </span>
          </div>
          <h2 className="mb-4 font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">My Tools & Technologies</h2>
        </div>

        {/* Carousel container */}
        <div 
          className="relative mx-auto w-full overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-8 backdrop-blur-sm"
        >
          {/* Main scrolling container */}
          <div 
            ref={containerRef}
            className="flex w-full gap-12 overflow-x-hidden py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedTech.map((tech, index) => (
              <div 
                key={`${tech.id}-${index}`} 
                className="flex-shrink-0"
              >
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  {/* Icon container */}
                  <div 
                    className="flex h-20 w-20 items-center justify-center rounded-xl bg-background p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl dark:bg-foreground/5 md:h-24 md:w-24"
                    style={{ 
                      boxShadow: `0 8px 30px rgba(${hexToRgb(tech.color)}, 0.1)` 
                    }}
                  >
                    {/* Placeholder for SVG icon - using text for demo */}
                    <div 
                      className="flex aspect-square w-full items-center justify-center rounded-md transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${tech.color}33, ${tech.color}11)` 
                      }}
                    >
                      <span 
                        className="select-none text-2xl font-bold"
                        style={{ color: tech.color }}
                      >
                        {tech.name.charAt(0)}
                        {tech.name.includes('.') ? tech.name.charAt(tech.name.indexOf('.') + 1) : tech.name.charAt(1)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-2 rounded-md bg-foreground px-3 py-1 text-xs text-background opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-background dark:text-foreground">
                    {tech.name}
                  </div>
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edge fading */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background/80 to-transparent backdrop-blur-sm"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background/80 to-transparent backdrop-blur-sm"></div>
        </div>
      </div>
    </section>
  )
}

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
  // Default color if conversion fails
  if (!hex || typeof hex !== 'string') return "0, 0, 0";
  
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert 3-digit hex to 6-digits
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}