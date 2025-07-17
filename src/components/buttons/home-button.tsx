import Link from "next/link";
import { PiHouseFill } from "react-icons/pi";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export const HomeButton = () => (
  <Link
    href="https://github.com/yosoyvillaa/next-litebans"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-9 px-0"
      )}
    >
      <PiHouseFill className="h-4 w-4" />
      <span className="sr-only">Home</span>
    </div>
  </Link>
)