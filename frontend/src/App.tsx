import { useRef } from 'react'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import type { Location } from 'react-router-dom'
import Home from "./pages/Home"
import Menu from "./components/Menu"
import Pricing from "./pages/Pricing"
import PrincingPer from "./pages/PricingPer"
import NotFound from "./pages/NotFound"
import Login from './pages/Login'
import Profil from './pages/Profil'
import Admin from './pages/Admin'
import ServiceLogo from './pages/ServiceLogo'
import ServiceWeb from './pages/ServiceWeb'
import ServiceGraphics from './pages/ServiceGraphics'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { getModalBackgroundLocation } from './utils/modalBackground'
import { useAuth } from './context/AuthContext'

const modalPaths = new Set(['/login', '/register'])

function AdminGuard() {
  const { user, isLoading } = useAuth()
  if (isLoading) return null
  if (!user || user.role !== 'ADMIN') return <Navigate to="/" replace />
  return <Admin />
}

function App() {
  const location = useLocation()
  const previousPageLocation = useRef<Location | undefined>(undefined)
  const stateBackgroundLocation = getModalBackgroundLocation(location)
  const isModalRoute = modalPaths.has(location.pathname)

  if (!isModalRoute) {
    previousPageLocation.current = location
  }

  const backgroundLocation = stateBackgroundLocation || (
    isModalRoute ? previousPageLocation.current : undefined
  )

  const currentPath = (backgroundLocation || location).pathname
  const knownRoutes = [
    '/',
    '/services',
    '/tarification',
    '/profil',
    '/personnalisation',
    '/services/logo',
    '/services/web',
    '/services/graphics',
    '/login',
    '/admin'
  ]
  const normalizedPath = currentPath.endsWith('/') && currentPath !== '/' ? currentPath.slice(0, -1) : currentPath
  const is404 = !knownRoutes.includes(normalizedPath)

  const isAdmin = (backgroundLocation || location).pathname === '/admin'

  return (
    <div>
      {!is404 && !isAdmin && <Menu />}
      <ScrollToTop />
      
      {/* Main Routes */}
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Home />} />
        <Route path='/tarification' element={<Pricing />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/personnalisation' element={<PrincingPer />} />
        <Route path='/services/logo' element={<ServiceLogo />} />
        <Route path='/services/web' element={<ServiceWeb />} />
        <Route path='/services/graphics' element={<ServiceGraphics />} />
        <Route path='/admin' element={<AdminGuard />} />
        
        {/* Render as full pages if accessed directly */}
        {!backgroundLocation && (
          <>
            <Route path='/login' element={<Login />} />
          </>
        )}
        
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* Render as overlay modals if opened via modal state */}
      {backgroundLocation && (
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      )}

      {!is404 && !isAdmin && <Footer />}
    </div>
  )
}

export default App
