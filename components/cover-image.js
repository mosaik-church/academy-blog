import Image from 'next/image'

export default function CoverImage({ title, coverImage, slug }) {

  const attr = {
    height: slug ? '400' : false,
    width: slug ? '600' : false,
    unsized: slug ? false : true
  }

  const image = (
    coverImage && <Image {...attr} alt={title} className="cover-image" src={coverImage?.permalink} />
  )
  return (
    <div className={slug ? '' : '-mx-4 md:mx-0'} >
      {image}
    </div>
  )
}
