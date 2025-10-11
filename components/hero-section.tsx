"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/UdayKirangolla1", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/uday-kiran-554a9a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
    { icon: Mail, href: "mailto:udaykiran.golla28@gmail.com@gmail.com", label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Golla Uday Kiran</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl"
          >
            Full-Stack Engineer skilled in building end-to-end web applications using React, Node.js, and modern APIs. Experienced with both frontend UI development and backend architecture, including REST/GraphQL, SQL/NoSQL databases, and cloud deployment.
            Passionate about clean code, performance, and solving real-world problems.


          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          ><a href="https://drive.google.com/file/d/1ecXHPZzwkdIeqfIuwKk10HhgQPKNMnD7/view?usp=drivesdk" download>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
              >
                <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-800 shadow-2xl">
              <Image
                src="/uday.jpg?height=320&width=320"
                alt="Golla Uday Kiran"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-300 dark:border-purple-700"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-600"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
