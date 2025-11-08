"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CampaignCard } from "./campaign-card"
import { ArrowRight } from "lucide-react"
import { campaigns } from "@/config/campaign-data"

export function OngoingContributions() {
    return (
        <section className="relative z-20 -mt-32 pb-16">
            <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-16 2xl:mx-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8 lg:p-10"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-2">Active Campaigns</h2>
                            <p className="text-muted-foreground text-sm">Support verified causes making real impact</p>
                        </div>
                        <Button
                            variant="ghost"
                            className="text-primary hover:text-primary hover:bg-primary/10 whitespace-nowrap group"
                        >
                            View All
                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {campaigns.map((campaign, index) => (
                            <motion.div
                                key={campaign.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CampaignCard campaign={campaign} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}