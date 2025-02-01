import { GlowLink } from "./glow-link";

export function T3Link() {
  return (
    <GlowLink
      href="https://create.t3.gg/"
      target="_blank"
      color="rgba(168, 85, 247, 0.8)"
      size={8}
      duration={1}
      scale={1.4}
      className="font-extrabold text-purple-500"
    >
      T3
    </GlowLink>
  );
}
