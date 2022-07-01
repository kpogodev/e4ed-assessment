import React from 'react'
import styles from 'styles/404.module.css'
import Meta from 'components/utilities/Meta'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Meta title={`- 404: Not Found`} />
      <svg>
        <use href='#svg-404' />
      </svg>
      <p>404 Error - Page Not Found !</p>
    </div>
  )
}

export default NotFound
