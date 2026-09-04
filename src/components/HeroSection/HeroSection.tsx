import Button from "../Button/Button";
import HeroImage from "../HeroImage/HeroImage";
import IconPill from "../IconPill/IconPill";
import { CHEF_RECOMMENDATIONS_SECTION_ID } from "../../lib/constants";
import { scrollToSection } from "../../lib/scrollToSection";
import styles from "./HeroSection.module.css";

type CtaAction = {
  id: "order-online" | "explore-menu";
  label: string;
  variant: "primary" | "secondary";
};

const CTA_ACTIONS: CtaAction[] = [
  { id: "order-online", label: "Order Online Now", variant: "primary" },
  { id: "explore-menu", label: "Explore Full Menu", variant: "secondary" },
];

const HEADLINE = "Wood-Fired Pizza, ";
const HEADLINE_ACCENT = "Delivered Hot";
const BODY_COPY =
  "Baked at 900°F in our stone ovens to perfect charred perfection. Handcrafted sourdough bases fermented for 48 hours. Order now for fast, direct thermal-bag delivery.";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <IconPill icon="fire-extinguisher" label="Authentic Neapolitan Woodfired" />
          <h1 className={styles.headline}>
            {HEADLINE}
            <span className={styles.headlineAccent}>{HEADLINE_ACCENT}</span>
          </h1>
          <p className={styles.body}>{BODY_COPY}</p>
          <div className={styles.actions}>
            {CTA_ACTIONS.map((action) => (
              <Button
                key={action.id}
                variant={action.variant}
                label={action.label}
                icon={action.id === "order-online" ? "arrow-right" : undefined}
                onClick={() => scrollToSection(CHEF_RECOMMENDATIONS_SECTION_ID)}
              />
            ))}
          </div>
        </div>
        <div className={styles.imageColumn}>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
