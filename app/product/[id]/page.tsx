import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import AddToCartButton from './AddToCartButton';
import { ArrowLeft } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow flex flex-col items-center">
      <div className="w-full">
         <Link href="/#gallery" className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium mb-10 transition-colors">
           <ArrowLeft className="w-4 h-4 mr-2" />
           Back to Gallery
         </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start w-full">
        {/* Image */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 shadow-md border border-gray-200">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col h-full bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <h2 className="text-sm text-cyan-600 font-bold tracking-widest uppercase mb-3">
              {product.category}
            </h2>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              {product.title}
            </h1>
            <p className="text-3xl font-medium text-gray-900 mb-8 border-b border-gray-100 pb-8">
              ${product.price.toFixed(2)}
            </p>
            <div className="prose prose-cyan text-gray-600 text-lg leading-relaxed">
              <p>{product.description}</p>
              <p className="mt-4 text-sm text-gray-500 border-l-4 border-cyan-300 pl-4 bg-cyan-50/50 p-4 rounded-r-lg">
                High-resolution digital download. Available immediately after purchase. Original artwork by ECHO studio artists.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
