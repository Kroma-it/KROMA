import {Routes, Route} from 'react-router-dom'
import './css/home.css';
import './css/menu.css';
import './css/technoAdd.css';
import './css/TechnoList.css'

import Home from './pages/Home'
import Menu from './components/Menu'
import TechnoAdd from './pages/TechoAdd'
import TechnoList from './pages/TechnoList';


function App() {
  // [{name: 'React', category: 'front', description: 'A JavaScript library for building user interfaces'}]


  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/add' element={<TechnoAdd />} ></Route>
        <Route path='/techno-list' element={<TechnoList/>} ></Route>
      </Routes>
    </>
  )
}

export default App
