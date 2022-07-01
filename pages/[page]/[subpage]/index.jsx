import { useRouter } from 'next/router'
import axios from 'axios'
import { motion } from 'framer-motion'
import { pageTrnasition } from 'utils/animationVariantsFramerMotion'
import { v4 as uuid } from 'uuid'
import { API_URL } from 'config'
import ReactMarkdown from 'react-markdown'
import styles from 'styles/ContentSubpageTemplate.module.css'
import HeroContent from 'components/hero_content/HeroContent'
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs'

const ContentSubpageTemplate = ({ subpageData }) => {
  const router = useRouter()

  const pageTitle = router.query.page.replace(/-/g, ' ').replace('and', '&')
  const subpageTitle = router.query.subpage.replace(/-/g, ' ').replace('and', '&')

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <motion.div key={uuid()} variants={pageTrnasition} initial='hidden' animate='visible' exit='exit'>
      <HeroContent topic={pageTitle} />
      <div className={styles.content}>
        <Breadcrumbs />
        <h1 className='page-title'>{subpageTitle}</h1>
        <div className={styles.inner}>
          <ReactMarkdown>{subpageData.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const {
    data: { data },
  } = await axios.get(`${API_URL}/api/pages?populate=*`)

  const paths = data
    .map((page) => page.attributes.subpages.data.map((subpage) => ({ params: { page: page.attributes.slug, subpage: subpage.attributes.slug } })))
    .flat()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    data: { data },
  } = await axios.get(`${API_URL}/api/subpages?filters[slug][$eq]=${context.params.subpage}&populate=*`)
  return {
    props: {
      subpageData: data[0],
    },
    revalidate: 5,
  }
}

export default ContentSubpageTemplate
