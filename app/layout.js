import "../styles/globals.css";

import { AuthProvider } from "../app/context/AuthContext"; // ✅ import context

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "E-Bike App",
  description: "Ride the Future with Our E-Bikes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-montserrat bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 text-gray-900">
        {/* Wrap Navbar + children with AuthProvider */}
        <AuthProvider>
          <Navbar />

          {/* Main content */}
          <main className="min-h-screen">{children}</main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
