import CoverImage from './cover-image'
import Link from 'next/link'
import cn from 'classnames'

export default function PostPreview({
  title,
  className,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className={`${className}`}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="inline-block max-w-2xl mx-auto mb-4 md:py-10 md:flex">
          <div className={cn("mb-4 md:mb-0 flex-shrink-0",{"mb-6 md:w-56 md:mr-6": coverImage})}>
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          </div>
          <div className="px-4">
          <h3 className="text-2xl font-bold inline-block leading-tight mb-2">
            <span className="hover:underline inline-block">{title}</span>
          </h3>
          <div style={{fontSize: 17}}
            className="md:text-lg leading-relaxed mb-2"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          </div>
        </a>
      </Link>
    </div>
  )
}
