import Image from "next/image";
import HeroSection from './../Components/Sections/HeroSection';
import ExploreProducts from "@/Components/Sections/ExploreProductSection";
import Testimonials from "@/Components/Sections/TestimonialsSection";
import FeaturesSection from "@/Components/Sections/FeaturesSection";
import HowItWorksSection from "@/Components/Sections/HowitworkSection";
import AboutSection from "@/Components/Sections/AboutSection";
import CalltoActionSection from "@/Components/Sections/CalltoActionSection";

export default function Home() {
  return (
     <>
     
      <HeroSection />
   <ExploreProducts/>
       <FeaturesSection/>
       <HowItWorksSection/>
   <Testimonials/>
   <AboutSection/>
   <CalltoActionSection/>
   
    

      
    </>
  );
}
