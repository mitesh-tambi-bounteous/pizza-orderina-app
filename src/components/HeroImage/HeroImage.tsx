import styles from "./HeroImage.module.css";

const HERO_IMAGE_SRC = "./.arc/designs/figma-asset-6-39-hero-image-wrapper.png";
const HERO_IMAGE_ALT = "Wood-fired Margherita pizza fresh from the oven";

function HeroImage() {
  return <img className={styles.image} src={HERO_IMAGE_SRC} alt={HERO_IMAGE_ALT} />;
}

export default HeroImage;
