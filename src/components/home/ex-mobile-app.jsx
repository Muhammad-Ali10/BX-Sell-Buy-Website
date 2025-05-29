"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function EXMobileApp() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950">
          {/* Green gradient effect in top right */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#c1ff00] opacity-20 blur-[100px] rounded-full"></div>

          {/* Green gradient effect in bottom left */}
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#c1ff00] opacity-10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8   items-center">
            {/* Left side - Mobile phone image */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/handphone.png"
                width={500}
                height={500}
                alt="Hand holding EX mobile app"
                className="max-w-full h-auto"
                priority
              />
            </div>

            {/* Right side - Text and button */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Download the EX
                <br />
                Mobile App NOW
              </h1>

              <p className="text-gray-400">Have everything on the go. Speed is crucial in business.</p>

              <Button className="bg-white text-black hover:bg-gray-100 rounded-full pl-6 pr-5 py-6 h-auto flex items-center gap-2 font-medium">
                Download Now
                <span className="flex items-center justify-center bg-[#c1ff00] rounded-full w-6 h-6">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
