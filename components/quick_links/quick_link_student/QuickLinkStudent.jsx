import CTA from 'components/common/cta/CTA'
import styles from './QuickLinkStudent.module.css'

const QuickLinkStudent = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Student Area</span>
      <CTA text='Find Out More' href='/student-area' variant='primary' />
    </div>
  )
}

export default QuickLinkStudent
