import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";

type LandingProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    cta1: string;
    cta1Link: string;
    cta2: string;
    cta2Link: string;
};

export default function Landing({ icon: Icon, cta1, cta1Link, cta2, cta2Link }: LandingProps) {
    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/assets/Landing.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-linear-to-t from-kroma-600 to-black/25"></div>

            <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-white">
                <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/60 bg-fuchsia-900/30 px-4 py-2 text-sm font-semibold text-fuchsia-200 md:text-lg">
                    <Icon className="h-4 w-4" />
                    Creative Design Studio
                </p>

                <h1 className="mx-auto w-full text-4xl font-bold leading-tight md:w-3/5 md:text-7xl">
                    L'art de sculpter vos idees en <br />
                    <span className="bg-linear-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-4xl font-semibold text-transparent md:text-7xl">
                        experiences numeriques
                    </span>
                </h1>

                <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
                    <NavLink
                        to={cta1Link}
                        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-fuchsia-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:bg-fuchsia-800 active:scale-95 md:w-auto md:text-xl"
                    >
                        <span>{cta1}</span>
                        
                    </NavLink>

                    <NavLink
                        to={cta2Link}
                        className="w-full rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-500 hover:bg-white/20 active:scale-95 md:w-auto md:text-xl"
                    >
                        {cta2}
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
