import React, { useState } from "react"
import { MessageSquareText, SendHorizonal, Star, Loader2 } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiCreateFeedback } from "../utils/api"

export default function ClientForm() {
    const { user } = useAuth()
    const [rating, setRating] = useState(0)
    const [hovered, setHovered] = useState(0)
    const [comment, setComment] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    const activeRating = hovered || rating

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!user) {
            setStatus({ type: 'error', text: 'Vous devez être connecté pour laisser un avis.' })
            return
        }

        if (!user.isProfileComplete || !user.firstName || !user.lastName) {
            setStatus({ type: 'error', text: 'Veuillez compléter votre nom et prénom dans votre profil avant de pouvoir laisser un avis.' })
            return
        }

        if (rating < 1) {
            setStatus({ type: 'error', text: 'Veuillez sélectionner une note en cliquant sur les étoiles.' })
            return
        }

        setLoading(true)
        setStatus(null)

        try {
            const res = await apiCreateFeedback(rating, comment)
            setStatus({ type: 'success', text: res.message || 'Votre avis a été soumis avec succès pour modération.' })
            setRating(0)
            setComment("")
        } catch (err: any) {
            setStatus({ type: 'error', text: err.message || 'Erreur lors de l’envoi de votre avis.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative w-[400px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <MessageSquareText
                strokeWidth={0.5}
                className="absolute -right-6 -rotate-20 -bottom-10 h-40 w-40 text-fuchsia-400/10"
            />
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-700/20 blur-[70px] pointer-events-none" />

            <div className="relative z-10 mb-6">
                <span className="text-[11px] font-extrabold tracking-[0.25em] text-fuchsia-400 uppercase">
                    Feedback
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-white">
                    Parlez de votre expérience avec Kroma
                </h3>
            </div>

            {status && (
                <div className={`relative z-10 mb-6 p-4 rounded-2xl text-xs font-semibold border ${
                    status.type === 'success' 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}>
                    {status.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div>
                    <label className="mb-3 block text-xs font-bold text-zinc-300">
                        Nombre d'étoiles
                    </label>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                disabled={loading}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHovered(star)}
                                onMouseLeave={() => setHovered(0)}
                                aria-label={`Donner ${star} étoile${star > 1 ? "s" : ""}`}
                                className="rounded-full p-1 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 cursor-pointer disabled:opacity-50"
                            >
                                <Star
                                    className={`h-8 w-8 transition-all duration-200 ${
                                        star <= activeRating
                                            ? "fill-fuchsia-500 text-fuchsia-500 drop-shadow-[0_0_7px_rgba(217,70,239,0.65)]"
                                            : "text-white/20"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="client-comment" className="mb-2 block text-xs font-bold text-zinc-300">
                        Commentaire
                    </label>
                    <textarea
                        id="client-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Écrivez votre commentaire..."
                        required
                        disabled={loading}
                        rows={7}
                        className="w-full resize-none rounded-2xl border border-white/5 bg-[#0f071a]/50 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all duration-300 focus:border-fuchsia-500/50 focus:outline-none focus:ring-1 focus:ring-fuchsia-500/30 disabled:opacity-50"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#ab05bd] py-3.5 text-lg font-extrabold tracking-wide text-white shadow-[0_0_25px_rgba(171,5,189,0.35)] transition-all duration-300 hover:bg-[#c205d6] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                    {loading ? (
                        <>
                            Envoi en cours...
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </>
                    ) : (
                        <>
                            Envoyer le feedback
                            <SendHorizonal className="h-4 w-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
