'use client';

import { useState } from 'react';
import { useCart } from '@/components/CartContext';
import { Product } from '@/lib/data';
import { ShoppingCart, Check } from 'lucide-react';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={added}
      className={`w-full flex items-center justify-center py-4 px-10 gap-3 text-lg font-bold rounded-xl transition-all duration-300 ${
        added 
          ? 'bg-green-500 text-white shadow-md cursor-default border-green-600 border'
          : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {added ? (
        <>
          <Check className="w-5 h-5" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </>
      )}
    </button>
  );
}
