import { NavigationProvider } from 'context/NavigationContext'
import Header from 'components/header/Header'
import styles from './Layout.module.css'

const Layout = ({ navigation, children }) => {
  return (
    <div className={styles.container}>
      <NavigationProvider navlist={navigation}>
        <Header />
      </NavigationProvider>
      <main className={styles.main}>{children}</main>
      <footer>Will be a footer</footer>
    </div>
  )
}

export default Layout
