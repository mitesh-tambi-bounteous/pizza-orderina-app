import heroImageSrc from "../../assets/hero-pizza.svg";
import styles from "./HeroImage.module.css";

const HERO_IMAGE_ALT = "Wood-fired Margherita pizza fresh from the oven";

function HeroImage() {
  return <img className={styles.image} src={heroImageSrc} alt={HERO_IMAGE_ALT} />;
}

export default HeroImage;
