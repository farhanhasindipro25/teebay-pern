import { cva } from "class-variance-authority";
import React from "react";
import cn from "../utils-kit/cn";
import {
  DANGER_BUTTON_STYLES,
  DEFAULT_BUTTON_STYLES,
  PRIMARY_BUTTON_STYLES,
  SECONDARY_BUTTON_STYLES,
} from "../styles-kit/ButtonStyleKit";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      secondary: SECONDARY_BUTTON_STYLES,
      danger: DANGER_BUTTON_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({
  children,
  variant,
  className = "",
  type = "button",
  ...props
}) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant }), className);

  return (
    <button className={BUTTON_STYLES} type={type} {...props}>
      {children}
    </button>
  );
}
