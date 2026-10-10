import { useState } from 'react'
import { Expand } from 'lucide-react'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { GALLERY } from '../data/gallery'

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <section id="gallery" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal className="flex flex-col gap-4">
              <span className="eyebrow text-champagne-dark">Gallery</span>
              <span className="hairline" aria-hidden="true" />
            </Reveal>
            <Reveal>
              <h2 className="mt-6 max-w-xl text-4xl leading-[1.1] text-navy sm:text-5xl">
                Spaces that feel like a welcome.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <p className="max-w-xs text-sm leading-relaxed text-slate">
              A look inside — real photography of the apartment and its interiors.
              Tap any image to view it larger.
            </p>
          </Reveal>
        </div>

        {/* Masonry preserves each photo's natural proportions (no distortion). */}
        <Reveal className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openAt(i)}
              aria-label={`Open image: ${img.caption || img.alt}`}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm border border-navy/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 flex items-center gap-2 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
                <span className="font-display text-lg italic">{img.caption}</span>
              </span>
            </button>
          ))}
        </Reveal>
      </div>

      {open && (
        <Lightbox images={GALLERY} index={index} onNavigate={setIndex} onClose={() => setOpen(false)} />
      )}
    </section>
  )
}
