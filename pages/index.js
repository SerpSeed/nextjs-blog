import Head from 'next/head'
import Link from 'next/link'
import Seo from '../components/seo'
import Layout from '../layouts/home'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.home}>

      <Seo />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>&gt;_Hello</h1>

      <p className={styles.subtitle}>Web Design &middot; Development &middot; Optimization</p>

      <Link href="./blog"><a className={styles.button_start}>Read Our Blog</a></Link>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
