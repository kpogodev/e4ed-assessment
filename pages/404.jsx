import React from 'react'
import styles from 'styles/404.module.css'
import Meta from 'components/utilities/Meta'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
  const pageTitle = router.query.page.replace(/-/g, ' ').replace('and', '&')

  return (
    <div className={styles.container}>
      <Meta title={`- ${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}`} />
      <svg>
        <use href='#svg-404' />
      </svg>
      <p>404 Error - Page Not Found !</p>
    </div>
  )
}

export default NotFound
