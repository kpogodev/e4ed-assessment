import { useState, useContext, useCallback } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import Modal from '../modal/Modal'
import NavigationContext from 'context/NavigationContext'
import styles from './NavMobile.module.css'

const NavMobile = ({ withHomeBtn }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  const pages = useContext(NavigationContext)

  const toggleBurger = useCallback(() => setBurgerIsOpen((prev) => !prev), [])

  return (
    <>
      <button className={styles.burger} onClick={toggleBurger}>
        <svg>
          <use href='#svg-burger' />
        </svg>
      </button>
      <Modal isOpen={burgerIsOpen} onClose={toggleBurger} boxStyle={styles.wrapper}>
        <button className={styles.close} onClick={toggleBurger}>
          <svg>
            <use href='#svg-close' />
          </svg>
        </button>
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
      </Modal>
    </>
  )
}

export default NavMobile
