import Header from 'components/layout/header/Header'
import GetInTouch from 'components/layout/get_in_touch/GetInTouch'
import Footer from 'components/layout/footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children, getInTouch }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
        <svg className={styles.watermark}>
          <use href='#svg-logo' />
        </svg>
      </main>
      <GetInTouch data={getInTouch} />
      <Footer />
    </div>
  )
}

export default Layout
