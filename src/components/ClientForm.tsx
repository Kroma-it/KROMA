export default function ClientForm() {
    // Glassmorphism Card
    return (
        <div className="relative w-full max-w-lg mx-auto min-h-[600px] flex flex-col items-center justify-center p-8 mt-10">
            {/* Background animated blobs container - Sticky so it follows scrolling */}
            
                <div className="absolute top-40 right-100 w-3xl h-170 bg-fuchsia-600/80 rounded-full mix-blend-screen blur-3xl animate-morph"></div>
                <div className="absolute top-10 left- w-3xl h-170 bg-indigo-600/80 rounded-full mix-blend-screen blur-xl animate-morph" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-40 -right-120 w-3xl h-170 bg-violet-600/80 rounded-full mix-blend-screen blur-3xl animate-morph" style={{ animationDelay: '2s' }}></div>
        

            {/* Header Text */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-30 mb-8">
                <p className="text-fuchsia-500 bg-fuchsia-900/40 p-1 pl-3 pr-3 border border-fuchsia-500/30 rounded-full text-2xl">Feedback Portal</p>
                <p className="text-white text-4xl w-5xl text-center font-normal">Votre vision nourrit notre créativité. Aidez-nous à nous améliorer et à façonner l'avenir du design digital.</p>
            </div>

            {/* Form Container */}
            <div className="relative z-10 w-3xl h-200 border border-fuchsia-500 bg-[#25182d]/70 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                <form className="flex flex-col gap-12">
                    <div className="flex flex-row mt-3 gap-5">
                        <div className="flex flex-col w-1/2 gap-3">
                            <label htmlFor="nom" className="text-white text-xl font-medium ml-1">Nom</label>
                            <input
                                id="nom"
                                type="text"
                                placeholder="NOUMECHI"
                                required
                                className="w-full h-12 bg-white/5 border border-white/10 text-xl rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                            />
                        </div>
                        <div className="flex flex-col w-1/2 gap-3">
                            <label htmlFor="prenom" className="text-white text-xl font-medium ml-1">Prénom</label>
                            <input
                                id="prenom"
                                type="text"
                                placeholder="Johnatan"
                                required
                                className="w-full h-12 bg-white/5 text-xl border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-white text-xl font-medium ml-1">Adresse email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="johnatan@gmail.com"
                            required
                            className="w-full h-12 bg-white/5 text-xl border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-white text-xl font-medium ml-1">Compagnie</label>
                        <input
                            id="company"
                            type="text"
                            placeholder="Kroma"
                            required
                            className="w-full h-12 text-xl bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-white text-xl font-medium ml-1">Message</label>
                        <textarea
                            id="message"
                            placeholder="Parlez nous de votre expérience avec Kroma"
                            required
                            className="w-full h-45 text-xl bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                    <button className="w-sm text-2xl h-15 flex items-center justify-center mx-auto transition-transform duration-200 hover:scale-102 bg-fuchsia-500 text-white font-light rounded-[10px] px-4 py-4 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(192,38,211,0.4)] cursor-pointer">
                        Envoyer le message <img src="/assets/envoi.png" className="h-7 ml-5" alt="" />
                    </button>
                </form>
            </div>
        </div>
    );
}

