import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ECHO Digital Art',
  description: 'E-commerce website for ECHO digital art.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <footer className="bg-white border-t border-cyan-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 flex flex-col sm:flex-row justify-between items-center">
               <span>&copy; {new Date().getFullYear()} ECHO Digital Art. All rights reserved.</span>
               <div className="mt-4 sm:mt-0 flex space-x-6">
                 <Link href="#" className="hover:text-cyan-600">Terms</Link>
                 <Link href="#" className="hover:text-cyan-600">Privacy</Link>
               </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
