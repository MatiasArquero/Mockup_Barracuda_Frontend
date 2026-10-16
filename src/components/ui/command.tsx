import * as React from "react"

import { cn } from "@/lib/utils"

function Command({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col overflow-hidden rounded-lg border bg-popover text-popover-foreground", className)} {...props} />
}

function CommandInput({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn("h-10 w-full border-b bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground", className)} {...props} />
}

function CommandGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-2", className)} {...props} />
}

function CommandItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-sm", className)} {...props} />
}

export { Command, CommandInput, CommandGroup, CommandItem }
