import { useEffect } from 'react'
import Portfolio from './components/Portfolio'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    })
  }, [])

  return (
    <Portfolio />
  )
}

export default App