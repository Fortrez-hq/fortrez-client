"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.avif"
                    alt="Community coming together for meaningful causes"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance"
                    >
                        Decentralized Funding for Causes That Transform Lives
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-md md:text-lg text-white/95 mb-8 leading-relaxed max-w-2xl text-pretty"
                    >
                        Every dollar counts. From emergency medical care to rebuilding communities after disaster,
                        blockchain-verified donations ensure your support reaches those who need it most. No middlemen. No delays.
                        Just direct impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg transition-colors group"
                        >
                            Start a Campaign
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
