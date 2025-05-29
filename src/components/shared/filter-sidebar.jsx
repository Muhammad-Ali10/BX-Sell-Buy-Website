"use client"

import { useState } from "react"
import { Search, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"

export default function FilterSidebar({ filters, onFilterChange, onClearFilters, mobile = false }) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  const handleSearchChange = (e) => {
    onFilterChange({ search: e.target.value })
  }

  const handleNicheChange = (value) => {
    onFilterChange({ niche: value })
  }

  const handleRevenueGeneratingChange = (value) => {
    onFilterChange({ revenueGenerating: value === "yes" ? true : value === "no" ? false : null })
  }

  const handlePriceRangeChange = (value) => {
    onFilterChange({ priceRange: value })
  }

  const handleLocationChange = (value) => {
    onFilterChange({ location: value })
  }

  const handleTargetCountryChange = (value) => {
    onFilterChange({ targetCountry: value })
  }

  const handleAgeRangeChange = (value) => {
    onFilterChange({ ageRange: value })
  }

  const handleRevenueRangeChange = (value) => {
    onFilterChange({ revenueRange: value })
  }

  const handleProfitRangeChange = (value) => {
    onFilterChange({ profitRange: value })
  }

  const handlePageviewsRangeChange = (value) => {
    onFilterChange({ pageviewsRange: value })
  }

  const handleRevenueMultipleRangeChange = (value) => {
    onFilterChange({ revenueMultipleRange: value })
  }

  const handleProfitMultipleRangeChange = (value) => {
    onFilterChange({ profitMultipleRange: value })
  }

  const handleFindClick = () => {
    // This is just to trigger a re-render
    onFilterChange({ ...filters })
  }

  // Format currency for display
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    } else {
      return `$${amount}`
    }
  }

  // Format pageviews for display
  const formatPageviews = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K`
    } else {
      return amount
    }
  }

  return (
    <div className="p-4 h-full flex flex-col">
      {!mobile && (
        <div className="flex items-center mb-4">
          <div className="bg-[#c1ff00] text-black font-bold p-1.5 rounded text-xl">BX</div>
        </div>
      )}

      <h3 className="font-medium mb-4">Filter Options</h3>

      <div className="space-y-6 flex-1 overflow-y-auto">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-white" />
          <Input
            placeholder="Search"
            className="pl-8 bg-gray-900 border-gray-800 !text-white"
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>

        {/* Niche */}
        <div>
          <h4 className="text-sm mb-2">Niche</h4>
          <Select value={filters.niche} onValueChange={handleNicheChange}>
            <SelectTrigger className="bg-gray-900 border-gray-800 !text-white !h-10 w-full">
              <SelectValue placeholder="Select niche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Niches</SelectItem>
              <SelectItem value="SaaS">SaaS</SelectItem>
              <SelectItem value="E-commerce">E-commerce</SelectItem>
              <SelectItem value="Content">Content</SelectItem>
              <SelectItem value="Digital Products">Digital Products</SelectItem>
              <SelectItem value="Lead Gen">Lead Gen</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Revenue generating */}
        <div>
          <h4 className="text-sm mb-2">Revenue generating</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={filters.revenueGenerating === true ? "default" : "outline"}
              className={
                filters.revenueGenerating === true
                  ? "bg-[#c1ff00] text-black hover:bg-[#a8e600]"
                  : "border-gray-800 bg-gray-900"
              }
              onClick={() => handleRevenueGeneratingChange("yes")}
            >
              Yes
            </Button>
            <Button
              variant={filters.revenueGenerating === false ? "default" : "outline"}
              className={
                filters.revenueGenerating === false
                  ? "bg-[#c1ff00] text-black hover:bg-[#a8e600]"
                  : "border-gray-800 bg-gray-900"
              }
              onClick={() => handleRevenueGeneratingChange("no")}
            >
              No
            </Button>
          </div>
        </div>

        {/* Price */}
        <div>
          <h4 className="text-sm mb-2 flex items-center">
            <span className="mr-2">Price</span>
            <span className="text-xs text-gray-500">
              {formatCurrency(filters.priceRange[0])} - {formatCurrency(filters.priceRange[1])}
            </span>
          </h4>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              min={500}
              max={5000}
              step={100}
          
            />
          </div>
          <div className="mt-4 relative h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c1ff00] to-gray-500 opacity-50 h-8 rounded"></div>
          </div>
        </div>

        {/* Business Location */}
        <div>
          <h4 className="text-sm mb-2">Business Location</h4>
          <Select value={filters.location} onValueChange={handleLocationChange}>
            <SelectTrigger className="bg-gray-900 border-gray-800 !text-white !h-10 w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="United States">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇺🇸</span>
                  <span>United States</span>
                </div>
              </SelectItem>
              <SelectItem value="India">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇮🇳</span>
                  <span>India</span>
                </div>
              </SelectItem>
              <SelectItem value="United Kingdom">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇬🇧</span>
                  <span>United Kingdom</span>
                </div>
              </SelectItem>
              <SelectItem value="Canada">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇨🇦</span>
                  <span>Canada</span>
                </div>
              </SelectItem>
              <SelectItem value="Australia">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇦🇺</span>
                  <span>Australia</span>
                </div>
              </SelectItem>
              <SelectItem value="Germany">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇩🇪</span>
                  <span>Germany</span>
                </div>
              </SelectItem>
              <SelectItem value="France">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇫🇷</span>
                  <span>France</span>
                </div>
              </SelectItem>
              <SelectItem value="Spain">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇪🇸</span>
                  <span>Spain</span>
                </div>
              </SelectItem>
              <SelectItem value="Italy">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🇮🇹</span>
                  <span>Italy</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filter */}
        <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium">
            Advanced Filter
            <svg
              className={`h-4 w-4 transition-transform ${isAdvancedOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            {/* Target Country */}
            <div>
              <h4 className="text-sm mb-2">Target Country</h4>
              <Select value={filters.targetCountry} onValueChange={handleTargetCountryChange}>
                <SelectTrigger className="bg-gray-900 border-gray-800 !text-white !h-10 w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="United States">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">🇺🇸</span>
                      <span>United States</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Global">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">🌎</span>
                      <span>Global</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Europe">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">🇪🇺</span>
                      <span>Europe</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs">min: 50%</span>
                <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#c1ff00] w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Age */}
            <div>
              <h4 className="text-sm mb-2 flex items-center">
                <span className="mr-2">Age</span>
                <span className="text-xs text-gray-500">
                  {filters.ageRange[0]}y - {filters.ageRange[1]}y
                </span>
              </h4>
              <div className="px-2">
                <Slider
                  value={filters.ageRange}
                  min={0}
                  max={15}
                  step={1}
                  onValueChange={handleAgeRangeChange}
                />
              </div>
            </div>

            {/* Monthly Revenue */}
            <div>
              <h4 className="text-sm mb-2 flex items-center">
                <span className="mr-2">Monthly Revenue</span>
                <span className="text-xs text-gray-500">
                  {formatCurrency(filters.revenueRange[0])} - {formatCurrency(filters.revenueRange[1])}
                </span>
              </h4>
              <div className="px-2">
                <Slider
                  value={filters.revenueRange}
                  min={0}
                  max={2000000}
                  step={50000}
                  onValueChange={handleRevenueRangeChange}
                />
              </div>
            </div>

            {/* Monthly Profit */}
            <div>
              <h4 className="text-sm mb-2 flex items-center">
                <span className="mr-2">Monthly Profit</span>
                <span className="text-xs text-gray-500">
                  {formatCurrency(filters.profitRange[0])} - {formatCurrency(filters.profitRange[1])}
                </span>
              </h4>
              <div className="px-2">
                <Slider
                  value={filters.profitRange}
                  min={0}
                  max={1500000}
                  step={50000}
                  onValueChange={handleProfitRangeChange}
                />
              </div>
            </div>

            {/* Monthly Pageviews */}
            <div>
              <h4 className="text-sm mb-2 flex items-center">
                <span className="mr-2">Monthly Pageviews</span>
                <span className="text-xs text-gray-500">
                  {formatPageviews(filters.pageviewsRange[0])} - {formatPageviews(filters.pageviewsRange[1])}
                </span>
              </h4>
              <div className="px-2">
                <Slider
                  value={filters.pageviewsRange}
                  min={0}
                  max={150000}
                  step={5000}
                  onValueChange={handlePageviewsRangeChange}
                />
              </div>
            </div>

            {/* Revenue multiple */}
            <div>
              <h4 className="text-sm mb-2 flex items-center">
                <span className="mr-2">Revenue multiple</span>
                <span className="text-xs text-gray-500">
                  {filters.revenueMultipleRange[0].toFixed(1)}x - {filters.revenueMultipleRange[1].toFixed(1)}x
                </span>
              </h4>
              <div className="px-2">
                <Slider
                  value={filters.revenueMultipleRange}
                  min={0}
                  max={8}
                  step={0.1}
                  onValueChange={handleRevenueMultipleRangeChange}
                />
              </div>
            </div>

            {/* Profit multiple */}
            <div>
              <h4 className="text-sm mb-2 flex items-center">
                <span className="mr-2">Profit multiple</span>
                <span className="text-xs text-gray-500">
                  {filters.profitMultipleRange[0].toFixed(1)}x - {filters.profitMultipleRange[1].toFixed(1)}x
                </span>
              </h4>
              <div className="px-2">
                <Slider
                  value={filters.profitMultipleRange}
                  min={0}
                  max={5}
                  step={0.1}
                  onValueChange={handleProfitMultipleRangeChange}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Clear/Find buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Button variant="outline" className="border-gray-800" onClick={onClearFilters}>
            Clear
          </Button>
          <Button className="bg-[#c1ff00] text-black hover:bg-[#a8e600]" onClick={handleFindClick}>
            Find
          </Button>
        </div>
      </div>

      {/* Upgrade banner */}
      <div className="mt-auto pt-6">
        <div className="bg-[#c1ff00] text-black p-4 rounded-lg">
          <h3 className="font-bold text-center mb-2">Upgrade Your Account To Premium</h3>
          <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
            Let's Go <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
