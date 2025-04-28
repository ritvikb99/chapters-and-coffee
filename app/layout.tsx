import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chapters & Coffee",
  description: "A blog for book lovers and coffee enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
