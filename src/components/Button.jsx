/**
 * Styled link used for CTAs. Renders an <a> so it works for section anchors,
 * tel: links and external links alike.
 *
 * @param {object} props
 * @param {string} props.href
 * @param {'navy'|'champagne'|'outline'|'outlineLight'} [props.variant='navy']
 * @param {'md'|'lg'} [props.size='md']
 * @param {boolean} [props.external]
 * @param {React.ReactNode} [props.icon]
 */
export default function Button({
  href,
  variant = 'navy',
  size = 'md',
  external = false,
  icon,
  className = '',
  children,
  ...rest
}) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-medium uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const sizes = {
    md: 'px-6 py-3 text-[0.72rem]',
    lg: 'px-8 py-4 text-[0.78rem]',
  }

  const variants = {
    navy: 'bg-navy text-ivory hover:bg-navy-900 hover:-translate-y-0.5 shadow-soft focus-visible:ring-navy',
    champagne:
      'bg-champagne text-navy hover:bg-champagne-soft hover:-translate-y-0.5 shadow-soft focus-visible:ring-champagne',
    outline:
      'border border-navy/25 bg-transparent text-navy hover:border-navy/55 hover:bg-navy/[0.04] focus-visible:ring-navy',
    outlineLight:
      'border border-ivory/40 bg-ivory/5 text-ivory backdrop-blur-sm hover:bg-ivory/15 hover:border-ivory/80 focus-visible:ring-ivory',
  }

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}
