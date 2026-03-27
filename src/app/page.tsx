import {
  AppDownload,
  FeaturedDeals,
  Hero,
  HowItWorks,
  PopularCuisines,
  Testimonials,
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
      <Testimonials />
      <AppDownload />
    </main>
  );
}
