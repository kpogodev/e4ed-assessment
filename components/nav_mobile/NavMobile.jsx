import { useState } from 'react'
import Modal from '../modal/Modal'
import Link from 'next/link'
import styles from './NavMobile.module.css'

const NavMobile = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  const toggleBurger = () => setBurgerIsOpen((prev) => !prev)

  return (
    <button className={styles.burger} onClick={toggleBurger}>
      <svg>
        <use href='#svg-burger' />
      </svg>
      <Modal isOpen={burgerIsOpen} onClose={toggleBurger} boxStyle={styles.menu}>
        <ul className={styles.list}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href='/news-events'>
              <a>News & Events</a>
            </Link>
          </li>
          <li>
            <Link href='/learning'>
              <a>Learning</a>
            </Link>
          </li>
          <li>
            <Link href='/parents'>
              <a>Parents</a>
            </Link>
          </li>
        </ul>
      </Modal>
    </button>
  )
}

export default NavMobile
