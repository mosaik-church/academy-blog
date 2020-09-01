import cn from 'classnames'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img style={{maxHeight: '300px', width: '100%', objectFit: 'cover'}}
      src={coverImage?.permalink}
    />
  )
  return (
    <motion.div className="-mx-5 sm:mx-0 relative z-10" layoutId={title} >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </motion.div>
  )
}
