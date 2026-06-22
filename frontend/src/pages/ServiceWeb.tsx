import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Palette,
  Lightbulb,
  Award,
  Layers,
  ShieldCheck,
  Monitor,
  Zap,
  Code,
  Globe,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import WebCrea from "../components/WebCrea";

export default function ServiceWeb() {
  const steps = [
    {
      num: "01",
      title: "Briefing & Stratégie",
      desc: "Nous analysons vos objectifs commerciaux, vos cibles et vos concurrents afin de concevoir une architecture et une stratégie de conversion optimales.",
      icon: Lightbulb,
      color: "from-cyan-500/20 to-blue-500/5",
    },
    {
      num: "02",
      title: "Design UI/UX & Maquettes",
      desc: "Nous créons l'ergonomie (wireframes) puis les maquettes graphiques haute fidélité (Figma) pour valider le style visuel avant le codage.",
      icon: Palette,
      color: "from-blue-500/20 to-indigo-500/5",
    },
    {
      num: "03",
      title: "Développement & Intégration",
      desc: "Nos experts développent votre site sur-mesure (React, Next.js ou CMS) avec un code propre, performant, évolutif et parfaitement responsive.",
      icon: Code,
      color: "from-indigo-500/20 to-fuchsia-500/5",
    },
    {
      num: "04",
      title: "Optimisation SEO & Vitesse",
      desc: "Nous optimisons les temps de chargement, sécurisons le site et configurons le référencement naturel (SEO) pour maximiser votre visibilité.",
      icon: Zap,
      color: "from-fuchsia-500/20 to-pink-500/5",
    },
    {
      num: "05",
      title: "Lancement & Suivi",
      desc: "Après une batterie de tests rigoureux, nous mettons votre site en ligne et vous formons à son administration pour une autonomie totale.",
      icon: Award,
      color: "from-pink-500/20 to-rose-500/5",
    },
  ];

  const portfolioWeb = [
    {
      name: "Neon Dynamics",
      tag: "Plateforme Automobile / Next.js",
      desc: "Redéfinition complète de l'écosystème numérique d'une marque automobile de sport avec configurateur interactif.",
      image: "/assets/lybek.webp",
      bgClass: "from-indigo-650 to-indigo-950/40",
      accentColor: "rgba(99,102,241,0.2)",
    },
    {
      name: "Prismatic Flow",
      tag: "Dashboard Analytique / React",
      desc: "Interface SaaS de gestion de données et visualisation en temps réel avec un design sombre ultra-épuré.",
      image: "/assets/slide2.webp",
      bgClass: "from-cyan-650 to-cyan-950/40",
      accentColor: "rgba(6,182,212,0.2)",
    },
    {
      name: "Aetherial Vision",
      tag: "Studio d'Architecture / WebGL",
      desc: "Site vitrine artistique immersif exploitant des modèles 3D légers et des animations fluides au scroll.",
      image: "/assets/slide3.webp",
      bgClass: "from-slate-650 to-slate-950/40",
      accentColor: "rgba(255,255,255,0.1)",
    },
    {
      name: "Horizon E-Shop",
      tag: "Boutique en ligne / Headless Commerce",
      desc: "Boutique en ligne haute performance avec panier dynamique, paiements sécurisés et synchronisation d'inventaire.",
      image: "/assets/slide4.webp",
      bgClass: "from-amber-650 to-amber-950/40",
      accentColor: "rgba(245,158,11,0.2)",
    },
  ];

  const benefits = [
    {
      title: "Visibilité 24/7 & Globale",
      desc: "Votre entreprise reste accessible au monde entier et à tout moment pour capturer des opportunités en continu.",
      icon: Globe,
    },
    {
      title: "Crédibilité & Confiance",
      desc: "Un site web moderne et soigné renforce l'image de marque et rassure vos clients dès les premières secondes.",
      icon: ShieldCheck,
    },
    {
      title: "Génération de Leads",
      desc: "Des parcours utilisateurs étudiés pour guider et convertir efficacement vos visiteurs en clients qualifiés.",
      icon: TrendingUp,
    },
    {
      title: "Évolutivité Sans Limite",
      desc: "Une architecture modulaire permettant d'ajouter des fonctionnalités sur-mesure au rythme de votre croissance.",
      icon: Layers,
    },
  ];

  return (
    <main className="min-h-screen mt-20 text-white overflow-hidden pb-16 selection:bg-cyan-500/30 selection:text-white">
      <Helmet>
        <title>Création de sites web professionnels | Kroma</title>
        <meta name="description" content="Développement de sites internet modernes, performants et sur-mesure pour des marques ambitieuses." />
      </Helmet>
      {/* 1. Hero Section & WebCrea Component */}
      <section className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Decorative ambient background */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 z-10"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-kroma-200/30 bg-kroma-600/20 px-4 py-2 text-sm font-semibold text-kroma-400">
            <Monitor className="h-4 w-4" />
            Service de Développement Web
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Création de Site Web <br />
            <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-fuchsia-300 bg-clip-text text-transparent">
              Professionnel
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-white/70 max-w-xl font-light">
            Votre site web est la vitrine virtuelle et le hub central de votre marque. 
            Chez Kroma, nous concevons des sites internet modernes, rapides, sécurisés 
            et sur-mesure pour engager votre audience et booster votre croissance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <NavLink
              to="/personnalisation"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-kroma-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-kroma-400 hover:-translate-y-0.5 active:scale-98"
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

        {/* WebCrea Displayed On the Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="z-10 flex items-center justify-center overflow-visible"
        >
          <WebCrea />
        </motion.div>
      </section>

      {/* 2. Ce qu'est un site web & Pourquoi il est important */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Ce qu'est un site web */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl border border-white/10 bg-white/2 p-8 md:p-10 overflow-hidden"
          >
            {/* Hover light glow */}
            <div className="absolute inset-0 bg-radial from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 mb-6">
              <Lightbulb className="h-6 w-6 text-kroma-400" />
            </div>

            <h2 className="text-3xl font-extrabold mb-4">Ce qu'est un site web</h2>
            <p className="text-white/60 leading-relaxed font-light">
              Un site web est le pilier central de votre écosystème numérique. C'est un espace
              interactif, accessible dans le monde entier, conçu pour présenter vos solutions,
              engager vos visiteurs et asseoir votre expertise digitale.
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
            <div className="absolute inset-0 bg-radial from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 mb-6">
              <Award className="h-6 w-6 text-kroma-400" />
            </div>

            <h2 className="text-3xl font-extrabold mb-4">Pourquoi il est important</h2>
            <p className="text-white/60 leading-relaxed font-light">
              Dans un monde hyper-connecté, votre site web valide votre légitimité. Il agit
              comme votre meilleur commercial disponible 24h/24, capable de capter, éduquer et
              convertir des prospects froids en clients fidélisés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Le processus de création */}
      <section id="processus" className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="mb-16 text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-kroma-400 mb-3">
            Notre Méthodologie
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Le processus de création Kroma
          </h2>
          <p className="text-white/50 mt-4 max-w-xl font-light">
            Nous allions rigueur technique et design d'exception pour bâtir des plateformes web durables et performantes.
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
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-cyan-300 transition-colors" />
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-kroma-400 transition-colors group"
          >
            Lancer un projet similaire
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        {/* Portfolio Showcase Infinite Marquee */}
        <div className="w-full relative kroma-marquee overflow-hidden py-4">
          <div className="flex gap-8 w-max kroma-marquee-track pl-6">
            {[...portfolioWeb, ...portfolioWeb].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-white/10 bg-white/15 overflow-hidden flex flex-col justify-between w-[320px] md:w-[450px] shrink-0"
              >
                {/* Image Frame */}
                <div className="relative h-48 md:h-60 w-full flex items-center justify-center bg-slate-950/80 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-white/2 to-transparent pointer-events-none" />

                  {/* Screenshot Displayed */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
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
                  <span className="text-xs font-bold uppercase tracking-widest text-kroma-400">
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
            Un site web professionnel est un investissement hautement stratégique pour votre croissance.
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600/20 mb-6 group-hover:bg-kroma-600/30 transition-colors">
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
          className="relative rounded-2xl border border-white/20 bg-radial from-kroma-500 from-10% to-kroma-700 to-70% p-8 md:p-14 text-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80  blur-[80px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto">
            Prêt à donner une dimension supérieure à votre présence en ligne ?
          </h2>
          <p className="text-white/60 mt-4 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Donnez vie à vos ambitions digitales. Collaborons pour concevoir la plateforme web qui portera vos projets et convertira vos visiteurs.
          </p>

          <NavLink
            to="/personnalisation"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-kroma-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:bg-kroma-400 hover:-translate-y-0.5"
          >
            Commencer mon projet
            <ArrowRight className="w-5 h-5" />
          </NavLink>
        </motion.div>
      </section>
    </main>
  );
}