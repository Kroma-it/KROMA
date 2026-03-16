import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Menu from "./components/Menu"
import Clients from "./pages/Clients"
import Pricing from "./pages/Pricing"

function App() {
  // [{name: 'React', category: 'front', description: 'A JavaScript library for building user interfaces'}]


  return (
    <>
    <Menu></Menu>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/clients' element={<Clients />} ></Route>
      <Route path='/tarification' element={<Pricing />} ></Route>
    </Routes>
      
    </>
  )
}

export default App