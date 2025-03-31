// components/ui/container.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export function Container({ 
  className, 
  fluid = false,
  ...props 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6", 
        !fluid && "container",
        className
      )}
      {...props}
    />
  )
}