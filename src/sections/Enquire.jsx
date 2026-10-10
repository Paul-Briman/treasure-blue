import { Phone, Navigation, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import ctaImage from '../assets/treasure-blue 12.png'
import { PHONE_DISPLAY, PHONE_TEL, MAPS_URL, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../lib/contact'

export default function Enquire() {
  return (
    <section id="enquire" className="relative overflow-hidden bg-navy-900 text-ivory">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ctaImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ objectPosition: '50% 45%' }}
        />
        <div className="absolute inset-0 bg-navy-900/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="eyebrow text-champagne-soft">Enquiries</span>
          <span className="hairline mx-auto" aria-hidden="true" />
        </Reveal>
        <Reveal>
          <h2 className="mt-7 text-4xl leading-[1.08] text-ivory sm:text-5xl md:text-6xl">
            Planning your
            <br />
            next <span className="italic text-champagne-soft">stay?</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ivory/75">
            Speak with Treasure Blue to ask about accommodation, availability and
            the details of your visit.
          </p>
        </Reveal>
        <Reveal delay={140} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href={`tel:${PHONE_TEL}`} variant="champagne" size="lg" icon={<Phone className="h-4 w-4" />}>
            Call to Enquire
          </Button>
          <Button
            href={WHATSAPP_URL}
            external
            variant="outlineLight"
            size="lg"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            WhatsApp Enquiry
          </Button>
          <Button href={MAPS_URL} external variant="outlineLight" size="lg" icon={<Navigation className="h-4 w-4" />}>
            Get Directions
          </Button>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-sm text-ivory/55">
            Call {PHONE_DISPLAY} &nbsp;·&nbsp; WhatsApp {WHATSAPP_DISPLAY}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
