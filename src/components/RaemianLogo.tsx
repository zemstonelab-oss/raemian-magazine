interface RaemianLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  color?: 'default' | 'white';
}

export default function RaemianLogo({
  className = '',
  size = 1,
  showText = true,
  color = 'default',
}: RaemianLogoProps) {
  const teal = color === 'white' ? '#ffffff' : '#2a9d8f';
  const gray = color === 'white' ? 'rgba(255,255,255,0.5)' : '#c0c7c1';
  const textColor = color === 'white' ? '#ffffff' : '#2d4a47';

  const barW = 18 * size;
  const barH = 56 * size;
  const gap = 5 * size;
  const totalW = barW * 3 + gap * 2;
  const r = 2 * size;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Bars */}
      <svg
        width={totalW}
        height={barH}
        viewBox={`0 0 ${totalW} ${barH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={0} y={0} width={barW} height={barH} rx={r} fill={teal} />
        <rect x={barW + gap} y={0} width={barW} height={barH} rx={r} fill={gray} />
        <rect x={(barW + gap) * 2} y={0} width={barW} height={barH} rx={r} fill={teal} />
      </svg>

      {/* Text */}
      {showText && (
        <span
          className="font-display font-semibold uppercase"
          style={{
            color: textColor,
            fontSize: `${13 * size}px`,
            letterSpacing: `${4 * size}px`,
            marginTop: `${8 * size}px`,
          }}
        >
          RAEMIAN
        </span>
      )}
    </div>
  );
}
