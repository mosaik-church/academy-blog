import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

export default function CoverImage({ title, coverImage, slug }) {
  const [imageUrl, setImageUrl] = useState(coverImage?.permalink)
  function loadPlaceholder() {
    setImageUrl("https://images.unsplash.com/photo-1558519847-19fc2aa15a16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
  }
  const image = (
    coverImage && <img alt={title} style={{maxHeight: '50vh', width: '100%', objectFit: 'cover'}} src={imageUrl} onError={()=>loadPlaceholder()}/>
  )
  return (
    <div className={slug ? '' : '-mx-4 md:mx-0'} >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
