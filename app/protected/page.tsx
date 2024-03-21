"use client";
import GetData from "@/components/getData";
import { CreateTask } from "@/components/insertData";
import {
  SignedIn,
  SignOutButton,
  SignedOut,
  useClerk,
} from "@clerk/clerk-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoMdAdd, IoMdExit } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DashDropDown from "@/components/dashboardDropDown";

const Dashboard = () => {
  const [IsOpen, setIsOpen] = useState("false");

  return (
    <div>
      <SignedOut>
        <p>Nejste přihlášeni</p>
      </SignedOut>
      <SignedIn>
        <div className="h-screen grid grid-rows-12">
          <nav className="bg-neutral-300 row-start-1 flex items-center justify-between p-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    size="icon"
                    onClick={() => {
                      setIsOpen(!IsOpen);
                    }}
                  >
                    <IoMdAdd size={23} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Přidat službu</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DashDropDown />
          </nav>
          <div className="flex gap-8 row-start-2 row-end-13 ">
            {IsOpen && (
              <div className="w-[30em]">
                <CreateTask />
              </div>
            )}
            <div className="w-full ">
              <GetData user={false} />
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default Dashboard;
