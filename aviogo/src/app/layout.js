import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../../components/navBar/NavBar'
import ContextProvider from '../../context/ContextProvider'
import Footer from '../../components/footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aviogo',
  description: 'Fly like an eagle, into the skyyyy, flyyyyy',
}

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <NavBar />
          {/*/pd-hz adds consistent padding across all page components//*/}
          <div className='pd-hz ht-100 pd-vt bg-light-gray'>
          {children}
          </div>
          <Footer/>
        </body>
      </html>
    </ContextProvider>
  );
}
