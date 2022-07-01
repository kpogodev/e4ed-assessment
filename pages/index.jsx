import HeroHome from 'components/hero_home/HeroHome'
import Welcome from 'components/welcome/Welcome'
import Meta from 'components/utilities/Meta'
import UpcomingEvents from 'components/upcoming_events/UpcomingEvents'
import QuickLinks from 'components/quick_links/QuickLinks'
import { motion } from 'framer-motion'
import { pageTrnasition } from 'utils/animationVariantsFramerMotion'
import { v4 as uuid } from 'uuid'

const Home = () => {
  return (
    <motion.div key={uuid()} variants={pageTrnasition} initial='hidden' animate='visible' exit='exit'>
      <Meta title='- Home' />
      <HeroHome />
      <Welcome />
      <UpcomingEvents />
      <QuickLinks />
    </motion.div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default Home
