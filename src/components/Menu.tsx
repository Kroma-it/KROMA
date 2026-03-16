import {NavLink} from "react-router-dom"
import "../css/style.css"
function Menu() {

    return (
        <>
            <header className='flex bg-black/50 sticky z-50 gap-5 h-25 absolute top-0 left-0 right-0 items-center justify-center backdrop-blur-xl'>
                <img src="/assets/logoMenu.png" className='h-18' alt="" />
                <ul className='flex gap-10 justify-center text-[19px] p-5 text-white'>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'><NavLink to="/">Acceuil</NavLink></li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'><NavLink to="/services">Services</NavLink></li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'><NavLink to="/realisations">Réalisations</NavLink></li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'><NavLink to="/clients">Avis-clients</NavLink></li>
                    <li className='hover:text-fuchsia-700 ease-in-out duration-200'><NavLink to="/tarification">Tarification</NavLink></li>
                </ul>

                <div className="p-5">
                    {/*ToggleTheme*/}
                    <div className="flex items-center">
                    <button className="w-15 flex items-center h-7 bg-gray-300 dark:bg-blue-950 rounded-full  transition-colors">
                        <img className="h-2 m-0.5 z-2 w-2" src="/assets/soleil.png" alt="" />
                        <img className="h-2 m-1.5 z-2 w-2" src="/assets/lune.png" alt="" />
                        <div id="theme-slider" className="absolute w-2.5 z-1 m-0.25 h-2.5 bg-fuchsia-500 rounded-full shadow-md transform transition-transform"></div>
                    </button>
                    </div>
                    {/*ToggleLanguage*/}
                    <div className="flex items-center">
                        <button className="w-15 flex items-center h-7 bg-white dark:bg-white rounded-full  transition-colors">
                            <p className="text-gray-500 font-bold flex ml-1 float-right z-2 text-[6px] ">FR</p>
                            <p className="text-gray-500 font-bold z-2 ml-1.5 text-[6px] ">EN</p>
                            <div id="theme-slider" className="absolute w-2.5 z-1 m-0.5 h-2.5 bg-fuchsia-500 rounded-full shadow-md transform transition-transform"></div>
                        </button>
                    </div>
                </div>
                {/*Start projet && imageAccount */}
                <button className='bg-fuchsia-600 cursor-pointer rounded-xl text-[12px] text-white h-10 w-35 transition-transform duration-200 hover:scale-105'>Commencer un projet</button>
                <img src="/assets/2.jpg" className='h-12 w-12 rounded-full' alt="" />
            </header>
        </>
    )
}

export default Menu;