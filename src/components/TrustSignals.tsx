export function TrustSignals({ className = '' }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] font-bold text-iss-body/80 list-none ${className}`}
      aria-label="Credentials and trust signals"
    >
      <li className="flex items-center gap-2">
        <span className="w-2 h-2 bg-iss-teal" aria-hidden="true" />
        Board certified neurosurgery
      </li>
      <li className="flex items-center gap-2">
        <span className="w-2 h-2 bg-iss-teal" aria-hidden="true" />
        4,000+ spine surgeries performed
      </li>
    </ul>
  )
}
