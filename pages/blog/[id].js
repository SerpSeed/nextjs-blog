import Link from 'next/link';
import Date from 'components/date';
import { getAllPostIds, getPostData } from 'lib/posts';
import { MDXRemote } from 'next-mdx-remote';

export default function BlogPost({ source, frontMatter }) {
    return (
        <main>
            <Link href="/blog">
                <a>&larr; Return to Blog</a>
            </Link>
            <article>
                <header>
                    <h1>{frontMatter.title}</h1>
                    <p>Published on <Date dateString={frontMatter.date} /></p>
                </header>
                <MDXRemote {...source} />
            </article>
        </main>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    //const postData = await getPostData(params.id);
    const { source, frontMatter } = await getPostData(params.id);
    return {
        props: {
            source,
            frontMatter,
        },
    };
}