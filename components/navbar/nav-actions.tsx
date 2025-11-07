"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavActionsProps {
    className?: string;
    onActionClick?: () => void;
    mobile?: boolean;
}

export function NavActions({ className, onActionClick, mobile = false }: NavActionsProps) {
    if (mobile) {
        return (
            <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 w-full justify-start"
                    onClick={onActionClick}
                >
                    Sign in
                </Button>
                <Button
                    className="bg-[#dc2626] hover:bg-[#b91c1c] text-white w-full"
                    onClick={onActionClick}
                >
                    Start with us
                </Button>
            </div>
        );
    }

    return (
        <div className={cn("items-center gap-3", className)}>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10"
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
                <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold">
                    Start with us
                </Button>
            </motion.div>
        </div>
    );
}
