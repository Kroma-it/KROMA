import ServiceClient from "../components/ServiceClient"
import { useState } from "react"
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
            {/**titre, en-tête */}
            <div className="px-6 py-12 md:p-20 flex flex-col gap-6 mt-24 md:mt-30">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-7xl leading-tight">
                    Donnez vie à votre <span className="text-fuchsia-500">vision</span>
                </h1>
                <h3 className="text-white/80 w-full md:w-3/5 text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Sélectionnez les services artistiques dont vous avez besoin pour propulser votre marque au niveau supérieur avec l'expertise Kroma
                </h3>
            </div>

            {/**différents services à sélectionner */}
            <div className="px-6 md:px-20 pb-16 md:pb-20">
                <ServiceClient 
                    pricings={pricings} 
                    selectedServices={selectedServices}
                    onToggleService={handleToggleService}
                />
            </div>

            {/* Projet Details Form */}
            <div className="max-w-5xl mx-auto px-6 md:px-10 pb-22">
                <div className="relative group bg-white/3 border border-white/10 backdrop-blur-2xl rounded-3xl sm:rounded-4xl p-6 sm:p-10 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10">
                        <MessageSquareText className="text-fuchsia-500 w-7 h-7 sm:w-8 sm:h-8" />
                        <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">Détails du projet</h2>
                    </div>

                    {/* Textarea Container */}
                    <div className="relative mb-8 sm:mb-12">
                        <textarea 
                            className="w-full h-60 sm:h-80 bg-black/40 border border-white/5 rounded-2xl sm:rounded-4xl p-4 sm:p-5 text-white text-base sm:text-lg md:text-xl placeholder:text-white/20 focus:outline-none focus:border-fuchsia-500/30 transition-all resize-none leading-relaxed"
                            placeholder="Décrivez votre projet artistique, vos objectifs, et l'univers que vous souhaitez explorer ici..."
                        />
                        {/* Subtle inner glow for textarea */}
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pt-4">
                        <div className="flex items-center gap-3 sm:gap-4 text-white/40 bg-white/5 px-5 py-3 rounded-full border border-white/5 w-full md:w-auto justify-center md:justify-start">
                            <Info className="w-5 h-5 text-fuchsia-500/50 shrink-0" />
                            <p className="text-sm sm:text-base md:text-lg font-medium">Notre équipe reviendra vers vous sous 48h</p>
                        </div>

                        <button className="w-full md:w-auto group relative px-8 py-4 bg-fuchsia-600 rounded-xl overflow-hidden text-white font-black hover:bg-fuchsia-700 transition-all duration-300 active:scale-95 text-center flex justify-center items-center">
                            Envoyer le projet
                        </button>
                    </div>

                    {/* Decorative Background Elements */}
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-fuchsia-600/5 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -left-20 top-20 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none" />
                </div>
            </div>
        </>
    )
}
