export default function Feedback({ feeds }: { feeds: any[] }) {
    return (
        <>
            <div className="ml-40 p-7">
                <h1 className="text-white font-bold text-4xl">Ce qu'ils disent à propos de nous</h1>
                <p className="text-white font-light mt-5">Rejoignez plus de 15 compagnies qui font confiance en Kroma pour leur identité visuelle</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {feeds.map((feed, index) => (
                    <div key={index} className="bg-purple-900/80 text-sm font-light text-white w-80 h-auto rounded-xl pt-3">
                        <div className="flex ml-5 mb-1 gap-1">
                            {Array.from({ length: feed.stars }).map((_, i) => (
                                <svg key={i} className="w-5 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
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
