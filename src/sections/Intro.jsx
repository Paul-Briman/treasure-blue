import Reveal from '../components/Reveal'
import introImage from '../assets/treasure-blue 5.png'

export default function Intro() {
  return (
    <section id="intro" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">The Stay</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 text-4xl leading-[1.1] text-navy sm:text-5xl md:text-6xl">
                Comfort, with a
                <br />
                little more <span className="italic text-champagne-dark">thought.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
                Treasure Blue is a shortlet made to feel like a warm welcome —
                calm, considered interiors and a host who looks after the details,
                so your stay in Alagbado feels effortless from the moment you
                arrive.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 font-display text-2xl italic text-navy/70">
                Somewhere that simply feels good to arrive to.
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal className="relative">
            <div className="overflow-hidden rounded-sm shadow-lift">
              <img
                src={introImage}
                alt="A styled entryway at Treasure Blue with a console table and a round mirror"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              />
            </div>
            <span
              className="absolute -left-3 -top-3 hidden h-16 w-16 border-l border-t border-champagne/60 sm:block"
              aria-hidden="true"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
