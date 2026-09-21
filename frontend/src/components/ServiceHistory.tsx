import { useEffect, useState } from "react"
import { BadgeCheck, Clock3, Compass, Layers2, Palette, Wrench, AlertCircle, Loader2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiGetMyOrders } from "../utils/api"

const statusStyles = {
    PENDING: {
        label: "En cours",
        icon: Clock3,
        className: "text-amber-400",
    },
    VALIDATED: {
        label: "Approuvée",
        icon: BadgeCheck,
        className: "text-emerald-400",
    },
    REJECTED: {
        label: "Rejetée",
        icon: AlertCircle,
        className: "text-rose-400",
    },
}

function getServiceIcon(serviceNames: string[]): LucideIcon {
    const joined = serviceNames.join(" ").toUpperCase();
    if (joined.includes("IDENTITE") || joined.includes("LOGO")) return Compass;
    if (joined.includes("CHARTE") || joined.includes("GRAPHISME") || joined.includes("PALETTE")) return Palette;
    return Layers2;
}

export default function ServiceHistory() {
    const { user } = useAuth()
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user) return
        setLoading(true)
        apiGetMyOrders()
            .then((res) => {
                const customOrders = res.orders.filter((o: any) => o.type === 'CUSTOM')
                setOrders(customOrders)
            })
            .catch((err) => console.error("Error loading service orders:", err))
            .finally(() => setLoading(false))
    }, [user])

    return (
        <section className="relative h-fit w-full self-start overflow-hidden rounded-[28px] border border-fuchsia-400/10 bg-[#100b1f]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-6 md:p-8">
            <Wrench
                strokeWidth={0.5}
                className="absolute -right-8 -top-10 h-56 w-56 rotate-12 text-fuchsia-400/10"
            />
            <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-fuchsia-700/20 blur-[80px] pointer-events-none" />

            <div className="relative z-10 mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
                    <Wrench className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-extrabold text-fuchsia-200 sm:text-2xl md:text-3xl">
                    Service Orders
                </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-5">
                {loading && (
                    <div className="flex justify-center p-6 text-fuchsia-400">
                        <Loader2 className="animate-spin h-6 w-6" />
                    </div>
                )}
                {!loading && orders.length === 0 && (
                    <p className="text-zinc-400 text-sm text-center py-6">Aucune commande sur-mesure pour le moment.</p>
                )}
                {!loading && orders.map((order) => {
                    let serviceNames: string[] = []
                    try {
                        const parsed = typeof order.services === 'string' ? JSON.parse(order.services) : order.services
                        serviceNames = Array.isArray(parsed) ? parsed : [String(parsed)]
                    } catch {
                        serviceNames = [String(order.services)]
                    }

                    const Icon = getServiceIcon(serviceNames)
                    const status = statusStyles[order.status as keyof typeof statusStyles] || statusStyles.PENDING
                    const StatusIcon = status.icon

                    return (
                        <article
                            key={order.id}
                            className="group rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-fuchsia-400/25 hover:bg-white/[0.08]"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex min-w-0 items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-300/10 text-fuchsia-300 transition-all duration-300 group-hover:bg-fuchsia-400/15">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="min-w-0 break-words text-base font-extrabold text-zinc-200">
                                        {serviceNames.join(", ")}
                                    </h3>
                                </div>

                                <div className={`flex items-center gap-1.5 text-sm font-extrabold ${status.className}`}>
                                    <StatusIcon className="h-4 w-4" />
                                    <span>{status.label}</span>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                {order.notes || "Pas de description supplémentaire."}
                            </p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
