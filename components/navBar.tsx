import { SignedIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgClose, CgCross, CgMenuRight } from "react-icons/cg";
const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-8 lg:px-16 py-8  flex flex-col lg:flex-row lg:items-center lg:justify-between ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black">MS</h2>

        {isOpen ? (
          <CgClose
            size={26}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <CgMenuRight
            className=" lg:hidden"
            size={26}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
      <ul
        className={`${
          isOpen ? "flex flex-col" : "hidden"
        } lg:flex gap-4 lg:gap-8 lg:items-center py-4`}
      >
        <li>
          <a
            href=""
            className="text-neutral-800 hover:text-neutral-950 transition ease-in-out"
          >
            Služby
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-neutral-800 hover:text-neutral-950 transition ease-in-out "
          >
            O nás
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-neutral-800 hover:text-neutral-950 transition ease-in-out "
          >
            Kontakt
          </a>
        </li>
        <SignedIn>
          <Button onClick={() => router.push("/protected")}>Dashboard</Button>
        </SignedIn>
      </ul>
    </nav>
  );
};

export default NavBar;
