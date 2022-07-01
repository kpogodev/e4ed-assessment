import QuickLinkNewsletters from 'components/quick_links/quick_link_newsletters/QuickLinkNewsletters'
import QuickLinkStudent from 'components/quick_links/quick_link_student/QuickLinkStudent'
import QuickLinkGallery from 'components/quick_links/quick_link_gallery/QuickLinkGallery'
import styles from './QuickLinks.module.css'

const QuickLinks = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <QuickLinkNewsletters />
        <QuickLinkStudent />
        <QuickLinkGallery data={data} />
      </div>
    </div>
  )
}

export default QuickLinks
