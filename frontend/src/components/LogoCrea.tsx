import { motion } from "framer-motion";

interface LogoPod {
  id: number;
  image: string;
  name: string;
  tag: string;
  shape: "circle" | "hexagon";
  borderColor: string;
  glowColor: string;
  positionClass: string;
  floatDuration: number;
  floatDelay: number;
}

const logoPods: LogoPod[] = [
  {
    id: 1,
    image: "/assets/logos/logo1.svg",
    name: "Logo 1",
    tag: "Identité Moderne",
    shape: "circle",
    borderColor: "border-fuchsia-500/40",
    glowColor: "shadow-[0_0_15px_rgba(217,70,239,0.35)]",
    positionClass: "top-[12%] left-[18%]",
    floatDuration: 5,
    floatDelay: 0,
  },
  {
    id: 2,
    image: "/assets/logos/logo2.svg",
    name: "Logo 2",
    tag: "Branding Tech",
    shape: "circle",
    borderColor: "border-purple-400/40",
    glowColor: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    positionClass: "top-[10%] right-[26%]",
    floatDuration: 6,
    floatDelay: 0.5,
  },
  {
    id: 3,
    image: "/assets/logos/logo3.svg",
    name: "Logo 3",
    tag: "Concept Éco",
    shape: "hexagon",
    borderColor: "border-pink-400/40",
    glowColor: "shadow-[0_0_15px_rgba(244,63,94,0.3)]",
    positionClass: "top-[32%] left-[4%]",
    floatDuration: 5.5,
    floatDelay: 1,
  },
  {
    id: 4,
    image: "/assets/logos/logo4.png",
    name: "Logo 4",
    tag: "Corporate",
    shape: "hexagon",
    borderColor: "border-indigo-400/40",
    glowColor: "shadow-[0_0_15px_rgba(99,102,241,0.35)]",
    positionClass: "top-[26%] right-[6%]",
    floatDuration: 4.8,
    floatDelay: 1.5,
  },
  {
    id: 5,
    image: "/assets/logos/ARS.svg",
    name: "ARS Architecture",
    tag: "Architecte",
    shape: "hexagon",
    borderColor: "border-amber-500/40",
    glowColor: "shadow-[0_0_15px_rgba(245,158,11,0.35)]",
    positionClass: "bottom-[22%] left-[10%]",
    floatDuration: 6.2,
    floatDelay: 0.2,
  },
  {
    id: 6,
    image: "/assets/logos/eConcept.svg",
    name: "E-Concept",
    tag: "Innovation",
    shape: "circle",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.25)]",
    positionClass: "bottom-[6%] left-[38%]",
    floatDuration: 5.8,
    floatDelay: 0.8,
  },
  {
    id: 7,
    image: "/assets/logos/lePolo.svg",
    name: "Le Polo",
    tag: "Sport Premium",
    shape: "circle",
    borderColor: "border-rose-450/30",
    glowColor: "shadow-[0_0_15px_rgba(244,63,94,0.2)]",
    positionClass: "bottom-[25%] right-[12%]",
    floatDuration: 6.5,
    floatDelay: 1.2,
  },
];

export default function LogoCrea() {
  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto flex flex-col items-center justify-center py-6 select-none overflow-visible">
      {/* Background Glows & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full" />

        {/* Small Bokeh Lights */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full filter blur-xs opacity-40 ${
              i % 3 === 0
                ? "w-2.5 h-2.5 bg-fuchsia-400"
                : i % 3 === 1
                ? "w-3 h-3 bg-purple-400"
                : "w-2 h-2 bg-indigo-400"
            }`}
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -25, 25, 0],
              x: [0, 20, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Orbit Ellipses */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 500 500">
        {/* Ring 1 */}
        <motion.ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="100"
          stroke="url(#orbitGradLogo1)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 8"
          style={{ transformOrigin: "250px 250px", rotate: "-15deg" }}
          animate={{ rotate: [-15, 345] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        {/* Ring 2 */}
        <motion.ellipse
          cx="250"
          cy="250"
          rx="200"
          ry="140"
          stroke="url(#orbitGradLogo2)"
          strokeWidth="1"
          fill="none"
          style={{ transformOrigin: "250px 250px", rotate: "25deg" }}
          animate={{ rotate: [25, 385] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        <defs>
          <linearGradient id="orbitGradLogo1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(217,70,239,0.05)" />
            <stop offset="50%" stopColor="rgba(217,70,239,0.35)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.05)" />
          </linearGradient>
          <linearGradient id="orbitGradLogo2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.3)" />
            <stop offset="50%" stopColor="rgba(244,63,94,0.05)" />
            <stop offset="100%" stopColor="rgba(217,70,239,0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Crystal Sphere (Center) */}
      <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center z-20">
        
        {/* Outer Glow Ring behind nucleus */}
        <div className="absolute inset-0 bg-radial from-fuchsia-500/20 via-kroma-600/10 to-transparent rounded-full filter blur-xl animate-pulse" />
        
        {/* Central crystal sphere */}
        <motion.div
          className="w-full h-full rounded-full border border-white/20 bg-slate-950/70 backdrop-blur-lg shadow-[0_0_40px_rgba(217,70,239,0.25)] overflow-hidden flex items-center justify-center relative group/nucleus"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Rotating dashed border ring */}
          <div className="absolute inset-1.5 rounded-full border border-dashed border-fuchsia-400/20 animate-spin [animation-duration:20s]" />
          
          <img
            src="/assets/logos/kroma.svg"
            alt="Kroma Nucleus"
            className="w-[50%] h-[50%] object-contain filter drop-shadow-[0_0_15px_rgba(217,70,239,0.6)] group-hover/nucleus:scale-110 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Orbiting Logo Pods */}
      {logoPods.map((pod) => {
        return (
          <motion.div
            key={pod.id}
            className={`absolute ${pod.positionClass} z-30 pointer-events-auto`}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: pod.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pod.floatDelay,
            }}
          >
            <div
              className={`group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border bg-slate-950/75 backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-white/50 cursor-pointer ${pod.glowColor} ${pod.borderColor} ${
                pod.shape === "circle"
                  ? "rounded-full"
                  : "rounded-xl rotate-0 hover:rotate-12"
              }`}
            >
              {/* Reflection Shine overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit" />

              {/* Logo Image */}
              <img
                src={pod.image}
                alt={pod.name}
                className="w-[60%] h-[60%] object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] group-hover:scale-105 transition-all duration-300"
              />

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black/90 text-white text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-sm border border-white/15 pointer-events-none transition-all duration-200 shadow-xl whitespace-nowrap z-50">
                {pod.tag}
              </div>
            </div>
          </motion.div>
        );
      })}

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
          Identité Visuelle
        </h2>
        <p className="text-xs md:text-sm font-light tracking-[0.25em] text-white/60 mt-3 font-serif italic">
          Design de Logo & Graphisme d'Excellence
        </p>
      </div>
    </div>
  );
}
