interface LandingProps {
    landing: {
        title: string;
        subtitle: string;
        button: string;
        image: string;
        button1: string;
    }[];
}

export default function Landing({ landing }: LandingProps) {
    const data = landing[0]; // On prend le premier élément de la liste

    return (
        <section className="relative mt-[-100px] h-screen overflow-hidden bg-black">
            <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={data.image} type="video/mp4" />
            </video>
            <div className="absolute inset-0 w-full h-screen bg-gradient-to-t from-kroma-400 bg-black/30"></div>
            <div className="relative z-10 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <p className="border border-fuchsia-400 text-[20px] text-fuchsia-500 bg-fuchsia-900/50 p-2 rounded-full w-fit mx-auto mb-4">
                    {data.subtitle}
                </p>
                <h1 className="text-7xl font-bold w-3/5 mx-auto leading-tight">
                    {data.title.split('expériences numériques')[0]}
                    <span className="text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                        expériences numériques
                    </span>
                </h1>
                <div className="flex gap-10 items-center justify-center mt-8">
                    <button className="bg-fuchsia-500 p-3 cursor-pointer rounded-xl text-2xl hover:scale-105 transition-transform">
                        {data.button}
                    </button>
                    <button className="bg-fuchsia-500/20 p-3 border border-fuchsia-500 cursor-pointer rounded-xl text-2xl hover:bg-fuchsia-500/40 transition-colors">
                        {data.button1}
                    </button>
                </div>
            </div>
        </section>
    );
}
