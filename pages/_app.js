import Layout from '../layouts/default'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
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