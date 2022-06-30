import HeroHome from 'components/hero_home/HeroHome'
import Welcome from 'components/welcome/Welcome'
import Meta from 'components/utilities/Meta'
import styles from '../styles/Home.module.css'
import UpcomingEvents from 'components/upcoming_events/UpcomingEvents'

const Home = () => {
  return (
    <>
      <Meta title='- Home' />
      <HeroHome />
      <Welcome />
      <UpcomingEvents />
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default Home
