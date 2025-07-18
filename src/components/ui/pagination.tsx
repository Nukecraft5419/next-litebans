import * as React from "react"
import { PiCaretLeftFill, PiCaretRightFill, PiDotsThreeOutlineFill } from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
  disabled?: boolean
} & Pick<ButtonProps, "size"> &
  (React.ComponentProps<typeof Link> | React.ComponentProps<typeof Button>)

const PaginationLink = ({
  className,
  isActive,
  disabled,
  size = "icon",
  ...props
}: PaginationLinkProps) => (disabled ? (
  <Button
    aria-current={isActive ? "page" : undefined}
    variant={isActive ? "outline" : "ghost"}
    size={size}
    className={className}
    {...props as React.ComponentProps<typeof Button>}
  />
) : (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props as React.ComponentProps<typeof Link>}
  />
)

)
PaginationLink.displayName = "PaginationLink"

type PaginationNextPreviousProps = {
  text: string
} & React.ComponentProps<typeof PaginationLink>

const PaginationPrevious = ({
  className,
  text,
  ...props
}: PaginationNextPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <PiCaretLeftFill className="h-4 w-4" />
    <span>{text}</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  text,
  ...props
}: PaginationNextPreviousProps) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>{text}</span>
    <PiCaretRightFill className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <PiDotsThreeOutlineFill className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
