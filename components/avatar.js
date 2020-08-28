export default function Avatar({ author }) {
  const name = author[0]?.title
  const baseURL = "http://mosaik.test/assets/main/profile/"
  return (
    <div className="flex items-center">
      <img
        src={`${baseURL + author[0]?.slug}.jpg`}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
