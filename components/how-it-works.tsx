"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Users, Zap, Shield, TrendingUp } from "lucide-react"

const steps = [
    {
        icon: CheckCircle2,
        title: "Start a Campaign",
        description:
            "Create your campaign with clear goals, detailed description, and funding target. Our team verifies every campaign for legitimacy.",
    },
    {
        icon: Users,
        title: "Build Support",
        description:
            "Share your cause with the community. Supporters from around the world can contribute securely using cryptocurrency or traditional payments.",
    },
    {
        icon: Shield,
        title: "Blockchain Verified",
        description:
            "Every transaction is recorded on the blockchain. Full transparency ensures funds are tracked from donation to impact.",
    },
    {
        icon: TrendingUp,
        title: "Track Progress",
        description:
            "Real-time updates on funding progress, campaign milestones, and distribution of funds. Accountability at every step.",
    },
    {
        icon: Zap,
        title: "Distribute Impact",
        description:
            "Once funded, verified organizations receive funds immediately. No delays. Direct funding for direct impact.",
    },
]

export function HowItWorks() {
    return (
        <section className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">How It Works</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
                        A transparent, secure, and efficient platform for funding causes that matter. Five simple steps to make real
                        impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-600 text-white font-bold text-lg">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="pt-1 flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Connector line for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-7 left-24 w-8 h-0.5 bg-gray-300" />
                                )}
                            </motion.div>
                        )
                    })}
                </div>


            </div>
        </section>
    )
}
