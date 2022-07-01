import React from 'react'
import styles from 'styles/404.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <svg>
        <use href='#svg-404' />
      </svg>
      <p>404 Error - Page Not Found !</p>
    </div>
  )
}

export default NotFound
