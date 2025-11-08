import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculatePercentage = (raised: number, target: number): number => {
  if (target === 0) return 0;
  const percentage = (raised / target) * 100;
  return Math.min(Math.round(percentage), 100);
};
