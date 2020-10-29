import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getPostData } from '../../lib/api'
import Head from 'next/head'
import Tags from '../../components/tags'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  function calulateReadingTime() {
    let length = 0
    post?.content.map((item)=>{
      if (item.type == 'text') {
        length += item.text.replace(/<.+?>/, " ").split(" ").length;
      }
    })
    return Math.ceil((length + 100) / 220)
  }
  const readTime = calulateReadingTime()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">Loading…</h1>
        ) : (
          <>
            <article className="px-4 max-w-2xl mx-auto mb-12" style={{fontSize: 17, maxWidth: 'calc(70ch + 4rem)'}}>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta
                  property="og:image"
                  content={post.cover_image?.permalink}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.cover_image}
                date={post.date}
                author={post.author}
                slug={post.slug}
                readTime={readTime}
                //categories={post.categories}
              />
              <PostBody content={post.content} />
              {/* <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer> */}
            </article>

            {/*  
              TODO: Post recommendations
              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />} 
            */}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  //const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const data = await getPostData(params.slug)
  return {
    props: {
      preview,
      post: data[0],
      //posts: data.posts,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.map(( node ) => `/posts/${node.slug}`) || [],
    fallback: true
  }
}
