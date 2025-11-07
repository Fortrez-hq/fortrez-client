"use client";

import { motion } from "framer-motion";
import { CampaignCard } from "./campaign-card";
import { Button } from "@/components/ui/button";

// Mock data
const mockCampaigns = [
    {
        id: "1",
        title: "Saving Lives",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
        target: 12440,
        raised: 3110,
        percentage: 25,
    },
    {
        id: "2",
        title: "Project Namrita",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
        target: 20000,
        raised: 13000,
        percentage: 65,
    },
    {
        id: "3",
        title: "Save the Children",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
        target: 52200,
        raised: 41760,
        percentage: 80,
    },
    {
        id: "4",
        title: "Better World",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
        target: 90210,
        raised: 87504,
        percentage: 97,
    },
];

export function CampaignsSection() {
    return (
        <section className="relative -mt-32 z-20 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* White card container that overlaps hero */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                Ongoing Crowdfunding Campaigns
                            </h2>
                            <p className="text-gray-600">
                                Trusted by successful nonprofits around the world
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                        >
                            Check Details
                        </Button>
                    </div>

                    {/* Campaign Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockCampaigns.map((campaign, index) => (
                            <motion.div
                                key={campaign.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            >
                                <CampaignCard campaign={campaign} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}