import React from 'react'
import axios from 'axios'

const ContentPageTemplate = ({ page }) => {
  return <div>{page}</div>
}

export async function getStaticPaths() {
  const { data } = await axios.get('http://localhost:3000/api/pages')
  const paths = data.map((page) => ({ params: { page: page.toLowerCase().replace(/\W+/g, '-') } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { page } = context.params
  return {
    props: {
      page,
    },
  }
}

export default ContentPageTemplate
