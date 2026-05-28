import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Handshake,
  Layers3,
  Palette,
  PenTool,
  Quote,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Landing from "../components/Landing";

const services = [
  {
    title: "Identite visuelle",
    description:
      "Logo, charte graphique, palette, typographies et supports coherents pour poser une marque solide.",
    icon: Palette,
  },
  {
    title: "Creation graphique",
    description:
      "Affiches, flyers, cartes, banniere et contenus social media prets a publier pour vos campagnes.",
    icon: PenTool,
  },
  {
    title: "Experiences web",
    description:
      "Sites vitrines, portfolios et interfaces responsive pour transformer votre presence en opportunites.",
    icon: Code2,
  },
];

const stats = [
  { value: "15+", label: "clients accompagnes" },
  { value: "3", label: "piliers: marque, design, web" },
  { value: "100%", label: "solutions adaptees" },
];

const process = [
  {
    title: "Brief",
    text: "On clarifie votre objectif, votre public, votre ton et les livrables attendus.",
  },
  {
    title: "Direction",
    text: "On construit une piste creative lisible avec une vraie logique visuelle.",
  },
  {
    title: "Livraison",
    text: "Vous recevez des fichiers propres, exploitables et adaptes a vos usages.",
  },
];

const works = [
  {
    image: "/assets/slide1.png",
    title: "Campagne visuelle",
    category: "Motion",
  },
  {
    image: "/assets/slide3.png",
    title: "Interface digitale",
    category: "Web",
  },
  {
    image: "/assets/slide5.png",
    title: "Identite de marque",
    category: "Branding",
  },
];

const feedbacks = [
  {
    stars: 5,
    feedback:
      "Le flyer est propre, il respecte les specifications que j'avais donnees pour la realisation. Les informations sont bien disposees et suffisamment lisibles.",
    img: "/assets/2.jpg",
    name: "M. SIAKAM Krixian",
    poste: 'Fondateur des "studios_underscore"',
  },
  {
    stars: 4,
    feedback:
      "Je trouve le concept tres innovant. J'ai deja demande l'un de leurs services et j'ai ete tres satisfait par une equipe dynamique.",
    img: "/assets/2.jpg",
    name: "M. FOAPA Gianny",
    poste: "Fondateur de E-Concept",
  },
  {
    stars: 5,
    feedback:
      "Kroma a su donner une image plus claire et professionnelle a notre projet, avec une livraison propre et facile a exploiter.",
    img: "/assets/2.jpg",
    name: "Client Kroma",
    poste: "Projet accompagne",
  },
];

const partners = [
  { name: "LC Home", logo: "/assets/logos/LC home-100.jpg" },
  { name: "LC Food", logo: "/assets/logos/LC food-100.jpg" },
  { name: "Kroma Partner", logo: "/assets/logos/logo3.jpg" },
  { name: "Kroma Studio", logo: "/assets/logos/logoNomVertical.jpg" },
];

const landing = {
  icon: Palette,
  title: "Creative Design Studio",
  description: "L'art de sculpter vos idees en experiences numeriques",
  cta1: "Commencer un projet",
  cta1Link: "/personnalisation",
  cta2: "Voir le portfolio",
  cta2Link: "/realisations",
};

function Home() {
  const scrollingFeedbacks = [...feedbacks, ...feedbacks];
  const scrollingPartners = [...partners, ...partners];

  return (
    <main className="overflow-hidden bg-kroma-600 text-white">
      <Landing
        icon={landing.icon}
        cta1={landing.cta1}
        cta1Link={landing.cta1Link}
        cta2={landing.cta2}
        cta2Link={landing.cta2Link}
      />

      {/** première section qui parle de Kroma*/}

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-400/30 bg-white/5 px-4 py-2 text-sm font-semibold text-fuchsia-200">
              <Sparkles className="h-4 w-4" />
              Studio creatif digital
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Une image plus claire, plus forte, plus facile à reconnaitre.
            </h2>
          </div>

          {/**petites stats de Kroma */}

          <div className="space-y-8">
            <p className="text-base leading-8 text-white/65 md:text-lg">
              Kroma aide les entrepreneurs, marques et projets ambitieux à transformer
              leurs idees en identites visuelles, supports de communication et experiences
              web qui inspirent confiance.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/15 pl-5">
                  <p className="text-3xl font-black md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-5 text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/**service de Kroma */}


        <div className="mx-auto max-w-7xl">

          {/**titre et CTA */}

          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Ce que nous faisons
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                Les essentiels pour construire une presence professionnelle.
              </h2>
            </div>

            <NavLink
              to="/tarification"
              className="inline-flex w-fit items-center gap-3 rounded-xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-fuchsia-400 hover:bg-white/5"
            >
              Voir les tarifs
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>

          {/**box des services */}
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group border rounded-3xl border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/6"
                >
                  <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-fuchsia-500/10`}>
                    <Icon className={`h-7 w-7 text-fuchsia-300`} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/55">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Methode
            </p>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Un cadre simple pour avancer vite sans perdre la qualite.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/60">
              Chaque projet suit une logique claire: comprendre, creer, ajuster et livrer.
              Vous savez ou on va, pourquoi on y va, et ce que vous recevez.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div key={step.title} className="flex gap-5 border border-white/10 bg-kroma-600/70 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-kroma-600">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-white/60">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                Realisations
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                Un apercu des univers que Kroma peut construire.
              </h2>
            </div>

            <NavLink
              to="/realisations"
              className="inline-flex w-fit items-center gap-3 rounded-xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:bg-white/5"
            >
              Explorer le portfolio
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {works.map((work) => (
              <NavLink
                key={work.image}
                to="/realisations"
                className="group block overflow-hidden border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-white/25"
              >
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
                    {work.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{work.title}</h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Feedbacks clients
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                Des retours concrets de projets deja accompagnes.
              </h2>
            </div>

            <NavLink
              to="/clients"
              className="inline-flex w-fit items-center gap-3 rounded-xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-fuchsia-400 hover:bg-white/5"
            >
              Voir les clients
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>
        </div>

        <div className="kroma-marquee overflow-hidden">
          <div className="kroma-marquee-track flex w-max gap-5 px-6 md:px-12 lg:px-24">
            {scrollingFeedbacks.map((feed, index) => (
              <article
                key={`${feed.name}-${index}`}
                className="relative w-[19rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-kroma-500/70 p-6 shadow-2xl shadow-black/20 md:w-[24rem]"
              >
                <Quote className="absolute -right-4 -top-6 h-28 w-28 rotate-12 text-fuchsia-400/10" />
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: feed.stars }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-5 w-5 fill-fuchsia-400 text-fuchsia-400"
                      strokeWidth={1.4}
                    />
                  ))}
                </div>
                <p className="min-h-32 text-sm leading-7 text-white/70 md:text-base">
                  "{feed.feedback}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img
                    src={feed.img}
                    alt={feed.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-white">{feed.name}</h3>
                    <p className="text-sm text-white/45">{feed.poste}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                <Handshake className="h-4 w-4" />
                Partenaires
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                Ils construisent aussi leur image avec Kroma.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/55">
              Marques, concepts et projets locaux avancent avec une identite plus claire,
              plus coherente et plus visible.
            </p>
          </div>

          <div className="kroma-marquee rounded-2xl border border-white/10 bg-white/[0.035] py-5">
            <div className="kroma-marquee-track kroma-marquee-track-slow flex w-max items-center gap-5 px-5">
              {scrollingPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white px-5 transition hover:-translate-y-1 hover:border-fuchsia-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-36 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 border border-white/10 bg-white/4.5 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-white/65">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                Brief clair
              </span>
              <span className="inline-flex items-center gap-2">
                <Layers3 className="h-4 w-4 text-cyan-300" />
                Fichiers exploitables
              </span>
              <span className="inline-flex items-center gap-2">
                <Wand2 className="h-4 w-4 text-fuchsia-300" />
                Creation sur mesure
              </span>
            </div>
            <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Pret a donner une vraie forme a votre prochaine idee ?
            </h2>
          </div>

          <NavLink
            to="/personnalisation"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-fuchsia-600 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-fuchsia-500"
          >
            Demander un devis
            <ArrowRight className="h-5 w-5" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default Home;
