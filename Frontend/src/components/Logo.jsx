function Logo() {
  return (
    <div className="logo">
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pen Nib */}
        <path
          d="M32 4L52 24L32 60L12 24L32 4Z"
          fill="#2563EB"
        />

        {/* Pen Hole */}
        <circle
          cx="32"
          cy="25"
          r="5"
          fill="white"
        />

        {/* Pen Split */}
        <path
          d="M32 30V52"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <h2>BlogSphere</h2>
    </div>
  );
}

export default Logo;