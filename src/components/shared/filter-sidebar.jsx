"use client";

import { useState, useEffect } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import clsx from "clsx";
import { PriceSlider2 } from "@/components/custom/price-slider";

import Flag from "react-world-flags";
import { getCountryCode } from "countries-list";



export default function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
  mobile = false,
}) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  

  const handleSearchChange = (e) => {
    onFilterChange({ search: e.target.value });
  };

  const handleNicheChange = (value) => {
    onFilterChange({ niche: value });
  };

  const handleRevenueGeneratingChange = (value) => {
    onFilterChange({
      revenueGenerating: value === "yes" ? true : value === "no" ? false : null,
    });
  };

  const handlePriceRangeChange = (value) => {
    onFilterChange({ priceRange: value });
  };

  const handleLocationChange = (value) => {
    onFilterChange({ location: value });
  };

  const handleTargetCountryChange = (value) => {
    onFilterChange({ targetCountry: value });
  };

  const handleAgeRangeChange = (value) => {
    onFilterChange({ ageRange: value });
  };

  const handleRevenueRangeChange = (value) => {
    onFilterChange({ revenueRange: value });
  };

  const handleProfitRangeChange = (value) => {
    onFilterChange({ profitRange: value });
  };

  const handlePageviewsRangeChange = (value) => {
    onFilterChange({ pageviewsRange: value });
  };

  const handleRevenueMultipleRangeChange = (value) => {
    onFilterChange({ revenueMultipleRange: value });
  };

  const handleProfitMultipleRangeChange = (value) => {
    onFilterChange({ profitMultipleRange: value });
  };

  const handleFindClick = () => {
    // This is just to trigger a re-render
    onFilterChange({ ...filters });
  };

  // Format currency for display
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`;
    } else {
      return `$${amount}`;
    }
  };

  // Format pageviews for display
  const formatPageviews = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K`;
    } else {
      return amount;
    }
  };

  return (
    <div className="p-4 h-full flex flex-col md:min-w-[24.3125em] w-full">
      {!mobile && (
        <div className="flex items-center mb-4">
          {/* <div className="bg-[#c1ff00] text-black font-bold p-1.5 rounded text-xl">BX</div> */}
          <Image src={"/logo.png"} height={60} width={60} alt="filter-logo" />
        </div>
      )}

      <div className="bg-[#18181A] p-[24px] rounded-[16px] ">
        <h3 className="font-medium mb-4 leading-[150%]">Filter Options</h3>

        <div className="space-y-6 flex-1 overflow-y-auto">
          {/* Search */}
          <div className="relative gap-[10px] flex  items-center bg-[#FFFFFF0D]  rounded-[16px] p-[16px]  pl-[20px]">
            <Search size={24} className="  text-white" />
            <Input
              // placeholder="Search"
              placeholder="Search"
              className=" placeholder:text-white !text-white border-none focus:border-none ring-0 focus:outline-none focus:ring-0 shadow-none"
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>

          {/* Niche */}
          <div>
            <h4 className="text-sm mb-2  text-[16px] leading-[150%]">Niche</h4>
            <div className="p-[16px] pl-[20px] bg-[#FFFFFF0D] rounded-[16px] mb-4">
              <Select value={filters.niche} onValueChange={handleNicheChange}>
                <SelectTrigger className="  outline-none border-none !text-white !h-10 w-full">
                  <SelectValue placeholder="Select niche" />
                </SelectTrigger>
                <SelectContent
                  className={
                    "bg-[#18181A] text-[16px] text-white border-none outline-none"
                  }
                >
                  <SelectItem value="all">All Niches</SelectItem>
                  <SelectItem value="SaaS">SaaS</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Content">Content</SelectItem>
                  <SelectItem value="Digital Products">
                    Digital Products
                  </SelectItem>
                  <SelectItem value="Lead Gen">Lead Gen</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Revenue generating */}
          <div>
            <h4 className="text-sm mb-2 text-[16px] leading-[150%]">
              Revenue generating
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={
                  filters.revenueGenerating === true ? "default" : "outline"
                }
                className={clsx(
                  filters.revenueGenerating === true
                    ? "bg-[#c1ff00]  text-black p-[16px] hover:bg-[#a8e600]"
                    : "border-gray-800 border-none outline-none bg-[#FFFFFF0D]",
                  "gap-[10px] md:h-[56px] md:w-[141.5px] rounded-[16px]"
                )}
                onClick={() => handleRevenueGeneratingChange("yes")}
              >
                Yes
              </Button>
              <Button
                variant={
                  filters.revenueGenerating === false ? "default" : "outline"
                }
                className={clsx(
                  filters.revenueGenerating === false
                    ? "bg-[#c1ff00] text-black hover:bg-[#a8e600]"
                    : "border-gray-800 bg-[#FFFFFF0D] border-none outline-none",
                  "gap-[10px] md:h-[56px] md:w-[141.5px] rounded-[16px]"
                )}
                onClick={() => handleRevenueGeneratingChange("no")}
              >
                No
              </Button>
            </div>
          </div>

          {/* Price */}
          <div className="bg-[#242425] rounded-[16px] p-[12px]">
            <h4 className="text-sm mb-2 flex gap-[16px] flex-col ">
              <span className="mr-2   text-[18px] h-[27px] leading-[150%]">
                Price
              </span>
              <span className="text-[14px] leading-[150%] flex justify-between  text-white">
                <span className="text-[14px]">
                  {formatCurrency(filters.priceRange[0])}
                </span>
                <span className="text-[14px]">
                  {formatCurrency(filters.priceRange[1])}
                </span>
              </span>
            </h4>
            <div className="px-2">
              <PriceSlider2
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                min={500}
                max={5000}
                step={100}
              />
              {/* <Slider
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                min={500}
                max={5000}
                step={100}
              /> */}
            </div>
            {/* <div className="mt-4 relative h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c1ff00] to-gray-500 opacity-50 h-8 rounded"></div>
            </div> */}
          </div>

          {/* Business Location */}
          <div>
            <h4 className="mb-2 text-[16px] leading-[150%]">
              Business Location
            </h4>
            <div className="bg-[#FFFFFF0D] p-[16px] rounded-[16px]">
              <Select
                value={filters.location}
                onValueChange={(value) => {
                  handleLocationChange(value);
                }}
              >
                <SelectTrigger className="bg-transparent border-none outline-none !text-white !h-10 w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent
                  className={
                    "bg-[#18181A] text-[16px] text-white focus:!border-none !border-none !outline-none"
                  }
                >
                  <SelectItem value="all">All Locations</SelectItem>

                  <SelectItem value={"United States"}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs rounded-[22px]">
                        <Flag
                          code={getCountryCode("United States")}
                          className="rounded-full h-[26px] w-[26px] object-cover"
                        />
                      </span>
                      <span>United States</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="India">
                    <div className="flex items-center gap-2">
                      <span className="text-xs"> <Flag
                          code={getCountryCode("India")}
                          className="rounded-full h-[26px] w-[26px] object-cover"
                        /></span>
                      <span>India</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="United Kingdom">
                    <div className="flex items-center gap-2">
                      <span className="text-xs"> <Flag
                          code={getCountryCode("United Kingdom")}
                          className="rounded-full h-[26px] w-[26px] object-cover"
                        /></span>
                      <span>United Kingdom</span>
                    </div>
                  </SelectItem>
                 
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Advanced Filter */}
          <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium">
              Advanced Filter
              <svg
                className={`h-4 w-4 transition-transform ${
                  isAdvancedOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 mt-4">
              {/* Target Country */}
              <div>
                <h4 className="text-sm mb-2">Target Country</h4>
                <Select
                  value={filters.targetCountry}
                  onValueChange={handleTargetCountryChange}
                >
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
                    {formatCurrency(filters.revenueRange[0])} -{" "}
                    {formatCurrency(filters.revenueRange[1])}
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
                    {formatCurrency(filters.profitRange[0])} -{" "}
                    {formatCurrency(filters.profitRange[1])}
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
                    {formatPageviews(filters.pageviewsRange[0])} -{" "}
                    {formatPageviews(filters.pageviewsRange[1])}
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
                    {filters.revenueMultipleRange[0].toFixed(1)}x -{" "}
                    {filters.revenueMultipleRange[1].toFixed(1)}x
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
                    {filters.profitMultipleRange[0].toFixed(1)}x -{" "}
                    {filters.profitMultipleRange[1].toFixed(1)}x
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
            <Button
              variant="outline"
              className="border-gray-800"
              onClick={onClearFilters}
            >
              Clear
            </Button>
            <Button
              className="bg-[#c1ff00] text-black hover:bg-[#a8e600]"
              onClick={handleFindClick}
            >
              Find
            </Button>
          </div>
        </div>

        {/* Upgrade banner */}
        <div className="mt-auto pt-6">
          <div className="bg-[#c1ff00] text-black p-4 rounded-lg">
            <h3 className="font-bold text-center mb-2">
              Upgrade Your Account To Premium
            </h3>
            <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
              Let's Go <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
