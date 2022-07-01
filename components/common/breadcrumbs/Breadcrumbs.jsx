import Link from 'next/link'
import styles from './Breadcrumbs.module.css'
import { useRouter } from 'next/router'

const Breadcrumbs = () => {
  const router = useRouter()
  const { page, subpage } = router.query

  const pageTitle = router.query?.page?.replace(/-/g, ' ').replace('and', '&') ?? null
  const subpageTitle = router.query?.subpage?.replace(/-/g, ' ').replace('and', '&') ?? null

  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <Link href='/'>
          <a className={styles.link}>Home</a>
        </Link>
      </li>
      {page && (
        <li className={styles.item}>
          <svg>
            <use href='#svg-arrow' />
          </svg>
          <Link href={`/${page}`}>
            <a className={styles.link}>{pageTitle}</a>
          </Link>
        </li>
      )}
      {subpage && (
        <li className={styles.item}>
          <svg>
            <use href='#svg-arrow' />
          </svg>
          <Link href={`/${page}/${subpage}`}>
            <a className={styles.link}>{subpageTitle}</a>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Breadcrumbs
