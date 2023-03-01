import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Events from './components/Events'
import Footer from './components/Footer'
import Hacakthon from './components/Hacakthon'
import Header from './components/Header'
import Home from './components/Home'
import Loading from './components/Loading'
import Products from './components/Products'
import Services from './components/Services'
import Sponsors from './components/Sponsors'
import SVG from './components/SVG'

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 5000)


  return (
    <>
      <Loading />
      <div className={loading ? 'hidden' : 'visible'}>
        <SVG />
        <Header />
        <Home />
        <Events />
        <Products />
        <div className="static-sections">
          <Services />
          <Hacakthon />
          <Sponsors />
          <About />
          <div className="rabbits-area">
            <div className="rabbits-overlay" id='rabbitsOverlay'>
              {/* <div class="rabbit-spawned" style={{ "transform": "translate(6.07259px, 144.114px) rotate(-0.00372901rad)" }}></div> */}
            </div>
            <p id="debug"></p>
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
