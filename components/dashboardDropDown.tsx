import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignOutButton,
  SignedOut,
  useClerk,
} from "@clerk/clerk-react";
import { IoMdExit, IoMdMenu, IoMdMore, IoMdHome } from "react-icons/io";
import { useRouter } from "next/navigation";

const DashDropDown = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size="icon">
          <IoMdMore size={26} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 mx-3 p-1">
        <DropdownMenuItem>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="flex gap-2 items-center w-full"
          >
            <IoMdHome />
            Domů
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            className="flex gap-2 items-center w-full"
            onClick={() => signOut(() => router.push("/"))}
          >
            <IoMdExit />
            Odhlášení
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashDropDown;
