import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import styles from './Blog.module.css';


export default function Blog({ allPostsData }) {
    return (
        <main className={styles.main}>
            <h1>Latest From Our Blog</h1>
            <section>
                {allPostsData.map(({ id, frontMatter }) => (
                    <article className={styles.article} key={id}>
                        <header>
                            <p>Published on <Date dateString={frontMatter.date} /></p>
                            <h2>{frontMatter.title}</h2>
                            <address className={styles.author}>Written By: {frontMatter.author}</address>
                        </header>
                        <Link href={`/blog/${id}`}>
                            <a>Read More &rarr;</a>
                        </Link>
                    </article>
                ))}
            </section>
        </main>

    );
}

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}