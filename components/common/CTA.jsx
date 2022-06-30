import Link from 'next/link'
import styles from './CTA.module.css'

const CTA = ({ text, href, variant = 'secondary' }) => {
  if (variant === 'primary')
    return (
      <Link href={href}>
        <a className={`${styles.button} ${styles.primary}`}>{text}</a>
      </Link>
    )

  if (variant === 'secondary')
    return (
      <Link href={href}>
        <a className={`${styles.button} ${styles.secondary}`}>{text}</a>
      </Link>
    )

  if (variant === 'accent') {
    return (
      <Link href={href}>
        <a className={`${styles.button} ${styles.accent}`}>{text}</a>
      </Link>
    )
  }
}

export default CTA
