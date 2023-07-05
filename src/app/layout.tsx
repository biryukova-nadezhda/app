import './globals.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Relocate App',
  description: 'Relocate App - Reliable relocation with us',
}

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={ inter.className }>{ children }</body>
    </html>
  )
}

export default RootLayout;