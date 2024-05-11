import Button from "@/components/button";
import Container from "@/components/container";
import Header from "@/components/header";
import Hero from "@/components/section/hero";
import Usps from "@/components/section/usps";
import { VideoCarousel } from "@/components/video-carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}
