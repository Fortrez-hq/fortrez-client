import { Card, CardContent } from "@/components/ui/card";
import { Campaign } from "@/types";
import Image from "next/image";

interface CampaignCardProps {
    campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
                <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                />
            </div>
            <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">{campaign.title}</h3>

                {/* Progress Bar */}
                <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full transition-all"
                            style={{ width: `${campaign.percentage}%` }}
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-600">Target: ${campaign.target.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg">{campaign.percentage}%</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}