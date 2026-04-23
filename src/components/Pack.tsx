import { Check, Sparkles } from 'lucide-react';

interface PackData {
    name: string;
    description: string;
    price: string;
    features: string[];
}

interface PackProps {
    packs: PackData[];
}

export default function Pack({ packs }: PackProps) {
    return (
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 p-6 md:p-10">
            {packs.map((pack, index) => {
                const isPopular = index === 1;
                return (
                    <div key={index} className={`relative text-white flex flex-col w-full sm:w-[350px] h-auto rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
                        isPopular 
                            ? 'bg-gradient-to-b from-fuchsia-900/40 to-purple-950/60 border-fuchsia-500/40 shadow-[0_0_60px_-15px_rgba(192,38,211,0.3)]' 
                            : 'bg-white/[0.03] border-white/10 hover:border-fuchsia-500/30'
                    }`}>
                        {/* Popular Badge */}
                        {isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                <Sparkles size={12} />
                                Populaire
                            </div>
                        )}

                        <div className="mb-6">
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">{pack.name}</h1>
                            <h3 className="text-base md:text-lg font-light text-white/50 leading-tight">{pack.description}</h3>
                        </div>
                        
                        <div className="mb-8">
                            <h4 className={`text-4xl md:text-5xl font-bold ${isPopular ? 'text-fuchsia-400' : 'text-fuchsia-500'}`}>{pack.price}</h4>
                            <span className="text-sm text-white/40">Investissement unique</span>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                        <ul className="flex flex-col gap-4 mb-10 flex-grow">
                            {pack.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center gap-3 text-base md:text-lg font-light text-white/80">
                                    <div className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${isPopular ? 'bg-fuchsia-500/20 border border-fuchsia-400' : 'border border-fuchsia-500/50'}`}>
                                        <Check className={`w-3 h-3 ${isPopular ? 'text-fuchsia-400' : 'text-fuchsia-500'}`} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 cursor-pointer ${
                            isPopular 
                                ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:from-fuchsia-500 hover:to-purple-500 shadow-[0_10px_30px_-10px_rgba(192,38,211,0.5)]' 
                                : 'bg-white/5 border border-fuchsia-500/30 hover:bg-fuchsia-600 hover:border-fuchsia-600'
                        }`}>
                            Choisir {pack.name.split(' ')[1] || 'ce pack'}
                        </button>
                    </div>
                );
            })}
        </div>
    )
} 