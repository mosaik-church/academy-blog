import Footer from '../components/footer'
import Meta from '../components/meta'
import Navigation from '../components/navigation'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen flex ">
        <aside className="hidden w-64 bg-gray-100 max-h-screen sticky">

        </aside>
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  )
}
