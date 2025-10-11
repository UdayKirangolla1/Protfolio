"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Portfolio Website with Dark Mode & Animations",
    description:
      "A personal portfolio website to showcase skills and projects, built with modern UI design, dark mode, and smooth animations.",
    image: "/port.png?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],

    githubUrl: "https://github.com/Fawaz-devs/Portfolio.git",
    featured: true,
  },
  {
    title: "RESTful API for E-Commerce",
    description:
      "A scalable and secure RESTful API for an e-commerce platform featuring user authentication, product management, cart, and order processing.",
    image: "/placeholder.jpg?height=300&width=500",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Docker", "Render"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/Fawaz-devs/RESTful-API-for-E-Commerce.git",
    featured: true,
  },
  {
    title: "AI-Powered Developer Assistant",
    description:
      "A full-stack application that helps developers generate, explain, and refactor code using OpenAI's GPT API, with a responsive and interactive frontend.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "FastAPI", "TypeScript", "OpenAI API", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/Fawaz-devs/FullStack-AI-Application.git",
    featured: false,
  },
  {
    title: "LANG-LENS",
    description:
      " This project is a simple Optical Character Recognition (OCR) tool that extracts text from images and allows the user to search for keywords within the extracted text. The application supports both English and Hindi text recognition using the easyocr library",
    image: "/Langlens.png?height=300&width=500",
    technologies: ["Streamlit", "OCR Model", "PIL", "Numpy", "Regex"],
    liveUrl: "https://johndoe-portfolio.vercel.app",
    githubUrl: "https://github.com/Fawaz-devs/hindi-english-ocr.git",
    featured: false,
  },
  {
    title: "CABA: Cognitive Attendance And Behaviour Analysis",
    description:
      "Developed a Analysis system by Integrating face recgonition and emotion analysis that tracks the engagement of people during the event and also takes their behaviour inputs to understand the situation , helping in preventing threats, teacher student engagement , etc.. ",
    image: "/CABA.png?height=300&width=500",
    technologies: ["Flask", "Flask-login", "OpenCV", "Face Recognition", "DeepFace", "Pickle", "Numpy", "OS"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/Fawaz-devs/COGNITIVE-ATTENDANCE-AND-BEHAVIOUR-ANALYSIS.git",
    featured: false,
  },

]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative web
            solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Featured Projects
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} featured />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8"
          >
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0]
  index: number
  featured?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {/*<Button size="sm" variant="secondary" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>*/}
            <Button size="sm" variant="secondary" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {project.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
