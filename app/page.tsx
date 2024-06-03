import FAQ from "@/components/FAQ";
// import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
// import SampleComponent from "@/components/SampleComponent";
// import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen w-full"
      style={{ backgroundImage: "url('/assets/images/background.svg')" }}
    >
      <HeroSection/>
      {/* <SampleComponent /> */}
      {/* <Testimonial /> */}
      <FAQ />
      {/* <GetStarted /> */}
    </main>
  );
}
