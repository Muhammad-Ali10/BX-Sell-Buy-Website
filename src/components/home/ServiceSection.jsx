import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Share2 } from "lucide-react"

// Business listings data
const businessListings = [
  {
    id: 1,
    title: "Beauty Store",
    description:
      "Easily manage your listings with images, pricing, details, and features to optimize your selling experience.",
    price: 12000,
    location: "India",
    businessAge: 4,
    netProfit: "21,764,982/Y",
    revenue: "150,764,982/Y",
    category: "Ecommerce",
    managedByEX: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Beauty Store",
    description:
      "Easily manage your listings with images, pricing, details, and features to optimize your selling experience.",
    price: 12000,
    location: "India",
    businessAge: 4,
    netProfit: "21,764,982/Y",
    revenue: "150,764,982/Y",
    category: "Ecommerce",
    managedByEX: true,
    isFavorite: true,
  },
  {
    id: 3,
    title: "Beauty Store",
    description:
      "Easily manage your listings with images, pricing, details, and features to optimize your selling experience.",
    price: 12000,
    location: "India",
    businessAge: 4,
    netProfit: "21,764,982/Y",
    revenue: "150,764,982/Y",
    category: "Ecommerce",
    managedByEX: true,
    isFavorite: true,
  },
  {
    id: 1,
    title: "Beauty Store",
    description:
      "Easily manage your listings with images, pricing, details, and features to optimize your selling experience.",
    price: 12000,
    location: "India",
    businessAge: 4,
    netProfit: "21,764,982/Y",
    revenue: "150,764,982/Y",
    category: "Ecommerce",
    managedByEX: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Beauty Store",
    description:
      "Easily manage your listings with images, pricing, details, and features to optimize your selling experience.",
    price: 12000,
    location: "India",
    businessAge: 4,
    netProfit: "21,764,982/Y",
    revenue: "150,764,982/Y",
    category: "Ecommerce",
    managedByEX: true,
    isFavorite: true,
  },
  {
    id: 3,
    title: "Beauty Store",
    description:
      "Easily manage your listings with images, pricing, details, and features to optimize your selling experience.",
    price: 12000,
    location: "India",
    businessAge: 4,
    netProfit: "21,764,982/Y",
    revenue: "150,764,982/Y",
    category: "Ecommerce",
    managedByEX: true,
    isFavorite: true,
  },
]

// Filter categories
const filterCategories = ["All", "Shopify", "E-Commerce", "YouTube Automation", "SaaS"]

export default function ServiceSection() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:!text-[56px] font-sora font-semibold mb-2">Explore the Newest</h1>
        <h1 className="text-3xl md:!text-[56px] font-sora font-semibold mb-4">Business Listings</h1>
        <p className="text-black text-base font-normal max-w-xl mx-auto">
          Discover the latest business opportunities with our newest listings.
          <br />
          Find your perfect match and grow today!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center overflow-scroll gap-2 mb-8">
        {filterCategories.map((category, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`!font-sora rounded-full  ${index === 0 ? "bg-[#C4FC1E] hover:bg-[#b1ef62] " : "bg-gray-100 hover:bg-gray-200 text-gray-800"} px-6 text-base font-normal `}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessListings.map((listing, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/service.png"
                width={400}
                height={200}
                alt={listing.title}
                className="w-full h-[200px] object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full">
                <Heart className="h-5 w-5 text-red-500" />
              </button>
              <button className="absolute top-3 right-12 bg-white p-1.5 rounded-full">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <div className="absolute bottom-3 left-3 flex space-x-2">
                {listing.managedByEX && (
                  <div className="bg-[#C4FC1E] text-black text-xs px-2 py-1 rounded-full flex items-center">
                    <span className="mr-1">•</span> Managed by EX
                  </div>
                )}
                <div className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">{listing.category}</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{listing.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{listing.description}</p>
              <div className="text-xl font-bold mb-4">${listing.price.toLocaleString()}</div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-4 bg-orange-500 rounded-sm flex items-center justify-center overflow-hidden">
                    <div className="w-full h-1/3 bg-white"></div>
                    <div className="w-full h-1/3 bg-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">Location: {listing.location}</span>
                </div>
                <div className="text-sm text-gray-600 text-right">Business Age: {listing.businessAge}</div>

                <div className="text-sm text-gray-600">Net Profit: {listing.netProfit}</div>
                <div className="text-sm text-gray-600 text-right">Revenue: {listing.revenue}</div>
              </div>

              <div className="flex gap-2">
                <Button className="w-1/2 bg-black hover:bg-gray-800 text-white rounded-full">Contact Seller</Button>
                <Button className="w-1/2 bg-[#C4FC1E] hover:bg-[#b1ef62] text-black rounded-full">View Listing</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
