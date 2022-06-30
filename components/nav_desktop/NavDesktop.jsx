import { useContext } from 'react'
import Link from 'next/link'
import NavigationContext from 'context/NavigationContext'
import styles from './NavDesktop.module.css'

const NavDesktop = ({ withHomeBtn }) => {
  const pages = useContext(NavigationContext)

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {withHomeBtn && (
            <li className={styles.item}>
              <Link href='/'>
                <a className={styles.link}>Home</a>
              </Link>
            </li>
          )}
          {pages.map((page) => (
            <li className={styles.item} key={page.id}>
              <Link href={`/${page.slug}`}>
                <a className={styles.link}>{page.name}</a>
              </Link>
              {page.subpages.length > 0 && (
                <ul className={styles.sublist}>
                  {page.subpages.map((subpage) => (
                    <li key={subpage.id} className={styles.sublist_item}>
                      <Link href={`/${page.slug}/${subpage.slug}`}>
                        <a className={styles.sublist_link}>{subpage.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavDesktop
