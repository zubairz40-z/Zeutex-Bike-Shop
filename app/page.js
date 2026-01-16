import Image from "next/image";
import HeroSection from './../Components/Sections/HeroSection';
import ExploreProducts from "@/Components/Sections/ExploreProductSection";

export default function Home() {
  return (
     <>
      {/* Hero Section */}
      <HeroSection />
   <ExploreProducts/>
      {/* Footer will show automatically from layout.js */}
    </>
  );
}
