'use client'

import { useState } from 'react'
import { FaWhatsapp, FaTiktok, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  link?: string
  status: 'live' | 'soon'
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "POCKET",
    category: "web apps",
    image: "/assets/pocket.png",
    description: "Business Management Software",
    technologies: ["NextJS"],
    link: "https://pocket.nyatti.com",
    status: "live"
  },
  {
    id: 2,
    title: "QUEST",
    category: "web apps",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Restaurant Food Ordering System",
    technologies: ["NextJS"],
    link: "https://quest.nyatti.com",
    status: "soon"
  },
  {
    id: 3,
    title: "BTOOLS",
    category: "web apps",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Business Tools Suite",
    technologies: ["NextJS"],
    link: "https://btools.nyatti.com",
    status: "soon"
  },
  {
    id: 4,
    title: "ONN",
    category: "web apps",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Sell online for just $1 per month",
    technologies: ["NextJS"],
    link: "https://onn.nyatti.com",
    status: "soon"
  },
  {
    id: 5,
    title: "ROYALTEK",
    category: "ecommerce",
    image: "/assets/royaltek.png",
    description: "Headless WooCommerce",
    technologies: ["WooCommerce", "NextJS", "Mpesa"],
    link: "https://royaltek.nyatti.com",
    status: "live"
  },
  {
    id: 6,
    title: "WINMER",
    category: "websites",
    image: "/assets/winmer.png",
    description: "Accounting Consultants",
    technologies: ["WordPress"],
    link: "https://winmerenterprises.co.ke",
    status: "live"
  },
  {
    id: 7,
    title: "MERCY",
    category: "websites",
    image: "/assets/mercy.png",
    description: "Solo Accountant",
    technologies: ["WordPress"],
    link: "https://mercymwaura.com",
    status: "live"
  },
  {
    id: 8,
    title: "UPENDO",
    category: "websites",
    image: "/assets/upendo.png",
    description: "Children's Home",
    technologies: ["WordPress", "Donations"],
    link: "https://upendofamily.org",
    status: "live"
  },
  {
    id: 9,
    title: "APPLYONLINE",
    category: "websites",
    image: "/assets/applyonline.png",
    description: "Scholarships | Jobs | Fellowships",
    technologies: ["WordPress", "Blog"],
    link: "https://applyonline.co.zw",
    status: "live"
  }
]

const categories = ["all", "web apps", "websites", "ecommerce"]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const sortedPortfolioItems = [...portfolioItems].sort((a, b) => {
    if (a.status === 'live' && b.status === 'soon') return -1
    if (a.status === 'soon' && b.status === 'live') return 1
    return 0
  })
  const [filteredItems, setFilteredItems] = useState(sortedPortfolioItems)

  const handleFilter = (category: string) => {
    setActiveFilter(category)
    if (category === "all") {
      setFilteredItems(sortedPortfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/hero.jpeg)'}}>
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Intro Text */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 leading-tight">
            NYATTI
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8 text-gray-400 tracking-widest">
            BY TAPIWAMLA
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Crafting digital experiences through innovative design and cutting-edge technology. 
            Turning ideas into powerful, user-centered solutions.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 px-4 sm:px-0">
            <a href="https://wa.me/254797951250" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium transition-colors duration-300">
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <a href="mailto:hello@nyatti.com" className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 font-medium transition-colors duration-300">
              <FaEnvelope size={20} />
              Email
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-8 max-w-xs sm:max-w-none mx-auto">
            <a href="https://tiktok.com/@tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
              <FaTiktok className="text-base sm:text-xl" />
            </a>
            <a href="https://instagram.com/tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
              <FaInstagram className="text-base sm:text-xl" />
            </a>
            <a href="https://facebook.com/tapiwamla.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
              <FaFacebook className="text-base sm:text-xl" />
            </a>
            <a href="https://twitter.com/tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
              <FaTwitter className="text-base sm:text-xl" />
            </a>
            <a href="https://youtube.com/@tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300">
              <FaYoutube className="text-base sm:text-xl" />
            </a>
          </div>
        </div>
      </header>

      {/* Portfolio Section */}
      <main>
        <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8">PORTFOLIO</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
              A collection of projects that showcase my expertise in web development, 
              business applications, and e-commerce solutions.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-8 sm:mb-12 flex-wrap gap-2 sm:gap-4 px-4 sm:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  activeFilter === category
                    ? 'bg-white text-black'
                    : 'border border-gray-600 text-gray-300 hover:border-white hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
            {filteredItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer overflow-hidden bg-gray-900 transition-transform duration-500 hover:scale-105 block"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wide ${
                      item.status === 'live' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-200">
                      Preview
                      <FaArrowUpRightFromSquare size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Blog Section Link */}
          <div className="text-center mt-12 sm:mt-20">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Visit Our Blog
              <FaArrowUpRightFromSquare size={16} />
            </Link>
          </div>
        </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="py-12 sm:py-20 px-4 sm:px-6 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/footer.jpg)'}}>
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Closing Text */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
            LET&apos;S CREATE{' '}
            <span className="block text-gray-400">SOMETHING AMAZING</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to bring your vision to life? Let&apos;s collaborate and build 
            exceptional digital experiences that make an impact.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 px-4 sm:px-0">
            <a href="https://wa.me/254797951250" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium transition-colors duration-300">
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <a href="mailto:hello@nyatti.com" className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 font-medium transition-colors duration-300">
              <FaEnvelope size={20} />
              Email
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-8 mb-8 sm:mb-12 max-w-xs sm:max-w-none mx-auto">
            <a href="https://tiktok.com/@tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 text-gray-400 flex items-center justify-center hover:border-white hover:text-white hover:scale-110 transition-all duration-300">
              <FaTiktok className="text-base sm:text-xl" />
            </a>
            <a href="https://instagram.com/tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 text-gray-400 flex items-center justify-center hover:border-white hover:text-white hover:scale-110 transition-all duration-300">
              <FaInstagram className="text-base sm:text-xl" />
            </a>
            <a href="https://facebook.com/tapiwamla.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 text-gray-400 flex items-center justify-center hover:border-white hover:text-white hover:scale-110 transition-all duration-300">
              <FaFacebook className="text-base sm:text-xl" />
            </a>
            <a href="https://twitter.com/tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 text-gray-400 flex items-center justify-center hover:border-white hover:text-white hover:scale-110 transition-all duration-300">
              <FaTwitter className="text-base sm:text-xl" />
            </a>
            <a href="https://youtube.com/@tapiwamla" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 text-gray-400 flex items-center justify-center hover:border-white hover:text-white hover:scale-110 transition-all duration-300">
              <FaYoutube className="text-base sm:text-xl" />
            </a>
          </div>
          
          <p className="text-sm text-gray-600 uppercase tracking-wide">
            © 2025 Nyatti. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}