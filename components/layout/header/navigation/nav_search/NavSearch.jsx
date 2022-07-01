import { useState, useEffect } from 'react'
import styles from './NavSearch.module.css'

const NavSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSearch = () => setIsOpen((prev) => !prev)

  const handleClickOutside = (e) => {
    if (e.target.closest(`.${styles.container}`)) return
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={toggleSearch}>
        <svg>
          <use href='#svg-search' />
        </svg>
      </button>
      <div className={isOpen ? `${styles.popout} ${styles.show}` : styles.popout}>
        <input className={styles.input} type='search' placeholder='Search' />
      </div>
    </div>
  )
}

export default NavSearch
