
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";
import { COLORS, NAV_ITEMS } from "@/lib/constants";


interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            <div className="container mx-auto">
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 shadow-md">
                    <div className="px-4 sm:px-6 lg:px-8">

                        <div className="flex items-center justify-between h-16 sm:h-20">

                            <Logo />

                            <DesktopNav items={NAV_ITEMS} />
                            <div className="hidden lg:flex items-center gap-3">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Button
                                        variant="ghost"
                                        className="text-white hover:text-white hover:bg-white/10 pointer"
                                    >
                                        Sign in
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button style={{
                                        backgroundColor: COLORS.accent[500],
                                        color: 'white',
                                        cursor: "pointer"
                                    }} className="text-white font-semibold">
                                        Start Campaign
                                    </Button>
                                </motion.div>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </motion.button>
                        </div>

                        <MobileMenu
                            isOpen={mobileMenuOpen}
                            onClose={handleMobileMenuClose}
                            items={NAV_ITEMS}
                        />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}