'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center w-full flex-grow flex flex-col justify-center items-center">
        <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mb-8">
           <ShoppingCart className="w-10 h-10 text-cyan-400" />
        </div>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">Your Cart is Empty</h1>
        <p className="text-xl text-gray-500 mb-10">Looks like you haven't added any digital art to your cart yet.</p>
        <Link href="/" className="inline-block bg-cyan-600 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg">
          Browse Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
      <h1 className="text-4xl font-display font-bold text-gray-900 mb-10 tracking-tight">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100 gap-6 transition-all hover:bg-gray-50">
              <Link href={`/product/${item.id}`} className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 block border border-gray-200">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </Link>
              
              <div className="flex-grow flex flex-col justify-between h-full w-full">
                <div>
                  <Link href={`/product/${item.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-cyan-600 transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-sm text-cyan-600 font-medium uppercase mt-1 tracking-wider">{item.category}</p>
                </div>
                
                <div className="flex items-center justify-between mt-6 sm:mt-8 w-full">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-medium text-gray-900 min-w-[40px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="font-bold text-lg text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-gray-50 rounded-full hover:bg-red-50"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Digital Delivery</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="border-t border-gray-100 mt-4 flex flex-col gap-2">
                <div className="flex justify-between items-end pt-4">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-bold text-cyan-600 tracking-tight">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-[11px] text-gray-400 text-right">Includes applicable taxes</p>
              </div>
            </div>

            <Link 
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 text-white font-bold py-4 rounded-xl hover:bg-cyan-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}