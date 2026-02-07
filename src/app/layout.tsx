import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import { ChatBot } from "@/components/chat/ChatBot";
import { AuthGuard } from "@/components/auth/AuthGuard";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "WoofWise - Dog Breed Identifier",
  description: "Identify your dog's breed instantly with AI magic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans flex flex-col min-h-screen bg-[#fcfaf5]`}
      >
        <UserProvider>
          <CartProvider>
            <AuthGuard>
              {children}
            </AuthGuard>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
