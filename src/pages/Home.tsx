import Landing from "../components/Landing"
import ServiceBloc from "../components/ServiceBloc"
import Footer from "../components/Footer"
function Home() {
  // [{name: 'React', category: 'front', description: 'A JavaScript library for building user interfaces'}]
  const landing = [
    {
      title: "L'art de sculpter vos idées en expériences numériques",
      subtitle: "Creative design studio",
      button: "Découvrir notre univers",
      image: "/assets/Landing.mp4",
      button1: "Demander un devis"
    }
  ]
  const tab = landing[0].title.split(" ")

  return (
    <>
    
      <Landing landing = {landing} />
      <Footer />
    </>
  )
}

export default Home
