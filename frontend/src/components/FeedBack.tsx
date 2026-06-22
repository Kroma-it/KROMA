import { motion, type Variants } from "framer-motion"
import { Quote, Star } from "lucide-react"

type FeedbackItem = {
    stars: number
    feedback: string
    img: string
    name: string
    poste: string
}

export default function Feedback({ feeds }: { feeds: FeedbackItem[] }) {
    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.16 },
        },
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 36, scale: 0.94 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    }

    return (
        <>
            <motion.div
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="px-6 md:px-12 lg:ml-40 p-7"
            >
                <h1 className="text-white font-bold text-2xl md:text-4xl">
                    Ce qu'ils disent a propos de nous
                </h1>
                <p className="text-white font-light mt-5 text-sm md:text-base">
                    Rejoignez plus de 7 compagnies qui font confiance en Kroma pour leur identite visuelle
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
            >
                {feeds.map((feed, index) => (
                    <motion.div
                        key={`${feed.name}-${index}`}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                            boxShadow: "0 24px 60px rgba(217, 70, 239, 0.22)",
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="group relative bg-kroma-500/70 text-sm font-light text-white w-80 min-h-52 rounded-xl pt-3 overflow-hidden border border-white/10"
                    >
                        <div className="flex ml-5 mb-1 gap-1">
                            <motion.div
                                animate={{ y: [0, -8, 0], rotate: [10, 15, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute right-2 -top-5 text-fuchsia-400/15"
                            >
                                <Quote strokeWidth={0.5} className="h-30 w-30" />
                            </motion.div>

                            {Array.from({ length: feed.stars }).map((_, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.12 + i * 0.08,
                                        type: "spring",
                                        stiffness: 320,
                                        damping: 16,
                                    }}
                                >
                                    <Star
                                        strokeWidth={1}
                                        className="w-5 text-fuchsia-400"
                                    />
                                </motion.span>
                            ))}
                        </div>

                        <p className="w-[85%] ml-5">" {feed.feedback} "</p>

                        <div className="flex items-center ml-5 mt-2 gap-2 pb-2">
                            <img
                                src={feed.img}
                                className="h-12 w-12 rounded-full object-cover ring-2 ring-fuchsia-300/20 transition duration-300 group-hover:ring-fuchsia-300/60"
                                alt={feed.name}
                            />
                            <div>
                                <p className="font-bold">{feed.name}</p>
                                <p>{feed.poste}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    )
}
