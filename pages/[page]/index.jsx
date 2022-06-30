import axios from 'axios'

const ContentPageTemplate = ({ pageData }) => {
  return <div>ContentPageTemplate</div>
}

export async function getStaticPaths() {
  const {
    data: { data },
  } = await axios.get('http://localhost:1337/api/pages')
  const paths = data.map((page) => ({ params: { page: page.attributes.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    data: { data },
  } = await axios.get(`http://localhost:1337/api/pages?filters[slug][$eq]=${context.params.page}&populate=*`)
  return {
    props: {
      pageData: data,
    },
    revalidate: 10,
  }
}

export default ContentPageTemplate
