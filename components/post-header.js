import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'
import { motion } from 'framer-motion'

export default function PostHeader({
  title,
  coverImage,
  date,
  slug,
  author,
  categories,
}) {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        layout="position"
        layoutId={`title-${slug}`}>
        <PostTitle>{title}</PostTitle>
      </motion.div>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          {/* <Categories categories={categories} /> 
        </div> */}
      </div>
    </>
  )
}
