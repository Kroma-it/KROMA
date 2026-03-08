import { useState, useEffect } from 'react';

function Menu() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [lang, setLang] = useState('FR');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const toggleLang = () => setLang(lang === 'FR' ? 'EN' : 'FR');
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0d0914] text-white border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-[#8b3dff] rounded-lg flex items-center justify-center shadow-lg shadow-[#8b3dff]/20">
                            <span className="material-symbols-outlined text-xl text-white">polyline</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-widest text-white uppercase italic">
                            KROM
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Services</a>
                        <a className="text-sm font-medium text-[#8b3dff] hover:text-[#7a33e8] transition-colors" href="#">Tarifs</a>
                        <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Portfolio</a>
                        <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Contact</a>
                    </nav>

                    {/* Actions Menu */}
                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">language</span>
                            <span>{lang}</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-slate-300 hover:text-[#8b3dff] transition-colors rounded-full flex items-center justify-center"
                            aria-label="Toggle Theme">
                            <span className="material-symbols-outlined text-[22px]">
                                {isDarkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        {/* Primary Button */}
                        <button
                            className="hidden md:block bg-[#8b3dff] hover:bg-[#7a34e8] text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#8b3dff]/25">
                            Démarrer un projet
                        </button>

                        {/* Mobile Menu Hamburger Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 text-white focus:outline-none"
                            aria-label="Toggle Mobile Menu">
                            <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                        <nav className="flex flex-col gap-4 py-6 border-t border-white/5">
                            <div className="flex items-center gap-4 mb-2 px-2">
                                <button onClick={toggleLang} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
                                    <span className="material-symbols-outlined text-[20px]">language</span>
                                    <span>{lang}</span>
                                </button>
                            </div>
                            <a className="text-lg font-medium text-slate-300 hover:text-white px-2 transition-colors" href="#">Services</a>
                            <a className="text-lg font-medium text-[#8b3dff] px-2 transition-colors" href="#">Tarifs</a>
                            <a className="text-lg font-medium text-slate-300 hover:text-white px-2 transition-colors" href="#">Portfolio</a>
                            <a className="text-lg font-medium text-slate-300 hover:text-white px-2 transition-colors" href="#">Contact</a>
                            <button className="mt-4 bg-[#8b3dff] hover:bg-[#7a34e8] text-white px-6 py-3 mx-2 rounded-lg text-sm font-bold shadow-lg transition-colors">
                                Démarrer un projet
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Menu;