type Blob = {
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: string;
};

/**
 * Ambient aurora layer for the lower chapters. Blobs animate via CSS
 * (glow-drift) and get scroll parallax from Fx. Purely decorative.
 */
export default function GlowField({ blobs }: { blobs: Blob[] }) {
  return (
    <div className="glow-field" aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="glow"
          style={
            {
              "--g": b.color,
              top: b.top,
              left: b.left,
              right: b.right,
              bottom: b.bottom,
              width: b.size ?? 520,
              height: b.size ?? 520,
              animationDelay: b.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
