import Hero from "@/Components/Sections/HeroSection"; 
import ExploreProducts from "@/Components/Sections/ExploreProductSection";
import Testimonials from "@/Components/Sections/TestimonialsSection";
import FeaturesSection from "@/Components/Sections/FeaturesSection";
import HowItWorksSection from "@/Components/Sections/HowitworkSection";
import AboutSection from "@/Components/Sections/AboutSection";
import FAQCTASection from "@/Components/Sections/CalltoActionSection"; 

export default function Home() {
  return (
    <>
      <Hero id="hero" />
      <ExploreProducts id="explore" />
      <FeaturesSection id="features" />
      <HowItWorksSection id="how-it-works" />
      <Testimonials id="testimonials" />
      <AboutSection id="about" />
      <FAQCTASection id="cta" />
    </>
  );
}
