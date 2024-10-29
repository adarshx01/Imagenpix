'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ChevronDown, Code, Image, Layers, Palette, Zap, DollarSign, Star, Users, ArrowRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()
  const [currentTheme, setCurrentTheme] = useState(0)

  const themes = [
    { image: "/placeholder.svg?height=400&width=600", title: "Modern Portfolio", price: "19.99" },
    { image: "/placeholder.svg?height=400&width=600", title: "E-commerce Deluxe", price: "24.99" },
    { image: "/placeholder.svg?height=400&width=600", title: "Blog Master", price: "14.99" },
    { image: "/placeholder.svg?height=400&width=600", title: "Agency Pro", price: "29.99" },
  ]

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [controls])

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <ParallaxBackground />
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">StratifyLabs</a>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#themes">Themes</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="bg-transparent border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Start Selling
              </Button>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink href="#themes" onClick={() => setIsMenuOpen(false)}>Themes</NavLink>
          <NavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</NavLink>
          <NavLink href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
          <NavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink>
          <Button variant="outline" className="bg-transparent border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Start Selling
          </Button>
        </motion.div>
      )}

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium Themes<br />at Unbeatable Prices
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover a vast collection of high-quality, AI-generated themes and templates. Perfect for web developers, designers, and businesses on a budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Explore Themes
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Sell Your Themes
            </Button>
          </motion.div>
          <FloatingShapes />
        </section>

        <section id="themes" className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Themes</h2>
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div 
                  className="flex"
                  animate={{ x: `${-currentTheme * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {themes.map((theme, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <ThemeCard {...theme} />
                    </div>
                  ))}
                </motion.div>
              </div>
              <button 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
                onClick={() => setCurrentTheme(prev => (prev - 1 + themes.length) % themes.length)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
                onClick={() => setCurrentTheme(prev => (prev + 1) % themes.length)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <GlowingOrb className="absolute top-1/2 left-0 transform -translate-y-1/2" />
          <GlowingOrb className="absolute top-1/2 right-0 transform -translate-y-1/2" />
        </section>

        <section id="features" className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<DollarSign className="w-12 h-12 mb-4 text-purple-400" />}
                title="Unbeatable Prices"
                description="Get premium quality themes at a fraction of the cost. Our AI-powered generation keeps prices low without compromising on quality."
              />
              <FeatureCard 
                icon={<Zap className="w-12 h-12 mb-4 text-purple-400" />}
                title="Instant Download"
                description="No waiting! Download your chosen theme immediately after purchase and start building your website right away."
              />
              <FeatureCard 
                icon={<Layers className="w-12 h-12 mb-4 text-purple-400" />}
                title="Wide Variety"
                description="From portfolios to e-commerce, find the perfect theme for any project. New themes added daily!"
              />
              <FeatureCard 
                icon={<Code className="w-12 h-12 mb-4 text-purple-400" />}
                title="Clean Code"
                description="All our themes feature well-structured, commented code for easy customization and optimal performance."
              />
              <FeatureCard 
                icon={<Palette className="w-12 h-12 mb-4 text-purple-400" />}
                title="Customizable Designs"
                description="Easily adapt themes to your brand with intuitive customization options and detailed documentation."
              />
              <FeatureCard 
                icon={<Users className="w-12 h-12 mb-4 text-purple-400" />}
                title="Community Support"
                description="Join our vibrant community of developers and designers. Get help, share tips, and grow together."
              />
            </div>
          </div>
          <HexagonBackground />
        </section>

        <section id="pricing" className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Seller Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Basic"
                price="Free"
                features={[
                  "List up to 5 themes",
                  "Standard support",
                  "70% revenue share",
                  "Monthly payouts"
                ]}
              />
              <PricingCard
                title="Pro"
                price="$19.99"
                features={[
                  "Unlimited theme listings",
                  "Priority support",
                  "80% revenue share",
                  "Bi-weekly payouts",
                  "Featured theme placement"
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={[
                  "Unlimited theme listings",
                  "Dedicated account manager",
                  "Custom revenue share",
                  "Weekly payouts",
                  "Custom branding options",
                  "API access"
                ]}
              />
            </div>
          </div>
          <GlowingOrb className="absolute bottom-0 left-1/4 transform translate-y-1/2" />
          <GlowingOrb className="absolute top-0 right-1/4 transform -translate-y-1/2" />
        </section>

        <section id="testimonials" className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="I've tripled my income since I started selling on ThemeMarket. The low barrier to entry and high-quality AI-generated themes make it a win-win!"
                author="Alex Chen"
                role="Theme Developer"
              />
              <TestimonialCard
                quote="As a small business owner, I found the perfect e-commerce theme at an unbeatable price. It saved me thousands in custom development costs."
                author="Sarah Thompson"
                role="Boutique Owner"
              />
              <TestimonialCard
                quote="The variety and quality of themes available is impressive. I always find what I need for my clients' projects, and at great prices too!"
                author="Michael Rodriguez"
                role="Web Designer"
              />
            </div>
          </div>
          <ParticleBackground />
        </section>

        <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
            Join our community of theme creators and buyers. Start selling or find the perfect theme for your next project today!
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
          <FloatingShapes />
        </section>
      </main>

      <footer className="bg-gray-900 py-12 border-t border-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">ThemeMarket is the leading marketplace for high-quality, affordable website themes and templates.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#themes" className="text-gray-400 hover:text-white transition-colors duration-300">Themes</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2023 ThemeMarket. All rights reserved.</p>
          </div>
        </div>
        <GlowingOrb className="absolute bottom-0 left-0 transform translate-y-1/2" />
        <GlowingOrb className="absolute top-0 right-0 transform -translate-y-1/2" />
      </footer>
    </div>
  )
}

function NavLink({ href, children, ...props }) {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300 relative group" {...props}>
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  )
}

function ThemeCard({ image, title, price }) {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
            View Theme
          </Button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-400">${price}</span>
          <Star className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </motion.div>
  )
}

function FeatureCard({ icon, title, description }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
      ref={ref}
      className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 group hover:border-purple-500 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{description}</p>
    </motion.div>
  )
}

function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <motion.div 
      className={`p-6 rounded-lg shadow-lg ${highlighted ? 'bg-purple-600' : 'bg-gray-800'} ${highlighted ? 'border-2 border-white' : 'border border-gray-700'} relative overflow-hidden group`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold py-1 px-4 transform rotate-45 translate-x-8 -translate-y-3">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">{price}<span className="text-xl font-normal">{price !== "Custom" && "/month"}</span></p>
      <ul className="mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className={`w-full ${highlighted ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'} hover:opacity-90 transition-all duration-300 transform group-hover:scale-105`}>
        Choose Plan
      </Button>
    </motion.div>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 group hover:border-purple-500 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="mb-4 italic text-gray-300 group-hover:text-white transition-colors duration-300">"{quote}"</p>
      <p className="font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{author}</p>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{role}</p>
    </motion.div>
  )
}

function ParallaxBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
    </div>
  )
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-purple-500 rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

function GlowingOrb({ className }) {
  return (
    <div className={`w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-20 ${className}`}></div>
  )
}

function HexagonBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[...Array(20)].map((_, i) => (
        <svg
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0L23.3205 6V18L12 24L0.679491 18V6L12 0Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}