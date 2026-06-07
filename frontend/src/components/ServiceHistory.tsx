import { BadgeCheck, Clock3, Compass, Layers2, Palette, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ServiceStatus = "approuvee" | "en-cours"

type ServiceOrder = {
    name: string
    details: string
    status: ServiceStatus
    icon: LucideIcon
}

const services: ServiceOrder[] = [
    {
        name: "Conception de logo",
        details: "Créer une identité unique qui marque les esprits dès le premier regard",
        status: "approuvee",
        icon: Compass,
    },
    {
        name: "Charte graphique",
        details: "Cohérence visuelle",
        status: "en-cours",
        icon: Palette,
    },
    {
        name: "Supports visuels",
        details: "Impact social garanti",
        status: "approuvee",
        icon: Layers2,
    },
    {
        name: "Supports visuels",
        details: "Impact social garanti",
        status: "en-cours",
        icon: Layers2,
    }
]

const statusStyles = {
    approuvee: {
        label: "Approuvee",
        icon: BadgeCheck,
        className: "text-emerald-400",
    },
    "en-cours": {
        label: "En cours",
        icon: Clock3,
        className: "text-amber-400",
    },
}

export default function ServiceHistory() {
    return (
        <section className="relative h-fit w-full self-start overflow-hidden rounded-[28px] border border-fuchsia-400/10 bg-[#100b1f]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:p-8">
            <Wrench
                strokeWidth={0.5}
                className="absolute -right-8 -top-10 h-56 w-56 rotate-12 text-fuchsia-400/10"
            />
            <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-fuchsia-700/20 blur-[80px] pointer-events-none" />

            <div className="relative z-10 mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-300">
                    <Wrench className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-fuchsia-200 md:text-3xl">
                    Service Orders
                </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-5">
                {services.map((service) => {
                    const Icon = service.icon
                    const status = statusStyles[service.status]
                    const StatusIcon = status.icon

                    return (
                        <article
                            key={service.name}
                            className="group rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-fuchsia-400/25 hover:bg-white/[0.08]"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-300/10 text-fuchsia-300 transition-all duration-300 group-hover:bg-fuchsia-400/15">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-base font-extrabold text-zinc-200">
                                        {service.name}
                                    </h3>
                                </div>

                                <div className={`flex items-center gap-1.5 text-sm font-extrabold ${status.className}`}>
                                    <StatusIcon className="h-4 w-4" />
                                    <span>{status.label}</span>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                {service.details}
                            </p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
