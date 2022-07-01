import axios from 'axios'
import { API_URL } from 'config'
import { checkTargetForNewValues, motion } from 'framer-motion'
import { pageTrnasition } from 'utils/animationVariantsFramerMotion'
import { v4 as uuid } from 'uuid'
import HeroHome from 'components/hero_home/HeroHome'
import Welcome from 'components/welcome/Welcome'
import Meta from 'components/utilities/Meta'
import UpcomingEvents from 'components/upcoming_events/UpcomingEvents'
import QuickLinks from 'components/quick_links/QuickLinks'

const Home = ({ slideshow, welcome, upcomingEvents, gallery }) => {
  return (
    <motion.div key={uuid()} variants={pageTrnasition} initial='hidden' animate='visible' exit='exit'>
      <Meta title='- Home' />
      <HeroHome data={slideshow} />
      <Welcome data={welcome} />
      <UpcomingEvents data={upcomingEvents} />
      <QuickLinks data={gallery} />
    </motion.div>
  )
}

export async function getStaticProps(context) {
  // Fetch Slideshow
  const { data: slideshowData } = await axios.get(`${API_URL}/api/slideshow-home?populate=*`)
  const slideshow = slideshowData.data.attributes.slideshow.data.map((slide) => ({
    id: slide.id,
    alt: slide.attributes.name,
    hash: slide.attributes.hash,
    src: slide.attributes.url,
    formats: slide.attributes.formats,
  }))

  //Fetch Welcome Section
  const { data: welcomeData } = await axios.get(`${API_URL}/api/welcome-section?populate=*`)
  const welcome = {
    ...welcomeData.data.attributes,
    video: welcomeData.data.attributes.video.data.attributes,
    poster: welcomeData.data.attributes.poster.data.attributes,
  }

  // Fetch Upcoming Events
  const {
    data: { data: upcomingEventsData },
  } = await axios.get(`${API_URL}/api/events?populate=*&sort=date:asc`)

  const upcomingEvents = upcomingEventsData.map((event) => ({
    id: event.id,
    ...event.attributes,
  }))

  // Fetch Gallery
  const {
    data: { data: galleryData },
  } = await axios.get(`${API_URL}/api/gallery-home?populate=*`)

  const gallery = {
    ...galleryData.attributes,
    slideshow: galleryData.attributes.slideshow.data.map((slide) => ({
      id: slide.id,
      alt: slide.attributes.name,
      hash: slide.attributes.hash,
      src: slide.attributes.url,
      formats: slide.attributes.formats,
    })),
  }

  return {
    props: {
      slideshow,
      welcome,
      upcomingEvents,
      gallery,
    },
    revalidate: 5,
  }
}

export default Home
