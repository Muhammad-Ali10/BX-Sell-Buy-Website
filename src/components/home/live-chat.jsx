"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function LiveChatAndVideo() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-1920 bg-zinc-900 border-zinc-800 rounded-3xl overflow-hidden">
        <div className="p-6 md:p-10">
          <div className="mb-6">
            <Button
              variant="outline"
              className="rounded-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:text-white"
            >
              Start Now
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/livechat.png"
                  width={500}
                  height={400}
                  alt="Video conference"
                  className="w-full rounded-xl"
                />
              </div>

              <h2 className="text-2xl md:text-5xl font-normal font-sora text-white mb-3">Live Chat & Video Meetings</h2>
              <p className="text-gray-400 text-2xl font-normal fornt-sora">
                Chat with sellers and buyers on our internal chat system that offers payment system, fraud protection
                and many more helpful functions.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              {/* Blue background behind the phone */}
              <div className="relative">
                <div className="absolute -inset-10 -inset-x-10 bg-blue-600 max-h-96	max-w-3xl	 rounded-[40px]"></div>

                {/* Phone mockup */}
                <div className="relative">
                  <Image
                    src="/mobileapp2.png"
                    width={280}
                    height={580}
                    alt="Mobile chat application"
                    className="relative z-10 rounded-[40px] border-4 border-zinc-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
