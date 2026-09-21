import { useEffect, useState } from "react"
import { MessageSquareText, Star, Loader2, CheckCircle2, HelpCircle } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiGetMyFeedbacks } from "../utils/api"

export default function FeedbackHistory() {
    const { user } = useAuth()
    const [feedbacks, setFeedbacks] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user) return
        setLoading(true)
        apiGetMyFeedbacks()
            .then((res) => {
                setFeedbacks(res.feedbacks || [])
            })
            .catch((err) => console.error("Error loading feedbacks:", err))
            .finally(() => setLoading(false))
    }, [user])

    return (
        <section className="relative h-fit w-full self-start overflow-hidden rounded-[28px] border border-fuchsia-400/10 bg-[#100b1f]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-6 md:p-8">
            <MessageSquareText
                strokeWidth={0.5}
                className="absolute -right-8 -top-10 h-52 w-52 -rotate-12 text-fuchsia-400/10"
            />
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-fuchsia-700/20 blur-[80px] pointer-events-none" />

            <div className="relative z-10 mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
                    <MessageSquareText className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-extrabold text-fuchsia-200 sm:text-2xl md:text-3xl">
                    Feedback History
                </h2>
            </div>

            <div className="relative z-10 grid gap-4 md:grid-cols-2">
                {loading && (
                    <div className="md:col-span-2 flex justify-center p-6 text-fuchsia-400">
                        <Loader2 className="animate-spin h-6 w-6" />
                    </div>
                )}
                {!loading && feedbacks.length === 0 && (
                    <p className="md:col-span-2 text-zinc-400 text-sm text-center py-6">Aucun avis laissé pour le moment.</p>
                )}
                {!loading && feedbacks.map((feedback) => (
                    <article
                        key={feedback.id}
                        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-fuchsia-400/25 hover:bg-white/[0.08]"
                    >
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <p className="text-xs font-extrabold tracking-[0.18em] text-zinc-500">
                                    #FB-{feedback.id.substring(0, 5)}
                                </p>
                                {feedback.isApproved ? (
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                        <CheckCircle2 className="w-2.5 h-2.5" />
                                        Publié
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                        <HelpCircle className="w-2.5 h-2.5" />
                                        En modération
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={`${feedback.id}-${index}`}
                                        className={`h-4 w-4 ${
                                            index < feedback.rating
                                                ? "fill-fuchsia-400 text-fuchsia-400 drop-shadow-[0_0_6px_rgba(217,70,239,0.55)]"
                                                : "text-white/20"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-zinc-300">
                            {feedback.comment}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}
