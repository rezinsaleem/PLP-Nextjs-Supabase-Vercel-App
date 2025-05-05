'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isMettamuseOpen, setIsMettamuseOpen] = useState(false);

  return (
    <div className="bg-black">
      <footer className="text-white py-12 px-4 md:px-8">
        {/* Top Section */}
        <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between gap-16 mb-12 px-6">
          {/* Newsletter Section */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold">BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="bg-white text-black px-4 py-2 w-full"
                aria-label="Email for newsletter"
              />
              <button className="border border-gray-400 text-gray-400 rounded-sm px-4 py-2 hover:bg-white hover:text-black transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold">CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">CURRENCY</h3>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image src="/us-flag.svg" alt="US Flag" width={24} height={24} />
                </div>
                <span>• USD</span>
              </div>
              <p className="text-xs mt-2">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-white my-8" />

        {/* Middle Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand and Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">mettā muse</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Artisans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Boutiques
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  EU Compliances Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (Collapsible) */}
          <div className="space-y-6">
  {/* Quick Links heading */}
  <h3
    className="text-xl font-bold cursor-pointer lg:block block" // Ensures it shows on mobile/tablet (lg:block shows on large screens)
    onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
  >
    QUICK LINKS
  </h3>

  {/* Quick Links List - Collapsible on smaller screens */}
  <ul
    className={`space-y-3 ${isQuickLinksOpen ? 'block' : 'hidden'} lg:block`} // Toggles visibility based on the state for mobile/tablet
  >
    <li>
      <Link href="#" className="hover:underline">
        Orders & Shipping
      </Link>
    </li>
    <li>
      <Link href="#" className="hover:underline">
        Join/Login as a Seller
      </Link>
    </li>
    <li>
      <Link href="#" className="hover:underline">
        Payment & Pricing
      </Link>
    </li>
    <li>
      <Link href="#" className="hover:underline">
        Return & Refunds
      </Link>
    </li>
    <li>
      <Link href="#" className="hover:underline">
        FAQs
      </Link>
    </li>
    <li>
      <Link href="#" className="hover:underline">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link href="#" className="hover:underline">
        Terms & Conditions
      </Link>
    </li>
  </ul>
</div>



          {/* Follow Us (mobile) and Payment Methods */}
          <div className="space-y-8">
            {/* Follow Us Section - Only visible on larger screens */}
            <div className="hidden lg:block">
              <h3 className="text-xl font-bold mb-6">FOLLOW US</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-xl font-bold mb-6">mettā muse ACCEPTS</h3>
              <div className="grid grid-cols-6 gap-2">
                <div className="rounded flex items-center justify-center">
                  <Image src="/google-pay.svg" alt="Google Pay" width={50} height={20} />
                </div>
                <div className="rounded flex items-center justify-center">
                  <Image src="/mastercard.svg" alt="Mastercard" width={50} height={20} />
                </div>
                <div className="rounded flex items-center justify-center">
                  <Image src="/paypal.svg" alt="PayPal" width={50} height={20} />
                </div>
                <div className="rounded flex items-center justify-center">
                  <Image src="/amex.svg" alt="American Express" width={50} height={20} />
                </div>
                <div className="rounded flex items-center justify-center">
                  <Image src="/apple-pay.svg" alt="Apple Pay" width={50} height={20} />
                </div>
                <div className="rounded flex items-center justify-center">
                  <Image src="/shop-pay.svg" alt="Shop Pay" width={50} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl text-xs text-gray-100 mx-auto text-center">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
