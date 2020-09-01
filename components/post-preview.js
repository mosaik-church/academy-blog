import CoverImage from './cover-image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PostPreview({
  title,
  className,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className={`px-5 ${className}`}>
      <div className="m-2 mb-6">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <motion.h3
            layoutId={`title-${slug}`}
            initial={{opacity: 0, fontSize: 24 }}
            animate={{opacity: 1, fontSize: 24}}
            exit={{opacity: 0}}
            layout="position"
            className="text-2xl font-bold mb-3 inline-block leading-tight">
              <motion.span
                className="hover:underline inline-block"
                dangerouslySetInnerHTML={{ __html: title }}
              ></motion.span>
          </motion.h3>
          <motion.div
            className="text-lg leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </a>
      </Link>
    </div>
  )
}
