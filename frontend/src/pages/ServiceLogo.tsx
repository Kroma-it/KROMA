import { motion } from "framer-motion";
import {Helmet} from "react-helmet-async";
import {
  ArrowRight,
  Palette,
  Lightbulb,
  Award,
  Sparkles,
  Compass,
  Layers,
  Target,
  ShieldCheck,
  Zap,
  PenTool,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import LogoCrea from "../components/LogoCrea";

export default function ServiceLogo() {
  const steps = [
    {
      num: "01",
      title: "Briefing & Immersion",
      desc: "Nous analysons votre secteur, vos valeurs, votre cible et votre vision lors d'un entretien pour cerner l'essence de votre projet.",
      icon: Lightbulb,
      color: "from-cyan-500/20 to-blue-500/5",
    },
    {
      num: "02",
      title: "Direction Artistique & Moodboards",
      desc: "Nous concevons des planches de tendances pour valider les orientations de styles, de typographies et de couleurs.",
      icon: Palette,
      color: "from-blue-500/20 to-indigo-500/5",
    },
    {
      num: "03",
      title: "Croquis & Conceptions",
      desc: "Nous explorons et dessinons plusieurs pistes créatives uniques. Nous tracons les premiers vecteurs géométriques.",
      icon: Compass,
      color: "from-indigo-500/20 to-fuchsia-500/5",
    },
    {
      num: "04",
      title: "Raffinement & Précision",
      desc: "Nous ajustons le concept retenu dans ses moindres détails (courbes, espacements typographiques, déclinaisons sombres/claires).",
      icon: Layers,
      color: "from-fuchsia-500/20 to-pink-500/5",
    },
    {
      num: "05",
      title: "Finalisation & Charte",
      desc: "Livraison de votre logo dans tous les formats nécessaires (vectoriel, web, print) accompagné d'un guide d'utilisation (mini charte).",
      icon: Award,
      color: "from-pink-500/20 to-rose-500/5",
    },
  ];

  const portfolioLogos = [
    {
      name: "Kroma Studio",
      tag: "Identité Visuelle / Design",
      desc: "Une marque dynamique, minimaliste et technologique inspirée des prisme de couleurs.",
      logo: "/assets/logos/kroma.svg",
      bgClass: "from-indigo-650 to-indigo-950/40",
      accentColor: "rgba(99,102,241,0.2)",
    },
    {
      name: "E-Concept",
      tag: "Branding / Tech & Innovation",
      desc: "Logo conçu pour une entreprise technologique innovante cherchant la clarté.",
      logo: "/assets/logos/eConcept.svg",
      bgClass: "from-cyan-650 to-cyan-950/40",
      accentColor: "rgba(6,182,212,0.2)",
    },
    {
      name: "Le Polo",
      tag: "Sport / Mode Haut de Gamme",
      desc: "Emblème raffiné et traditionnel représentant un arbre de vie stylisé.",
      logo: "/assets/logos/lePolo.svg",
      bgClass: "from-slate-650 to-slate-950/40",
      accentColor: "rgba(255,255,255,0.1)",
    },
    {
      name: "ARS Architecture",
      tag: "Design de Maisons / Immobilier",
      desc: "Logo corporatif équilibré avec une typographie robuste inspirée des lignes d'architecte.",
      logo: "/assets/logos/ARS.svg",
      bgClass: "from-amber-650 to-amber-950/40",
      accentColor: "rgba(245,158,11,0.2)",
    },
  ];

  const benefits = [
    {
      title: "Différenciation unique",
      desc: "Démarquez-vous instantanément de vos concurrents grâce à un design mémorable et intemporel qui vous ressemble.",
      icon: Target,
    },
    {
      title: "Crédibilité & Confiance",
      desc: "Un logo professionnel inspire instantanément confiance à vos clients, investisseurs et futurs partenaires d'affaires.",
      icon: ShieldCheck,
    },
    {
      title: "Mémorabilité accrue",
      desc: "Facilitez le bouche-à-oreille et l'ancrage mental de votre marque dans l'esprit du public cible.",
      icon: Zap,
    },
    {
      title: "Cohérence multicanal",
      desc: "Une adaptabilité technique parfaite sur vos réseaux sociaux, site internet, cartes de visite, emballages et enseignes.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen mt-20 text-white overflow-hidden pb-16 selection:bg-fuchsia-500/30 selection:text-white">
      <Helmet>
        <title>Création de logos professionnels | Kroma</title>
        <meta name="description" content="Réalisation d'identité visuelle forte et captivante pour des marques ambitieuses" />
      </Helmet>
      {/* 1. Hero Section & LogoCrea Component */}
      <section className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Decorative ambient background */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 z-10"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-900/10 px-4 py-2 text-sm font-semibold text-fuchsia-300">
            <PenTool className="h-4 w-4" />
            Service de Design d'Identité
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Création de Logo <br />
            <span className="bg-linear-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Professionnel
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-white/70 max-w-xl font-light">
            Votre logo est la première porte d'entrée de votre marque. Chez Kroma, nous
            sculptons des emblèmes intemporels, précis et stratégiquement pensés pour
            raconter votre histoire en un seul coup d'œil.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <NavLink
              to="/personnalisation"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-fuchsia-650 px-8 py-4 text-base font-bold text-white bg-kroma-600 transition-all duration-300 hover:bg-fuchsia-600 hover:-translate-y-0.5 active:scale-98"
            >
              <span>Lancer mon brief</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </NavLink>

            <a
              href="#processus"
              className="w-full sm:w-auto flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              Découvrir la méthode
            </a>
          </div>
        </motion.div>

        {/* LogoCrea Displayed On the Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="z-10 flex items-center justify-center overflow-visible"
        >
          <LogoCrea />
        </motion.div>
      </section>

      {/* 2. Ce qu'est un logo & Pourquoi il est important */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Ce qu'est un logo */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl border border-white/10 bg-white/2 p-8 md:p-10 overflow-hidden"
          >
            {/* Hover light glow */}
            <div className="absolute inset-0 bg-radial from-fuchsia-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 mb-6">
              <Lightbulb className="h-6 w-6 text-kroma-400" />
            </div>

            <h2 className="text-3xl font-extrabold mb-4">Ce qu'est un logo</h2>
            <p className="text-white/60 leading-relaxed font-light">
              Le logo c'est la signature numérique d'une entreprise audacieuse, 
              celle qu'on remarque avant même de remarquer avant même de connaitre le
              message transmis.
            </p>
          </motion.div>

          {/* Card 2: Pourquoi il est important */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-3xl border border-white/10 bg-white/2 p-8 md:p-10 overflow-hidden"
          >
            {/* Hover light glow */}
            <div className="absolute inset-0 bg-radial from-kroma-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-kroma-300/20 mb-6">
              <Award className="h-6 w-6 text-kroma-400" />
            </div>

            <h2 className="text-3xl font-extrabold mb-4">Pourquoi il est important</h2>
            <p className="text-white/60 leading-relaxed font-light">
              Le logo est la chose qui vous définit, un nom graphique qui marque
              facilement les esprits. Un logo bien pensé vous démarque de la conccurence
              de par sa particularité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Le processus de création */}
      <section id="processus" className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="mb-16 text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-400 mb-3">
            Notre Méthodologie
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Le processus de création Kroma
          </h2>
          <p className="text-white/50 mt-4 max-w-xl font-light">
            Nous combinons direction stratégique et rigueur artistique pour accoucher d'un logo durable.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl border border-white/5 bg-slate-950/40 p-6 flex flex-col justify-between hover:border-white/15 transition-all duration-300 group"
              >
                {/* Micro glow on top edge */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${step.color} rounded-t-2xl`} />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-fuchsia-300 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-white/50 font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Des exemples de réalisations */}
      <section className="relative py-20 z-10 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-kroma-400 mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Des exemples de réalisations
            </h2>
          </div>
          <NavLink
            to="/personnalisation"
            className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-300 hover:text-fuchsia-200 transition-colors group"
          >
            Lancer un projet similaire
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        {/* Portfolio Showcase Infinite Marquee */}
        <div className="w-full relative kroma-marquee overflow-hidden py-4">
          <div className="flex gap-8 w-max kroma-marquee-track pl-6">
            {[...portfolioLogos, ...portfolioLogos].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/10 bg-white/15 overflow-hidden flex flex-col justify-between w-[320px] md:w-[450px] shrink-0"
              >
                {/* Image Frame */}
                <div className="relative h-48 md:h-60 w-full flex items-center justify-center bg-slate-950/80 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-white/2 to-transparent pointer-events-none" />

                  {/* SVG Logo Displayed */}
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-24 max-w-[160px] object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.06)] group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Inner ambient glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${item.accentColor} 0%, transparent 65%)`,
                    }}
                  />
                </div>

                {/* Text Area */}
                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">
                    {item.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold mt-2 mb-3 text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Les bénéfices pour l'entreprise */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-kroma-400 mb-3">
            Impact Business
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Les bénéfices pour l'entreprise
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-light">
            Investir dans une identité visuelle professionnelle est un levier de croissance stratégique.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-slate-950/20 p-6 md:p-8 hover:border-kroma-600/40 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-kroma-600/20 mb-6 group-hover:bg-kroma-600/20 transition-colors">
                  <Icon className="h-5 w-5 text-kroma-400" />
                </div>

                <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-white/50 font-light">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative px-6 py-10 md:px-12 lg:px-24 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/20 bg-radial from-kroma-500 from-5% to-kroma-700 to-60% p-8 md:p-14 text-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 blur-[80px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto">
            Prêt à donner une identité forte à votre entreprise ?
          </h2>
          <p className="text-white/60 mt-4 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Collaborons pour concevoir le logo qui portera vos ambitions et fédérera vos
            clients autour de votre message.
          </p>

          <NavLink
            to="/personnalisation"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-fuchsia-650 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 bg-kroma-600 hover:-translate-y-0.5"
          >
            Commencer mon projet
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </motion.div>
      </section>
    </main>
  );
}