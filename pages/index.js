import Head from 'next/head'
import Container from '../components/container'
import PostPreview from '../components/post-preview'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { motion } from 'framer-motion'

export default function Index({ allPosts, preview }) {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, y: 0,
      transition: "easeOut"
    }
  }
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Mosaik Academy - Blog</title>
        </Head>
        <Container>
          <Intro />
          <section>
            <motion.div 
              variants={container}
              className="flex flex-col mb-32"
              initial="hidden"
              animate="show"
            >
              {allPosts.map(( post, index ) => (
                <motion.div variants={index > 0 && item}>
                <PostPreview
                  key={post.slug}
                  className={ index%2!==0 ? 'bg-gray-200' : ''}
                  title={post.title}
                  coverImage={post.cover_image}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.description}
                />
                </motion.div>
              ))}
            </motion.div>
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
