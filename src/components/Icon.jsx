import {
  HeartHandshake,
  Sparkles,
  Zap,
  Wifi,
  Sofa,
  BedDouble,
  CookingPot,
  Bath,
  MapPin,
  Phone,
} from 'lucide-react'

const ICONS = {
  HeartHandshake,
  Sparkles,
  Zap,
  Wifi,
  Sofa,
  BedDouble,
  CookingPot,
  Bath,
  MapPin,
  Phone,
}

/**
 * Renders a Lucide icon by name. Falls back to a neutral mark.
 */
export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.4, ...rest }) {
  const Cmp = ICONS[name] ?? Sparkles
  return <Cmp className={className} strokeWidth={strokeWidth} {...rest} />
}
