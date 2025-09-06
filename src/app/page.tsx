import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[600px] md:h-[700px]">
        {/* Desktop Hero Image (hidden on mobile) */}
        <div className="hidden md:block w-full h-full relative">
          <Image 
            src="/images/hero-desktop.jpeg" 
            alt="EMU WC Premium Bathroom Solutions" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Mobile Hero Image (visible only on mobile) */}
        <div className="block md:hidden w-full h-full relative">
          <Image 
            src="/images/hero-mobile.jpeg" 
            alt="EMU WC Premium Bathroom Solutions" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              EMU WC Smart Toilets
            </h1>
            
            <p className="text-xl md:text-2xl mb-8">
              Premium Smart Bathroom Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-primary-main text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                Explore Products
              </Link>
              
              <Link 
                href="/contact" 
                className="bg-white text-primary-main px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4">

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E2100</h3>
              <p className="text-gray-600 mb-4">Smart Toilet Cover with Premium Features</p>
              <Link
                href="/products"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E2300</h3>
              <p className="text-gray-600 mb-4">Advanced Smart Toilet with Integrated Bidet</p>
              <Link
                href="/products"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E7200</h3>
              <p className="text-gray-600 mb-4">Wall-Hung Bidet Toilet with Smart Features</p>
              <Link
                href="/products"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 mb-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Ready to Upgrade Your Bathroom?
          </h2>
          <p className="text-lg mb-8">
            Experience the future of bathroom technology with EMU WC smart toilets and covers
          </p>
          <Link
            href="/about-us"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}