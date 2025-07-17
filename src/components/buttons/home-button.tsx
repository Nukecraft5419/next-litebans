import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/layout/icons";
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
      <Icons.home className="h-4 w-4" />
      <span className="sr-only">Home</span>
    </div>
  </Link>
)