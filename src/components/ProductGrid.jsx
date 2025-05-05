"use client";
import { useState, useEffect } from "react";
import {
  Heart,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import FilterSidebar from "./FilterSidebar";
import { supabase } from "../lib/supabase"; // Adjust the import path as necessary

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW",
  "PRICE: LOW TO HIGH",
];

export default function ProductGrid({ products }) {
  const [showFilter, setShowFilter] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [user, setUser] = useState(null);

  // Lock body scroll when filter modal is open on small screens
  useEffect(() => {
    if (showFilter && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showFilter]);

  useEffect(() => {
    // Assuming you have a way to get the user session from Supabase or any other auth service
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    // Listen for session changes
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  return (
    <>
      {/* Filter & Sort Controls (Only for lg and up) */}
      <div className="border-t border-b border-gray-700 py-6 hidden lg:flex justify-between items-center mb-6">
        <div className="flex items-center space-x-5">
          <h1 className="text-gray-900 font-bold">{products.length} ITEMS</h1>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center ml-8 text-gray-500 hover:text-gray-700 font-serif underline"
          >
            {showFilter ? (
              <>
                <ChevronLeft className="mr-1 h-4 w-4" />
                HIDE FILTER
              </>
            ) : (
              <>
                <ChevronRight className="mr-1 h-4 w-4" />
                SHOW FILTER
              </>
            )}
          </button>
        </div>

        <div className="relative">
          <button
            className="flex items-center text-gray-900 font-bold"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedSort}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-sm z-10">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setDropdownOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 text-right hover:bg-gray-100 ${
                    selectedSort === option
                      ? "font-bold text-black"
                      : "text-gray-700"
                  }`}
                >
                  <div className="flex justify-end items-center gap-2">
                    {selectedSort === option && (
                      <Check className="w-4 h-4 font-bold" />
                    )}
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filter Button on Small Screens */}
      <div className="flex lg:hidden justify-between mb-4 border-t border-b border-gray-700 py-4 font-bold text-uppercase">
        <button
          onClick={() => setShowFilter(true)}
          className="text-gray-600 font-semibold uppercase underline"
        >
          Show Filter
        </button>

        {/* Sort Dropdown for Mobile */}
        <div className="relative">
          <button
            className="flex items-center text-gray-900 font-bold"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedSort}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-sm z-10">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setDropdownOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 text-right hover:bg-gray-100 ${
                    selectedSort === option
                      ? "font-bold text-black"
                      : "text-gray-700"
                  }`}
                >
                  <div className="flex justify-end items-center gap-2">
                    {selectedSort === option && (
                      <Check className="w-4 h-4 font-bold" />
                    )}
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Layout: Sidebar (lg only) + Product Grid */}
      <div
        className={`flex gap-6 ${
          showFilter ? "flex-col lg:flex-row" : "flex-col lg:flex-row"
        }`}
      >
        {/* Sidebar inline for lg and up */}
        {showFilter && (
          <div className="hidden lg:block w-full lg:w-1/4 min-w-[220px]">
            <FilterSidebar />
          </div>
        )}

        <div className={showFilter ? "w-full lg:w-3/4" : "w-full"}>
          <div
            className={`grid gap-6 ${
              showFilter
                ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="w-full py-8 px-3 overflow-hidden rounded-sm bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain" // Reduced height for mobile screens
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="w-full">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase ">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {user ? (
                        // Show price if user is logged in
                        <span className=" text-green-800 font-semibold">
                          $ {product.price}
                        </span>
                      ) : (
                        // Show sign-in prompt if user is not logged in
                        <>
                          <Link
                            href="/signin"
                            className="text-gray-500 hover:underline"
                          >
                            Sign in
                          </Link>{" "}
                          or{" "}
                          <Link
                            href="/signup"
                            className="text-gray-500 hover:underline"
                          >
                            Create an account
                          </Link>{" "}
                          to see pricing
                        </>
                      )}
                    </p>
                  </div>
                  <Heart className="h-6 w-6 mr-0.5 text-gray-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-In Filter Panel for Small Screens */}
      {showFilter && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowFilter(false)}
          />

          {/* Slide-In Panel */}
          <div className="absolute left-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-lg p-4 overflow-y-auto transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800 uppercase">
                Filter
              </h2>
              <button onClick={() => setShowFilter(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </>
  );
}
