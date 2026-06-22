import { Archive, PackageOpen } from "lucide-react"

type PackOrder = {
    name: string
    price: string
}

const packs: PackOrder[] = [
    {
        name: "Pack Essentiel",
        price: "180k XAF",
    },
    {
        name: "Portfolio",
        price: "40k XAF",
    },
    {
        name: "Portfolio",
        price: "40k XAF",
    }
]

export default function PackHistory() {
    return (
        <section className="relative h-fit w-full self-start overflow-hidden rounded-[28px] border border-fuchsia-400/10 bg-[#100b1f]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:p-8">
            <PackageOpen
                strokeWidth={0.5}
                className="absolute -right-8 -top-10 h-48 w-48 rotate-6 text-fuchsia-400/10"
            />
            <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full bg-fuchsia-700/20 blur-[75px] pointer-events-none" />

            <div className="relative z-10 mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
                    <Archive className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-fuchsia-200 md:text-3xl">
                    Pack Orders
                </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                {packs.map((pack, index) => (
                    <article
                        key={pack.name}
                        className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 pl-6 transition-all duration-300 hover:border-fuchsia-400/25 hover:bg-white/[0.08]"
                    >
                        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-fuchsia-300" />

                        <div className="mb-4 flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-extrabold text-zinc-500">
                                    #P-{index === 0 ? "502" : "314"}
                                </p>
                                <h3 className="mt-3 text-base font-extrabold text-zinc-200">
                                    {pack.name}
                                </h3>
                            </div>

                            <p className="text-lg font-extrabold text-fuchsia-200">
                                {pack.price}
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex h-9 w-full items-center justify-center rounded-xl bg-white/10 text-xs font-extrabold text-zinc-200 transition-all duration-300 hover:bg-fuchsia-400/20 hover:text-white active:scale-[0.98] cursor-pointer"
                        >
                            Voir les assets
                        </button>
                    </article>
                ))}
            </div>
        </section>
    )
}
