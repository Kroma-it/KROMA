import { Compass } from "lucide-react"

export default function ServiceClient() {

    const El = Compass
    return (
        <div className="group bg-fuchsia-900/10 backdrop-blur-md border border-fuchsia-500/20 rounded-3xl w-72 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-500/20">
            {/* Icon Container */}
            <div className="flex items-center justify-center p-5">
                <div className="bg-fuchsia-500/10 p-15 rounded-xl border border-fuchsia-500/30 transition-colors group-hover:bg-fuchsia-500/20">
                    <El size={80} className="text-fuchsia-500 transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.5} />
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 bg-gradient-to-b from-transparent to-black/40">
                <p className="text-fuchsia-500 text-base font-bold uppercase tracking-widest mb-1">
                    Identité Visuelle
                </p>
                <h1 className="text-white font-bold text-2xl mb-1">
                    Conception de logo
                </h1>
                <h2 className="text-slate-400 font-medium text-sm leading-relaxed">
                    Créez une identité unique qui marque les esprits dès le premier regard.
                </h2>

            </div>
        </div>
    )
}