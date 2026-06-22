'use client';

import { useState } from 'react';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center w-full flex-grow flex flex-col justify-center items-center">
        <CheckCircle className="w-24 h-24 text-cyan-500 mb-8" />
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">Payment Successful!</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
          Thank you for your purchase. Your digital artworks have been sent to your email and are ready to download.
        </p>
        <Link href="/" className="inline-block bg-cyan-600 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-700 transition-colors shadow-md">
          Return to Gallery
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center w-full flex-grow flex flex-col items-center justify-center">
        <p className="text-xl text-gray-500 mb-6">Your cart is empty.</p>
        <Link href="/#gallery" className="text-cyan-600 hover:text-cyan-800 font-medium hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Go back to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
      <Link href="/cart" className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Cart
      </Link>
      
      <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-10 tracking-tight">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Checkout Form */}
        <div className="lg:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact Info */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder:text-gray-300" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder:text-gray-300" placeholder="Doe" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder:text-gray-300" placeholder="jane@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder:text-gray-300" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </section>

            {/* Billing Address */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Billing Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input type="text" id="address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input type="text" id="city" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State / Province</label>
                  <input type="text" id="state" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">ZIP / Postal Code</label>
                  <input type="text" id="zip" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <div className="relative">
                    <select id="country" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-white appearance-none">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="EU">European Union</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment via External Link Simulation */}
            <section className="bg-cyan-50 p-8 rounded-3xl border border-cyan-100 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Lock className="w-8 h-8 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">Secure External Payment</h2>
              <p className="text-gray-600 mb-8 max-w-md">
                Clicking the button below will redirect you to our secure payment partner to complete your purchase of <strong>${cartTotal.toFixed(2)}</strong>.
              </p>
              
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full sm:w-auto min-w-[280px] bg-cyan-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-cyan-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:shadow-md flex items-center justify-center gap-3 text-lg"
              >
                {isProcessing ? 'Redirecting to Partner...' : `Pay $${cartTotal.toFixed(2)} with SecurePay`}
                {!isProcessing && <ExternalLink className="w-5 h-5" />}
              </button>
              <p className="mt-4 text-xs text-gray-500 flex items-center gap-1"><Lock className="w-3 h-3"/> SSL Encrypted Checkout</p>
            </section>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-2/5">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
            
            <div className="space-y-5 max-h-[40vh] overflow-y-auto mb-8 pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 bg-gray-50">
                    <Image src={item.imageUrl} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute -top-1.5 -right-1.5 bg-gray-600 text-white text-[10px] font-bold rounded-full z-10 w-5 h-5 flex items-center justify-center shadow-sm">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-cyan-600 font-medium mt-0.5">{item.category}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-sm font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Digital Delivery</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-cyan-600 tracking-tight">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
