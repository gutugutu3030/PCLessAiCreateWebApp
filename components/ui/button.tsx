import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
