import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Lock, Mail, X } from "lucide-react";

type LoginProps = {
    onClose: () => void;
};

export default function Login({ onClose }: LoginProps) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/35 backdrop-blur-md px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
        >
            <section className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/20 bg-white/4 p-6 text-white shadow-2xl shadow-black sm:p-8">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fermer la page de connexion"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="mb-8 pr-10">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">Connexion</p>
                    <h2 id="login-title" className="text-3xl font-bold leading-tight sm:text-4xl">
                        Ravi de vous revoir
                    </h2>
                </div>

                <form className="space-y-5">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-white/80">Adresse mail</span>
                        <div className="flex h-13 items-center gap-3 rounded-2xl border border-white/15 bg-black/25 px-4 focus-within:border-fuchsia-400">
                            <Mail className="h-5 w-5 text-fuchsia-300" />
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="vous@exemple.com"
                                className="h-full w-full bg-transparent text-white outline-none placeholder:text-white/40"
                            />
                        </div>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-white/80">Mot de passe</span>
                        <div className="flex h-13 items-center gap-3 rounded-2xl border border-white/15 bg-black/25 px-4 focus-within:border-fuchsia-400">
                            <Lock className="h-5 w-5 text-fuchsia-300" />
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                placeholder="Votre mot de passe"
                                className="h-full w-full bg-transparent text-white outline-none placeholder:text-white/40"
                            />
                        </div>
                    </label>

                    <button
                        type="submit"
                        className="h-13 w-full rounded-2xl bg-fuchsia-600/70 font-bold text-white shadow-lg shadow-fuchsia-950/40 transition hover:bg-fuchsia-700 active:scale-[0.98]"
                    >
                        Se connecter
                    </button>
                </form>

                <div className="my-6 flex items-center gap-3 text-sm text-white/50">
                    <span className="h-px flex-1 bg-white/15"></span>
                    <span>ou continuer avec</span>
                    <span className="h-px flex-1 bg-white/15"></span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        type="button"
                        className="flex h-12 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 font-semibold text-white transition hover:bg-white/20 active:scale-[0.98]"
                    >
                        <FontAwesomeIcon icon={faGoogle} className="h-5 w-5" />
                        Google
                    </button>
                    <button
                        type="button"
                        className="flex h-12 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 font-semibold text-white transition hover:bg-white/20 active:scale-[0.98]"
                    >
                        <FontAwesomeIcon icon={faApple} className="h-5 w-5" />
                        Apple
                    </button>
                </div>
            </section>
        </div>
    );
}
