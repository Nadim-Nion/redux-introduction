const Logo = () => {
  return (
    <svg
      width="220"
      height="56"
      viewBox="0 0 220 56"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="YourBrand logo"
      className="border-5 border-red"
    >
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE7F9" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.18" />
        </filter>
      </defs>

      <g transform="translate(8,8)" filter="url(#shadow)">
        <rect
          x="0"
          y="0"
          width="40"
          height="40"
          rx="10"
          transform="rotate(45 20 20)"
          fill="url(#grad)"
        />

        <path
          d="M12 14 L20 22 L28 14 M20 22 L20 30"
          fill="none"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g transform="translate(60,19)">
        <text
          x="0"
          y="20"
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          fontSize="22"
          fontWeight="700"
          letterSpacing="0.2"
        >
          Task Master
        </text>
        <rect x="0" y="28" width="86" height="3" rx="1.5" fill="url(#grad)" />
      </g>
    </svg>
  );
};

export default Logo;
