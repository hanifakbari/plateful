import {
  FeaturedDeals,
  Hero,
  HowItWorks,
  PopularCuisines,
  WhyPlateful,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyPlateful />
      <HowItWorks />
      <FeaturedDeals />
      <PopularCuisines />
    </main>
  );
}
