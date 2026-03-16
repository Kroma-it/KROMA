import ClientForm from "../components/ClientForm"
import Feedback from "../components/FeedBack"

function Clients() {
  // [{name: 'React', category: 'front', description: 'A JavaScript library for building user interfaces'}]
const feeds = [
    {
        stars: 5,
        feedback : "Le flyer est propre ca respecte assez les spécifications/indications que je t’ai donné pour la réalisation. Aussi les informations sont bien disposées et suffisamment lisible. Ça aurait pu être meilleur avec un plus grand délai pour la livraison mais ça a largement fait l’affaire.",
        img : "public/assets/2.jpg",
        name : "M. SIAKAM Krixian",
        poste: 'Fondateur des "studios_underscore"'
    },
    {
      stars: 4,
      feedback : "Je trouve le concept très innovant, j'ai déjà eu à demander l'un de leur service et j'ai été très satisfait par une équipe dynamique, qui m'a aidé pour une visibilité iconique et désigner mon face de mon business",
      img : "public/assets/2.jpg",
      name : "M. FOAPA Gianny",
      poste : "Fondateur de E-Concept"
    }
]

  return (
    <>
      <ClientForm />
      <Feedback feeds={feeds}/>
    </>
  )
}

export default Clients
