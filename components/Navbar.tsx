'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white border-b border-cyan-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-cyan-600">
              ECHO
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/cart" className="relative text-gray-600 hover:text-cyan-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
