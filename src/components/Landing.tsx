export default function Landing() {
    return (
     <>
     <section className="bg-[url(/assets/landingPage.png)] h-screen bg-cover bg-center ">
        <div className="w-full h-screen bg-gradient-to-t from-black bg-black/30"></div>
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className=" border border-fuchsia-400 text-[7px] text-fuchsia-500 bg-fuchsia-900/50 p-1 rounded-full w-fit mx-auto mb-4">Creative design studio</p>
            <p className="text-3xl font-bold">L'art de sculpter vos idées en</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">expériences numériques</p>
            <div>
                <button className="bg-fuchsia-500 p-1.5 cursor-pointer rounded-sm text-[6px] ">Découvrir notre univers</button>
                <button></button>
            </div>
        </div> 
     </section>
     </>
    );
}
