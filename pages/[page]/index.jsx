import axios from 'axios'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageTrnasition } from 'utils/animationVariantsFramerMotion'
import { v4 as uuid } from 'uuid'
import { API_URL } from 'config'
import ReactMarkdown from 'react-markdown'
import styles from 'styles/ContentPageTemplate.module.css'
import HeroContent from 'components/hero_content/HeroContent'
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs'

const ContentPageTemplate = ({ pageData }) => {
  const router = useRouter()

  const pageTitle = router.query.page.replace(/-/g, ' ').replace('and', '&')

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <motion.div className={styles.main} key={uuid()} variants={pageTrnasition} initial='hidden' animate='visible' exit='exit'>
      <HeroContent topic={pageTitle} />
      <div className={styles.content}>
        <Breadcrumbs />
        <h1 className='page-title'>{pageTitle}</h1>
        <div className={styles.inner}>
          <ReactMarkdown>{pageData.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const {
    data: { data },
  } = await axios.get(`${API_URL}/api/pages`)
  const paths = data.map((page) => ({ params: { page: page.attributes.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    data: { data },
  } = await axios.get(`${API_URL}/api/pages?filters[slug][$eq]=${context.params.page}&populate=*`)
  return {
    props: {
      pageData: data[0],
    },
    revalidate: 5,
  }
}

export default ContentPageTemplate
