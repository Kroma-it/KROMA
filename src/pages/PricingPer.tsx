import ServiceClient from "../components/ServiceClient"

export default function Service(){
    const pricing = [
        {
            Img : "Compass",
            title : "IDENTITE VISUELLE",
            subtitle : "Conception de logo",
            content : "Créer une identité unique qui marque les esprits dès le premier regard"
        },
        {
            Img : "Palette",
            title :"CHARTE GRAPHIQUE",
            subtitle : "Charte graphique",
            content : "Cohérence visuelle"
        },
        {
            Img :"Layer2",
            title :"MARKETING",
            subtitle : "Supports visuels",
            content : "Impact garanti"
        },
        {
            Img : "Scroll",
            title : "PRINT",
            subtitle : "Papeterie",
            content : "Elégance tactile"
        },
        {
            Img : "Monitor",
            title : "PROJECTION",
            subtitle : "Mockups",
            content : "Rendu réaliste"
        }
    ]
    return(
        <>
            <div className="p-20">
                <h1 className="text-white font-bold text-7xl">Donnez vie à votre <span className="text-fuchsia-500">vision</span></h1>
                <h3 className="text-white font-lg w-3/5 text-2xl">
                    Sélectionnez les services artistiques dont vous avez besoin pour propulser votre marque au niveau supérieur avec l'experrtise Kroma
                </h3>
            </div>
            <div className="px-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {pricing.map((item, index) => (
                    <ServiceClient key={index} item={item} />
                ))}
            </div>
        </>
    )
}