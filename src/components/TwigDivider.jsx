export default function TwigDivider() {
  return (
    <svg
      width="220" height="30"
      viewBox="0 0 220 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      {/* Main branch */}
      <path d="M8,15 Q110,13 212,15" stroke="#2a2a3a" strokeWidth="1.2" strokeLinecap="round"/>

      {/* Left cluster */}
      <path d="M38,15 L26,7"   stroke="#242434" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M38,15 L30,4"   stroke="#242434" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M38,15 L44,23"  stroke="#242434" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M26,7  L22,3"   stroke="#1e1e2e" strokeWidth="0.5" strokeLinecap="round"/>

      {/* Mid-left cluster */}
      <path d="M80,14 L70,5"   stroke="#242434" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M80,14 L74,2"   stroke="#1e1e2e" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M80,14 L86,23"  stroke="#242434" strokeWidth="0.6" strokeLinecap="round"/>

      {/* Centre ornament — small bare tree */}
      <path d="M110,15 L110,4"  stroke="#2e2e40" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M110,8  L104,2"  stroke="#2a2a3a" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M110,8  L116,2"  stroke="#2a2a3a" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M110,11 L105,6"  stroke="#242434" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M110,11 L115,6"  stroke="#242434" strokeWidth="0.6" strokeLinecap="round"/>

      {/* Mid-right cluster */}
      <path d="M140,14 L150,5"  stroke="#242434" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M140,14 L146,2"  stroke="#1e1e2e" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M140,14 L134,23" stroke="#242434" strokeWidth="0.6" strokeLinecap="round"/>

      {/* Right cluster */}
      <path d="M182,15 L194,7"  stroke="#242434" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M182,15 L190,4"  stroke="#242434" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M182,15 L176,23" stroke="#242434" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M194,7  L198,3"  stroke="#1e1e2e" strokeWidth="0.5" strokeLinecap="round"/>
    </svg>
  )
}
