import { Star, Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import { REVIEWS, GOOGLE_RATING, GOOGLE_REVIEWS } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">Guest Reviews</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 max-w-xl text-4xl leading-[1.12] text-navy sm:text-5xl">
                In our guests&apos; words.
              </h2>
            </Reveal>
          </div>

          <Reveal className="flex shrink-0 items-center gap-4 rounded-sm border border-navy/12 bg-cream px-5 py-4">
            <span className="font-display text-4xl font-semibold text-navy">{GOOGLE_RATING}</span>
            <span className="flex flex-col">
              <span className="flex items-center gap-0.5 text-champagne" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-champagne" />
                ))}
              </span>
              <span className="mt-1 text-xs text-slate">
                Google rating · {GOOGLE_REVIEWS} reviews
              </span>
            </span>
          </Reveal>
        </div>

        {/* Editorial: a lead review + two supporting, not a flat row. */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal
            as="figure"
            className="flex flex-col justify-between rounded-sm bg-navy p-8 text-ivory lg:row-span-2 lg:p-10"
          >
            <div>
              <Quote className="h-10 w-10 text-champagne/50" aria-hidden="true" />
              <blockquote className="mt-5 font-display text-2xl italic leading-relaxed text-ivory/90 sm:text-[1.7rem]">
                &ldquo;{REVIEWS[0].quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-8 border-t border-ivory/15 pt-5 text-sm font-medium tracking-wide text-ivory/80">
              {REVIEWS[0].name}
            </figcaption>
          </Reveal>

          {REVIEWS.slice(1).map((review, i) => (
            <Reveal
              as="figure"
              key={review.name}
              delay={i * 100}
              className="flex h-full flex-col rounded-sm border border-navy/12 bg-cream p-7 lg:col-start-2 lg:col-end-4"
            >
              <Quote className="h-7 w-7 text-champagne/40" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-[1.05rem] leading-relaxed text-charcoal/90">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-navy/10 pt-4 text-sm font-semibold text-navy">
                {review.name}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
