import { ArrowRight, FireExtinguisher, type LucideProps } from "lucide-react";

const ICONS = {
  "arrow-right": ArrowRight,
  "fire-extinguisher": FireExtinguisher,
} as const;

export type IconName = keyof typeof ICONS;

type IconProps = Omit<LucideProps, "ref"> & {
  name: IconName;
};

function Icon({ name, ...props }: IconProps) {
  const LucideIcon = ICONS[name];
  return <LucideIcon aria-hidden="true" {...props} />;
}

export default Icon;
