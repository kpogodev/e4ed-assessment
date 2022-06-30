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
        {burgerIsOpen && (
          <>
            <button className={styles.close} onClick={toggleBurger}>
              <svg>
                <use href='#svg-close' />
              </svg>
            </button>
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
                  <li key={page.id} className={styles.item}>
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
        )}
      </Modal>
    </>
  )
}

export default NavMobile
