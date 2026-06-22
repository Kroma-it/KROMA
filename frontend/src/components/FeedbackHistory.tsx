import { MessageSquareText, Star } from "lucide-react"

type FeedbackOrder = {
    id: string
    stars: number
    comment: string
}

const feedbacks: FeedbackOrder[] = [
    {
        id: "FB-118",
        stars: 5,
        comment: "Equipe reactive, rendu propre et tres professionnel. Le resultat correspond exactement a ce que je voulais.",
    },
    {
        id: "FB-092",
        stars: 4,
        comment: "Bonne experience globale. Les propositions etaient claires et les ajustements ont ete bien pris en compte.",
    },
]

export default function FeedbackHistory() {
    return (
        <section className="relative h-fit w-full self-start overflow-hidden rounded-[28px] border border-fuchsia-400/10 bg-[#100b1f]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:p-8">
            <MessageSquareText
                strokeWidth={0.5}
                className="absolute -right-8 -top-10 h-52 w-52 -rotate-12 text-fuchsia-400/10"
            />
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-fuchsia-700/20 blur-[80px] pointer-events-none" />

            <div className="relative z-10 mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
                    <MessageSquareText className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-fuchsia-200 md:text-3xl">
                    Feedback History
                </h2>
            </div>

            <div className="relative z-10 grid gap-4 md:grid-cols-2">
                {feedbacks.map((feedback) => (
                    <article
                        key={feedback.id}
                        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-fuchsia-400/25 hover:bg-white/[0.08]"
                    >
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs font-extrabold tracking-[0.18em] text-zinc-500">
                                #{feedback.id}
                            </p>

                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={`${feedback.id}-${index}`}
                                        className={`h-4 w-4 ${
                                            index < feedback.stars
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
