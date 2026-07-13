import { motion } from "framer-motion";

export default function LogoCrea() {
  // Generate random positions/delays for twinkly stars in the background
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2, // 2px to 5px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 4,
  }));

  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      {/* Background Glows & Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep Purple Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-900/25 blur-[100px] rounded-full" />
        
        {/* Soft Bokeh Glows */}
        <div className="absolute top-[25%] left-[30%] w-6 h-6 bg-purple-500/20 blur-md rounded-full" />
        <div className="absolute bottom-[30%] right-[25%] w-8 h-8 bg-purple-500/15 blur-lg rounded-full" />

        {/* Moving star spheres */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            style={{
              width: star.size,
              height: star.size,
              left: star.left,
              top: star.top,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Orbit 2 (Outer - Dotted Ring) */}
      <motion.div
        className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-purple-950/40 flex items-center justify-center z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {/* Node 1: Top (eConcept red C logo) */}
        <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-15 h-15 bg-[#0e081c] border border-white/80 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <motion.div 
            className="w-full h-full flex items-center justify-center p-1"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            <img src="../public/assets/logos/eConcept.svg" alt="" />
          </motion.div>
        </div>

        {/* Node 2: Bottom (ARS green A logo) */}
        <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 w-15 h-15 bg-[#0e081c] border border-white/80 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <motion.div 
            className="w-full h-full flex items-center justify-center p-1"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            <img src="../public/assets/logos/ARS.svg" alt="" />
          </motion.div>
        </div>
      </motion.div>

      {/* Orbit 1 (Inner - Dotted Ring) */}
      <motion.div
        className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-purple-950/40 flex items-center justify-center z-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {/* Node 3: Top (Le Polo logo symbol) */}
        <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-15 h-15 bg-[#0e081c] border border-white/80 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <motion.div 
            className="w-full h-full flex items-center justify-center p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <img src="../public/assets/logos/lePolo.svg" alt="" />
          </motion.div>
        </div>

        {/* Node 4: Bottom (ARS green A logo second instance) */}
        <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 w-15 h-15 bg-[#0e081c] border border-white/80 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
          <motion.div 
            className="w-full h-full flex items-center justify-center p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <img src="../public/assets/logos/ARS.svg" alt="" />
          </motion.div>
        </div>
      </motion.div>

      {/* Central Nucleus Node */}
      <div className="absolute w-[36%] h-[36%] z-20 flex items-center justify-center">
        {/* Dashed outer spinner */}
        <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/30 animate-[spin_40s_linear_infinite]" />
        
        {/* Glow behind center */}
        <div className="absolute inset-2 bg-radial from-purple-500/20 via-transparent to-transparent rounded-full filter blur-md" />

        {/* Center circle */}
        <div className="absolute inset-3 bg-[#0d071a] rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(138,14,150,0.4),0_8px_32px_rgba(0,0,0,0.8)] flex items-center justify-center p-7">
          <img
            src="/assets/logos/kroma.svg"
            alt="Kroma"
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(144,83,161,0.85)] brightness-125"
          />
        </div>
      </div>
    </div>
  );
}
