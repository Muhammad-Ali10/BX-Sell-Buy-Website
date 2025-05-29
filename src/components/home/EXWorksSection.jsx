import { Button } from "@/components/ui/button"

export default function EXWorksSection() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* How EX Works Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center text-center">
        <h1 className="!text-[56px] font-sora font-bold mb-4">How EX works</h1>
        <p className="text-base font-sora font-normal text-black mb-1">Buy & Sell Companies in 3 Easy Steps.</p>
        <p className="text-base font-sora font-normal text-black mb-8">
          Seamlessly connecting buyers and sellers for faster, smoother deals.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button variant="outline" className="rounded-full px-8 py-2 text-sm bg-gray-100 hover:bg-gray-200 border-0">
            I'm A Buyer
          </Button>
          <Button className="rounded-full px-8 py-2 text-base font-sami bg-lime-400 text-black hover:bg-lime-500 hover:text-black border-0">
            I'm A Seller
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl m-auto">
          {/* List Your Business Card */}
          <div className="flex flex-col">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="bg-white rounded-md p-4 w-full">
                <div className="flex items-center space-x-2 mb-4">
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
                    className="text-gray-500"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <div className="text-sm font-medium">Which business you list?</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm">Shopify</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm">SaaS (Software as A Service)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm">E-Commerce</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm">YouTube Automation</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm">Service Business</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-left">List Your Business 4 free</h2>
            <p className="text-gray-600 text-sm text-left">
              Create a compelling listing in minutes. No upfront fees, no hassle—just visibility to serious buyers.
            </p>
          </div>

          {/* Interact with Buyers Card */}
          <div className="flex flex-col">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="bg-white rounded-md p-4 w-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs"></div>
                    <div className="flex-1 p-2 bg-gray-100 rounded-md h-4"></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs"></div>
                    <div className="flex-1 p-2 bg-gray-100 rounded-md h-4"></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs"></div>
                    <div className="flex-1 p-2 bg-gray-100 rounded-md h-4"></div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs"></div>
                    <div className="flex-1 p-2 bg-gray-100 rounded-md h-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-left">Interact with Buyers</h2>
            <p className="text-gray-600 text-sm text-left">
              Communicate securely, answer questions, and showcase your business to qualified prospects.
            </p>
          </div>

          {/* Seal the Deal Card */}
          <div className="flex flex-col">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="bg-white rounded-md p-4 w-full">
                <div className="flex justify-center mb-6">
                  <div className="w-full h-4 bg-gray-200 rounded-full relative">
                    <div className="absolute inset-0 flex justify-between px-1">
                      <div className="w-3 h-3 bg-white rounded-full self-center border border-gray-300"></div>
                      <div className="w-3 h-3 bg-white rounded-full self-center border border-gray-300"></div>
                      <div className="w-3 h-3 bg-white rounded-full self-center border border-gray-300 shadow-md"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-2 border border-gray-100 rounded-md">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <span className="text-xs">Buyer & Seller Protection</span>
                  </div>

                  <div className="flex items-center gap-3 p-2 border border-gray-100 rounded-md">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-xs">Fast & Secure Payments</span>
                  </div>

                  <div className="flex items-center gap-3 p-2 border border-gray-100 rounded-md">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <span className="text-xs">Verified Transactions</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-left">Seal the Deal with EX Pay</h2>
            <p className="text-gray-600 text-sm text-left">
              Finalize your deal safely with secure payments through our escrow service — EX Pay.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="w-full bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col w-full gap-12">
            <div>
              <h2 className="text-7xl font-normal font-sora mb-8">EX -Secure, Simple, Seamless</h2>
            </div>
            <div className="flex items-center justify-end">
              <p className="max-w-3xl  text-gray-300 text-sm leading-relaxed">
                EX is where serious buyers meet real sellers. Whether you're looking to acquire your next cash-flowing
                asset or exit your business with confidence — EX gives you the place to do it right. We combine clean
                design with powerful analytics, secure infrastructure, and a smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
