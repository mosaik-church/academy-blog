import Head from 'next/head'
import Container from '../components/container'
import PostPreview from '../components/post-preview'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Mosaik Academy - Blog</title>
        </Head>
        <Container>
          <Intro />
          <section>
            <div className="flex flex-col mb-32">
              {allPosts.map(( post ) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.cover_image}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  //excerpt={node.excerpt}
                />
              ))}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
