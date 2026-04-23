import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import "../css/style.css"


function Menu() {
    const [lang, setLang] = useState('FR');
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-25 bg-black/50 backdrop-blur-xl px-4 md:px-20'>
                {/* Left: Logo */}
                <img src="/assets/logoMenu.png" className='h-18' alt="" />

                {/* Center: Navigation Links (desktop only) */}
                <ul className='hidden md:flex gap-8 lg:gap-10 justify-center text-base lg:text-[19px] text-white'>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-500'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-500'>
                        <NavLink to="/services" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Services
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-500 ease-in-out duration-300'>
                        <NavLink to="/realisations" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Réalisations
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-500'>
                        <NavLink to="/clients" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Avis-clients
                        </NavLink>
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
                        {/* Theme Toggle (Sun/Moon) */}
                        <div className="relative bg-white/5 border border-white/10 w-[72px] h-9 flex items-center p-1 rounded-full cursor-pointer backdrop-blur-md hover:border-fuchsia-500/30 transition-all duration-300">
                            <div 
                                className={`z-10 flex-1 flex justify-center items-center transition-all duration-300 ${theme === 'dark' ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'}`}
                                onClick={() => setTheme('dark')}
                            >
                                <Moon size={14} />
                            </div>
                            <div 
                                className={`z-10 flex-1 flex justify-center items-center transition-all duration-300 ${theme === 'light' ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'}`}
                                onClick={() => setTheme('light')}
                            >
                                <Sun size={14} />
                            </div>
                            <button 
                                className={`absolute bg-gradient-to-br from-fuchsia-500 to-purple-600 w-7 h-7 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(217,70,239,0.4)] ${theme === 'dark' ? 'left-1' : 'left-[calc(100%-32px)]'}`}
                            ></button>
                        </div>

                        {/* Language Toggle (EN/FR) */}
                        <div className="relative bg-white/5 border border-white/10 w-[72px] h-9 flex items-center p-1 rounded-full cursor-pointer backdrop-blur-md hover:border-fuchsia-500/30 transition-all duration-300">
                            <div 
                                className={`z-10 flex-1 flex justify-center items-center text-[11px] font-bold tracking-wide transition-all duration-300 ${lang === 'EN' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                onClick={() => setLang('EN')}
                            >
                                EN
                            </div>
                            <div 
                                className={`z-10 flex-1 flex justify-center items-center text-[11px] font-bold tracking-wide transition-all duration-300 ${lang === 'FR' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                onClick={() => setLang('FR')}
                            >
                                FR
                            </div>
                            <button 
                                className={`absolute bg-gradient-to-br from-fuchsia-500 to-purple-600 w-7 h-7 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(217,70,239,0.4)] ${lang === 'EN' ? 'left-1' : 'left-[calc(100%-32px)]'}`}
                            ></button>
                        </div>
                        
                        <NavLink 
                            to="/personnalisation" 
                            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-fuchsia-600 text-white rounded-xl font-bold text-sm transition-all duration-500 hover:bg-fuchsia-900 border border-white/10 group relative overflow-hidden active:scale-95"
                        >
                            <span className="relative z-10">Commencer un projet</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <svg 
                                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </NavLink>

                        {/* Avatar */}
                        <img src="/assets/2.jpg" className='h-11 w-11 rounded-full border-2 border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 cursor-pointer' alt="" />
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
                <div className={`md:hidden fixed top-[100px] left-0 right-0 bottom-0 z-50 bg-black/95 backdrop-blur-3xl border-t border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} id="mobile-menu">
                    <nav className="flex flex-col gap-6 py-12 px-10 text-white h-full overflow-y-auto pb-32">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Accueil</NavLink>
                        <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Services</NavLink>
                        <NavLink to="/realisations" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Réalisations</NavLink>
                        <NavLink to="/clients" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Avis-clients</NavLink>
                        <NavLink to="/tarification" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-fuchsia-500 transition-colors">Tarification</NavLink>
                        
                        <div className="h-px bg-white/10 my-4"></div>

                        {/* Mobile Toggles */}
                        <div className="flex items-center justify-between gap-4 py-2">
                             {/* Theme Toggle (Sun/Moon) */}
                            <div className="relative bg-white/10 border border-white/20 w-20 h-10 flex items-center p-1 rounded-full cursor-pointer backdrop-blur-md">
                                <div 
                                    className={`z-10 flex-1 flex justify-center items-center transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-400'}`}
                                    onClick={() => setTheme('dark')}
                                >
                                    <Moon size={18} />
                                </div>
                                <div 
                                    className={`z-10 flex-1 flex justify-center items-center transition-colors duration-300 ${theme === 'light' ? 'text-white' : 'text-gray-400'}`}
                                    onClick={() => setTheme('light')}
                                >
                                    <Sun size={18} />
                                </div>
                                <button 
                                    className={`absolute bg-fuchsia-500 w-8 h-8 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(217,70,239,0.5)] ${theme === 'dark' ? 'translate-x-[2px]' : 'translate-x-[calc(100%+6px)]'}`}
                                ></button>
                            </div>

                            {/* Language Toggle (EN/FR) */}
                            <div className="relative bg-white/10 border border-white/20 w-20 h-10 flex items-center p-1 rounded-full cursor-pointer backdrop-blur-md">
                                <div 
                                    className={`z-10 flex-1 flex justify-center items-center text-xs font-bold transition-colors duration-300 ${lang === 'EN' ? 'text-white' : 'text-gray-400'}`}
                                    onClick={() => setLang('EN')}
                                >
                                    EN
                                </div>
                                <div 
                                    className={`z-10 flex-1 flex justify-center items-center text-xs font-bold transition-colors duration-300 ${lang === 'FR' ? 'text-white' : 'text-gray-400'}`}
                                    onClick={() => setLang('FR')}
                                >
                                    FR
                                </div>
                                <button 
                                    className={`absolute bg-fuchsia-500 w-8 h-8 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(217,70,239,0.5)] ${lang === 'EN' ? 'translate-x-[2px]' : 'translate-x-[calc(100%+6px)]'}`}
                                ></button>
                            </div>
                        </div>
                <img src="/assets/2.jpg" className='h-12 w-12 rounded-full' alt="" />

                        <NavLink 
                            to="/personnalisation" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="mt-4 bg-purple-800 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-purple-900/40 active:scale-95 transition-all duration-300 border border-white/5 flex items-center justify-center gap-3 group"
                        >
                            Commencer un projet
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </NavLink>
                    </nav>
                </div>
        </>
    )
}

export default Menu;