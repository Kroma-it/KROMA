import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const spaceShapes = [
    {
        className: "left-[7%] top-[18%] h-24 w-24 rounded-[2rem] border border-violet-200/15",
        animate: { x: [0, 48, -18, 0], y: [0, -30, 24, 0], rotate: [0, 18, -10, 0] },
        duration: 16,
    },
    {
        className: "right-[9%] top-[22%] h-36 w-36 rounded-full border border-fuchsia-300/15",
        animate: { x: [0, -42, 16, 0], y: [0, 28, -20, 0], rotate: [0, -24, 16, 0] },
        duration: 18,
    },
    {
        className: "left-[17%] bottom-[18%] h-28 w-28 rotate-45 border border-cyan-200/12",
        animate: { x: [0, 32, -28, 0], y: [0, 36, -18, 0], rotate: [45, 72, 28, 45] },
        duration: 20,
    },
    {
        className: "right-[18%] bottom-[20%] h-20 w-20 rounded-2xl border border-violet-100/15",
        animate: { x: [0, -34, 22, 0], y: [0, -42, 18, 0], rotate: [0, 32, -18, 0] },
        duration: 15,
    },
    {
        className: "left-[46%] top-[12%] h-32 w-1 rounded-full bg-violet-200/10",
        animate: { x: [0, 18, -24, 0], y: [0, -22, 30, 0], rotate: [18, 44, -12, 18] },
        duration: 14,
    },
    {
        className: "right-[34%] bottom-[9%] h-1 w-44 rounded-full bg-fuchsia-200/10",
        animate: { x: [0, -40, 26, 0], y: [0, 18, -26, 0], rotate: [-8, -24, 12, -8] },
        duration: 17,
    },
]

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#12071d] px-6 py-10 text-white md:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,157,217,0.26)_1px,transparent_1.5px)] [background-size:48px_48px] opacity-45" />
            <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute right-[12%] top-24 h-12 w-12 rounded-full border border-white/10" />
            <div className="absolute left-[28%] top-64 h-9 w-9 rounded-full border border-fuchsia-200/10" />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {spaceShapes.map((shape, index) => (
                    <motion.span
                        key={shape.className}
                        className={`absolute shadow-[0_0_40px_rgba(199,157,217,0.08)] backdrop-blur-[1px] ${shape.className}`}
                        animate={shape.animate}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: index * 0.35,
                        }}
                    />
                ))}
            </div>

            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center text-center">
                <p className="bg-linear-to-b from-violet-200 via-violet-300 to-violet-950 bg-clip-text text-[clamp(7rem,24vw,18rem)] font-black leading-none tracking-normal text-transparent drop-shadow-[0_24px_42px_rgba(0,0,0,0.5)]">
                    404
                </p>

                <h1 className="mt-10 max-w-4xl text-4xl font-black leading-tight text-violet-100 md:text-6xl">
                    L'art de se perdre pour mieux se retrouver.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                    Meme les plus belles explorations connaissent des impasses. Cette page s'est evaporée dans
                    l'ether creatif de notre studio.
                </p>

                <div className="mt-12 flex w-full max-w-xl flex-col gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-violet-200 px-6 py-4 text-lg font-black text-violet-950 transition duration-300 hover:-translate-y-1 hover:bg-violet-100"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Retour a l'accueil
                    </Link>
                    <Link
                        to="/services/logo"
                        className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-lg font-black text-violet-100 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.07]"
                    >
                        Nos realisations
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </main>
    )
}
