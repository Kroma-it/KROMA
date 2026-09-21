import { useState, useEffect, useRef } from "react"
import { ChevronDown, LogOut, LayoutDashboard, User } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import "../css/style.css"
import { toModalBackgroundState } from "../utils/modalBackground";
import { useAuth } from "../context/AuthContext";


function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const location = useLocation();
    const navigate = useNavigate();
    const loginBackgroundState = toModalBackgroundState(location);
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        setIsUserMenuOpen(false);
        setIsMenuOpen(false);
        navigate('/');
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-22 px-4 md:px-20 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-xl' : 'bg-transparent'}`}>
                {/* Left: Logo */}
                <img src="/assets/logoMenu.svg" className='h-18' alt="" />

                {/* Center: Navigation Links (desktop only) */}
                <ul className='hidden md:flex gap-8 lg:gap-10 justify-center text-base lg:text-[19px] text-white'>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-500'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Accueil
                        </NavLink>
                    </li>
                    <li
                        className='relative hover:text-fuchsia-700 ease-in-out duration-500'
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            type="button"
                            className={`flex items-center gap-1 focus:outline-none transition-colors duration-300 ${
                                location.pathname.startsWith('/services')
                                    ? 'font-bold text-fuchsia-500 underline underline-offset-8'
                                    : ''
                            }`}
                            onClick={() => setIsServicesOpen(prev => !prev)}
                        >
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isServicesOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {/* Dropdown Container with padding-top bridge to prevent hover loss */}
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52 transition-all duration-300 z-50 ${
                                isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                            }`}
                        >
                            <div className="rounded-2xl bg-black/70 backdrop-blur-2xl border border-white/20 shadow-xl shadow-fuchsia-900/20 overflow-hidden">
                                <NavLink
                                    to="/services/logo"
                                    className={({ isActive }) =>
                                        `block px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-fuchsia-700/30 hover:text-fuchsia-300 ${
                                            isActive ? 'text-fuchsia-400 bg-fuchsia-900/30' : 'text-white'
                                        }`
                                    }
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    Conception de logo
                                </NavLink>
                                <div className="h-px bg-white/10" />
                                <NavLink
                                    to="/services/web"
                                    className={({ isActive }) =>
                                        `block px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-fuchsia-700/30 hover:text-fuchsia-300 ${
                                            isActive ? 'text-fuchsia-400 bg-fuchsia-900/30' : 'text-white'
                                        }`
                                    }
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    Conception de site web
                                </NavLink>
                                <div className="h-px bg-white/10" />
                                <NavLink
                                    to="/services/graphics"
                                    className={({ isActive }) =>
                                        `block px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-fuchsia-700/30 hover:text-fuchsia-300 ${
                                            isActive ? 'text-fuchsia-400 bg-fuchsia-900/30' : 'text-white'
                                        }`
                                    }
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    Création visuelle
                                </NavLink>
                            </div>
                        </div>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-500'>
                        <NavLink to="/tarification" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Tarification
                        </NavLink>
                    </li>
                </ul>

                {/* Right: Toggles + Avatar (desktop) / Dots (mobile) */}
                <div className="flex items-center gap-3">
                    {/* Desktop Toggles */}
                    <div className="hidden md:flex flex-row gap-3 items-center">
                        {/* Language Toggle (EN/FR) */}
                        {/*
                        <p className="text-white font-bold text-sm p-2 rounded-full cursor-pointer text-center items-center flex justify-center border hover:bg-kroma-300"
                        onClick={toggleLang}
                        >
                            {lang}
                        </p>
                        */}
                        <NavLink 
                            to="/personnalisation" 
                            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-fuchsia-700/90 text-white rounded-xl font-bold text-sm transition-all duration-500 hover:bg-fuchsia-900 border border-white/10 group relative overflow-hidden active:scale-95"
                        >
                            <span className="relative z-10">Commencer un projet</span>
                        </NavLink>

                        {/* Avatar / User Menu */}
                        {user ? (
                            <div className="relative" ref={userMenuRef}>
                                <button
                                    type="button"
                                    onClick={() => setIsUserMenuOpen(prev => !prev)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/40 bg-fuchsia-900/20 hover:bg-fuchsia-900/40 transition-all duration-300 cursor-pointer"
                                >
                                    {user.avatarUrl ? (
                                        <img src={user.avatarUrl} className="h-8 w-8 rounded-full border border-fuchsia-500" alt={user.firstName} />
                                    ) : (
                                        <div className="h-8 w-8 rounded-full bg-fuchsia-700 flex items-center justify-center text-white font-bold text-sm">
                                            {user.firstName?.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <span className="text-white font-semibold text-sm">{user.firstName}</span>
                                    <ChevronDown size={14} className={`text-white/60 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown */}
                                <div className={`absolute top-full right-0 mt-2 w-44 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/15 shadow-xl shadow-fuchsia-900/20 overflow-hidden transition-all duration-300 ${
                                    isUserMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}>
                                    <NavLink
                                        to="/profil"
                                        onClick={() => setIsUserMenuOpen(false)}
                                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-white hover:bg-fuchsia-700/30 hover:text-fuchsia-300 transition-colors"
                                    >
                                        <User size={15} />
                                        Mon profil
                                    </NavLink>
                                    {user.role === 'ADMIN' && (
                                        <>
                                            <div className="h-px bg-white/10" />
                                            <NavLink
                                                to="/admin"
                                                onClick={() => setIsUserMenuOpen(false)}
                                                className="flex items-center gap-2.5 px-4 py-3 text-sm text-[#c084fc] hover:bg-[#241838] transition-colors"
                                            >
                                                <LayoutDashboard size={15} />
                                                Dashboard admin
                                            </NavLink>
                                        </>
                                    )}
                                    <div className="h-px bg-white/10" />
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="flex items-center gap-2.5 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors w-full cursor-pointer"
                                    >
                                        <LogOut size={15} />
                                        Se déconnecter
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <NavLink to="/login" state={loginBackgroundState}>
                                <button
                                    type="button"
                                    aria-label="Ouvrir la connexion"
                                    className="rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-black"
                                >
                                    <div className="h-11 w-11 rounded-full border-2 border-fuchsia-500 bg-fuchsia-900/30 flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:bg-fuchsia-900/60">
                                        <User size={22} />
                                    </div>
                                </button>
                            </NavLink>
                        )}
                    </div>

                    {/* Mobile Toggle Button (3 dots) */}
                    <button 
                        className={`menu-btn md:hidden flex flex-col cursor-pointer items-center justify-center gap-1.5 w-10 h-10 text-fuchsia-500 focus:outline-none ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="menu-dot"></span>
                        <span className="menu-dot"></span>
                        <span className="menu-dot"></span>
                    </button>
                </div>
            </header>

                {/* Mobile Navigation Overlay - outside header to avoid clipping */}
                <div className={`md:hidden fixed top-22 left-0 right-0 bottom-0 z-50 bg-black/20 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} id="mobile-menu">
                    <nav className="flex flex-col gap-6 py-12 px-10 text-white h-full overflow-y-auto pb-32">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Accueil</NavLink>
                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                type="button"
                                className={`flex items-center gap-2 text-lg font-semibold transition-colors hover:text-fuchsia-500 w-full ${
                                    location.pathname.startsWith('/services')
                                        ? 'text-fuchsia-400'
                                        : ''
                                }`}
                                onClick={() => setIsMobileServicesOpen(prev => !prev)}
                            >
                                Services
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${
                                        isMobileServicesOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${
                                isMobileServicesOpen ? 'max-h-48 mt-2' : 'max-h-0'
                            }`}>
                                <div className="flex flex-col gap-1 pl-4 border-l-2 border-fuchsia-700/50">
                                    <NavLink
                                        to="/services/logo"
                                        onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                                        className={({ isActive }) =>
                                            `py-2 text-base font-medium transition-colors hover:text-fuchsia-400 ${
                                                isActive ? 'text-fuchsia-400' : 'text-white/80'
                                            }`
                                        }
                                    >
                                        Conception de logo
                                    </NavLink>
                                    <NavLink
                                        to="/services/web"
                                        onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                                        className={({ isActive }) =>
                                            `py-2 text-base font-medium transition-colors hover:text-fuchsia-400 ${
                                                isActive ? 'text-fuchsia-400' : 'text-white/80'
                                            }`
                                        }
                                    >
                                        Conception de site web
                                    </NavLink>
                                    <NavLink
                                        to="/services/graphics"
                                        onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}
                                        className={({ isActive }) =>
                                            `py-2 text-base font-medium transition-colors hover:text-fuchsia-400 ${
                                                isActive ? 'text-fuchsia-400' : 'text-white/80'
                                            }`
                                        }
                                    >
                                        Création visuelle
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/tarification" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Tarification</NavLink>
                        
                        <div className="h-px bg-white/10 my-4"></div>

                                {user ? (
                    <div className="flex items-center gap-3">
                        {user.avatarUrl ? (
                            <img src={user.avatarUrl} className="h-11 w-11 rounded-full border-2 border-fuchsia-500" alt={user.firstName} />
                        ) : (
                            <div className="h-11 w-11 rounded-full bg-fuchsia-700 flex items-center justify-center text-white font-bold text-base">
                                {user.firstName?.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <div>
                            <p className="text-white font-bold text-sm">{user.firstName} {user.lastName}</p>
                            <p className="text-white/40 text-xs">{user.email}</p>
                        </div>
                    </div>
                ) : (
                    <NavLink to="/login" state={loginBackgroundState} onClick={() => setIsMenuOpen(false)}>
                        <button
                            type="button"
                            aria-label="Ouvrir la connexion"
                            className="w-fit rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        >
                            <div className="h-12 w-12 rounded-full border-2 border-fuchsia-500 bg-fuchsia-900/30 flex items-center justify-center text-white">
                                <User size={24} />
                            </div>
                        </button>
                    </NavLink>
                )}

                        <NavLink 
                            to="/personnalisation" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="mt-4 bg-kroma-600 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg active:scale-95 transition-all duration-300 border border-white/5 flex items-center justify-center gap-3 group"
                        >
                            Commencer un projet
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </NavLink>
                        {user && (
                            <>
                                <div className="h-px bg-white/10 my-2" />
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-red-400 font-semibold text-base hover:text-red-300 transition-colors"
                                >
                                    <LogOut size={18} />
                                    Se déconnecter
                                </button>
                            </>
                        )}
                    </nav>
                </div>
        </>
    )
}

export default Menu;
