import Container from "@/components/container";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className=" h-[300vh]">
          <Container>Hero component</Container>
        </div>
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
