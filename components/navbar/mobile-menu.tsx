"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: Array<{ label: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="lg:hidden overflow-hidden border-t border-border"
                >
                    <div className="py-4 space-y-3">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <NavLink
                                    href={item.href}
                                    variant="mobile"
                                    onClick={onClose}
                                >
                                    {item.label}
                                </NavLink>
                            </motion.div>
                        ))}
                        <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                            <Button
                                variant="ghost"
                                className="text-white/90 hover:text-white hover:bg-white/10 w-full justify-start"
                                onClick={onClose}
                            >
                                Sign in
                            </Button>
                            <Button
                                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                                onClick={onClose}
                            >
                                Start Campaign
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}