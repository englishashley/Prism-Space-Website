export function PrismIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Base triangle */}
      <path d="M3 17L12 21L21 17L12 3L3 17Z" />
      {/* Internal lines for 3D feel */}
      <path d="M12 3V21" />
      <path d="M3 17L12 12L21 17" />
    </svg>
  )
}
