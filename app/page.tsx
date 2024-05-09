import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className=" h-[300vh]">Hero component</div>
        <div>usps</div>
        <div>3 col layout</div>
        <div> Carousel with posters</div>
      </main>
    </>
  );
}
