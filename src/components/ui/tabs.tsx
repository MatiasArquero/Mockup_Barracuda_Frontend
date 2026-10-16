import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tabs({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  return <div className={cn("w-full", className)} data-value={value}>{children}</div>;
}

export function TabsList({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("inline-flex h-10 items-center gap-1 rounded-lg bg-muted p-1", className)}>{children}</div>;
}

export function TabsTrigger({ value, activeValue, onValueChange, children }: { value: string; activeValue: string; onValueChange: (value: string) => void; children: ReactNode }) {
  return <button type="button" onClick={() => onValueChange(value)} className={cn("rounded-md px-3 py-1.5 text-sm font-medium transition-colors", activeValue === value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>{children}</button>;
}
