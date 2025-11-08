"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const stats = [
    {
        value: "50K+",
        label: "Campaigns Funded",
    },
    {
        value: "$2.5M",
        label: "Total Raised",
    },
    {
        value: "120+",
        label: "Countries Reached",
    },
]

export function ImpactStats() {
    return (
        <section className="py-16 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                            alt="Community impact"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            When people help people,{" "}
                            <span className="text-primary">change happens</span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Through blockchain-verified transparency and direct funding, we've helped
                            thousands of campaigns reach their goals and create lasting impact in
                            communities worldwide.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        >
                            Join Our Community
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}