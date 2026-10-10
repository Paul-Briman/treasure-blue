import { Phone, MapPin, Navigation } from 'lucide-react'
import Brand from './Brand'
import Button from './Button'
import { NAV_LINKS, BRAND } from '../data/site'
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS_INLINE, MAPS_URL } from '../lib/contact'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <Brand onDark />
            <p className="mt-5 max-w-xs font-display text-xl italic leading-snug text-ivory/60">
              {BRAND.statement}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/45">
              A welcoming shortlet experience in Alagbado, Lagos.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow text-champagne-soft">Explore</p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-champagne-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="eyebrow text-champagne-soft">Enquiries</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ivory/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-champagne-soft">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                <span>{ADDRESS_INLINE}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`tel:${PHONE_TEL}`} variant="champagne">
                Call to Enquire
              </Button>
              <Button href={MAPS_URL} external variant="outlineLight" icon={<Navigation className="h-4 w-4" />}>
                Directions
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/45">
          <span className="h-1.5 w-1.5 rotate-45 bg-champagne/70" aria-hidden="true" />
          <p>&copy; {year} {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
