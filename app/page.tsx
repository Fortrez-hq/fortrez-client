
import { OngoingContributions } from "@/components/campaign/ongoing-contributions";
import { FeaturedCampaigns } from "@/components/featured-campaigns";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ImpactStats } from "@/components/impacts-stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OngoingContributions />
      <ImpactStats />
      <HowItWorks />
      <FeaturedCampaigns />
    </>
  );
}