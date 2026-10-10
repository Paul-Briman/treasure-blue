import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import living from '../assets/treasure-blue 3.png'
import bedroom from '../assets/treasure-blue 1.png'
import kitchen from '../assets/treasure-blue 8.png'
import bathroom from '../assets/treasure-blue 16.png'

const ROWS = [
  {
    icon: 'Sofa',
    label: 'Living spaces',
    title: 'Room to unwind.',
    body: 'Soft, generous seating, a feature wall and a smart TV — an easy place to settle in at the end of the day.',
    image: living,
    alt: 'Living room with blue velvet sofas, a wood-slat feature wall and a smart TV',
  },
  {
    icon: 'BedDouble',
    label: 'Bedroom details',
    title: 'Made for rest.',
    body: 'An upholstered bed dressed in rich linens, with curtains, air-conditioning and quiet corners to slow down.',
    image: bedroom,
    alt: 'Bedroom with an upholstered headboard, aubergine bedding and framed artwork',
  },
  {
    icon: 'CookingPot',
    label: 'Kitchen & dining',
    title: 'Space to make at home.',
    body: 'A fitted kitchen with a cooking area and a breakfast bar — everything in reach for a longer, more independent stay.',
    image: kitchen,
    alt: 'Open-plan kitchen with a breakfast bar and bar stools',
  },
  {
    icon: 'Bath',
    label: 'Bathroom details',
    title: 'Clean and considered.',
    body: 'Modern bathrooms with crisp tiling and thoughtful finishes, kept spotless for every guest.',
    image: bathroom,
    alt: 'Bathroom vanity with a basin and marble-effect tiling',
  },
]

export default function Interiors() {
  return (
    <section id="interiors" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex flex-col items-center gap-4">
            <span className="eyebrow text-champagne-dark">Interiors</span>
            <span className="hairline mx-auto" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <h2 className="mt-6 text-4xl leading-[1.12] text-navy sm:text-5xl">
              A closer look, room by room.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {ROWS.map((row, i) => {
            const imageLeft = i % 2 === 0
            return (
              <div
                key={row.label}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  className={`overflow-hidden rounded-sm shadow-lift ${
                    imageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={row.image}
                    alt={row.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </Reveal>

                <div className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                  <Reveal className="flex items-center gap-3 text-champagne-dark">
                    <Icon name={row.icon} className="h-5 w-5" />
                    <span className="eyebrow">{row.label}</span>
                  </Reveal>
                  <Reveal>
                    <h3 className="mt-4 text-3xl text-navy sm:text-4xl">{row.title}</h3>
                  </Reveal>
                  <Reveal delay={80}>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-slate">{row.body}</p>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
