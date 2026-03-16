import { Check } from 'lucide-react';

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
        <div className="flex flex-wrap justify-center gap-8 p-10">
            {packs.map((pack, index) => (
                <div key={index} className="text-white bg-kroma-500 flex flex-col w-full sm:w-[350px] h-auto rounded-3xl p-8 border border-white/10 hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-2">{pack.name}</h1>
                        <h3 className="text-lg font-light text-white/70 leading-tight">{pack.description}</h3>
                    </div>
                    
                    <div className="mb-8">
                        <h4 className="text-5xl font-bold text-fuchsia-500">{pack.price}</h4>
                        <span className="text-sm text-white/50">Investissement unique</span>
                    </div>

                    <ul className="flex flex-col gap-4 mb-10 flex-grow">
                        {pack.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center gap-3 text-lg font-light">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-fuchsia-500 shrink-0">
                                    <Check className="w-3 h-3 text-fuchsia-500" strokeWidth={3} />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-4 px-6 bg-white/5 border border-fuchsia-500/30 rounded-2xl font-semibold text-xl hover:bg-fuchsia-500 transition-all duration-300 cursor-pointer">
                        Choisir {pack.name.split(' ')[1] || 'ce pack'}
                    </button>
                </div>
            ))}
        </div>
    )
} 