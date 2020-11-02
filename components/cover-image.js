import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug, className, priority }) {

  const image = (
    coverImage && <Image height={800} priority={priority} width={1200} alt={title} className={className} src={coverImage?.permalink} />
  )
  return (
    <div className={slug ? '' : '-mx-4 md:mx-0 w-screen md:w-auto'} >
      {image}
    </div>
  )
}
