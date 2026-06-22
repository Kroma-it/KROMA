import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const modalPaths = new Set(["/login", "/register"]);

export default function ScrollToTop() {
  const location = useLocation()
  const prevPathname = useRef<string | null>(null)

  useEffect(() => {
    const state = location.state as {
      backgroundLocation?: any
    } | null

    if (modalPaths.has(location.pathname)) {
      prevPathname.current = location.pathname
      return
    }

    // 1. Si la destination est une modal, on ne scrolle pas
    if (state?.backgroundLocation) {
      prevPathname.current = location.pathname
      return
    }

    // 2. Si on vient d'une modal vers une page normale, on ne scrolle pas
    if (prevPathname.current && modalPaths.has(prevPathname.current)) {
      prevPathname.current = location.pathname
      return
    }

    // Sinon, on remonte en haut
    window.scrollTo(0, 0)
    prevPathname.current = location.pathname
  }, [location])

  return null
}
