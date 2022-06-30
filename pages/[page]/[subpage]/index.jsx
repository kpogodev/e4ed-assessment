import axios from 'axios'

const ContentSubpageTemplate = ({ subpageData }) => {
  return <div>ContentSubpageTemplate</div>
}

export async function getStaticPaths() {
  const {
    data: { data },
  } = await axios.get('http://localhost:1337/api/pages?populate=*')

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
  } = await axios.get(`http://localhost:1337/api/subpages?filters[slug][$eq]=${context.params.subpage}&populate=*`)
  return {
    props: {
      subpageData: data,
    },
    revalidate: 10,
  }
}

export default ContentSubpageTemplate
