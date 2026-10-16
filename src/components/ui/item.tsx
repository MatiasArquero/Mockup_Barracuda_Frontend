import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Item({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-start gap-4 rounded-lg border bg-card p-4 text-card-foreground", className)} {...props}>{children}</div>;
}

export function ItemContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("min-w-0 flex-1", className)} {...props}>{children}</div>;
}

export function ItemTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-semibold leading-none", className)} {...props}>{children}</h3>;
}

export function ItemDescription({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-2 text-sm text-muted-foreground", className)} {...props}>{children}</div>;
}

export function ItemActions({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex shrink-0 items-start gap-2", className)} {...props}>{children}</div>;
}
