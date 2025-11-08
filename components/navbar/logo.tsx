"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
    href?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function Logo({ href = "/", className = "", size = "md" }: LogoProps) {
    const sizes = {
        sm: { container: "w-6 h-6", image: "w-6 h-6", text: "text-base" },
        md: { container: "w-8 h-8 sm:w-10 sm:h-10", image: "w-8 h-8 sm:w-10 sm:h-10", text: "text-lg sm:text-xl" },
        lg: { container: "w-12 h-12", image: "w-12 h-12", text: "text-2xl" }
    };

    const logoContent = (
        <div className="flex items-center gap-2 group">
            <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "rounded-lg flex items-center justify-center transition-transform",
                    sizes[size].container
                )}
            >
                <Image
                    src="/logo.svg"
                    alt="FORTREZ Logo"
                    width={65}
                    height={65}
                    className={cn("invert", sizes[size].image)}
                    priority
                />
            </motion.div>
            <span className={cn(
                "text-white font-bold tracking-tight font-sans",
                sizes[size].text,
                className
            )}>
                FORTREZ
            </span>
        </div>
    );

    return href ? (
        <Link href={href} className="flex items-center">
            {logoContent}
        </Link>
    ) : (
        logoContent
    );
}