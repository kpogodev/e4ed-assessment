import axios from 'axios'
import { NavigationProvider } from 'context/NavigationContext'
import Layout from 'components/layout/Layout'
import 'styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { API_URL } from 'config'

function MyApp({ Component, pageProps, navigation, getInTouch }) {
  return (
    <NavigationProvider navlist={navigation}>
      <Layout navigation={navigation} getInTouch={getInTouch}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </NavigationProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const {
    data: { data },
  } = await axios.get(`${API_URL}/api/pages?populate=*`)

  // Fetch Get In Touch
  const {
    data: { data: getInTouchData },
  } = await axios.get(`${API_URL}/api/get-in-touch?populate=*`)
  const getInTouch = getInTouchData.attributes

  const navigation = data.map((page) => ({
    id: page.id,
    name: page.attributes.name,
    slug: page.attributes.slug,
    subpages: page.attributes.subpages.data.map((subpage) => ({
      id: subpage.id,
      name: subpage.attributes.name,
      slug: subpage.attributes.slug,
    })),
  }))

  return {
    navigation,
    getInTouch,
  }
}

export default MyApp
