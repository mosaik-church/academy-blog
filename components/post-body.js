export default function PostBody({ content }) {
  return (
    <div className="prose break-words">
      {content.map((section, index)=>(
        <div key={index} dangerouslySetInnerHTML={{ __html: section.text }} />
      ))}
    </div>
  )
}
