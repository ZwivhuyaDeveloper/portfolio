import { GlobeWire } from "@/components/art/GlobeWire";

const PLUSES = [
  { left: "81%",   top: "3.2%" },
  { left: "19%",   top: "7%" },
  { left: "86.5%", top: "19.5%" },
  { left: "77%",   top: "43%" },
  { left: "97%",   top: "65%" },
];

export function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-50">
      <i className="absolute bg-foreground/20" style={{ left: 0, right: 0, top: "10.1%", height: 1 }} />
      <i className="absolute bg-foreground/20" style={{ left: "79%", right: 0, top: "7.4%", height: 1 }} />
      <i className="absolute bg-foreground/20" style={{ left: 0, width: "26%", bottom: "8%", height: 1 }} />
      <i
        className="absolute bg-foreground/20"
        style={{ left: "65%", top: 0, width: 1, height: "10%", transform: "rotate(20deg)", transformOrigin: "top" }}
      />
      {PLUSES.map((pos, i) => (
        <span
          key={i}
          className="absolute block h-[13px] w-[13px] before:absolute before:left-[6px] before:top-0 before:h-[13px] before:w-px before:bg-foreground/75 before:content-[''] after:absolute after:left-0 after:top-[6px] after:h-px after:w-[13px] after:bg-foreground/75 after:content-['']"
          style={pos}
        />
      ))}
      <GlobeWire className="absolute left-[85.3%] top-[36.5%] w-[13.2%] opacity-55 max-[900px]:hidden" />
    </div>
  );
}