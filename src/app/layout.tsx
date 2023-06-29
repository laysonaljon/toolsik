import { Footer, Navbar } from './components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toolsik',
  description: 'Discover a vast collection of powerful software tools and converters at Toolsik, providing seamless solutions for all your conversion needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="gradient__bg">
          <Navbar/>
            {children}
        </div>
        
        <Footer/>
        
      </body>
    </html>
  )
}
