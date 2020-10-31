import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug, className }) {

  const image = (
    coverImage && <Image height={800} width={1200} alt={title} className={className} src={coverImage?.permalink} />
  )
  return (
    <div className={slug ? '' : '-mx-4 md:mx-0'} >
      {image}
    </div>
  )
}
