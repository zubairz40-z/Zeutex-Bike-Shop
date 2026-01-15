import "../styles/globals.css";
import Navbar from "../components/Navbar";

import Footer from './../Components/Footer';

export const metadata = {
  title: "E-Bike App",
  description: "Ride the Future with Our E-Bikes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
