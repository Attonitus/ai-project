import type { Metadata } from "next";

import {
  ClerkProvider,
} from '@clerk/nextjs'

import { Poppins } from "next/font/google";

import "./globals.css";
import { QueryProvider } from "./providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner"



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Teach View App",
  description: "Aplicación para simular entrevistas tecnicas",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.className} antialiased`}
        >
          <QueryProvider>
            {children}
          </QueryProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>

  );
}
