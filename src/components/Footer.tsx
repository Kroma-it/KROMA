import {Link} from "react-router-dom"
import {Mail, Github, Facebook, Instagram, Linkedin} from "lucide-react"
import {FaTiktok, FaWhatsapp} from "react-icons/fa"

export default function Footer(){
    return (
        <footer className="bg-kroma-400 border-t border-white/20 mt-10 w-full">
            <div className="h-auto flex flex-wrap justify-between gap-10 p-10">
                {/* Colonne d'information et réseaux sociaux */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <img src="public/assets/logoMenu.png" className="h-25 object-contain object-left" alt="Kroma Logo" />
                    <p className="text-white">L'agence créative qui transforme les idées audacieuses en réalité digitale éblouissante.</p>
                    <div className="flex flex-wrap w-2/3 gap-5 mt-2">
                       <a href="mailto:kromaagence5@gmail.com" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <Mail className="text-white w-5 h-5" />
                       </a>
                       <a href="https://whatsapp.com/channel/0029VbBdGv5I7BeIQXipEi00" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <FaWhatsapp className="text-white w-5 h-5" />
                       </a>
                       <a href="https://www.instagram.com/kroma.agence" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <Instagram className="text-white w-5 h-5" />
                       </a>
                       <a href="https://linkedin.com/company/kroma-agence" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <Linkedin className="text-white w-5 h-5" />
                       </a>
                       <a href="https://github.com/kroma-it" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <Github className="text-white w-5 h-5" />
                       </a>
                       <a href="https://www.tiktok.com/@kroma552" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <FaTiktok className="text-white w-5 h-5" />
                       </a>
                       <a href="https://www.facebook.com/share/17byEWnguA/" className="bg-fuchsia-500/30 p-3 rounded-full">
                        <Facebook className="text-white w-5 h-5" />
                       </a>
                    </div>
                </div>

                {/*Domaines d'expertise*/}
                <div className="text-white">
                    <h1 className="font-bold text-2xl mb-4">EXPERTISE</h1>
                    <ul className="font-light text flex flex-col gap-2">
                        <li>Design graphique</li>
                        <li>UX/UI Design</li>
                        <li>Developpement web</li>
                        <li>Identité visuelle</li>
                    </ul>
                </div>

                {/*Liens rapides*/}
                <div className="text-white">
                    <h1 className="font-bold text-2xl mb-4">LIENS RAPIDES</h1>
                    <ul className="font-light text flex flex-col gap-2">
                        <Link to="/"><li>Accueil</li></Link>
                        <Link to="/services"><li>Services</li></Link>
                        <Link to="/realisations"><li>Réalisations</li></Link>
                        <Link to="/clients"><li>Avis-clients</li></Link>
                        <Link to="/tarification"><li>Tarification</li></Link>
                    </ul>
                </div>

                {/*Newsletter*/}
                <div className="text-white max-w-sm">
                    <h1 className="font-bold text-2xl mb-4">NEWSLETTER</h1>
                    <p className="font-light text mb-4">Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités</p>
                    <div className="flex flex-col gap-2">
                        <input type="email" placeholder="Email" className="w-full h-12 rounded-xl text-white bg-fuchsia-500/10 placeholder-white/60 px-4 text-black" />
                        <button className="bg-fuchsia-500 w-full p-3 cursor-pointer rounded-xl font-semibold text-xl hover:bg-fuchsia-600 transition-colors">S'inscrire</button>
                    </div>
                </div>

            </div>
            
            {/*Copyright*/}
            <div className="text-white flex flex-wrap justify-around p-4 border-t border-white/20">
                <p className="font-light text">Copyright © 2026 Kroma. Tous droits réservés.</p>
                <p className="font-light text">Mentions légales</p>
                <p className="font-light text">Politique de confidentialité</p>
            </div>
        </footer>
    )
}