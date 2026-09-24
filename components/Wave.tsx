export default function Wave({ className = "" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`block h-8 w-full ${className}`}
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 30 Q60 0 120 30 T240 30 T360 30 T480 30 T600 30 T720 30 T840 30 T960 30 T1080 30 T1200 30 T1320 30 T1440 30 V60 H0 Z"
        />
      </svg>
    );
  }
  