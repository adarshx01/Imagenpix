"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Search, ChevronDown, ImageIcon, FileIcon, CodeIcon, LayoutIcon, Box, Layers, Monitor, ShoppingCart, Filter, Star, Users, Download, Clock, DollarSign, Zap, Shield, Gift, TrendingUp, Award, Play, Pause, ChevronRight, ChevronLeft, CheckCheck } from "lucide-react"
// import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

const MotionLink = motion(Link)

export default function LandingPage() {
  // const { setTheme, theme } = useTheme()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [priceRange, setPriceRange] = React.useState([0, 100])
  const [activeCategory, setActiveCategory] = React.useState("all")
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)

  const productCategories = [
    { name: "Images", icon: ImageIcon },
    { name: "Icons", icon: FileIcon },
    { name: "UI Components", icon: Layers },
    { name: "WordPress Themes", icon: Monitor },
    { name: "Vector Graphics", icon: CodeIcon },
    { name: "Website Templates", icon: LayoutIcon },
  ]

  const featuredProducts = [
    { name: "Modern Dashboard UI Kit", category: "UI Components", price: 49, image: "/placeholder.svg?height=200&width=300", downloads: 1200, rating: 4.8 },
    { name: "E-commerce WordPress Theme", category: "WordPress Themes", price: 79, image: "/placeholder.svg?height=200&width=300", downloads: 850, rating: 4.9 },
    { name: "Tech Icon Pack", category: "Icons", price: 19, image: "/placeholder.svg?height=200&width=300", downloads: 3000, rating: 4.7 },
    { name: "Abstract Background Pack", category: "Images", price: 29, image: "/placeholder.svg?height=200&width=300", downloads: 1500, rating: 4.6 },
    { name: "Startup Landing Page", category: "Website Templates", price: 39, image: "/placeholder.svg?height=200&width=300", downloads: 720, rating: 4.8 },
    { name: "Business Infographic Set", category: "Vector Graphics", price: 24, image: "/placeholder.svg?height=200&width=300", downloads: 2100, rating: 4.5 },
    { name: "Social Media UI Kit", category: "UI Components", price: 34, image: "/placeholder.svg?height=200&width=300", downloads: 980, rating: 4.7 },
    { name: "Nature Photography Pack", category: "Images", price: 45, image: "/placeholder.svg?height=200&width=300", downloads: 650, rating: 4.9 },
    { name: "Minimalist Logo Pack", category: "Vector Graphics", price: 29, image: "/placeholder.svg?height=200&width=300", downloads: 1800, rating: 4.6 },
  ]

  const customerReviews = [
    { name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40", rating: 5, comment: "StratifyLabs has revolutionized my design workflow. The quality and variety of AI-generated assets are unmatched!", company: "Creative Director, DesignCo" },
    { name: "Sarah Lee", avatar: "/placeholder.svg?height=40&width=40", rating: 4, comment: "As a freelance designer, StratifyLabs has become my go-to resource. It saves me so much time and the prices are unbeatable.", company: "Freelance UI/UX Designer" },
    { name: "Michael Chen", avatar: "/placeholder.svg?height=40&width=40", rating: 5, comment: "The WordPress themes from StratifyLabs are top-notch. My clients are always impressed with the results!", company: "Web Developer, TechSolutions" },
    { name: "Emily Rodriguez", avatar: "/placeholder.svg?height=40&width=40", rating: 5, comment: "I'm amazed by the quality of the AI-generated images. They're perfect for my digital marketing campaigns.", company: "Marketing Manager, BrandBoost" },
    { name: "David Kim", avatar: "/placeholder.svg?height=40&width=40", rating: 4, comment: "StratifyLabs offers an incredible range of assets. It's like having a whole design team at my fingertips.", company: "Product Designer, InnovateTech" },
  ]

  const pricingPlans = [
    { name: "Basic", price: 29, features: ["100 AI-generated assets/month", "5 WordPress themes", "Basic support", "Commercial license"] },
    { name: "Pro", price: 79, features: ["Unlimited AI-generated assets", "20 WordPress themes", "Priority support", "Commercial license", "API access"] },
    { name: "Enterprise", price: 199, features: ["Unlimited AI-generated assets", "Unlimited WordPress themes", "24/7 Premium support", "Commercial license", "API access", "Custom AI model training"] },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MotionLink 
            className="flex items-center gap-2 font-bold text-2xl" 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-6 w-6 text-primary" />
            <span>StratifyLabs</span>
          </MotionLink>
          <NavigationMenu className="hidden md:flex mx-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    {productCategories.map((category) => (
                      <MotionLink 
                        key={category.name} 
                        className="group grid h-auto items-center gap-1 rounded-md p-3 hover:bg-accent" 
                        href="#"
                        onClick={() => setActiveCategory(category.name.toLowerCase())}
                        whileHover={{ backgroundColor: "var(--accent)", scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="h-5 w-5 text-primary" />
                          <div className="text-sm font-medium leading-none group-hover:underline">{category.name}</div>
                        </div>
                      </MotionLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#features" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#testimonials" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Testimonials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center ml-auto gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash Your Creativity with AI-Powered Design
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover a vast collection of AI-generated assets, from stunning visuals to powerful WordPress themes, all at unbeatable prices.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Search for assets..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">Explore Assets</Button>
                <Button size="lg" variant="outline">
                  How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Featured Products</h2>
            <Tabs defaultValue={activeCategory} className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                {productCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name.toLowerCase()}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value={activeCategory} className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {featuredProducts
                    .filter((product) => activeCategory === "all" || product.category.toLowerCase() === activeCategory)
                    .map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card  className="overflow-hidden h-full flex flex-col">
                          <CardHeader className="p-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={300}
                              height={200}
                              className="w-full h-[200px] object-cover"
                            />
                          </CardHeader>
                          <CardContent className="p-4 flex-grow">
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>{product.category}</CardDescription>
                            <div className="flex items-center mt-2">
                              <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                              <span>{product.rating.toFixed(1)}</span>
                              <span className="mx-2">•</span>
                              <Download className="w-4 h-4 mr-1" />
                              <span>{product.downloads.toLocaleString()}</span>
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 flex items-center justify-between">
                            <span className="text-lg font-bold">${product.price}</span>
                            <Button>Add to Cart</Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-12 text-center">
              <Button size="lg">View All Products</Button>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Why Choose StratifyLabs?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>AI-Powered Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our cutting-edge AI technology creates unique, high-quality assets that push the boundaries of design.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Unbeatable Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get premium design assets at a fraction of the cost of traditional marketplaces, without compromising on quality.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Layers className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Vast Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>From images to WordPress themes, we offer a wide range of AI-generated assets to suit all your design needs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Time-Saving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our AI-generated assets are ready to use, saving you countless hours in the design process.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Quality Assured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Every asset is reviewed by our team of expert designers to ensure the highest quality standards.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Gift className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Regular Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We continuously update our collection with fresh, trendy designs to keep your projects cutting-edge.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See StratifyLabs in Action</h2>
                <p className="text-muted-foreground text-lg">
                  Watch how our AI-powered platform revolutionizes the design process, saving you time and boosting creativity.
                </p>
              </div>
              <Card className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="StratifyLabs Demo Video"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  >
                    {isVideoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">What Our Customers Say</h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={customerReviews[currentTestimonial].avatar} alt={customerReviews[currentTestimonial].name} />
                          <AvatarFallback>{customerReviews[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{customerReviews[currentTestimonial].name}</CardTitle>
                          <CardDescription>{customerReviews[currentTestimonial].company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg italic">"{customerReviews[currentTestimonial].comment}"</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center">
                        {[...Array(customerReviews[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </AnimatePresence>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-0 -translate-y-1/2"
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? customerReviews.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-0 -translate-y-1/2"
                onClick={() => setCurrentTestimonial((prev) => (prev === customerReviews.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Choose Your Plan</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={index === 1 ? "border-primary" : ""}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-4xl font-bold">${plan.price}</span> / month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCheck className="w-5 h-5 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{index === 1 ? "Start Pro Trial" : "Get Started"}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Creative Community</h2>
                <p className="text-muted-foreground text-lg">
                  Get exclusive access to new assets, special offers, and connect with fellow designers.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Enter your email" type="email" />
                    <Button className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does AI generate the assets?</AccordionTrigger>
                <AccordionContent>
                  Our advanced AI algorithms analyze millions of design elements and trends to create unique, high-quality assets. Each asset is then reviewed by our expert design team to ensure it meets our quality standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use the assets for commercial projects?</AccordionTrigger>
                <AccordionContent>
                  Yes, all assets on StratifyLabs come with a commercial license. You can use them in both personal and commercial projects without attribution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How often are new assets added?</AccordionTrigger>
                <AccordionContent>
                  We add new AI-generated assets to our collection daily. Our AI is constantly learning and improving, allowing us to offer fresh, trendy designs regularly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day money-back guarantee on all purchases. If you're not satisfied with the quality of an asset, please contact our support team for a full refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Elevate Your Design Game?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join StratifyLabs today and unlock a world of AI-powered creative possibilities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">Get Started</Button>
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Zap className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              © 2024 StratifyLabs. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link className="text-sm underline-offset-4 hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm underline-offset-4 hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm underline-offset-4 hover:underline" href="#">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}