import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import {Providers} from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: 'Coffee shop',
  description: 'Create e-commerce app Nextjs',
 icons:{
    icon:'/assets/icon.png',

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
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
