
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
export const metadata: Metadata = {
  title: "TechCare",
  description: "Efficient, clean, and scalable health dashboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F6F7F8] text-gray-900">
        <div className="flex justify-center">
          <Navbar />
        </div>

        <main className="flex justify-center px-4 md:px-6">
          <div className="w-full max-w-[1564px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
