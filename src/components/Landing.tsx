import { useState, useEffect } from "react";

export default function Landing() {   

    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/assets/Landing.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 w-full h-screen bg-gradient-to-t from-kroma-600 bg-black/30"></div>
            <div className="relative z-10 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                <p className="border border-fuchsia-400 text-sm md:text-[20px] text-fuchsia-500 bg-fuchsia-900/30 p-2 rounded-full w-fit mx-auto mb-4">
                    Creative Design Studio
                </p>
                <h1 className="text-4xl md:text-7xl font-bold w-full md:w-3/5 mx-auto leading-tight">
                    L'art de sculpter vos idées en <br />
                    <span className="text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500">
                      expériences numériques
                    </span>
                </h1>  
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-10">
                    <button className="bg-fuchsia-600 text-white w-full md:w-auto px-8 py-4 cursor-pointer rounded-2xl text-lg md:text-xl font-bold shadow-2xl hover:bg-fuchsia-800 hover:shadow-purple-800/60 hover:-translate-y-1 transition-all duration-500 group flex items-center justify-center gap-3 active:scale-95">
                        <span>Commencer un projet</span>
                        <svg 
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="bg-white/10 backdrop-blur-md text-white w-full md:w-auto px-8 py-4 cursor-pointer rounded-2xl text-lg md:text-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-500 active:scale-95">
                        Voir le portfolio
                    </button>
                </div>
            </div>
        </section>
    );
}
