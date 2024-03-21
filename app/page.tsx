"use client";

import GetData from "@/components/getData";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
export default function Home() {
  return (
    <>
      <main className="h-screen">
        <NavBar />
        <Hero />
      </main>
      <section className="w-full flex justify-center ">
        <div>
          <h3 className="px-8 font-bold text-3xl">Služby</h3>
          <GetData user={true} />
        </div>
      </section>
    </>
  );
}
