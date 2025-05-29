import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Mobileapp() {
    return (
        <div className="flex flex-col items-center justify-center bg-black text-white md:gap-12 p-6 md:p-12">
            <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white md:flex-row md:gap-24 p-6 md:p-12">
                <div className="relative w-full shadow-2xl bg-[#0d0d0d] max-w-[658px] py-20 px-24 rounded-4xl mb-10 md:mb-0">
                    <Image
                        src="/mobile.png"
                        alt="Phone Mockup"
                        width={320}
                        height={650}
                        className="object-cover rounded-[32px]"
                        priority
                    />
                </div>

                {/* Marketing Content */}
                <div className="w-full max-w-md text-center md:text-left">
                    <h1 className="mb-8 text-4xl font-bold md:text-7xl font-normal font-sora">Discover All Listings</h1>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </span>
                            <p className="text-2xl font-normal font-sora">Browse thousands of listings</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </span>
                            <p className="text-2xl font-normal font-sora">Use advanced Filter Options</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </span>
                            <p className="text-2xl font-normal font-sora">Contact the best sellers</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Button
                            variant="outline"
                            className="rounded-full bg-white px-8 py-6 text-xl font-medium text-black hover:bg-gray-100"
                        >
                            See All Listings
                        </Button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-black p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Left Column */}
                <div className="flex flex-col gap-4 md:gap-8 md:w-1/2">
                    {/* Reports & Insights Card */}
                    <Card className="bg-zinc-900 text-white  p-6 md:p-8 rounded-3xl">
                        <h2 className="text-2xl md:text-5xl font-bold mb-4">Reports & Insights</h2>
                        <p className="text-gray-400 text-2xl md:text-base pb-12">
                            Our detailed dashboard insights clear up most questions early on — so you can focus on what really matters.
                            With key metrics presented clearly, users spend less time searching and more time deciding.
                        </p>
                    </Card>

                    {/* QR Code Card */}
                    <Card className="bg-blue-600 p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 relative mb-4">
                            <Image
                                src="/QRCode.png"
                                alt="QR Code"
                                width={160}
                                height={160}
                                className="object-contain"
                            />
                        </div>
                    </Card>
                </div>


                <Card className="bg-[#d0ff00] p-6 md:p-8 rounded-3xl flex items-center justify-center md:w-1/2">
                    <div className="relative w-full max-w-sm ">
                        <Image
                            src="/mobileapp.png"
                            alt="Phone Mockup"
                            width={320}
                            height={650}
                            className="object-cover rounded-[32px]"
                            priority />
                    </div>
                </Card>
            </div>
        </div>
    )
}
