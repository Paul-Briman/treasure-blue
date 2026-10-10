import { MapPin, Navigation, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import exterior from '../assets/treasure-blue 9.png'
import { ADDRESS_LINES, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from '../lib/contact'

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Image */}
          <Reveal className="order-2 overflow-hidden rounded-sm shadow-lift lg:order-1">
            <img
              src={exterior}
              alt="Exterior of the Treasure Blue residence — a two-storey house within a gated compound"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
            />
          </Reveal>

          {/* Details */}
          <div className="order-1 lg:order-2">
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">Location</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.12] text-navy sm:text-5xl">
                Find us in Alagbado.
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-8 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-champagne-dark" strokeWidth={1.6} />
              <div>
                <p className="font-display text-xl text-navy">Treasure Blue Homes &amp; Shortlets</p>
                <p className="mt-2 leading-relaxed text-slate">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>

            <Reveal delay={140} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={MAPS_URL} external variant="navy" icon={<Navigation className="h-4 w-4" />}>
                Get Directions
              </Button>
              <Button href={`tel:${PHONE_TEL}`} variant="outline" icon={<Phone className="h-4 w-4" />}>
                {PHONE_DISPLAY}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
