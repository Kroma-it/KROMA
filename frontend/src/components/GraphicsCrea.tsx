import { useState } from "react";
import { motion } from "framer-motion";
import {
  MousePointer,
  PenTool,
  Type,
  Palette,
  Layers,
  Sparkles,
  Crop,
  Grid,
  ChevronRight,
  Maximize2
} from "lucide-react";

interface GraphicCard {
  id: number;
  title: string;
  tag: string;
  image: string;
  rotation: number;
  hoverRotation: number;
  offsetX: number;
  offsetY: number;
  accent: string;
}

const graphicCards: GraphicCard[] = [
  {
    id: 1,
    title: "Affiche Événementielle",
    tag: "Print / Social Media",
    image: "/assets/visuels/affiche1%20copy.webP",
    rotation: -8,
    hoverRotation: -3,
    offsetX: -55,
    offsetY: -35,
    accent: "border-fuchsia-500/40 shadow-fuchsia-500/20",
  },
  {
    id: 2,
    title: "Visuel de Campagne",
    tag: "Communication Digitale",
    image: "/assets/visuels/surpriseEvent%20noel%20copy.webP",
    rotation: 6,
    hoverRotation: 1,
    offsetX: 50,
    offsetY: -45,
    accent: "border-cyan-500/40 shadow-cyan-500/20",
  },
  {
    id: 3,
    title: "Création Social Media",
    tag: "Instagram / Facebook",
    image: "/assets/visuels/Artboard%202.webP",
    rotation: -4,
    hoverRotation: 2,
    offsetX: -25,
    offsetY: 45,
    accent: "border-purple-500/40 shadow-purple-500/20",
  },
  {
    id: 4,
    title: "Support de Marque",
    tag: "Publication / Corporate",
    image: "/assets/visuels/1.webP",
    rotation: 5,
    hoverRotation: -1,
    offsetX: 40,
    offsetY: 35,
    accent: "border-amber-500/40 shadow-amber-500/20",
  },
];

export default function GraphicsCrea() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<string>("pen");

  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto flex flex-col items-center justify-center py-6 select-none overflow-visible">
      {/* Background Grid Lines & Light Gloom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-fuchsia-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[110px] rounded-full" />

        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Rulers / Guides Simulation */}
      <div className="absolute top-0 left-0 right-0 h-4 border-b border-white/5 bg-slate-950/20 flex items-center justify-between px-6 text-[8px] text-white/20 font-mono select-none pointer-events-none">
        <span>0 px</span>
        <span>100</span>
        <span>200</span>
        <span>300</span>
        <span>400</span>
        <span>500</span>
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-4 border-r border-white/5 bg-slate-950/20 flex flex-col justify-between py-6 text-[8px] text-white/20 font-mono select-none pointer-events-none">
        <span>0</span>
        <span>100</span>
        <span>200</span>
        <span>300</span>
        <span>400</span>
      </div>

      {/* Left Designer Toolbar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute left-6 top-[20%] z-40 flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-1.5 backdrop-blur-md shadow-2xl"
      >
        {[
          { id: "select", icon: MousePointer, tooltip: "Sélection" },
          { id: "pen", icon: PenTool, tooltip: "Tracé Plume" },
          { id: "type", icon: Type, tooltip: "Texte / Typo" },
          { id: "color", icon: Palette, tooltip: "Nuancier" },
          { id: "crop", icon: Crop, tooltip: "Recadrage" },
          { id: "grid", icon: Grid, tooltip: "Alignement" },
        ].map((tool) => {
          const Icon = tool.icon;
          const isActive = selectedTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`group relative p-2.5 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-fuchsia-600 text-white shadow-[0_0_12px_rgba(217,70,239,0.5)] scale-105"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              <div className="absolute left-full ml-3 scale-0 group-hover:scale-100 bg-black/90 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded border border-white/10 shadow-lg whitespace-nowrap z-50 pointer-events-none transition-all duration-150">
                {tool.tooltip}
              </div>
            </button>
          );
        })}
      </motion.div>

      {/* Right Layers Panel */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute right-6 top-[22%] z-40 hidden md:flex flex-col w-44 rounded-xl border border-white/10 bg-slate-950/80 p-3 backdrop-blur-md shadow-2xl"
      >
        <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-2.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-fuchsia-400" />
            Calques GFX
          </span>
          <ChevronRight className="w-3 h-3 text-white/30" />
        </div>

        <div className="flex flex-col gap-1.5">
          {graphicCards.map((card) => {
            const isActive = activeCardId === card.id;
            return (
              <button
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`w-full flex items-center justify-between p-1.5 rounded-lg border text-left transition-all duration-200 ${
                  isActive
                    ? "bg-fuchsia-950/40 border-fuchsia-500/40 text-white"
                    : "bg-white/2 border-transparent text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-6 h-6 rounded bg-slate-900 border border-white/15 overflow-hidden flex-shrink-0">
                    <img src={card.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-medium truncate tracking-wide">{card.title}</span>
                </div>
                {isActive && <Maximize2 className="w-2.5 h-2.5 text-fuchsia-400 flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Center Showcase Interactive Stack Area */}
      <div className="relative w-[340px] h-[340px] md:w-[380px] md:h-[380px] flex items-center justify-center z-20">
        
        {/* Animated Vector Path (Bezier Curve) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
          <motion.path
            d="M 50,300 C 100,100 300,100 350,300"
            fill="none"
            stroke="rgba(217,70,239,0.2)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Active path */}
          <motion.path
            d="M 50,300 C 100,100 300,100 350,300"
            fill="none"
            stroke="url(#vectorGrad)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          />

          {/* Anchor Points */}
          <circle cx="50" cy="300" r="4" fill="#d946ef" className="shadow" />
          <circle cx="135" cy="165" r="3.5" fill="#06b6d4" />
          <circle cx="265" cy="165" r="3.5" fill="#06b6d4" />
          <circle cx="350" cy="300" r="4" fill="#d946ef" />

          {/* Tangent guide lines */}
          <line x1="50" y1="300" x2="135" y2="165" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
          <line x1="350" y1="300" x2="265" y2="165" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />

          <defs>
            <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stack of Cards */}
        {graphicCards.map((card, index) => {
          const isActive = activeCardId === card.id;
          const zIndex = isActive ? 50 : 10 + index;
          
          return (
            <motion.div
              key={card.id}
              style={{
                position: "absolute",
                zIndex,
              }}
              animate={{
                x: card.offsetX,
                y: card.offsetY,
                rotate: isActive ? card.hoverRotation : card.rotation,
                scale: isActive ? 1.08 : 0.92,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              onMouseEnter={() => setActiveCardId(card.id)}
              onMouseLeave={() => setActiveCardId(null)}
              className={`w-[170px] h-[230px] md:w-[190px] md:h-[260px] rounded-2xl border bg-slate-950/90 overflow-hidden flex flex-col p-2 shadow-2xl transition-all duration-300 ${
                isActive ? `${card.accent} shadow-2xl` : "border-white/10 hover:border-white/20"
              } cursor-pointer`}
            >
              {/* Graphic Mockup Image Frame */}
              <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Visual crop lines indicators */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/30" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/30" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/30" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/30" />
              </div>

              {/* Text content card */}
              <div className="px-1.5 py-2.5 mt-1 select-none pointer-events-none">
                <span className="text-[8px] font-bold uppercase tracking-widest text-fuchsia-400">{card.tag}</span>
                <h4 className="text-[11px] font-black text-white truncate mt-0.5 leading-tight">{card.title}</h4>
              </div>
            </motion.div>
          );
        })}

        {/* Animated pen cursor tool */}
        <motion.div
          className="absolute z-50 pointer-events-none"
          animate={{
            x: [-65, 80, -35, -65],
            y: [120, -100, 35, 120],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <PenTool className="w-5 h-5 text-white filter drop-shadow-[0_2px_8px_rgba(217,70,239,0.8)] fill-fuchsia-500/30" />
            <motion.span
              animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-fuchsia-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Floating Sparkle element */}
        <motion.div
          className="absolute top-[18%] left-[25%] z-45"
          animate={{ rotate: 360, y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
        </motion.div>
      </div>

      {/* Ground Reflection & Shadow Line */}
      <div className="relative w-[80%] h-6 mt-6 z-10 pointer-events-none">
        {/* Horizontal Laser Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-fuchsia-400/50 to-transparent filter blur-[0.5px]" />
        {/* Glow */}
        <div className="absolute top-1/2 left-[15%] right-[15%] h-[8px] -translate-y-1/2 bg-linear-to-r from-transparent via-fuchsia-500/25 to-transparent filter blur-md" />
        {/* Specular Ground Highlight */}
        <div className="absolute top-1/2 left-1/3 right-1/3 h-[2px] -translate-y-1/2 bg-white/40 filter blur-[0.2px]" />
      </div>

      {/* Text Content */}
      <div className="text-center mt-6 z-20">
        <h2 className="text-3xl md:text-4.5xl font-black uppercase tracking-[0.22em] text-white drop-shadow-[0_4px_15px_rgba(255,255,255,0.15)] leading-none">
          Supports Visuels
        </h2>
        <p className="text-xs md:text-sm font-light tracking-[0.25em] text-white/60 mt-3 font-serif italic">
          Création Graphique & Identité de Communication
        </p>
      </div>
    </div>
  );
}
