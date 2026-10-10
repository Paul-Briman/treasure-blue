import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Gallery from './sections/Gallery'
import Interiors from './sections/Interiors'
import WhyGuests from './sections/WhyGuests'
import Reviews from './sections/Reviews'
import Location from './sections/Location'
import Enquire from './sections/Enquire'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Interiors />
        <WhyGuests />
        <Reviews />
        <Location />
        <Enquire />
      </main>
      <Footer />
    </>
  )
}
