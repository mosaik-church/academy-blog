import CoverImage from '../components/cover-image'
import cn from 'classnames'

export default function PostHeader({
  title,
  coverImage,
  readTime,
  date,
  slug,
  author,
  categories,
}) {
  return (
    <>
      <div className={cn("mb-6", {"md:mt-8 md:mb-10 w-screen md:w-auto": coverImage, 'max-h-50vh': slug})}>
        <CoverImage priority={true} className="cover-image" title={title} coverImage={coverImage} />
      </div>
      <div className="text-gray-700 mb-3 text-sm">{readTime} Minuten</div>
      <div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold inline-block tracking-tighter leading-tight md:leading-none mb-4 md:text-left"
          >{title}</h1>
      </div>
    </>
  )
}
