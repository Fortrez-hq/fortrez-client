"use client"

import { useState } from "react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Users, Clock } from "lucide-react"
import { Campaign } from "@/types"
import { calculatePercentage } from "@/lib/utils"

export function CampaignCard({ campaign }: { campaign: Campaign }) {
    const [isHovered, setIsHovered] = useState(false)
    const percentage = calculatePercentage(campaign.raised, campaign.target)

    const formatAmount = (amount: number) => {
        if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
        if (amount >= 1000) return `$${(amount / 1000).toFixed(1)}k`
        return `$${amount}`
    }

    const getDaysLeftColor = (days?: number) => {
        if (!days) return "text-muted-foreground"
        if (days <= 7) return "text-destructive"
        if (days <= 14) return "text-warning"
        return "text-muted-foreground"
    }

    return (
        <Link href={`/campaign/${campaign.id}`}>
            <div
                className="group cursor-pointer transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 bg-card rounded-xl overflow-hidden border border-border h-full flex flex-col"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden bg-muted">
                    {campaign.image ? (
                        <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-48 bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground">No image</span>
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {campaign.category && (
                        <div className="absolute top-3 left-3 bg-card/95 backdrop-blur-sm text-card-foreground px-2 py-[2px] rounded-full text-xs font-medium shadow-lg border border-border">
                            {campaign.category}
                        </div>
                    )}

                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-[2px] rounded-full text-xs font-bold shadow-lg">
                        {percentage}%
                    </div>
                </div>

                <div className="p-5 space-y-4 flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200 min-h-[2rem]">
                        {campaign.title}
                    </h3>

                    <div className="space-y-2 flex-1">
                        <Progress
                            value={percentage}
                            className="h-2 bg-muted"
                        />
                        <div className="flex justify-between items-center text-xs font-medium">
                            <span className="text-muted-foreground">
                                Raised: <span className="text-primary font-bold">{formatAmount(campaign.raised)}</span>
                            </span>
                            <span className="text-muted-foreground">
                                Goal: <span className="text-card-foreground font-bold">{formatAmount(campaign.target)}</span>
                            </span>
                        </div>
                    </div>

                    {(campaign.donors !== undefined || campaign.daysLeft !== undefined) && (
                        <div className="flex items-center justify-between text-xs font-medium pt-2 border-t border-border">
                            {campaign.donors !== undefined && (
                                <div className="flex items-center gap-1.5 text-muted-foreground">
                                    <Users className="w-3.5 h-3.5" />
                                    <span>{campaign.donors} {campaign.donors === 1 ? 'donor' : 'donors'}</span>
                                </div>
                            )}
                            {campaign.daysLeft !== undefined && (
                                <div className={`flex items-center gap-1.5 font-semibold ${getDaysLeftColor(campaign.daysLeft)}`}>
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>
                                        {campaign.daysLeft === 0 ? 'Last day!' :
                                            campaign.daysLeft === 1 ? '1 day left' :
                                                `${campaign.daysLeft} days left`}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            View Details
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    )
}