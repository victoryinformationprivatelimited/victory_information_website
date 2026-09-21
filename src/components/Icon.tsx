import * as icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!Cmp) {
    const Fallback = icons.Circle;
    return <Fallback {...props} />;
  }
  return <Cmp {...props} />;
}

export type { IconName };
