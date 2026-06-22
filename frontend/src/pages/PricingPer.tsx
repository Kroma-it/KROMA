import { motion } from "framer-motion"
import {
    CheckCircle2,
    Compass,
    Info,
    Layers2,
    MessageSquareText,
    Monitor,
    Palette,
    Scroll,
    Sparkles,
    type LucideIcon,
} from "lucide-react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import PricingHero from "../components/PricingHero"

type PricingItem = {
    icon: LucideIcon
    title: string
    subtitle: string
    content: string
    image: string
}

const pricings: PricingItem[] = [
    {
        icon: Compass,
        title: "IDENTITE VISUELLE",
        subtitle: "Conception de logo",
        content: "Creer une identite unique qui marque les esprits des le premier regard.",
        image: "/assets/visuels/logo.jpeg",
    },
    {
        icon: Palette,
        title: "CHARTE GRAPHIQUE",
        subtitle: "Charte graphique",
        content: "Construire une coherence visuelle forte pour toutes vos prises de parole.",
        image: "/assets/visuels/affiche1 copy.jpg",
    },
    {
        icon: Layers2,
        title: "MARKETING",
        subtitle: "Supports visuels",
        content: "Des visuels impactants pour vos campagnes, reseaux sociaux et annonces.",
        image: "/assets/visuels/1.jpg",
    },
    {
        icon: Scroll,
        title: "PRINT",
        subtitle: "Papeterie",
        content: "Des supports imprimes elegants, lisibles et coherents avec votre univers.",
        image: "/assets/visuels/surpriseEvent noel copy.jpg",
    },
    {
        icon: Monitor,
        title: "PROJECTION",
        subtitle: "Mockups",
        content: "Des rendus realistes pour visualiser votre marque avant la mise en production.",
        image: "/assets/visuels/Artboard 2.png",
    },
]

export default function Service() {
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const handleToggleService = (title: string) => {
        setSelectedServices((prev) =>
            prev.includes(title)
                ? prev.filter((serviceTitle) => serviceTitle !== title)
                : [...prev, title]
        )
    }

    return (
        <>
            <Helmet>
                <title>Personnalisez Votre Projet | Kroma</title>
                <meta
                    name="description"
                    content="Personnalisez votre projet artistique avec Kroma et donnez vie a votre vision"
                />
            </Helmet>

            <PricingHero
                icon={MessageSquareText}
                iconText="Creation sur mesure"
                titleText={<>Donnez vie a votre <span className="text-fuchsia-500">vision</span></>}
                bottomText="Selectionnez les services artistiques dont vous avez besoin pour propulser votre marque au niveau superieur avec l'expertise Kroma"
            />

            <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-16 md:px-20 md:pb-20">
                <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[110px]" />
                <div className="pointer-events-none absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-cyan-500/8 blur-[100px]" />

                <div className="relative mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-900/10 px-4 py-2 text-sm font-semibold text-fuchsia-300">
                            <Sparkles className="h-4 w-4" />
                            Services a composer
                        </p>
                        <h2 className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                            Choisissez les elements qui feront briller votre projet.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
                        Chaque service peut etre combine pour construire une identite claire, coherente et prete a etre livree.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {pricings.map((item, index) => {
                        const Icon = item.icon
                        const isSelected = selectedServices.includes(item.title)

                        return (
                            <motion.button
                                type="button"
                                key={item.title}
                                onClick={() => handleToggleService(item.title)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className={`group relative overflow-hidden rounded-3xl border text-left shadow-2xl shadow-black/10 transition duration-500 hover:-translate-y-2 ${
                                    isSelected
                                        ? "border-fuchsia-400/70 bg-fuchsia-600/10"
                                        : "border-white/10 bg-white/[0.035] hover:border-fuchsia-300/35 hover:bg-white/6"
                                }`}
                            >
                                <div className="relative h-72 overflow-hidden border-b border-white/10 bg-slate-950/80">
                                    <img
                                        src={item.image}
                                        alt={item.subtitle}
                                        className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-108 group-hover:opacity-95"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#12071d] via-[#12071d]/35 to-transparent" />
                                    <div className="absolute inset-0 bg-radial from-fuchsia-500/0 to-black/25" />

                                    <div className="absolute left-6 top-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/15 bg-black/30 text-fuchsia-200 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:bg-fuchsia-500/20">
                                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                                    </div>

                                    {isSelected && (
                                        <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-900/30">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                    )}

                                    <span className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200 backdrop-blur-xl">
                                        {item.subtitle}
                                    </span>
                                </div>

                                <div className="relative p-7 md:p-8">
                                    <div
                                        className={`absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-fuchsia-300/50 to-transparent transition-opacity duration-500 ${
                                            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        }`}
                                    />
                                    <h3 className="text-2xl font-black text-white transition-colors group-hover:text-fuchsia-100">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 min-h-14 text-sm leading-7 text-white/58 md:text-base">
                                        {item.content}
                                    </p>

                                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                                        <span
                                            className={`text-sm font-bold transition-colors ${
                                                isSelected
                                                    ? "text-fuchsia-200"
                                                    : "text-white/45 group-hover:text-fuchsia-200"
                                            }`}
                                        >
                                            {isSelected ? "Service selectionne" : "Cliquer pour selectionner"}
                                        </span>
                                        <span
                                            className={`h-3 w-3 rounded-full transition duration-300 ${
                                                isSelected
                                                    ? "bg-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,0.8)]"
                                                    : "bg-white/20"
                                            }`}
                                        />
                                    </div>
                                </div>
                            </motion.button>
                        )
                    })}
                </div>
            </section>

            <div className="mx-auto max-w-5xl px-6 pb-22 md:px-10">
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-2xl sm:rounded-4xl sm:p-10">
                    <div className="mb-8 flex items-center gap-4 sm:mb-10 sm:gap-5">
                        <MessageSquareText className="h-7 w-7 text-fuchsia-500 sm:h-8 sm:w-8" />
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Details du projet</h2>
                    </div>

                    <div className="relative mb-8 sm:mb-12">
                        <textarea
                            className="h-60 w-full resize-none rounded-2xl border border-white/5 bg-black/40 p-4 text-base leading-relaxed text-white transition-all placeholder:text-white/20 focus:border-fuchsia-500/30 focus:outline-none sm:h-80 sm:rounded-4xl sm:p-5 sm:text-lg md:text-xl"
                            placeholder="Decrivez votre projet artistique, vos objectifs, et l'univers que vous souhaitez explorer ici..."
                        />
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
                    </div>

                    <div className="flex flex-col items-center justify-between gap-6 pt-4 sm:gap-8 md:flex-row">
                        <div className="flex w-full items-center justify-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-3 text-white/40 sm:gap-4 md:w-auto md:justify-start">
                            <Info className="h-5 w-5 shrink-0 text-fuchsia-500/50" />
                            <p className="text-sm font-medium sm:text-base md:text-lg">Notre equipe reviendra vers vous sous 48h</p>
                        </div>

                        <button className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-kroma-600 px-8 py-4 text-center font-black text-white transition-all duration-300 hover:bg-fuchsia-700 active:scale-95 md:w-auto">
                            Envoyer le projet
                        </button>
                    </div>

                    <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-fuchsia-600/5 blur-[100px]" />
                    <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-purple-600/5 blur-[80px]" />
                </div>
            </div>
        </>
    )
}
