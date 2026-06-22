import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-cyan-900 text-white py-24 sm:py-32 relative overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/echobg/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <h1 className="text-5xl sm:text-7xl font-display font-bold mb-6 tracking-tight">
            Resonate with ECHO
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto text-cyan-100 font-light">
            Discover exclusive digital art pieces that elevate your space and inspire your mind.
          </p>
          <a href="#gallery" className="inline-block bg-white text-cyan-900 font-bold py-4 px-10 rounded-full hover:bg-cyan-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Gallery
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium border border-cyan-600 cursor-pointer">
               All Works
            </span>
            {categories.map((cat) => (
              <span key={cat} className="px-6 py-2 bg-cyan-50 text-cyan-800 rounded-full text-sm font-medium border border-cyan-100 cursor-pointer hover:bg-cyan-100 transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section id="gallery" className="py-20 sm:py-24 bg-gray-50 flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-16 text-gray-900">
            Featured Artworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cyan-100">
                <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                  <Image 
                    src={product.imageUrl} 
                    alt={product.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-cyan-600 font-bold tracking-wider uppercase mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900 border-b-2 border-cyan-300 pb-1">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-cyan-600 font-medium group-hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
