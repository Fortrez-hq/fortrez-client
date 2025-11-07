"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CampaignCard } from "./campaign-card"

const campaigns = [
    {
        id: "1",
        title: "Emergency Medical Fund",
        target: 12440,
        raised: 3110,
        percentage: 25,
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
        description: "Life-saving medical treatment for underprivileged families",
    },
    {
        id: "2",
        title: "Project Namrita - Education",
        target: 29000,
        raised: 18850,
        percentage: 65,
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
        description: "Providing quality education to rural communities",
    },
    {
        id: "3",
        title: "Disaster Relief Initiative",
        target: 52200,
        raised: 41760,
        percentage: 80,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80",
        description: "Supporting communities affected by natural disasters",
    },
    {
        id: "4",
        title: "Build a Better Tomorrow",
        target: 90210,
        raised: 87504,
        percentage: 97,
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80",
        description: "Sustainable development for underserved regions",
    },
]

export function OngoingContributions() {
    return (
        <section className="relative z-20 -mt-24 pb-8">
            <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-16 2xl:mx-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-4">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Active Campaigns</h2>
                        </div>
                        <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 whitespace-nowrap">
                            View All →
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
