import Link from "next/link";

function HeroSection() {
    return (
      <section className="relative h-screen flex items-center bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
              Create Your Perfect Wedding Day
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Plan, organize and share all the details of your special day with our beautiful wedding website and planning tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup" className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg text-center transition-colors">
                Get Started
              </Link>
              <Link href="#features" className="px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg text-center transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default HeroSection