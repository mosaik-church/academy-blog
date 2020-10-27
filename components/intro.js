export default function Intro() {
  return (
    <section className="max-w-4xl px-4 mx-auto hidden md:grid md:grid-cols-2 gap-6 md:my-10">
      
      <p className="text-lg md:text-2xl font-bold p-3 text-transparent bg-gradient-to-bl from-green-700 to-green-900 bg-clip-text">
      Der Mosaik Academy Blog soll dir dabei helfen im Glauben zu wachsen, die Bibel besser zu verstehen und deine Berufung zu leben.
      </p>
      
      <div className="mx-1">
        <img className="rounded-sm w-full h-64 object-cover" src="/bible-study.jpg" alt="Studiert Bibel" />
      </div>
    </section>
  )
}
