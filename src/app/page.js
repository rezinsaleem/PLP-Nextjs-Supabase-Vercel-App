// app/page.tsx or app/products/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

export default async function Home() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");
    products = await res.json();
    if (!Array.isArray(products)) products = [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Go Shop →
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className=" bg-gray-100">
        <div className="max-w-7xl lg:mx-13 px-4 py-8">
          <div className="text-center text-gray-900">
            <h1 className="lg:text-5xl font-medium mb-6 mt-14 text-3xl sm:mt-8 sm:mb-4 sm:whitespace-nowrap">
              DISCOVER OUR PRODUCTS
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-16 sm:text-base sm:max-w-full sm:px-4">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              <br />
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </div>
      <Footer />
    </>
  );
}
