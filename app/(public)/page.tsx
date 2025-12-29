import { Navbar, HeroBlock, HowItWorks, PricingBlock } from "./components";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gray-950">
      <Navbar />
      <HeroBlock />
      <HowItWorks />
      <PricingBlock />
      HomePage
    </div>
  )
}
