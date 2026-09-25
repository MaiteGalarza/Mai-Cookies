export default function Wave({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 w-full ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="
          M0 35
          Q60 0 120 35
          T240 35
          T360 35
          T480 35
          T600 35
          T720 35
          T840 35
          T960 35
          T1080 35
          T1200 35
          T1320 35
          T1440 35
          V70
          H0
          Z
        "
      />
    </svg>
  );
}