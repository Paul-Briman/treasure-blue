import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { GUEST_THEMES } from '../data/site'

export default function WhyGuests() {
  return (
    <section className="bg-navy py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow text-champagne-soft">Why Guests Return</span>
            <span className="hairline" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-4xl leading-[1.12] text-ivory sm:text-5xl">
              The details guests remember.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-lg leading-relaxed text-ivory/70">
              Drawn from what recent guests have shared about their stay.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {GUEST_THEMES.map((theme, i) => (
            <Reveal key={theme.title} delay={(i % 2) * 90} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne-soft">
                <Icon name={theme.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl text-ivory">{theme.title}</h3>
                <p className="mt-2 leading-relaxed text-ivory/65">{theme.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="max-w-2xl text-sm italic text-ivory/45">
            Power supply and Wi-Fi reflect recent guest experiences rather than a
            guaranteed service level — we&apos;d be glad to share the latest
            details when you enquire.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
