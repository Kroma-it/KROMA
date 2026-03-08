export default function Home() {
    return (
        <main className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Background blobs are already placed at the App level, 
          so we just need the content container here. */}

            <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-[-5vh]">

                {/* Badge */}
                <div className="mb-8 px-4 py-1.5 rounded-full border border-[#8b3dff]/30 bg-[#8b3dff]/10 backdrop-blur-sm">
                    <span className="text-xs font-bold tracking-widest text-[#8b3dff] uppercase">
                        L'EXCELLENCE NUMÉRIQUE
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    <span className="text-white">L'art du web </span>
                    <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-[#8b3dff] to-[#b37aff] bg-clip-text text-transparent">
                        sur mesure
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Nous transformons vos visions en expériences numériques immersives où le design rencontre l'innovation pure.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#8b3dff] hover:bg-[#7a34e8] text-white font-bold transition-all shadow-lg shadow-[#8b3dff]/25">
                        Explorer nos services
                    </button>

                    <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-transparent hover:bg-white/5 border border-white/10 text-white font-semibold transition-all backdrop-blur-sm">
                        Voir le portfolio
                    </button>
                </div>

            </div>
        </main>
    );
}
