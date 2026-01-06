import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Vishwas",
  description: "In-depth car reviews and automotive insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`w-full h-screen bg-gray-100 text-black`}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
