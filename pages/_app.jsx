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
  const { data: navigation } = await axios.get('http://localhost:3000/api/pages')
  return { navigation }
}

export default MyApp
