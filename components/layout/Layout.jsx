import { NavigationProvider } from 'context/NavigationContext'
import Header from 'components/header/Header'
import styles from './Layout.module.css'
import GetInTouch from 'components/get_in_touch/GetInTouch'
import Footer from 'components/footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Layout
