"use client";

import GetData from "@/components/getData";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import heroImg from "./imgs/MS-mockup_one.jpg";
import heroImgTwo from "./imgs/MS-2.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import About from "@/components/about";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <main className="h-screen ">
        <NavBar />

        <Hero />
      </main>
      <section className="bg-neutral-100">
        <About />
      </section>
      <section className="w-full flex justify-center py-20 ">
        <div>
          <h3 className="px-8 font-bold text-3xl">Služby</h3>
          <GetData user={true} />
        </div>
      </section>

      <Footer />
    </>
  );
}
