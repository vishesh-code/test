// components/layout/Header.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check if user is on dashboard pages
  const isDashboard = pathname.startsWith('/dashboard');
  
  // We're simplifying authentication check - in a real app you'd use a proper auth system
  const isLoggedIn = isDashboard; // Just for demo purposes
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-pink-600">
              Forever Together
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#features" className="text-gray-600 hover:text-pink-600">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-pink-600">Pricing</Link>
            <Link href="/templates" className="text-gray-600 hover:text-pink-600">Templates</Link>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-pink-600">Dashboard</Link>
                <button 
                  onClick={() => router.push('/')} 
                  
                  className="text-gray-600 hover:text-pink-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-600 hover:text-pink-600">Log In</Link>
                <Link 
                  href="/auth/signup" 
                  className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/#features" className="text-gray-600 hover:text-pink-600 py-2" onClick={() => setMenuOpen(false)}>Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-pink-600 py-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
              <Link href="/templates" className="text-gray-600 hover:text-pink-600 py-2" onClick={() => setMenuOpen(false)}>Templates</Link>
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="text-gray-600 hover:text-pink-600 py-2" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                  <button 
                    onClick={() => {
                      router.push('/');
                      setMenuOpen(false);
                    }} 
                    className="text-gray-600 hover:text-pink-600 py-2 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="text-gray-600 hover:text-pink-600 py-2" onClick={() => setMenuOpen(false)}>Log In</Link>
                  <Link 
                    href="/auth/signup" 
                    className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg inline-block"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

