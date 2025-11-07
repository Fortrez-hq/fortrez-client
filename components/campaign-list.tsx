import { CampaignCard } from "./campaign-card";
import { Campaign } from "@/types";
import { Button } from "@/components/ui/button";

// Mock data - later replace with React Query
const mockCampaigns: Campaign[] = [
    {
        id: "1",
        title: "Saving",
        description: "Help save children",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
        target: 12440,
        raised: 3110,
        percentage: 25,
    },
    {
        id: "2",
        title: "Project Namrita",
        description: "Support education",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
        target: 20000,
        raised: 13000,
        percentage: 65,
    },
    {
        id: "3",
        title: "Save the poor",
        description: "Feed the hungry",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
        target: 52200,
        raised: 41760,
        percentage: 80,
    },
    {
        id: "4",
        title: "Create a better world",
        description: "Community building",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80",
        target: 90210,
        raised: 87504,
        percentage: 97,
    },
];

export function CampaignList() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Ongoing crowdfunding campaigns</h2>
                        <p className="text-gray-600">Trusted by successful nonprofits around the world</p>
                    </div>
                    <Button variant="outline" className="text-[#dc2626] border-[#dc2626] hover:bg-[#dc2626]/10">
                        Check Details
                    </Button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockCampaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </div>
            </div>
        </section>
    );
}