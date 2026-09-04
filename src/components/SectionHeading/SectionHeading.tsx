import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  eyebrowTone: "brandRed";
  title: string;
  align: "center" | "left";
  accentBar?: boolean;
};

function SectionHeading({ eyebrow, eyebrowTone, title, align, accentBar }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      <span className={`${styles.eyebrow} ${styles[eyebrowTone]}`}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {accentBar ? <hr className={styles.accentBar} /> : null}
    </div>
  );
}

export default SectionHeading;
