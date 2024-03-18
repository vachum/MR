"use client";
import { Button } from "@/components/ui/button";
import { SignedOut, useClerk, SignIn } from "@clerk/clerk-react";

const Login = () => {
  const { openSignIn, signOut } = useClerk();
  return (
    <div>
      <p>Jste přihlášen</p>
      <SignedOut>
        <Button
          onClick={() => {
            () => {
              openSignIn();
            };
          }}
        >
          Přihlášení
        </Button>
      </SignedOut>
    </div>
  );
};

export default Login;
