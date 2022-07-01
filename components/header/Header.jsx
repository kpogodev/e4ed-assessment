import HeaderLink from './header_link/HeaderLink'
import NavWrap from 'components/navigation/nav_wrap/NavWrap'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <HeaderLink />
        <NavWrap />
      </div>
    </header>
  )
}

export default Header
