import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to combine Tailwind class names conditionally.
 * Example:
 * cn("px-2", isActive && "bg-red-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
