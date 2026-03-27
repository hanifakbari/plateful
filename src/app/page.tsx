import {
  AppDownload,
  FeaturedDeals,
  Footer,
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
      <Footer />
    </main>
  );
}
