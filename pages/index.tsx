import Layout from '../components/Layout'
import IndexBlocks from '../components/IndexBlocks'

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
      infoBlurb={props.infoBlurb}
    >
      <IndexBlocks form={form} />
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../data/config.json`)
  const blocksData = await import('../data/blocks.json')

  return {
    props: {
      ...configData,
      jsonFile: {
        fileRelativePath: `data/blocks.json`,
        data: blocksData.default,
      },
    },
  }
}
