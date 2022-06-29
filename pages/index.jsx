import HeroHome from 'components/hero_home/HeroHome'
import Welcome from 'components/welcome/Welcome'
import Meta from 'components/utilities/Meta'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Meta title='- Home' />
      <HeroHome />
      <Welcome />
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default Home
