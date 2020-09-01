import '../styles/index.css'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type="crossfade">
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
