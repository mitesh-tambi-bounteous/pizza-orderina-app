import type { ButtonHTMLAttributes } from "react";
import Icon, { type IconName } from "../Icon/Icon";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  label: string;
  icon?: IconName;
};

function Button({ variant, label, icon, className, ...rest }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  return (
    <button type="button" className={classes} {...rest}>
      {label}
      {icon ? <Icon name={icon} size={18} /> : null}
    </button>
  );
}

export default Button;
