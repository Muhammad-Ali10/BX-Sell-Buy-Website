"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EXDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-1630 mx-auto">
        {/* Header buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          <button className="px-5 py-2 rounded-full border border-zinc-700 text-sm text-white hover:bg-zinc-800 transition-colors">
            EXIT OPPORTUNITIES
          </button>
          <button className="px-5 py-2 rounded-full border border-zinc-700 text-sm text-white hover:bg-zinc-800 transition-colors">
            Company Exchange
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Left side - Main heading */}
          <div className="flex w-full max-w-5xl grow	">
            <h1 className="text-3xl md:text-4xl  font-bold leading-tight">
              EX provides you an intuitive dashboard, realtime analytics, and a secure marketplace for BUYING & SELLING
              Companies.
            </h1>
          </div>

          {/* Right side - Rating card */}
          <div className="flex justify-center lg:justify-end max-w-md">
            <Card className="bg-zinc-900 border-zinc-800 w-full max-w-sm rounded-xl">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-5xl font-bold">4,8</div>
                  <Badge className="bg-[#c1ff00] hover:bg-[#c1ff00] text-black font-medium rounded-full px-3">
                    Our Rating
                  </Badge>
                </div>

                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#c1ff00"
                      className="text-[#c1ff00]"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Avatar className="w-8 h-8 border border-zinc-700">
                    <AvatarImage src="/diverse-group.png" alt="User" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border border-zinc-700">
                    <AvatarImage src="/person-with-glasses.png" alt="User" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <div className="bg-zinc-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>

                <p className="text-sm text-gray-400">
                  Explore Our Customer
                  <br />
                  reviews on the WEB
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* New Listings */}
          <div>
            <div className="text-xs text-gray-500 mb-1">New</div>
            <div className="text-xs text-gray-500 mb-3">Listings Daily</div>
            <div className="text-5xl md:text-6xl font-bold">8+</div>
          </div>

          {/* Total User Base */}
          <div>
            <div className="text-xs text-gray-500 mb-1">Total</div>
            <div className="text-xs text-gray-500 mb-3">User Base</div>
            <div className="text-5xl md:text-6xl font-bold">10K</div>
          </div>

          {/* Requested Deal Volume */}
          <div>
            <div className="text-xs text-gray-500 mb-1">Requested</div>
            <div className="text-xs text-gray-500 mb-3">Deal Volume</div>
            <div className="text-5xl md:text-6xl font-bold">500M</div>
          </div>
        </div>
      </div>
    </div>
  )
}
