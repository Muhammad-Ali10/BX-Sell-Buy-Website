"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"

export default function ListingCard({ listing, featured = false }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleShare = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Share functionality would go here
  }

  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    } else {
      return `$${amount}`
    }
  }

  return (
    <Card className="max-w-sm w-full bg-[#FAFAFA] text-white p-2 border-0 shadow-none">

      <div className="relative">
        <div className="relative h-[200px] w-full bg-[#E1E1E1] rounded-2xl ">
          <Image
            src={listing.image || "/placeholder.svg?height=200&width=400&query=business"}
            alt={listing.title}
            fill
            className="object-cover "
          />

          {/* Niche badge */}
          <Badge className="absolute bottom-3 left-3 z-10 bg-gray-800/70 text-white">{listing.niche}</Badge>

          {/* Action buttons */}
          <div className="absolute right-3 top-3 z-10 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70"
              onClick={toggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Off-market progress bar for featured listings */}
        {featured && (
          <>
            <div className="h-1 w-full bg-gray-800">
              <div className="h-full w-3/4 bg-[#c1ff00]"></div>
            </div>
            <div className="flex items-center justify-between bg-gray-800 px-3 py-1 text-xs">
              <div>Off-Market</div>
              <div>Goes Public</div>
            </div>
            <Badge className="absolute left-3 top-3 z-10 bg-[#c1ff00] text-black">Off-Market Ends in 21 days</Badge>
          </>
        )}
      </div>

      <CardHeader>
        <h3 className="mb-1 text-lg font-medium text-black">{listing.title}</h3>
        <p className="text-xs font-normal font-sora text-gray-700">{listing.description}</p>
      </CardHeader>

      <CardContent>
        <div className="mb-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-black">${listing.price.toLocaleString()}</div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-gray-700 text-xs">
              {listing.profitMultiple}x Profit
            </Badge>
            <Badge variant="outline" className="border-gray-700 text-xs">
              {listing.revenueMultiple}x Revenue
            </Badge>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-2 text-black">
          <div className="flex items-center gap-1 text-xs">
            <span className="text-black">Location:</span>
            <div className="flex items-center">
              <span className="mr-1">
                {listing.location === "United States" && "🇺🇸"}
                {listing.location === "India" && "🇮🇳"}
                {listing.location === "United Kingdom" && "🇬🇧"}
                {listing.location === "Canada" && "🇨🇦"}
                {listing.location === "Australia" && "🇦🇺"}
                {listing.location === "Germany" && "🇩🇪"}
                {listing.location === "France" && "🇫🇷"}
                {listing.location === "Spain" && "🇪🇸"}
                {listing.location === "Italy" && "🇮🇹"}
              </span>
              <span>{listing.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-black">
            <span className="text-black">Business Age:</span>
            <span>
              {listing.businessAge} {listing.businessAge === 1 ? "Year" : "Years"}
            </span>
          </div>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-black">
          <div className="flex justify-between">
            <span className="text-black">Net Profit:</span>
            <span>{formatCurrency(listing.netProfit)}/y</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Revenue:</span>
            <span>{formatCurrency(listing.revenue)}/y</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 p-4 pt-0">
        <Button className="h-9 border-gray-700 text-xs rounded-2xl">
          Contact Seller
        </Button>
        <Button className="h-9 bg-[#c1ff00] text-xs text-black hover:bg-[#a8e600] rounded-2xl">View Listing</Button>
      </CardFooter>
    </Card>
  )
}
