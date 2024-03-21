"use client";
import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, useClerk, SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div>
      <SignedOut>
        <div className="w-full h-screen flex justify-center items-center">
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <p>Jste přihlášen</p>
      </SignedIn>
    </div>
  );
};

export default Login;
