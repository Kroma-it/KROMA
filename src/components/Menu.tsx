import { useState } from "react"
import {NavLink} from "react-router-dom"
import {Moon, Sun} from "lucide-react"
import "../css/style.css"


function Menu() {
    const [lang, setLang] = useState('FR');


    return (
        <>
            <header className='flex bg-black/50 sticky z-50 gap-5 h-25 absolute top-0 left-0 right-0 items-center justify-center backdrop-blur-xl'>
                <img src="/assets/logoMenu.png" className='h-18' alt="" />

                {/*Liens de naviigation */}
                <ul className='flex gap-10 justify-center text-[19px] p-5 text-white'>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/" className={({isActive}) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/services" className={({isActive}) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Services
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/realisations" className={({isActive}) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Réalisations
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/clients" className={({isActive}) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Avis-clients
                        </NavLink>
                    </li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'>
                        <NavLink to="/tarification" className={({isActive}) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                            Tarification
                        </NavLink>
                    </li>
                </ul>

                <div className="p-5">
                    <div className="relative bg-white w-24 h-10 text-gray-500 font-medium text-center flex items-center p-1 rounded-full cursor-pointer">
                        <p 
                            className={`z-10 flex-1 transition-colors duration-100 ${lang === 'EN' ? 'text-white' : 'text-gray-500'}`}
                            onClick={() => setLang('EN')}
                        >
                            FR
                        </p>
                        <p 
                            className={`z-10 flex-1 transition-colors duration-100 ${lang === 'FR' ? 'text-white' : 'text-gray-500'}`}
                            onClick={() => setLang('FR')}
                        >
                            EN
                        </p>
                        <button 
                            className={`absolute bg-fuchsia-500 w-[calc(50%-4px)] h-8 rounded-full transition-all duration-300 ${lang === 'EN' ? 'translate-x-0' : 'translate-x-[calc(100%+0px)]'}`}
                        ></button>
                    </div>
           
                    
                </div>
                {/*Start projet && imageAccount */}
                <NavLink to="/personnalisation" className={({isActive}) => isActive ? 'font-bold text-fuchsia-500 underline underline-offset-8' : ''}>
                    <button className='bg-fuchsia-600 cursor-pointer rounded-xl text-[12px] text-white h-10 w-35 transition-transform duration-200 hover:scale-105'>Commencer un projet</button>
                </NavLink>
                <img src="/assets/2.jpg" className='h-12 w-12 rounded-full' alt="" />
            </header>
        </>
    )
}

export default Menu;