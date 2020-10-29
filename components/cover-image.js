import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug }) {

  const image = (
    coverImage && <Image unsized alt={title} className="cover-image" src={coverImage?.permalink} />
  )
  return (
    <div className={slug ? '' : '-mx-4 md:mx-0'} >
      {image}
    </div>
  )
}
