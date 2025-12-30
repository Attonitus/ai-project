import type { Metadata } from "next";

import {
  ClerkProvider,
} from '@clerk/nextjs'

import { Poppins } from "next/font/google";
import "./globals.css";

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
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
