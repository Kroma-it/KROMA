import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import "../css/style.css"


function Menu() {
    const [lang, setLang] = useState('FR');
    const [theme, setTheme] = useState('dark');


    return (
        <>
            <header className='flex bg-black/50 sticky z-50 gap-5 h-25 absolute top-0 left-0 right-0 items-center justify-center backdrop-blur-xl'>
                <img src="/assets/logoMenu.png" className='h-18' alt="" />

                {/*Liens de naviigation */}
                <ul className='flex gap-10 justify-center text-[19px] p-5 text-white'>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/services" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Services
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/realisations" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Réalisations
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/clients" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Avis-clients
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/tarification" className={({ isActive }) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Tarification
                        </NavLink>
                    </li>
                </ul>
                <div className="flex flex-col gap-2 items-center p-5">
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
    {/*Start projet && imageAccount */ }
                <NavLink to="/personnalisation" className={({isActive}) => isActive ? 'font-medium text-fuchsia-500 underline underline-offset-8' : ''}>
                    <button className='bg-fuchsia-600 cursor-pointer rounded-xl text-[12px] text-white h-10 w-35 transition-transform duration-200 hover:scale-105'>Commencer un projet</button>
                </NavLink>
                <img src="/assets/2.jpg" className='h-12 w-12 rounded-full' alt="" />
            </header >
        </>
    )
}

export default Menu;