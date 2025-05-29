"use client"
import { Search, ArrowUpRight, Layers, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, User } from "lucide-react"
import Image from "next/image"


export default function HeroSection() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "All Listings" },
    { href: "/buy", label: "How To Buy" },
    { href: "/sell", label: "How To Sell" },
  ]

  return (
    <main className="bg-[url(/herobg.png)] pt-8">
      <header className="container mx-auto py-4 px-4 backdrop-blur-xs rounded-xl bg-[#1360F3]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-yellow-300 p-2 rounded-lg">
                <span className="font-bold text-blue-600 text-xl">BX</span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${isActive ? "bg-yellow-300 text-blue-900" : "text-white hover:bg-blue-500"
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>


          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-white">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-300 text-xs text-blue-900 rounded-full w-4 h-4 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <span className="hidden sm:inline">Add Listing</span>
              <span className="sm:hidden">+</span>
            </Button>
          </div>
        </div>
      </header>
      <section className="mx-auto px-4 pt-16 text-center mt-12">
        <h1 className="text-4xl md:!text-[85px] font-sora font-medium text-white mb-4">
          Buy & Sell Companies
          <br />
          in 3 simple Steps
        </h1>
        <p className="text-white/90 text-xl max-w-3xl mx-auto my-8">
          Join the #1 platform for buying & selling companies. Discover, connect, and exchange with ease—your journey
          starts here today!
        </p>

        <div className="flex flex-wrap justify-center text-base gap-6 mb-12">
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Secure Payments with EXPay</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Simple 3-step process</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Start in 1 Minute</span>
          </div>
        </div>

        <div className="bg-blue-500/50 p-2 rounded-lg max-w-4xl mx-auto mb-12 px-12 py-6">
          <div className="flex flex-col md:flex-row gap-2">
            <Select className="text-white h-16">
              <SelectTrigger className="w-full max-w-2xl bg-blue-400/30 border-none text-white h-16">
                <div className="flex items-center gap-2 text-white h-16">
                  <Layers className="text-white" />
                  <SelectValue placeholder="What are you Looking For?" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="content">Content</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900  w-16 h-16">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 w-16 h-16">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 ">
          <div className="text-white/80 mr-4">Trending Topics</div>
          <Badge variant="outline" className="bg-blue-500/30 text-white border-none hover:bg-blue-500/50">
            Shopify <ArrowUpRight className="ml-1 h-3 w-3" />
          </Badge>
          <Badge variant="outline" className="bg-blue-500/30 text-white border-none hover:bg-blue-500/50">
            E-Commerce <ArrowUpRight className="ml-1 h-3 w-3" />
          </Badge>
          <Badge variant="outline" className="bg-blue-500/30 text-white border-none hover:bg-blue-500/50">
            YouTube Automation <ArrowUpRight className="ml-1 h-3 w-3" />
          </Badge>
          <Badge variant="outline" className="bg-blue-500/30 text-white border-none hover:bg-blue-500/50">
            SaaS <ArrowUpRight className="ml-1 h-3 w-3" />
          </Badge>
        </div>
      </section>
      <section className="flex">
        <div className="max-w-[1920px]">
          <Image src="/hero.png"
            width={1920}
            height={588} 
            alt="Hero Image"/>
        </div>
      </section>
    </main>
  )
}
