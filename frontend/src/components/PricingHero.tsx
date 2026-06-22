import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PricingHeroProps = {
    icon: LucideIcon;
    iconText: string;
    titleText: ReactNode;
    bottomText: string;
};

export default function PricingHero({ icon: Icon, iconText, titleText, bottomText }: PricingHeroProps) {
    return (
        <div className="flex flex-col items-center gap-10 justify-center text-white pt-40 md:pt-60 pb-6 px-6">
            <p className="flex items-center justify-center gap-2 text-base md:text-xl text-fuchsia-500 font-medium bg-fuchsia-900/30 px-5 py-2 border border-fuchsia-500/30 rounded-full">
                <Icon className="w-5 h-5" />
                {iconText}
            </p>
            <h1 className="text-4xl md:text-6xl text-center w-full md:w-3/6 font-bold leading-tight">
                {titleText}
            </h1>
            <p className="text-base md:text-lg text-center w-full md:w-4/9 font-light text-white/60">
                {bottomText}
            </p>
        </div>
    );
}
