import Slider from "../components/Slider";
import Gallery from "../components/Gallery";
import { NavLink } from "react-router-dom";

export default function Realisation() {
    return (
        <div className="bg-kroma-600 min-h-screen">
            <Slider />
            <Gallery />

            {/* Ready to Start Your Journey Section */}
            <section className="relative py-24 md:py-48 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight leading-none">
                        READY TO START <br className="hidden md:block" />
                        <span className="opacity-40">YOUR JOURNEY?</span>
                    </h2>
                    
                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                        Let's create something extraordinary together. Our team is <br className="hidden md:block" />
                        ready to transform your vision into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-10">
                        <NavLink 
                            to="/contact" 
                            className="text-white font-bold text-lg tracking-[0.2em] hover:text-fuchsia-500 transition-all duration-300"
                        >
                            GET IN TOUCH
                        </NavLink>

                        <NavLink 
                            to="/personnalisation" 
                            className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-lg md:text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600">
                                OUR PROCESS
                            </span>
                        </NavLink>
                    </div>
                </div>

                {/* Subtle Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            </section>

        </div>
    );
}
