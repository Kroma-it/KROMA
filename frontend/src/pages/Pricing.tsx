import { SendHorizonal, ChartNoAxesCombined } from 'lucide-react';
import { NavLink } from "react-router-dom"
import Pack from "../components/Pack";

export default function Pricing() {

    const packs = [
        {
            name: "Pack Starter",
            description: "Idéal pour les lancements et les startups",
            price: "100K XAF",
            features: [
                "Logo",
                "Charte graphique",
                "1 affiche visuelle",
                "1 carte de visite",
                "1 flyer",
                "1 bannière réseaux sociaux"
            ]
        },
        {
            name: "Pack Essential",
            description: "Idéal pour les lancements et les startups",
            price: "180K XAF",
            features: [
                "Logo",
                "Charte graphique",
                "1 affiche visuelle",
                "1 carte de visite",
                "3 affiches visuelles",
                "1 bannière réseaux sociaux"
            ]
        },
        {
            name: "Pack Pro",
            description: "Idéal pour les lancements et les startups",
            price: "250K+ XAF",
            features: [
                "Logo",
                "Charte graphique",
                "1 affiche visuelle",
                "Carte de visite",
                "1 flyer",
                "Mockups",
                "1 bannière réseaux sociaux"
            ]
        }
    ]

    const packsWeb = [
        {
            name : "Portfolio",
            description : "Pour vous présenter devant vos embaucheurs",
            price : "40K XAF",
            features : [
                "Galerie de projets",
                "Animations légères et fluides",
                "Design moderne et professionnel",
                "Responsive sur tous les appareils",
                "Optimisation SEO de base",
                "Contact direct via formulaire"
            ]
        },
        {
            name : "Site vitrine",
            description : "Pour avoir accès à votre business de n'importe où",
            price : "150K XAF",
            features : [
                "5 pages",
                "Design moderne et professionnel",
                "Responsive sur tous les appareils",
                "Optimisation reférencement Google",
                "Contact direct via formulaire"
            ]
        },
        {
            name : "Site complet",
            description : "Pour convertir chaque clique en vente",
            price : "300K+ XAF",
            features : [
                "Design moderne et professionnel",
                "Responsive sur tous les appareils",
                "Optimisation reférencement Google",
                "Contact direct via formulaire"
            ]
        }
    ]
    return (
        <>
        <div className="flex flex-col items-center gap-10 justify-center text-white pt-40 md:pt-60 pb-6 px-6">
            <p className="flex items-center justify-center gap-2 text-base md:text-xl text-fuchsia-500 font-medium bg-fuchsia-900/30 px-5 py-2 border border-fuchsia-500/30 rounded-full">
                <ChartNoAxesCombined className="w-5 h-5" />
                Investissement créatif
            </p>
            <h1 className="text-4xl md:text-6xl text-center w-full md:w-3/6 font-bold leading-tight">Des tarifs transparents pour des ambitions sans limites</h1>
            <p className="text-base md:text-lg text-center w-full md:w-4/9 font-light text-white/60">Kroma fusionne l'art et la technologie pour créer des expériences digitales uniques et percutantes. Choisissez la formule qui correspond à vos besoins et donnez vie à vos idées.</p>
        </div>

        {/* Design Packs Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-4">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-0.5 bg-linear-to-r from-fuchsia-500 to-transparent"></div>
                <span className="text-fuchsia-500 text-2xl font-bold uppercase tracking-[0.3em]">Design & Branding</span>
            </div>
            <p className="text-white/40 text-base font-light ml-16">Identité visuelle, charte graphique et supports marketing</p>
        </div>

        <Pack packs={packs} />
        
        {/*Demande de devis*/}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
            <div className="bg-linear-to-br from-purple-900/60 to-fuchsia-900/30 rounded-4xl md:rounded-[2.5rem] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">Besoin d'une approche plus spécifique ?</h2>
                    <p className="text-white/50 text-lg font-light">Personnalisez votre pack de design pour qu'il s'adapte parfaitement à votre flux de travail.</p>
                </div>
                <NavLink to='/personnalisation' className="bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-300 hover:scale-105 text-white px-8 py-5 rounded-xl text-lg md:text-xs  font-bold flex items-center gap-3 shrink-0 cursor-pointer shadow-[0_10px_30px_-10px_rgba(192,38,211,0.5)]">
                    CONTACTEZ-NOUS
                    <SendHorizonal strokeWidth={1.5} className="text-white w-6 h-6" />
                </NavLink>
            </div>
        </div>

        {/* Web Packs Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-4">
            <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-0.5 bg-linear-to-r from-fuchsia-500 to-transparent"></div>
                <span className="text-fuchsia-500 text-2xl font-bold uppercase tracking-[0.3em]">Développement Web</span>
            </div>
            <p className="text-white/40 text-base font-light ml-16">Portfolio, site vitrine et solutions e-commerce</p>
        </div>
        
        <Pack packs={packsWeb} />

        {/*Demande de devis*/}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
            <div className="bg-linear-to-br from-purple-900/60 to-fuchsia-900/30 rounded-4xl md:rounded-[2.5rem] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">Besoin d'une approche plus spécifique ?</h2>
                    <p className="text-white/50 text-lg font-light">Personnalisez votre pack de design pour qu'il s'adapte parfaitement à votre flux de travail.</p>
                </div>
                <NavLink to='/personnalisation' className="bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-300 hover:scale-105 text-white px-8 py-5 rounded-xl text-lg md:text-xl font-bold flex items-center gap-3 shrink-0 cursor-pointer shadow-[0_10px_30px_-10px_rgba(192,38,211,0.5)]">
                    CONTACTEZ-NOUS
                    <SendHorizonal strokeWidth={1.5} className="text-white w-6 h-6" />
                </NavLink>
            </div>
        </div>

        </>
    )
}