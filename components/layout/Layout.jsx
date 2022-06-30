import { NavigationProvider } from 'context/NavigationContext'
import Header from 'components/header/Header'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer>Will be a footer</footer>
    </div>
  )
}

export default Layout
