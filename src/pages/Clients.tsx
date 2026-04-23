import ClientForm from "../components/ClientForm"
import Feedback from "../components/FeedBack"
import Footer from "../components/Footer"

function Clients() {
  // [{name: 'React', category: 'front', description: 'A JavaScript library for building user interfaces'}]
const feeds = [
    {
        stars: 5,
        feedback : "Le flyer est propre ca respecte assez les spécifications/indications que je t’ai donné pour la réalisation. Aussi les informations sont bien disposées et suffisamment lisible. Ça aurait pu être meilleur avec un plus grand délai pour la livraison mais ça a largement fait l’affaire.",
        img : "/assets/2.jpg",
        name : "M. SIAKAM Krixian",
        poste: 'Fondateur des "studios_underscore"'
    },
    {
      stars: 4,
      feedback : "Je trouve le concept très innovant, j'ai déjà eu à demander l'un de leur service et j'ai été très satisfait par une équipe dynamique, qui m'a aidé pour une visibilité iconique et désigner mon face de mon business",
      img : "/assets/2.jpg",
      name : "M. FOAPA Gianny",
      poste : "Fondateur de E-Concept"
    }
]

  return (
    <div className="relative">
      {/* Background animated blobs - page level, flows behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -right-20 md:-right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-fuchsia-600/40 rounded-full blur-[120px] md:blur-[180px] animate-pulse"></div>
        <div className="absolute top-[10%] -left-20 md:-left-40 w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-indigo-600/40 rounded-full blur-[120px] md:blur-[180px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[60%] right-0 md:-right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-violet-600/40 rounded-full blur-[120px] md:blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <ClientForm />
        <Feedback feeds={feeds}/>
      </div>
    </div>
  )
}

export default Clients
