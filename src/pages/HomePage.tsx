import HeroSection from "../components/HeroSection/HeroSection";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import { CHEF_RECOMMENDATIONS_SECTION_ID } from "../lib/constants";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <section id={CHEF_RECOMMENDATIONS_SECTION_ID}>
        <SectionHeading
          eyebrow="Chef Recommendations"
          eyebrowTone="brandRed"
          title="Popular Sourdough Pizzas"
          align="center"
          accentBar
        />
      </section>
    </main>
  );
}

export default HomePage;
