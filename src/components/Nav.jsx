import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Brand from './Brand'
import Button from './Button'
import { NAV_LINKS } from '../data/site'
import { PHONE_TEL } from '../lib/contact'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-navy/10 bg-ivory/95 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-navy-900/50 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" onClick={() => setOpen(false)} aria-label="Treasure Blue — home">
          <Brand onDark={!solid} />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-champagne ${
                  solid ? 'text-navy/75' : 'text-ivory/85'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#enquire" variant={solid ? 'navy' : 'outlineLight'}>
            Make an Enquiry
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            solid ? 'text-navy hover:bg-navy/5' : 'text-ivory hover:bg-white/10'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-ivory lg:hidden ${open ? 'border-t border-navy/10' : ''}`}
        style={{ maxHeight: open ? '30rem' : 0, transition: 'max-height 0.5s ease' }}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 pt-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-display text-2xl text-navy/90 transition-colors hover:text-champagne-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 px-3">
            <Button
              href={`tel:${PHONE_TEL}`}
              variant="navy"
              size="lg"
              className="w-full"
              icon={<Phone className="h-4 w-4" />}
              onClick={() => setOpen(false)}
            >
              Call to Enquire
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
