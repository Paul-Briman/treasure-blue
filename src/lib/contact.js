// Verified contact details for Treasure Blue Homes & Shortlets Apartments.
// Only supplied/verified information is used — no invented email or social.

export const PHONE_DISPLAY = '0903 140 1306'
export const PHONE_TEL = '+2349031401306'

// WhatsApp (an additional enquiry channel, not a replacement for the phone line).
export const WHATSAPP_DISPLAY = '0818 968 7592'
export const WHATSAPP_NUMBER = '2348189687592'
export const WHATSAPP_MESSAGE =
  "Hello Treasure Blue Homes, I'd like to enquire about a stay. Please share your available options and rates."
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const ADDRESS_LINES = [
  'Riverview Estate, 10 Olatokunbo,',
  'Coker Street, Old Abeokuta-Ota Road,',
  'Alagbado, Lagos 102213,',
  'Lagos, Nigeria',
]
export const ADDRESS_INLINE =
  'Riverview Estate, 10 Olatokunbo, Coker Street, Old Abeokuta-Ota Road, Alagbado, Lagos 102213, Lagos, Nigeria'

// Google Maps search link built from the verified business + address (no embed).
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    'Treasure Blue Homes & Shortlets Apartments, Riverview Estate, 10 Olatokunbo, Coker Street, Old Abeokuta-Ota Road, Alagbado, Lagos',
  )
