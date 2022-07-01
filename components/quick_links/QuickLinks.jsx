import QuickLinkNewsletters from 'components/quick_links/quick_link_newsletters/QuickLinkNewsletters'
import QuickLinkStudent from 'components/quick_links/quick_link_student/QuickLinkStudent'
import QuickLinkGallery from 'components/quick_links/quick_link_gallery/QuickLinkGallery'
import styles from './QuickLinks.module.css'

const QuickLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <QuickLinkNewsletters />
        <QuickLinkStudent />
        <QuickLinkGallery />
      </div>
    </div>
  )
}

export default QuickLinks
