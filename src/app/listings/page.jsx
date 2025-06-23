"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Bell, ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import FilterSidebar from "@/components/shared/filter-sidebar"
import ListingCard from "@/components/shared/listing-card"
import { dummyListings } from "@/lib/dummy-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { LISTING_NAV_PATH } from "@/config/navpath"


export default function AllListings() {
  const [filters, setFilters] = useState({
    search: "",
    niche: "",
    revenueGenerating: null,
    priceRange: [500, 5000],
    location: "",
    targetCountry: "",
    targetMinRevenue: 50,
    ageRange: [0, 15],
    revenueRange: [0, 2000000],
    profitRange: [0, 1500000],
    pageviewsRange: [0, 150000],
    revenueMultipleRange: [0, 8],
    profitMultipleRange: [0, 5],
  })

  const [filteredListings, setFilteredListings] = useState(dummyListings)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  // Get current path for active menu detection
  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  // Apply filters whenever they change
  useEffect(() => {
    const filtered = dummyListings.filter((listing) => {
      // Search filter
      if (
        filters.search &&
        !listing.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !listing.description.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false
      }

      // Niche filter
      if (filters.niche && filters.niche !== "all" && listing.niche !== filters.niche) {
        return false
      }

      // Revenue generating filter
      if (filters.revenueGenerating !== null && listing.revenueGenerating !== filters.revenueGenerating) {
        return false
      }

      // Price range filter
      if (listing.price < filters.priceRange[0] || listing.price > filters.priceRange[1]) {
        return false
      }

      // Location filter
      if (filters.location && filters.location !== "all" && listing.location !== filters.location) {
        return false
      }

      // Target country filter
      if (filters.targetCountry && filters.targetCountry !== "all" && listing.targetCountry !== filters.targetCountry) {
        return false
      }

      // Target country filter
      if (filters.targetMinRevenue  < 0 && listing.targetCountry !== filters.targetCountry) {
        return false
      }

      // Business age filter
      if (listing.businessAge < filters.ageRange[0] || listing.businessAge > filters.ageRange[1]) {
        return false
      }

      // Monthly revenue filter
      if (listing.monthlyRevenue < filters.revenueRange[0] || listing.monthlyRevenue > filters.revenueRange[1]) {
        return false
      }

      // Monthly profit filter
      if (listing.monthlyProfit < filters.profitRange[0] || listing.monthlyProfit > filters.profitRange[1]) {
        return false
      }

      // Monthly pageviews filter
      if (
        listing.monthlyPageviews < filters.pageviewsRange[0] ||
        listing.monthlyPageviews > filters.pageviewsRange[1]
      ) {
        return false
      }

      // Revenue multiple filter
      if (
        listing.revenueMultiple < filters.revenueMultipleRange[0] ||
        listing.revenueMultiple > filters.revenueMultipleRange[1]
      ) {
        return false
      }

      // Profit multiple filter
      if (
        listing.profitMultiple < filters.profitMultipleRange[0] ||
        listing.profitMultiple > filters.profitMultipleRange[1]
      ) {
        return false
      }

      return true
    })

    setFilteredListings(filtered)
  }, [filters])

  const handleFilterChange = (newFilters) => {
    // console.log("Filter changed:", newFilters)
    setFilters({ ...filters, ...newFilters })
  }

  const handleClearFilters = () => {
    setFilters({
      search: "",
      niche: "",
      revenueGenerating: null,
      priceRange: [500, 100000],
      location: "",
      targetCountry: "",
      targetMinRevenue:0,
      ageRange: [0, 15],
      revenueRange: [0, 2000000],
      profitRange: [0, 1500000],
      pageviewsRange: [0, 150000],
      revenueMultipleRange: [0, 8],
      profitMultipleRange: [0, 5],
    })
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Desktop sidebar */}
      <div className="hidden md:block max-w-[389px] w-full border-r border-gray-800 overflow-y-auto">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} onClearFilters={handleClearFilters} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-black border-b border-gray-800 px-4 py-3 flex items-center ">
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0 bg-black border-gray-800">
               
                <nav className="flex flex-col items-center p-4 border-b border-gray-800">
                  {
                    LISTING_NAV_PATH.map((nav) => (
                      <Link
                    href={nav.path}
                    className={`px-7 py-3 rounded-[30px] transition-colors ${
                      currentPath === nav.path || currentPath.includes(nav.path) ? "bg-[#c1ff00] text-black" : "bg-[#0d151b] text-white hover:bg-gray-900"
                    }`}
                  >
                    {nav.label}
                  </Link>
                    ))}
                  
                </nav>
                <div className="overflow-y-auto max-h-[calc(100vh-180px)]">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    mobile={true}
                  />
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* <div className="bg-[#c1ff00] text-black font-bold p-1.5 rounded text-xl">BX</div> */}
            {/* <Image src={"/logo.png"} height={60} width={60} alt="Logo" /> */}
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6 ml-5 font-lufga">
              <Link
                href="/"
                className={`text-base font-normal px-4 py-1 rounded-full transition-colors ${
                  currentPath === "/"
                    ? "bg-[#c1ff00] text-black font-medium"
                    : "bg-black text-white hover:text-[#c1ff00]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/listings"
                className={`text-base px-4 py-1 rounded-full transition-colors ${
                  currentPath === "/listings" || currentPath.includes("/listings")
                    ? "bg-[#c1ff00] text-black font-medium"
                    : "bg-black text-white hover:text-[#c1ff00]"
                }`}
              >
                All Listings
              </Link>
              <Link
                href="/how-to-buy"
                className={`text-base px-4 py-1 rounded-full transition-colors ${
                  currentPath === "/how-to-buy"
                    ? "bg-[#c1ff00] text-black font-medium"
                    : "bg-black text-white hover:text-[#c1ff00]"
                }`}
              >
                How To Buy
              </Link>
              <Link
                href="/how-to-sell"
                className={`text-base px-4 py-1 rounded-full transition-colors ${
                  currentPath === "/how-to-sell"
                    ? "bg-[#c1ff00] text-black font-medium"
                    : "bg-black text-white hover:text-[#c1ff00]"
                }`}
              >
                How To Sell
              </Link>
            </nav>
          </div>

          <div className="flex flex-1 justify-end  gap-3">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#c1ff00] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#c1ff00] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                5
              </span>
            </Button>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 border border-gray-700 cursor-pointer">
                  <AvatarImage src="/abstract-profile.png" alt="User" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-black border border-gray-800 text-white p-1">
                <div className="px-2 py-1.5 mb-1 border-b border-gray-800">
                  <p className="font-medium">Manuel</p>
                  <p className="text-xs text-gray-400">manuel@example.com</p>
                </div>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  My Listings
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Watchlist
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <div className="h-px bg-gray-800 my-1"></div>
                <DropdownMenuItem className="text-red-500 hover:bg-gray-900 focus:bg-gray-900 cursor-pointer">
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-col p-4 md:p-6 bg-white">
          {/* Sell your store banner */}
          <div className="bg-[linear-gradient(to_right,_#C4FC1E,_#D2FF4D)] text-black rounded-xl p-6 mb-6 relative overflow-hidden">
            <div className="max-w-[70%] z-10 relative">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Looking to Sell Your Shopify Store?</h2>
              <p className="text-sm md:text-base mb-4">
                Get the best deal with serious buyers ready to invest! Join a marketplace where top-rated businesses
                meet qualified investors.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">List Your Business Now!</Button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="bg-[#d8ff7a] p-4 rounded-lg">
                <div className="text-4xl">%</div>
              </div>
            </div>
          </div>

          {/* Premium banner */}
          <div className="bg-white text-black rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-black rounded">🚀</span>
                <h3 className="font-bold text-lg">Get Deals First. 21 Days Before the Rest</h3>
              </div>
              <Badge className="bg-[#c1ff00] text-black hover:bg-[#a8e600]">
                <span className="text-xs">Join Premium</span>
              </Badge>
            </div>
            <p className="text-sm mb-2">
              JOIN Premium now! Gain early access to All Listings 21 days before they become public. Don't wait—Stay
              ahead of your competition.
              <Link href="#" className="text-blue-600 ml-1">
                Learn More
              </Link>
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button className="bg-[#c1ff00] text-black hover:bg-[#a8e600]">Join Premium</Button>
              <Button variant="outline" className="text-black border-gray-300">
                Discover 25 Off-Market Listings
              </Button>
            </div>
          </div>

          {/* Featured listings */}
          <div className="relative mb-6">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto">
              {dummyListings.slice(0, 3).map((listing, index) => (
                <ListingCard key={index} listing={listing} featured={true} />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Results count */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">{filteredListings.length} Results</h2>
            <p className="text-sm text-gray-400">
              Discover top businesses for sale, explore opportunities, and make informed investments with confidence
              today.
            </p>
          </div>

          {/* Listings grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredListings.map((listing, index) => (
              <ListingCard key={index} listing={listing} />
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold mb-2">No listings match your filters</h3>
              <p className="text-gray-400 mb-4">Try adjusting your filters to see more results</p>
              <Button onClick={handleClearFilters} className="bg-[#c1ff00] text-black hover:bg-[#a8e600]">
                Clear All Filters
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
