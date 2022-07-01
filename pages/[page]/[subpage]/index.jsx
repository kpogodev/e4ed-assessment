import axios from 'axios'
import { motion } from 'framer-motion'
import { pageTrnasition } from 'utils/animationVariantsFramerMotion'
import { v4 as uuid } from 'uuid'
import { API_URL } from 'config'

const ContentSubpageTemplate = ({ subpageData }) => {
  return (
    <motion.div key={uuid()} variants={pageTrnasition} initial='hidden' animate='visible' exit='exit'>
      ContentSubpageTemplate
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
      subpageData: data,
    },
    revalidate: 5,
  }
}

export default ContentSubpageTemplate
