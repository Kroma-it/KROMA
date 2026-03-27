import { SendHorizonal } from 'lucide-react';
import { NavLink } from "react-router-dom"
import Pack from "../components/Pack";
import Footer from "../components/Footer"

export default function Pricing() {
  const landing = [
    {
      title: "Investissement créatif",
      subtitle: "Des tarifs transparents pour des ambitions sans limites",
      subtitle2 : "Kroma fusionne l'art et la technologie pour créer des expériences digitales uniques et percutantes. Choisissez la formule qui correspond à vos besoins et donnez vie à vos idées",
    }
  ]


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
    return (
        <>
        <div className="flex flex-col items-center gap-10 justify-center text-white pt-20">
            <p className="text-xl text-fuchsia-500 font-medium bg-fuchsia-900/30 p-3 border-1 rounded-full">Investissement créatif</p>
            <p className="text-6xl text-center w-3/6 font-bold">Des tarifs transparents pour des ambitions sans limites</p>
            <p className="text-lg text-center w-4/9 font-light">Kroma fusionne l'art et la technologie pour créer des expériences digitales uniques et percutantes. Choisissez la formule qui correspond à vos besoins et donnez vie à vos idées.</p>
        </div>

        <Pack packs={packs} />
        
        {/*Demande de devis*/}
        <div className="max-w-7xl mx-auto px-10 mb-20">
            <div className="bg-kroma-500 rounded-[2.5rem] p-12 border border-white/30 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">Besoin d'une approche plus spécifique ?</h2>
                    <p className="text-white/50 text-xl font-light">Personnalisez votre pack de design pour qu'il s'adapte parfaitement à votre flux de travail.</p>
                </div>
                <button className="bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors text-white px-8 py-5 rounded-xl text-xl font-bold flex items-center gap-3 shrink-0 cursor-pointer">
                    <NavLink to='/personnalisation' >CONTACTEZ-NOUS</NavLink>
                    
                    <SendHorizonal strokeWidth={1.5} className=" text-white w-8 h-8 ml-5" />
                </button>
            </div>
        </div>
        
        <Footer />
        </>
    )
}