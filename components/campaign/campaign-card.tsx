"use client"

import { useState } from "react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"

interface Campaign {
    id: string
    title: string
    target: number
    raised: number
    percentage: number
    image?: string
    description?: string
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link href={`/campaign/${campaign.id}`}>
            <div
                className="group cursor-pointer transition-all duration-300 ease-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted">
                    {campaign.image ? (
                        <img
                            src={campaign.image || "/placeholder.svg"}
                            alt={campaign.title}
                            className="w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-48 bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground">No image</span>
                        </div>
                    )}
                    <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        {campaign.percentage}%
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-base font-bold text-foreground line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
                        {campaign.title}
                    </h3>

                    <div className="space-y-2">
                        <Progress value={campaign.percentage} className="h-2.5 bg-muted" />
                        <div className="flex justify-between items-center text-xs font-medium">
                            <span className="text-muted-foreground">
                                Target: <span className="text-foreground font-bold">${(campaign.target / 1000).toFixed(0)}k</span>
                            </span>
                            <span className="text-muted-foreground">
                                Raised: <span className="text-green-600 font-bold">${(campaign.raised / 1000).toFixed(0)}k</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-sm font-medium text-green-600">View Campaign</span>
                        <ArrowRight className="w-4 h-4 text-green-600 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
