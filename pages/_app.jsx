import Layout from 'components/layout/Layout'
import 'styles/globals.css'
import axios from 'axios'

function MyApp({ Component, pageProps, navigation }) {
  return (
    <Layout navigation={navigation}>
      <Component {...pageProps} />
    </Layout>
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
