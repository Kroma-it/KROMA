import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit:", { email, password });
    // In a real application, handle login logic here
  };

  return (
    <>
      {/* Modal Card Container */}
      <div className="relative w-full max-w-[450px] bg-white/5 border border-white/10 rounded-4xl p-8 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-10">
        
        {/* Subtle top-right inside glow */}
        <div className="absolute -top-20 -right-20 w-[180px] h-[180px] bg-purple-700 rounded-full blur-2xl opacity-30 pointer-events-none z-0"></div>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          aria-label="Fermer"
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10">
          {/* Header */}
          <span className="text-[11px] font-extrabold tracking-[0.25em] text-fuchsia-400 uppercase mb-2.5 block">
            Connexion
          </span>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-white leading-tight mb-8">
            Ravi de vous revoir
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-zinc-300">
                Adresse mail
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 w-5 h-5 text-fuchsia-400/80 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-[#0f071a]/40 border border-white/5 focus:border-fuchsia-500/50 rounded-2xl text-white placeholder-white/50 focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-fuchsia-500/30 text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-zinc-300">
                Mot de passe
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 w-5 h-5 text-fuchsia-400/80 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Votre mot de passe"
                  required
                  className="w-full pl-12 pr-12 py-3.5 bg-[#0f071a]/40 border border-white/5 focus:border-fuchsia-500/50 rounded-2xl text-white placeholder-white/50 focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-fuchsia-500/30 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  className="absolute right-4 text-fuchsia-400 hover:text-fuchsia-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#ab05bd] hover:bg-[#c205d6] active:scale-[0.98] text-white font-extrabold rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(171,5,189,0.35)] cursor-pointer text-sm font-semibold tracking-wide"
            >
              Se connecter
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-sm text-white/50">
              <span className="h-px flex-1 bg-white/15"></span>
              <span>ou continuer avec</span>
              <span className="h-px flex-1 bg-white/15"></span>
          </div>
          {/* Social Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Google */}
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-[0.97] text-white font-bold rounded-2xl transition-all duration-300 cursor-pointer text-sm w-full"
            >
              <FaGoogle></FaGoogle>
              <span>Google</span>
            </button>

            {/* Apple */}
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-[0.97] text-white font-bold rounded-2xl transition-all duration-300 cursor-pointer text-sm w-full"
            >
              <FaApple></FaApple>
              <span>Apple</span>
            </button>
          </div>

          {/* Bottom links */}
          <div className="mt-8 flex flex-col items-center gap-3 text-xs">
            <button
              type="button"
              className="font-semibold text-zinc-400 hover:text-fuchsia-400 transition-colors cursor-pointer"
            >
              Mot de passe oublié ?
            </button>
          </div>

        </div>
      </div>
      
    </>
  );
}
