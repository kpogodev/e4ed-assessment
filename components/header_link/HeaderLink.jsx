import Link from 'next/link'
import styles from './HeaderLink.module.css'

const HeaderLink = () => {
  return (
    <Link href='/'>
      <a className={styles.container}>
        <svg className={styles.logo}>
          <use href='#svg-logo' />
        </svg>
        <h1 className={styles.text}>Lonsdale School</h1>
      </a>
    </Link>
  )
}

export default HeaderLink
