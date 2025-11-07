
"use client";

import { motion } from "framer-motion";
import { NavLink } from "./nav-link";

interface DesktopNavProps {
    items: Array<{ label: string; href: string }>;
}

export function DesktopNav({ items }: DesktopNavProps) {
    return (
        <div className="hidden lg:flex items-center gap-8">
            {items.map((item, index) => (
                <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                >
                    <NavLink href={item.href} variant="desktop">
                        {item.label}
                    </NavLink>
                </motion.div>
            ))}
        </div>
    );
}