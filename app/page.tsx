
import { OngoingContributions } from "@/components/campaign/ongoing-contributions";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OngoingContributions />
      <HowItWorks />
    </>
  );
}