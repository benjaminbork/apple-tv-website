import Button from "@/components/button";
import Container from "@/components/container";
import Header from "@/components/header";
import Hero from "@/components/section/hero";
import Usps from "@/components/section/usps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background text-white">
          <Hero />
          <Usps />
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
