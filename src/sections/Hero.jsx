import { Phone, ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import heroImage from '../assets/treasure-blue 7.png'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-900">
      {/* Cinematic image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="The living room at Treasure Blue — soft grey seating beneath a sculptural LED ceiling"
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ objectPosition: '50% 42%' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/45 to-navy-900/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-transparent to-navy-900/35" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-28 pt-32 sm:px-8">
        <div className="reveal is-visible max-w-2xl">
          <div className="flex items-center gap-3 text-champagne-soft">
            <span className="hairline" aria-hidden="true" />
            <span className="eyebrow">Treasure Blue · Shortlet Living</span>
          </div>

          <h1 className="mt-7 text-5xl leading-[1.03] text-ivory sm:text-6xl md:text-7xl">
            A more considered
            <br />
            way to <span className="italic text-champagne-soft">stay.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
            Discover a welcoming shortlet experience in Alagbado, Lagos — with
            thoughtfully styled interiors and hospitality guests appreciate.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#enquire" variant="champagne" size="lg" icon={<Phone className="h-4 w-4" />}>
              Enquire About a Stay
            </Button>
            <Button href="#gallery" variant="outlineLight" size="lg">
              Explore the Space
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom location strip */}
      <div className="relative z-10 border-t border-ivory/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-ivory/75">
            Alagbado · Lagos · Nigeria
          </span>
          <a
            href="#intro"
            aria-label="Scroll to content"
            className="hidden text-ivory/60 transition-colors hover:text-ivory sm:block"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
