import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Menu from "./components/Menu"
import Clients from "./pages/Clients"
import Pricing from "./pages/Pricing"
import PrincingPer from "./pages/PricingPer"
import Realisation from "./pages/Realisation"
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  // [{name: 'React', category: 'front', description: 'A JavaScript library for building user interfaces'}]


  return (
    <>
    <ScrollToTop />
    <Menu></Menu>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/clients' element={<Clients />} ></Route>
      <Route path='/tarification' element={<Pricing />} ></Route>
      <Route path='/personnalisation' element={<PrincingPer />} ></Route>
      <Route path='/realisations' element = {<Realisation />} ></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App