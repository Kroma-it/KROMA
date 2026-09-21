import { useEffect, useState } from "react"
import { Archive, PackageOpen, Loader2 } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiGetMyOrders } from "../utils/api"

export default function PackHistory() {
    const { user } = useAuth()
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user) return
        setLoading(true)
        apiGetMyOrders()
            .then((res) => {
                const packOrders = res.orders.filter((o: any) => o.type === 'PACK')
                setOrders(packOrders)
            })
            .catch((err) => console.error("Error loading pack orders:", err))
            .finally(() => setLoading(false))
    }, [user])

    return (
        <section className="relative h-fit w-full self-start overflow-hidden rounded-[28px] border border-fuchsia-400/10 bg-[#100b1f]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-6 md:p-8">
            <PackageOpen
                strokeWidth={0.5}
                className="absolute -right-8 -top-10 h-48 w-48 rotate-6 text-fuchsia-400/10"
            />
            <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full bg-fuchsia-700/20 blur-[75px] pointer-events-none" />

            <div className="relative z-10 mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
                    <Archive className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-extrabold text-fuchsia-200 sm:text-2xl md:text-3xl">
                    Pack Orders
                </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                {loading && (
                    <div className="flex justify-center p-6 text-fuchsia-400">
                        <Loader2 className="animate-spin h-6 w-6" />
                    </div>
                )}
                {!loading && orders.length === 0 && (
                    <p className="text-zinc-400 text-sm text-center py-6">Aucune commande de pack pour le moment.</p>
                )}
                {!loading && orders.map((order, index) => {
                    let packName = "Pack"
                    let packPrice = ""
                    try {
                        const parsed = typeof order.services === 'string' ? JSON.parse(order.services) : order.services
                        packName = parsed.name || "Pack Kroma"
                        packPrice = parsed.price || ""
                    } catch {
                        packName = order.notes || "Pack"
                    }

                    return (
                        <article
                            key={order.id}
                            className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 pl-6 transition-all duration-300 hover:border-fuchsia-400/25 hover:bg-white/[0.08]"
                        >
                            <div className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-fuchsia-300" />

                            <div className="mb-4 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-extrabold text-zinc-500">
                                        #P-{order.id.substring(0, 5)}
                                    </p>
                                    <h3 className="mt-3 text-base font-extrabold text-zinc-200">
                                        {packName}
                                    </h3>
                                </div>

                                <p className="text-lg font-extrabold text-fuchsia-200">
                                    {packPrice}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="flex h-9 w-full items-center justify-center rounded-xl bg-white/10 text-xs font-extrabold text-zinc-200 transition-all duration-300 hover:bg-fuchsia-400/20 hover:text-white active:scale-[0.98] cursor-pointer"
                            >
                                Voir les details / statut: {order.status}
                            </button>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
