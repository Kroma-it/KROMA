import { useState } from "react"
import {SendHorizonal, Undo, Star} from "lucide-react"

export default function ClientForm() {
    const [rating, setRating] = useState(0)
    // Glassmorphism Card
    return (
        <div className="relative w-full mx-auto min-h-150 flex flex-col items-center justify-center px-4 md:p-8 mt-10">

            {/* Header Text */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-20 md:mt-30 mb-8 px-4">
                <p className="flex items-center justify-center gap-2 text-base md:text-xl text-fuchsia-500 font-medium bg-fuchsia-900/30 px-5 py-2 border border-fuchsia-500/30 rounded-full">
                    <Undo className="w-5 h-5" />
                    FeedBack Portal
                </p>
                <p className="text-white text-xl md:text-4xl w-full md:w-5xl text-center font-normal">Votre vision nourrit notre créativité. Aidez-nous à nous améliorer et à façonner l'avenir du design digital.</p>
            </div>

            {/* Form Container */}
            <div className="relative z-10 w-full md:w-3xl h-auto border border-purple-900 bg-[#25182d]/70 rounded-3xl p-4 md:p-6 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                <form className="flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col md:flex-row mt-3 gap-5">
                        <div className="flex flex-col w-full md:w-1/2 gap-3">
                            <label htmlFor="nom" className="text-white text-lg md:text-xl font-medium ml-1">Nom</label>
                            <input
                                id="nom"
                                type="text"
                                placeholder="NOUMECHI"
                                required
                                className="w-full h-12 bg-white/5 border border-white/10 text-xl rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                            />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 gap-3">
                            <label htmlFor="prenom" className="text-white text-lg md:text-xl font-medium ml-1">Prénom</label>
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
                        <label htmlFor="email" className="text-white text-lg md:text-xl font-medium ml-1">Adresse email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="johnatan@gmail.com"
                            required
                            className="w-full h-12 bg-white/5 text-xl border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-white text-lg md:text-xl font-medium ml-1">Compagnie</label>
                        <input
                            id="company"
                            type="text"
                            placeholder="Kroma"
                            required
                            className="w-full h-12 text-xl bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light"
                        />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white text-lg md:text-xl font-medium ml-1">Note</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="transition-all duration-200 hover:scale-110"
                                >
                                    <Star
                                        size={32}
                                        className={`${
                                            star <= rating
                                                ? "fill-purple-800 text-purple-800"
                                                : "text-gray-500"
                                        } transition-colors duration-200 cursor-pointer`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-white text-lg md:text-xl font-medium ml-1">Message</label>
                        <textarea
                            id="message"
                            placeholder="Parlez nous de votre expérience avec Kroma"
                            required
                            className="w-full h-45 text-xl bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 focus:bg-white/10 transition-all font-light resize-none"
                        />
                    </div>

                    <button className="w-full md:w-sm text-xl md:text-2xl h-15 flex items-center justify-center mx-auto transition-all duration-500 hover:scale-102 bg-purple-800 text-white font-light rounded-[10px] px-4 py-4 hover:opacity-90 cursor-pointer">
                        Envoyer le message <SendHorizonal strokeWidth={1.5} className="text-white w-8 h-8 ml-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}

