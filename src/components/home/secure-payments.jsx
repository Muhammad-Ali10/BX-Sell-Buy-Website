"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { CircleDollarSign, Volleyball, CreditCard, Layers, BriefcaseBusiness } from "lucide-react"

export default function SecurePayments() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:!text-4xl lg:!text-7xl leading-[80px] font-noraml font-sora mb-4">
            Secure Payments with
            <br />
            EX PAY
          </h1>
          <p className="text-gray-400 text-sm md:text-2xl max-w-5xl mx-auto">
            EX PAY is the trusted payment solution on our marketplace, ensuring every transaction is secure, fast, and
            reliable. Whether you are buying or selling a business, Ex Pay offers safe and seamless payments directly on
            our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <FeatureItem
              icon={<Layers className="h-6 w-6 text-white" />}
              title="No Risk"
              description="EX PAY removes the risk of the whole transaction. So you can focus on the deal."
            />

            <FeatureItem
              icon={<BriefcaseBusiness className="h-6 w-6 text-white" />}
              title="Trustworthy Escrow Service"
              description="Get your money safe through EX PAY. We protect buyers & sellers!"
            />

            <FeatureItem
              icon={<Volleyball className="h-6 w-6 text-white" />}
              title="Fast and Safe"
              description="Receive or send payments quickly. No unnecessary steps & low fees."
            />

            <FeatureItem
              icon={<CreditCard className="h-6 w-6 text-white" />}
              title="Seamless Integration"
              description="Complete your business transactions smoothly without leaving our platform."
            />

            <div className="flex justify-center lg:justify-start mt-8">
              <Button
                variant="outline"
                className="rounded-full bg-transparent border-white hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                Read More
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-3xl bg-zinc-900 border-zinc-800 text-white overflow-hidden">
              <CardContent className="flex flex-col gap-5">
                <div className="p-4 bg-zinc-800 flex flex-col gap-5 justify-between items-center rounded-xl">
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="text-lg text-gray-400">Transfer money to</p>
                    <p className="text-xl font-medium">-120,000</p>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row w-full justify-start gap-3 items-center">
                      <Avatar>
                        <img src="/abstract-geometric-shapes.png" alt="User avatar" />
                      </Avatar>
                      <p className="font-medium">Alessio Kinsey</p>
                    </div>
                    <p className="text-xs text-gray-400">Aug 2023 9:30 am</p>
                  </div>
                </div>



                <div className="p-4 bg-blue-600 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>EX PAY - Process</span>
                  </div>
                  <Badge variant="outline" className="bg-transparent border-white text-white">
                    Today
                  </Badge>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-2xl font-bold">$120,000</span>
                      <span className="text-gray-400 text-sm">Completed</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                    <div className="bg-blue-600 p-2 rounded-full">
                      <CircleDollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Money arrived</p>
                      <p className="text-xs text-gray-400">In review</p>
                    </div>
                    <span className="ml-auto text-green-500">+120,000$</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
}
