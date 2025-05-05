"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { ChevronDown, Heart, Search, ShoppingBag, User, Menu, User2 } from "lucide-react"
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"
import toast from "react-hot-toast";

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    // Listen for session changes
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  }, []);

  const handleClick = async () => {
    if (user) {
      await supabase.auth.signOut();
      toast.success("Logged out successfully!");
      setUser(null);
      router.push('/'); // Redirect after logout (optional)
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <header className="w-full">
      {/* Top black bar */}
      <div className="bg-black text-rose-500/60 py-1.5 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-around items-center font-thin">
          <div className="hidden md:flex items-center">
            <div className="h-3 w-3 border border-rose-500/60 flex items-center justify-center">
              <div className="h-2 w-2 border border-rose-500/60"></div>
            </div>
            <span className="ml-2 text-xs">Lorem ipsum dolor</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 border border-rose-500/60 flex items-center justify-center">
              <div className="h-2 w-2 border border-rose-500/60"></div>
            </div>
            <span className="ml-2 text-xs">Lorem ipsum dolor</span>
          </div>
          <div className="hidden md:flex items-center">
            <div className="h-3 w-3 border border-rose-500/60 flex items-center justify-center">
              <div className="h-2 w-2 border border-rose-500/60"></div>
            </div>
            <span className="ml-2 text-xs">Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="py-6 px-6 md:px-8 bg-gray-100 border-b ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Hamburger + Logo Image */}
          <div className="flex items-center space-x-4">
            {/* Hamburger - visible only on small screens */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </button>

            {/* Logo Image */}
            <img className="h-8 w-8" src="/image.png" alt="Logo" /><span className="text-gray-100 hidden lg:flex">........................</span>
          </div>

          {/* Center: Text Logo */}
          <div className="flex justify-center flex-grow">
            <h1 className="text-2xl md:text-3xl  font-bold text-gray-900">LOGO</h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3 text-gray-900 ">
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button aria-label="User" onClick={handleClick}>
      {user ? (
        <span className="hidden md:flex items-center cursor-pointer">LogOut</span> // You can also display an icon here for logout
      ) : (
        <User2 className="h-5 w-5 hidden lg:block cursor-pointer" />
      )}
    </button>

            {/* Language Dropdown - show only on md and up */}
            <div className="hidden md:flex items-center">
              <span className="mr-1">ENG</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mt-4 bg-white rounded shadow-md p-4 space-y-3 md:hidden text-right">
           {/* Conditionally render Sign In or Log Out based on user state */}
          <button onClick={handleClick} className="text-gray-900 font-medium">
            {user ? "LogOut" : "SignIn"} {/* Display Log Out if user is logged in, else Sign In */}
          </button>
            <div className="text-gray-700">Option 1</div>
            <div className="text-gray-700">Option 2</div>
            <div className="text-gray-700">Option 3</div>
            <div className="border-t pt-3 font-semibold">HOME | SHOP</div>
          </div>
        )}
      </div>
    </header>
  )
}
