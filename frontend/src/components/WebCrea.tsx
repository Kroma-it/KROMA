import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Code,
  TrendingUp,
  Layers,
  ShieldCheck,
  Layout,
  Globe,
  Cpu,
  MousePointer
} from "lucide-react";

interface WebPod {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  shape: "circle" | "hexagon";
  borderColor: string;
  glowColor: string;
  positionClass: string;
  floatDuration: number;
  floatDelay: number;
}

const orbitingPods: WebPod[] = [
  {
    id: 1,
    icon: Smartphone,
    name: "Design Responsive",
    shape: "circle",
    borderColor: "border-cyan-500/40",
    glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.35)]",
    positionClass: "top-[12%] left-[18%]",
    floatDuration: 5,
    floatDelay: 0,
  },
  {
    id: 2,
    icon: Zap,
    name: "Performance & Vitesse",
    shape: "circle",
    borderColor: "border-amber-400/40",
    glowColor: "shadow-[0_0_15px_rgba(251,191,36,0.3)]",
    positionClass: "top-[10%] right-[26%]",
    floatDuration: 6,
    floatDelay: 0.5,
  },
  {
    id: 3,
    icon: Code,
    name: "Code Propre & SEO",
    shape: "hexagon",
    borderColor: "border-slate-300/40",
    glowColor: "shadow-[0_0_15px_rgba(203,213,225,0.3)]",
    positionClass: "top-[32%] left-[4%]",
    floatDuration: 5.5,
    floatDelay: 1,
  },
  {
    id: 4,
    icon: Globe,
    name: "Visibilité Globale",
    shape: "hexagon",
    borderColor: "border-indigo-400/40",
    glowColor: "shadow-[0_0_15px_rgba(99,102,241,0.35)]",
    positionClass: "top-[26%] right-[6%]",
    floatDuration: 4.8,
    floatDelay: 1.5,
  },
  {
    id: 5,
    icon: Layers,
    name: "Architecture Modulaire",
    shape: "hexagon",
    borderColor: "border-fuchsia-500/40",
    glowColor: "shadow-[0_0_15px_rgba(217,70,239,0.35)]",
    positionClass: "bottom-[22%] left-[10%]",
    floatDuration: 6.2,
    floatDelay: 0.2,
  },
  {
    id: 6,
    icon: ShieldCheck,
    name: "Sécurité & SSL",
    shape: "circle",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    positionClass: "bottom-[6%] left-[38%]",
    floatDuration: 5.8,
    floatDelay: 0.8,
  },
  {
    id: 7,
    icon: Layout,
    name: "Expérience Utilisateur UI/UX",
    shape: "circle",
    borderColor: "border-rose-450/30",
    glowColor: "shadow-[0_0_15px_rgba(244,63,94,0.2)]",
    positionClass: "bottom-[25%] right-[12%]",
    floatDuration: 6.5,
    floatDelay: 1.2,
  },
];

export default function WebCrea() {
  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto flex flex-col items-center justify-center py-6 select-none overflow-visible">
      {/* Background Glows & Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-fuchsia-500/10 blur-[100px] rounded-full" />

        {/* Small Bokeh Lights */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full filter blur-xs opacity-40 ${
              i % 3 === 0
                ? "w-2.5 h-2.5 bg-cyan-400"
                : i % 3 === 1
                ? "w-3 h-3 bg-fuchsia-400"
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
          stroke="url(#orbitGrad1)"
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
          stroke="url(#orbitGrad2)"
          strokeWidth="1"
          fill="none"
          style={{ transformOrigin: "250px 250px", rotate: "25deg" }}
          animate={{ rotate: [25, 385] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        <defs>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.05)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.35)" />
            <stop offset="100%" stopColor="rgba(217,70,239,0.05)" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
            <stop offset="50%" stopColor="rgba(236,72,153,0.05)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Futuristic Glassmorphic Browser (Center) */}
      <div className="relative w-[300px] h-[220px] md:w-[350px] md:h-[260px] flex items-center justify-center z-20">
        
        {/* Outer Glow Ring behind browser */}
        <div className="absolute inset-0 bg-radial from-cyan-500/20 via-fuchsia-500/10 to-transparent rounded-3xl filter blur-xl animate-pulse" />
        
        {/* Central 3D-angled responsive browser frame */}
        <motion.div
          className="w-full h-full rounded-2xl border border-white/15 bg-slate-950/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
          style={{
            transform: "perspective(800px) rotateX(12deg) rotateY(-8deg) rotateZ(3deg)",
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -6, 0],
            rotateX: [12, 10, 12],
            rotateY: [-8, -10, -8],
            rotateZ: [3, 2, 3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Browser Header */}
          <div className="h-8 border-b border-white/10 bg-slate-900/60 px-4 flex items-center justify-between">
            {/* Window Controls */}
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            {/* Address Bar */}
            <div className="w-[60%] h-4.5 rounded bg-white/5 border border-white/5 flex items-center justify-center text-[8px] text-white/40 tracking-wider">
              kroma.studio/projet-web
            </div>

            {/* Empty space/Icon placeholder */}
            <div className="w-8 flex justify-end">
              <Cpu className="w-3.5 h-3.5 text-cyan-400/50" />
            </div>
          </div>

          {/* Browser Content View */}
          <div className="flex-1 p-3 flex gap-2">
            {/* Sidebar Visual */}
            <div className="w-10 border-r border-white/5 pr-1 flex flex-col gap-1.5">
              <div className="w-full h-2 rounded bg-cyan-400/30" />
              <div className="w-[80%] h-1 rounded bg-white/10" />
              <div className="w-[70%] h-1 rounded bg-white/10" />
              <div className="w-[90%] h-1 rounded bg-white/10" />
              <div className="flex-1" />
              <div className="w-6 h-1.5 rounded-sm bg-indigo-500/40" />
            </div>

            {/* Dashboard Content Visual */}
            <div className="flex-1 flex flex-col gap-2 overflow-hidden">
              {/* Top Summary Banner */}
              <div className="flex justify-between items-center bg-white/5 p-1.5 rounded border border-white/5">
                <div className="flex flex-col gap-0.5">
                  <div className="w-8 h-1 bg-white/30 rounded" />
                  <div className="w-12 h-2.5 bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-[9px] font-bold text-transparent">
                    99.8% Perf
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border border-indigo-400/30 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-3 h-3 text-indigo-400" />
                  </motion.div>
                </div>
              </div>

              {/* Central Graph Visual */}
              <div className="flex-1 bg-slate-900/60 rounded border border-white/5 p-1.5 flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between items-center text-[7px] text-white/30">
                  <span>Trafic Web</span>
                  <span className="text-emerald-400">+45.2%</span>
                </div>

                {/* Simulated Graph Path */}
                <div className="flex-1 w-full relative min-h-12 mt-1">
                  <svg className="w-full h-full" viewBox="0 0 160 50">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(6,182,212,0.4)" />
                        <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,45 Q20,35 40,25 T80,30 T120,10 T160,5"
                      fill="none"
                      stroke="rgba(34,211,238,0.85)"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path
                      d="M0,45 Q20,35 40,25 T80,30 T120,10 T160,5 L160,50 L0,50 Z"
                      fill="url(#chartGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                    {/* Animated Pulsing Dot */}
                    <motion.circle
                      cx="120"
                      cy="10"
                      r="2"
                      fill="#06b6d4"
                      animate={{ scale: [1, 2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </div>
              </div>

              {/* Grid Widgets Visual */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-6 rounded bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-0.5">
                  <span className="text-[6px] text-white/30">Conversion</span>
                  <span className="text-[8px] font-bold text-white">4.8%</span>
                </div>
                <div className="h-6 rounded bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-0.5">
                  <span className="text-[6px] text-white/30">Vitesse</span>
                  <span className="text-[8px] font-bold text-fuchsia-400">0.4s</span>
                </div>
                <div className="h-6 rounded bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-0.5">
                  <span className="text-[6px] text-white/30">SEO</span>
                  <span className="text-[8px] font-bold text-emerald-400">100/100</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small floating Cursor element interacting with dashboard */}
        <motion.div
          className="absolute z-30 pointer-events-none"
          animate={{
            x: [-40, 20, -10, -40],
            y: [50, -20, 10, 50],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MousePointer className="w-5 h-5 text-white/80 fill-cyan-400/80 drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]" />
        </motion.div>

        {/* Floating tags */}
        <motion.div
          className="absolute -top-6 -left-6 z-10 px-2 py-1 rounded-md border border-cyan-400/20 bg-slate-950/80 text-[10px] text-cyan-300 font-mono"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {"<div />"}
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -right-4 z-10 px-2 py-1 rounded-md border border-fuchsia-400/20 bg-slate-950/80 text-[10px] text-fuchsia-300 font-mono"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {"useEffect()"}
        </motion.div>
      </div>

      {/* Orbiting Feature Pods */}
      {orbitingPods.map((pod) => {
        const Icon = pod.icon;
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

              {/* Icon */}
              <Icon className="w-[50%] h-[50%] object-contain text-white/80 group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-300" />

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black/90 text-white text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-sm border border-white/15 pointer-events-none transition-all duration-200 shadow-xl whitespace-nowrap">
                {pod.name}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Ground Reflection & Shadow Line */}
      <div className="relative w-[80%] h-6 mt-6 z-10 pointer-events-none">
        {/* Horizontal Laser Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-cyan-400/50 to-transparent filter blur-[0.5px]" />
        {/* Glow */}
        <div className="absolute top-1/2 left-[15%] right-[15%] h-[8px] -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-500/25 to-transparent filter blur-md" />
        {/* Specular Ground Highlight */}
        <div className="absolute top-1/2 left-1/3 right-1/3 h-[2px] -translate-y-1/2 bg-white/40 filter blur-[0.2px]" />
      </div>

      {/* Text Content */}
      <div className="text-center mt-6 z-20">
        <h2 className="text-3xl md:text-4.5xl font-black uppercase tracking-[0.22em] text-white drop-shadow-[0_4px_15px_rgba(255,255,255,0.15)] leading-none">
          Site Internet
        </h2>
        <p className="text-xs md:text-sm font-light tracking-[0.25em] text-white/60 mt-3 font-serif italic">
          Création & Développement Web d'Excellence
        </p>
      </div>
    </div>
  );
}
