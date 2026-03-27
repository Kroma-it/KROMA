import { Compass, Palette, Layers2, Scroll, Monitor, CheckCircle2 } from "lucide-react"

interface PricingItem {
  Img: string;
  title: string;
  subtitle: string;
  content: string;
}

interface ServiceClientProps {
  pricings: PricingItem[];
  selectedServices: string[];
  onToggleService: (title: string) => void;
}

const IconMap: Record<string, React.ElementType> = {
  Compass: Compass,
  Palette: Palette,
  Layer2: Layers2,
  Scroll: Scroll,
  Monitor: Monitor,
};

export default function ServiceClient({ pricings, selectedServices, onToggleService }: ServiceClientProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {pricings.map((item) => {
        const Icon = IconMap[item.Img] || Compass;
        const isSelected = selectedServices.includes(item.title);
        
        return (
          <div
            key={item.title}
            onClick={() => onToggleService(item.title)}
            className={`group relative flex flex-col p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 cursor-pointer border
              ${isSelected 
                ? 'border-fuchsia-600 bg-fuchsia-600/10 shadow-[0_20px_40px_-15px_rgba(192,38,211,0.2)]' 
                : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-fuchsia-500/30 hover:-translate-y-2'
              }`}
          >
            {/* Selection Check Icon */}
            {isSelected && (
              <div className="absolute top-6 right-6 z-20">
                <CheckCircle2 className="text-fuchsia-500 w-6 h-6 animate-in zoom-in duration-300" />
              </div>
            )}

            {/* Background Glow */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-600/0 via-fuchsia-600/0 to-fuchsia-600/5 transition-opacity duration-500
              ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
            />
            
            {/* Icon Container */}
            <div className={`relative mb-6 w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-500
              ${isSelected 
                ? 'bg-fuchsia-500/20 border-fuchsia-500/40 text-fuchsia-300 scale-110' 
                : 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 group-hover:text-fuchsia-300'
              }`}>
              <Icon size={28} strokeWidth={1.5} />
              
              {/* Icon Glow */}
              <div className={`absolute inset-0 blur-xl bg-fuchsia-500/20 transition-opacity duration-500
                ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
              />
            </div>

            {/* Content */}
            <div className="relative">
              <span className={`block mb-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors
                ${isSelected ? 'text-fuchsia-400' : 'text-fuchsia-500/60'}`}>
                {item.subtitle}
              </span>
              <h3 className={`text-xl font-semibold mb-3 transition-colors
                ${isSelected ? 'text-fuchsia-100' : 'text-white group-hover:text-fuchsia-100'}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-colors
                ${isSelected ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'}`}>
                {item.content}
              </p>
            </div>

            {/* Bottom Glow Decoration */}
            <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-fuchsia-600/5 blur-[60px] rounded-full transition-opacity duration-700
              ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
            />
          </div>
        );
      })}
    </div>
  );
}
