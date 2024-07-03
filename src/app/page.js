import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h1>Home</h1>
    </>
  );
}
