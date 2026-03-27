import ServiceClient from "../components/ServiceClient"
import { useState } from "react"
import Footer from "../components/Footer"
import { MessageSquareText, Info } from "lucide-react"

export default function Service(){
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const handleToggleService = (title: string) => {
        setSelectedServices(prev => 
            prev.includes(title) 
                ? prev.filter(t => t !== title)
                : [...prev, title]
        )
    }

    const pricings = [
        {
            Img : "Compass",
            title : "IDENTITE VISUELLE",
            subtitle : "Conception de logo",
            content : "Créer une identité unique qui marque les esprits dès le premier regard"
        },
        {
            Img : "Palette",
            title :"CHARTE GRAPHIQUE",
            subtitle : "Charte graphique",
            content : "Cohérence visuelle"
        },
        {
            Img :"Layer2",
            title :"MARKETING",
            subtitle : "Supports visuels",
            content : "Impact garanti"
        },
        {
            Img : "Scroll",
            title : "PRINT",
            subtitle : "Papeterie",
            content : "Elégance tactile"
        },
        {
            Img : "Monitor",
            title : "PROJECTION",
            subtitle : "Mockups",
            content : "Rendu réaliste"
        }
    ]
    return(
        <>
            <div className="p-20">
                <h1 className="text-white font-bold text-7xl">Donnez vie à votre <span className="text-fuchsia-500">vision</span></h1>
                <h3 className="text-white font-lg w-3/5 text-2xl">
                    Sélectionnez les services artistiques dont vous avez besoin pour propulser votre marque au niveau supérieur avec l'experrtise Kroma
                </h3>
            </div>
            <div className="px-20 pb-20">
                <ServiceClient 
                    pricings={pricings} 
                    selectedServices={selectedServices}
                    onToggleService={handleToggleService}
                />
            </div>

            {/* Projet Details Form */}
            <div className="max-w-7xl mx-auto px-20 pb-32">
                <div className="relative group bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-fuchsia-500/10 rounded-xl">
                            <MessageSquareText className="text-fuchsia-500 w-8 h-8" />
                        </div>
                        <h2 className="text-white text-3xl font-bold tracking-tight">Détails du projet</h2>
                    </div>

                    {/* Textarea Container */}
                    <div className="relative mb-12">
                        <textarea 
                            className="w-full h-80 bg-black/40 border border-white/5 rounded-[2rem] p-10 text-white text-xl placeholder:text-white/10 focus:outline-none focus:border-fuchsia-500/30 transition-all resize-none leading-relaxed"
                            placeholder="Décrivez votre projet artistique, vos objectifs, et l'univers que vous souhaitez explorer ici..."
                        />
                        {/* Subtle inner glow for textarea */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                        <div className="flex items-center gap-4 text-white/30 bg-white/5 px-6 py-3 rounded-full border border-white/5">
                            <Info className="w-5 h-5 text-fuchsia-500/50" />
                            <p className="text-lg font-medium">Notre équipe reviendra vers vous sous 48h ouvrées</p>
                        </div>

                        <button className="group relative px-10 py-5 bg-fuchsia-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(192,38,211,0.4)]">
                            <div className="absolute inset-0 bg-fuchsia-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                            <span className="relative text-white font-medium text-xl tracking-tight">Envoyer la demande</span>
                        </button>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-fuchsia-600/5 blur-[100px] rounded-full" />
                    <div className="absolute -left-20 top-20 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full" />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}