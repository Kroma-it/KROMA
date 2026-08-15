import { useState } from 'react';
import { Check, Medal, X, Loader2 } from 'lucide-react';
import { apiCreateOrder } from '../utils/api';

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
    const [selectedPack, setSelectedPack] = useState<PackData | null>(null);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleOpenModal = (pack: PackData) => {
        setSelectedPack(pack);
        setStatus(null);
        setEmail('');
    };

    const handleConfirmOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPack || !email || !email.includes('@')) {
            setStatus({ type: 'error', message: 'Veuillez saisir une adresse e-mail valide.' });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            await apiCreateOrder({
                type: 'PACK',
                customerEmail: email,
                services: selectedPack,
                notes: `Commande du ${selectedPack.name} (${selectedPack.price})`
            });
            setStatus({ type: 'success', message: 'Votre commande a été envoyée ! Notre équipe vous contactera rapidement.' });
            setTimeout(() => {
                setSelectedPack(null);
            }, 2500);
        } catch (err: any) {
            setStatus({ type: 'error', message: err.message || 'Erreur lors de la commande.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 p-6 md:p-10">
                {packs.map((pack, index) => {
                    const isPopular = index === 1;
                    return (
                        <div key={index} className={`relative text-white flex flex-col w-full sm:w-87.5 h-auto rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
                            isPopular 
                                ? 'border-kroma-600' 
                                : 'bg-white/3 border-white/10 hover:border-fuchsia-500/30'
                        }`}>
                            {/* Popular Badge */}
                            {isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kroma-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    <Medal size={17} />
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

                            <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                            <ul className="flex flex-col gap-4 mb-10 grow">
                                {pack.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-base md:text-lg font-light text-white/80">
                                        <div className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${isPopular ? 'bg-fuchsia-500/20 border border-fuchsia-400' : 'border border-fuchsia-500/50'}`}>
                                            <Check className={`w-3 h-3 ${isPopular ? 'text-fuchsia-400' : 'text-fuchsia-500'}`} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => handleOpenModal(pack)}
                                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg md:text-xl transition-all duration-300 cursor-pointer ${
                                isPopular 
                                    ? 'bg-kroma-600 text-white hover:from-fuchsia-500 hover:to-purple-500' 
                                    : 'bg-white/5 border border-fuchsia-500/30 hover:bg-kroma-600 hover:border-fuchsia-600'
                            }`}>
                                Choisir {pack.name.split(' ')[1] || 'ce pack'}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Modal de commande de Pack */}
            {selectedPack && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
                    <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 text-white shadow-2xl">
                        <button 
                            onClick={() => setSelectedPack(null)}
                            className="absolute top-5 right-5 text-white/60 hover:text-white"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-2xl font-black mb-1">Commander le {selectedPack.name}</h3>
                        <p className="text-fuchsia-400 font-bold text-lg mb-6">{selectedPack.price}</p>

                        {status && (
                            <div className={`p-4 rounded-xl mb-4 text-xs font-semibold ${
                                status.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            }`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleConfirmOrder} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">Votre adresse email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="exemple@domaine.com"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-fuchsia-500 focus:outline-none text-sm text-white"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Confirmer la commande'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
} 