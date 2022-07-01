import HeroHome from 'components/hero_home/HeroHome'
import Welcome from 'components/welcome/Welcome'
import Meta from 'components/utilities/Meta'
import UpcomingEvents from 'components/upcoming_events/UpcomingEvents'
import QuickLinks from 'components/quick_links/QuickLinks'

const Home = () => {
  return (
    <>
      <Meta title='- Home' />
      <HeroHome />
      <Welcome />
      <UpcomingEvents />
      <QuickLinks />
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default Home
