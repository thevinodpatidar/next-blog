import Head from 'next/head'
import Link from "next/link"
import Date from '../components/date'
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../libs/posts'
import Layout, {siteTitle} from '../components/layout'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData);
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
  </Head>
  <section className={utilStyles.headingMd}>
    <p style={{textAlign : "center"}}>I'm Vinod Patidar, Developer, Designer and Engineer.</p>
  </section>
  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
      ))}
    </ul>
  </section>
</Layout>
  )
}