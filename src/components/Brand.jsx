/**
 * Text-based Treasure Blue wordmark with a small champagne diamond detail.
 *
 * @param {object} props
 * @param {boolean} [props.onDark] light treatment for dark/hero backgrounds
 */
export default function Brand({ onDark = false }) {
  const nameColor = onDark ? 'text-ivory' : 'text-navy'
  const subColor = onDark ? 'text-ivory/55' : 'text-taupe'

  return (
    <span className="inline-flex items-center gap-3">
      <span
        className="h-2.5 w-2.5 rotate-45 bg-champagne"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-semibold tracking-[0.16em] sm:text-2xl ${nameColor}`}>
          TREASURE BLUE
        </span>
        <span className={`mt-1 text-[0.55rem] font-medium tracking-[0.34em] ${subColor}`}>
          HOMES &amp; SHORTLETS
        </span>
      </span>
    </span>
  )
}
