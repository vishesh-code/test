import Link from 'next/link';

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Start Planning Your Perfect Day?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of couples who have made their wedding planning journey stress-free and enjoyable.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/auth/signup"
            className="px-8 py-3 bg-white text-pink-600 hover:bg-gray-100 font-medium rounded-lg text-center transition-colors"
          >
            Create Your Wedding Website
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;