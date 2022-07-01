import Link from 'next/link'
import styles from './QuickLinkNewsletters.module.css'

const QuickLinkNewsletters = () => {
  return (
    <Link href='/news-and-events/newsletters'>
      <a className={styles.container}>
        <span className={styles.text}>Newsletters</span>
      </a>
    </Link>
  )
}

export default QuickLinkNewsletters
