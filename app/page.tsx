import Button from "@/components/button";
import Container from "@/components/container";
import Header from "@/components/header";
import Hero from "@/components/section/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>usps component</Container>
        </div>

        <div>
          <Container>3 col layout component</Container>
        </div>

        <div>
          <Container>Carousel with posters component</Container>
        </div>
      </main>
    </>
  );
}
