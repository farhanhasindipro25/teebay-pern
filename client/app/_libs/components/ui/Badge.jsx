import { cva } from "class-variance-authority";
import {
  DEFAULT_BADGE_STYLES,
  INFORMATION_BADGE_STYLES,
  NONE_BADGE_STYLES,
} from "../../styles-kit/BadgeStyleKit";
import cn from "../../utils-kit/cn";

const BADGE_VARIANTS = cva(DEFAULT_BADGE_STYLES, {
  variants: {
    variant: {
      NONE: NONE_BADGE_STYLES,
      INFORMATION: INFORMATION_BADGE_STYLES,
    },
  },
  defaultVariants: {
    variant: "information",
  },
});

export default function Badge({ children, className, variant, ...props }) {
  const BADGE_STYLES = cn(BADGE_VARIANTS({ variant }), className);

  return (
    <span className={BADGE_STYLES} {...props}>
      {children}
    </span>
  );
}
