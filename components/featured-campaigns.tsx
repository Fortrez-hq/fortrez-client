"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const featured = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
        title: "Emergency Relief Fund for Flood Victims",
        description: "Providing immediate assistance to families affected by recent flooding. Funds will go toward food, shelter, and medical supplies.",
        category: "Disaster Relief",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=80",
        title: "School Supplies for Rural Children",
        description: "Help us provide essential learning materials to underprivileged students in remote areas. Every child deserves access to education.",
        category: "Education",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
        title: "Medical Equipment for Community Clinic",
        description: "Support our mission to equip a local health center with modern diagnostic tools and treatment facilities for better patient care.",
        category: "Healthcare",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
        title: "Clean Water Initiative in Rural Areas",
        description: "Building sustainable water systems to provide clean drinking water to communities lacking access to safe water sources.",
        category: "Infrastructure",
    },
]

export function FeaturedCampaigns() {
    return (
        <section className="py-16 sm:py-20 bg-background" id="causes">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                            Featured Campaigns
                        </h2>
                        <p className="text-muted-foreground">
                            Verified causes making real impact
                        </p>
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 gap-1">
                        View All
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featured.map((campaign) => (
                        <div
                            key={campaign.id}
                            className="flex gap-6 group cursor-pointer"
                        >
                            <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-muted">
                                <Image
                                    src={campaign.image}
                                    alt={campaign.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    width={500}
                                    height={300}
                                />
                            </div>

                            <div className="flex-1">
                                <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                                    {campaign.category}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {campaign.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                    {campaign.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}