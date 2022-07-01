import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <a href='https://www.e4education.co.uk/' target='_blank' rel='noreferrer'>
          Website Design by e4education
        </a>
        <Link href='/sitemap'>
          <a>Sitemap</a>
        </Link>
        <Link href='/privacy-policy'>
          <a>Privacy Policy</a>
        </Link>
        <a href='https://tim-minister-92732.herokuapp.com/admin/auth/login' target='_blank' rel='noreferrer'>
          Strapi - Login
        </a>
      </div>
    </footer>
  )
}

export default Footer
