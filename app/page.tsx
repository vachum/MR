"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-react";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const { openSignIn, signOut } = useClerk();
  return (
    <main>
      <nav className="bg-neutral-200 p-4"></nav>

      <h1>Home</h1>
    </main>
  );
}
