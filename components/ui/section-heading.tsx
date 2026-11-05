import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";

type Props = {
  eyebrow: string;
  children: ReactNode;
  size?: string;
  rule?: boolean;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  children,
  size = "clamp(3rem, 7vw, 6.5rem)",
  rule = false,
  action,
}: Props) {
  return (
    <div className={rule ? "mb-12 flex items-end gap-8" : ""}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display" style={{ fontSize: size }}>
          {children}
        </h2>
      </div>
      {rule ? (
        <hr className="mb-[0.9rem] flex-1 border-0 border-t border-line" />
      ) : null}
      {action}
    </div>
  );
}