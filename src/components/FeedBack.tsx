import {Star, Quote} from "lucide-react"

export default function Feedback({ feeds }: { feeds: any[] }) {
    return (
        <>
            <div className="ml-40 p-7">
                <h1 className="text-white font-bold text-4xl">Ce qu'ils disent à propos de nous</h1>
                <p className="text-white font-light mt-5">Rejoignez plus de 15 compagnies qui font confiance en Kroma pour leur identité visuelle</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {feeds.map((feed, index) => (
                    <div key={index} className="relative bg-purple-900/80 text-sm font-light text-white w-80 h-auto rounded-xl pt-3 overflow-hidden">
                        <div className="flex ml-5 mb-1 gap-1">
                            <Quote strokeWidth={0.5} className="rotate-10 absolute right-2 top-[-20px] text-fuchsia-400/15 h-40 w-40" />
                            
                            {Array.from({ length: feed.stars }).map((_, i) => (
                                <Star key={i} strokeWidth={1} className="w-5 text-fuchsia-400" />
                            ))}
                        </div>
                        <p className="w-[85%] ml-5 ">
                            " {feed.feedback} "
                        </p>
                        <div className="flex items-center ml-5 mt-2 gap-2 pb-2">
                            <img src={feed.img} className="h-12 w-12 rounded-full" alt={feed.name} />
                            <div>
                                <p className="font-bold ">{feed.name}</p>
                                <p>{feed.poste}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
