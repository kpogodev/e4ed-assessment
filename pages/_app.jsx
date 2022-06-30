import axios from 'axios'
import { NavigationProvider } from 'context/NavigationContext'
import Layout from 'components/layout/Layout'
import 'styles/globals.css'

function MyApp({ Component, pageProps, navigation }) {
  return (
    <NavigationProvider navlist={navigation}>
      <Layout navigation={navigation}>
        <Component {...pageProps} />
      </Layout>
    </NavigationProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const {
    data: { data },
  } = await axios.get('http://localhost:1337/api/pages?populate=%2A')

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
  }
}

export default MyApp
