import Head from 'next/head'
import seoDefaults from '../seo.config'
import { useRouter } from 'next/router'

export default function Seo(props) {

    const router = useRouter();

    // Check if we're on the homepage, if not append the website name to the title.
    const title = router.pathname == '/' ? seoDefaults.title : `${props.title} | ${seoDefaults.title}`;

    const metaDescription = props.metaDescription || "Add Me.";

    // Open Graph
    const ogSiteName = seoDefaults.openGraph?.site_name || seoDefaults.title;
    const ogLocale = seoDefaults.openGraph?.locale || 'en-US';
    const ogType = props.openGraph?.type || seoDefaults.openGraph.type;
    const ogTitle = props.openGraph?.title || title;
    const ogDescription = props.openGraph?.description || metaDescription;
    const ogURL = `${seoDefaults.baseURL}${router.pathname}`;

    // To-Do - We need to calculate base URL and image directory path.
    // const ogImage = "path"; // Can we determine this property at static compilation?
    // const ogSecureImage = "path" // Can we determine this property at static compilation?
    // const ogImageType = "image/png" // Can we determine this property at static compilation?
    // const ogImageWidth = "1200" // Can we determine this property at static compilation?
    // const ogImageHeight = "600" // Can we determine this property at static compilation?
    // const ogImageAlt = "descriptive text here"

    // Add OpenGraph article details if this is an article.
    // We add unique keys to each array element to satisfy React array state information.
    const ogArticleDetails = [];
    if (ogType == "article") {
        const author = props.author || "Unknown";
        const publishedTime = props.publishedTime || new Date("2022-01-01T12:00:00Z");
        const modifiedTime = props.modifiedTime || new Date("2022-01-01T12:00:00Z");
        ogArticleDetails.push(<meta key="1" property="article:author" content={author} />);
        ogArticleDetails.push(<meta key="2" property="article:published_time" content={publishedTime} />)
        ogArticleDetails.push(<meta key="3" property="article:modified_time" content={modifiedTime} />)
    }

    // Facebook Details.
    const ogFacebookAppID = seoDefaults.fbAppID ? <meta property="fb:app_id" content={seoDefaults.fbAppID} /> : undefined;

    // Twitter Details.
    // https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
    // The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”.
    const ogTwitterCardType = props.twitterCardType || "summary_large_image";
    const ogTwitterTitle = props.twitterTitle || title;
    const ogTwitterDescription = props.twitterDescription || metaDescription;
    const ogTwitterSite = seoDefaults.twitter?.site || "@changeme";
    const ogTwitterCreator = props.twitterCreator || seoDefaults.twitter?.creator || "@changeme";
    const ogTwitterImage = props.twitterImage;  // Can we determine this property at static compilation?

    return (
        <Head>
            {/* General Meta Details */}
            <title>{title}</title>
            <meta name="description" content={metaDescription} />

            {/* Open Graph Details */}
            <meta property="og:site_name" content={ogSiteName} />
            <meta property="og:locale" content={ogLocale} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:url" content={ogURL} />
            {ogArticleDetails}

            {/* OG Facebook Details */}
            {ogFacebookAppID}

            {/* OG Twitter Details */}
            <meta name="twitter:card" content={ogTwitterCardType} />
            <meta name="twitter:title" content={ogTwitterTitle} />
            <meta name="twitter:description" content={ogTwitterDescription} />
            <meta name="twitter:site" content={ogTwitterSite} />
            <meta name="twitter:creator" content={ogTwitterCreator} />
            <meta name="twitter:image" content={ogTwitterImage} />
        </Head>
    )
}