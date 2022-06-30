import Layout from '/components/layout-default'
import '/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout || ((page) => defaultPageLayout(page))

  const defaultPageLayout = function(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

  return getLayout(<Component {...pageProps} />)
}