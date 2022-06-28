import { useContext } from 'react'
import Link from 'next/link'

import { v4 as uuidv4 } from 'uuid'
import NavigationContext from 'context/NavigationContext'
import styles from './NavDesktop.module.css'

const NavDesktop = ({ withHomeBtn }) => {
  const pages = useContext(NavigationContext)

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {withHomeBtn && (
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
          )}
          {pages.map((page) => (
            <li key={uuidv4()}>
              <Link href={`/${page.toLowerCase().replace(/\W+/g, '-')}`}>
                <a>{page}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavDesktop
