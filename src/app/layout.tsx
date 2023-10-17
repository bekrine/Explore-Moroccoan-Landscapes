import './globals.css'
import type { Metadata } from 'next'
import { Dancing_Script } from 'next/font/google'
import "tw-elements/dist/css/tw-elements.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const inter = Dancing_Script({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Explore Moroccan Landscapes',
  description: "Explore the world's most captivating destinations with our premier tourist site. Uncover the beauty of breathtaking landscapes, immerse yourself in rich cultures, and embark on unforgettable journeys. From idyllic beaches to historic landmarks, our website is your ultimate guide to wanderlust. Discover the best travel tips, local insights, and travel itineraries to make your vacation dreams a reality. Start your adventure today with us and create memories that last a lifetime",
  icons: {
    icon: '/favicon.jpeg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-[100vh]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
