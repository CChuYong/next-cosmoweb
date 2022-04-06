import Head from "next/head";

export default function Seo({title, mainTitle}){
    return <Head>
        <title>{title} | {mainTitle || "CosmoAGE 홈페이지"}</title>
        <meta name="description" content="CosmoAGE 홈페이지 입니다" />
        <link rel="icon" href="/cosmo-icon.png" />
    </Head>
}