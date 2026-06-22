import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import GraphicsCrea from "../components/GraphicsCrea";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CheckCircle2,
  ClipboardList,
  Eye,
  Images,
  Layers3,
  Megaphone,
  Palette,
  PenTool,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
};

type VisualExample = {
  title: string;
  tag: string;
  desc: string;
  image: string;
};

type Benefit = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function ServiceGraphics() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Brief & objectifs",
      desc: "Nous clarifions le message, la cible, le canal de diffusion et l'action attendue avant toute creation.",
      icon: ClipboardList,
      color: "from-cyan-500/30 to-blue-500/5",
    },
    {
      num: "02",
      title: "Direction visuelle",
      desc: "Nous definissons les couleurs, les references, les compositions et l'ambiance adaptee a votre marque.",
      icon: Palette,
      color: "from-blue-500/30 to-indigo-500/5",
    },
    {
      num: "03",
      title: "Creation graphique",
      desc: "Nous concevons des supports visuels clairs, attractifs et coherents avec votre univers.",
      icon: Brush,
      color: "from-indigo-500/30 to-fuchsia-500/5",
    },
    {
      num: "04",
      title: "Ajustements",
      desc: "Nous affinons les textes, les hierarchies, les formats et les details pour maximiser l'impact.",
      icon: Wand2,
      color: "from-fuchsia-500/30 to-pink-500/5",
    },
    {
      num: "05",
      title: "Livraison multi-formats",
      desc: "Vous recevez des fichiers prets a publier, imprimer ou integrer sur vos plateformes.",
      icon: CheckCircle2,
      color: "from-pink-500/30 to-rose-500/5",
    },
  ];

  const visualExamples: VisualExample[] = [
    {
      title: "Affiche evenementielle",
      tag: "Print / Reseaux sociaux",
      desc: "Un support visuel pense pour annoncer, attirer et donner envie de participer.",
      image: "/assets/visuels/affiche1%20copy.webp",
    },
    {
      title: "Visuel de campagne",
      tag: "Communication digitale",
      desc: "Une composition forte pour porter un message promotionnel de maniere memorable.",
      image: "/assets/visuels/surpriseEvent%20noel%20copy.webp",
    },
    {
      title: "Creation social media",
      tag: "Instagram / Facebook",
      desc: "Un format adapte aux plateformes sociales, lisible rapidement et facile a partager.",
      image: "/assets/visuels/Artboard%202.webp",
    },
    {
      title: "Support de marque",
      tag: "Presentation / Publication",
      desc: "Un visuel coherent avec votre positionnement pour renforcer votre image professionnelle.",
      image: "/assets/visuels/1.webp",
    },
  ];

  const benefits: Benefit[] = [
    {
      title: "Message plus lisible",
      desc: "Vos offres, annonces et informations deviennent plus faciles a comprendre au premier regard.",
      icon: Eye,
    },
    {
      title: "Image plus professionnelle",
      desc: "Des supports visuels soignes donnent une impression de serieux et renforcent la confiance.",
      icon: BadgeCheck,
    },
    {
      title: "Meilleure conversion",
      desc: "Une creation bien structuree guide l'attention vers l'action que vous voulez obtenir.",
      icon: Target,
    },
    {
      title: "Presence coherente",
      desc: "Votre communication reste reconnaissable sur les reseaux, les impressions et les campagnes.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen mt-20 text-white overflow-hidden pb-16 selection:bg-fuchsia-500/30 selection:text-white">
      <Helmet>
        <title>Création de supports visuels professionnels | Kroma</title>
        <meta
          name="description"
          content="Création de supports visuels professionnels pour les réseaux sociaux, campagnes, affiches et communications de marque."
        />
      </Helmet>

      <section className="relative pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="absolute top-16 left-4 h-96 w-96 rounded-full bg-fuchsia-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-6 right-10 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6 md:space-y-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-900/10 px-4 py-2 text-sm font-semibold text-fuchsia-300">
            <Images className="h-4 w-4" />
            Service de création graphique
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Supports visuels <br />
            <span className="bg-linear-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              professionnels
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70 font-light">
            Vos supports visuels donnent forme à vos messages. Chez Kroma, nous créons
            des affiches, visuels réseaux sociaux, bannières et supports de campagne
            capables d'attirer l'attention et de servir vos objectifs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <NavLink
              to="/personnalisation"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-kroma-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-fuchsia-600 hover:-translate-y-0.5 active:scale-98"
            >
              <span>Demander un visuel</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </NavLink>

            <a
              href="#processus"
              className="flex w-full sm:w-auto items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              Voir le processus
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="z-10 flex items-center justify-center overflow-visible"
        >
          <GraphicsCrea />
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto border-t border-white/5 px-6 py-20 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-8 md:p-10"
          >
            <div className="absolute inset-0 rounded-3xl bg-radial from-fuchsia-600/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10">
                <PenTool className="h-6 w-6 text-kroma-400" />
              </div>
              <h2 className="mb-4 text-3xl font-extrabold">
                Ce que sont les supports visuels
              </h2>
              <p className="text-white/60 leading-relaxed font-light">
                Les supports visuels sont les créations graphiques qui portent vos
                messages : affiches, flyers, publications, bannières, présentations et
                visuels de campagne. Ils transforment une idée en communication claire,
                attractive et mémorable.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-8 md:p-10"
          >
            <div className="absolute inset-0 rounded-3xl bg-radial from-cyan-600/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-kroma-300/20">
                <Megaphone className="h-6 w-6 text-kroma-400" />
              </div>
              <h2 className="mb-4 text-3xl font-extrabold">
                Pourquoi ils sont importants
              </h2>
              <p className="text-white/60 leading-relaxed font-light">
                Les supports visuels captent l'attention, structurent l'information et
                donnent une image plus professionnelle à votre entreprise. Bien conçus,
                ils aident votre audience à comprendre, retenir et passer à l'action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="processus" className="relative z-10 max-w-7xl mx-auto border-t border-white/5 px-6 py-20 md:px-12 lg:px-24">
        <div className="mb-16 text-center md:text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-400">
            Notre méthode
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Le processus de création
          </h2>
          <p className="mt-4 max-w-xl text-white/50 font-light">
            Chaque support visuel est pensé pour être beau, lisible et utile à votre
            communication.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-slate-950/40 p-6 transition-all duration-300 hover:border-white/15"
              >
                <div className={`absolute left-0 right-0 top-0 h-0.5 rounded-t-2xl bg-linear-to-r ${step.color}`} />
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl font-black text-white/10 transition-colors group-hover:text-white/20">
                    {step.num}
                  </span>
                  <Icon className="h-5 w-5 text-white/40 transition-colors group-hover:text-fuchsia-300" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-xs leading-relaxed text-white/50 font-light">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative py-20 z-10 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-kroma-400">
              Réalisations
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Des exemples de réalisations
            </h2>
          </div>
          <NavLink
            to="/personnalisation"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-300 transition-colors hover:text-fuchsia-200"
          >
            Lancer un projet similaire
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </NavLink>
        </div>

        {/* Portfolio Showcase Infinite Marquee */}
        <div className="w-full relative kroma-marquee overflow-hidden py-4">
          <div className="flex gap-8 w-max kroma-marquee-track pl-6">
            {[...visualExamples, ...visualExamples].map((item, idx) => (
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
                    alt={item.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Inner ambient glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, rgba(217,70,239,0.15) 0%, transparent 65%)",
                    }}
                  />
                </div>

                {/* Text Area */}
                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">
                    {item.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold mt-2 mb-3 text-white">
                    {item.title}
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

      <section className="relative z-10 max-w-7xl mx-auto border-t border-white/5 px-6 py-20 md:px-12 lg:px-24">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-kroma-400">
            Impact entreprise
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Les bénéfices pour l'entreprise
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50 font-light">
            Des supports visuels professionnels rendent votre communication plus claire,
            plus belle et plus efficace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-slate-950/20 p-6 transition-all duration-300 hover:border-kroma-600/40 md:p-8"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-kroma-600/20">
                  <Icon className="h-5 w-5 text-kroma-400" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-white/50 font-light">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-radial from-kroma-500 from-10% to-kroma-700 to-50% p-8 text-center md:p-14"
        >
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative">
            <Layers3 className="mx-auto mb-5 h-10 w-10 text-white/80" />
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Prêt à créer des supports visuels qui marquent les esprits ?
            </h2>
            <p className="mx-auto mt-4 mb-8 max-w-xl text-white/60 font-light leading-relaxed">
              Confiez-nous vos idées, vos offres ou vos campagnes. Nous les transformons
              en créations prêtes à diffuser.
            </p>
            <NavLink
              to="/personnalisation"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-kroma-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-600"
            >
              Commencer mon projet
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
