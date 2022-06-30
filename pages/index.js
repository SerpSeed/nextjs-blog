import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout-home';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <> {/* Added this fragment to remove the need of an additional DOM node wrapping the data below. */}
      <Head>
        <title>Hello Blog</title>
        <meta name="description" content="Test Blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <h1 className={styles.title}>&gt;_Hello</h1>

        <p className={styles.subtitle}>Web Design &middot; Development &middot; Optimization</p>

        <Link href="/blog"><a className={styles.button_start}>Learn More</a></Link>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
