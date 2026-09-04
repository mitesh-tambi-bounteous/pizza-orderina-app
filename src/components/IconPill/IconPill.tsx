import Icon, { type IconName } from "../Icon/Icon";
import styles from "./IconPill.module.css";

type IconPillProps = {
  icon: IconName;
  label: string;
};

function IconPill({ icon, label }: IconPillProps) {
  return (
    <div className={styles.pill}>
      <Icon name={icon} size={16} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default IconPill;
