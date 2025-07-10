// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"; // NEW
import Navbar from "@/components/Navbar"; // ⬅️ import your 
import { ThemeProvider } from "@/components/theme-provider"; // ✅
import { TransactionProvider } from "@/components/context/TransactionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Finance Visualizer",
  description: "Track your expenses and budgeting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TransactionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="p-6">{children}</main>
          </ThemeProvider>
        </TransactionProvider>
        <Toaster />
      </body>
    </html>
  );
}
