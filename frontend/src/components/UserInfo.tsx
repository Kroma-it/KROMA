import React, { useRef, useState, useEffect } from "react"
import { Building, Camera, Globe, Mail, Save, User, Loader2 } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { apiUpdateProfile } from "../utils/api"

type FieldProps = {
    label: string
    value: string
    onChange: (value: string) => void
    icon: typeof User
    type: string
    placeholder: string
    className?: string
    disabled?: boolean
}

export default function UserInfo() {
    const { user, refreshUser } = useAuth()
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("Kroma Studio")
    const [country, setCountry] = useState("France")
    const [avatar, setAvatar] = useState("/assets/2.jpg")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

    useEffect(() => {
        if (user) {
            setLastName(user.lastName || "")
            setFirstName(user.firstName || "")
            setEmail(user.email || "")
            if (user.avatarUrl) {
                setAvatar(user.avatarUrl)
            }
        }
    }, [user])

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onloadend = () => {
            setAvatar(reader.result as string)
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) {
            setStatus({ type: 'error', text: 'Vous devez être connecté pour modifier votre profil.' })
            return
        }

        setLoading(true)
        setStatus(null)

        try {
            await apiUpdateProfile({
                firstName,
                lastName,
                avatarUrl: avatar
            })
            await refreshUser()
            setStatus({ type: 'success', text: 'Votre profil a été mis à jour avec succès.' })
        } catch (err: any) {
            setStatus({ type: 'error', text: err.message || 'Erreur lors de la mise à jour.' })
        } finally {
            setLoading(false)
        }
    }

    const renderField = ({
        label,
        value,
        onChange,
        icon: Icon,
        type,
        placeholder,
        className = "",
        disabled = false,
    }: FieldProps) => (
        <div className={className}>
            <label className="mb-2 block text-xs font-bold text-zinc-300">
                {label}
            </label>
            <div className="relative flex items-center">
                <Icon className="absolute left-4 h-4 w-4 text-fuchsia-400/85 pointer-events-none" />
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="h-12 w-full rounded-2xl border border-white/5 bg-[#0f071a]/70 py-3 pl-11 pr-4 text-sm font-semibold text-white placeholder-zinc-600 transition-all duration-300 focus:border-fuchsia-500/50 focus:outline-none focus:ring-1 focus:ring-fuchsia-500/30 disabled:opacity-50"
                />
            </div>
        </div>
    )

    return (
        <section className="relative h-fit self-start overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8 lg:min-w-[780px]">
            <User
                strokeWidth={0.5}
                className="absolute -right-8 -bottom-10 -rotate-20 h-56 w-56 text-fuchsia-400/10"
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-col items-center gap-4 lg:w-56 lg:shrink-0">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt="Photo de profil"
                            className="h-40 w-40 rounded-full border-4 border-fuchsia-500/70 object-cover shadow-[0_0_35px_rgba(217,70,239,0.25)]"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            aria-label="Changer la photo de profil"
                            className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-fuchsia-700 text-white shadow-lg shadow-fuchsia-950/40 transition-all duration-300 hover:bg-fuchsia-600 active:scale-95 cursor-pointer"
                        >
                            <Camera className="h-5 w-5" />
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                        />
                    </div>

                    <div className="text-center">
                        <h2 className="text-xl font-extrabold text-white">
                            {firstName || "Utilisateur"} {lastName}
                        </h2>
                        <p className="mt-1 text-sm text-zinc-400">{company}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid flex-1 grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
                    {status && (
                        <div className={`md:col-span-2 p-4 rounded-2xl text-xs font-semibold border ${
                            status.type === 'success' 
                                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                                : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                        }`}>
                            {status.text}
                        </div>
                    )}

                    {renderField({
                        label: "Nom",
                        value: lastName,
                        onChange: setLastName,
                        icon: User,
                        type: "text",
                        placeholder: "Votre nom",
                        disabled: loading || !user,
                    })}
                    {renderField({
                        label: "Prenom",
                        value: firstName,
                        onChange: setFirstName,
                        icon: User,
                        type: "text",
                        placeholder: "Votre prenom",
                        disabled: loading || !user,
                    })}
                    {renderField({
                        label: "Adresse mail",
                        value: email,
                        onChange: setEmail,
                        icon: Mail,
                        type: "email",
                        placeholder: "vous@exemple.com",
                        className: "md:col-span-2",
                        disabled: true, // L'email ne peut pas être modifié car il sert d'identifiant unique
                    })}
                    {renderField({
                        label: "Compagnie",
                        value: company,
                        onChange: setCompany,
                        icon: Building,
                        type: "text",
                        placeholder: "Nom de votre compagnie",
                        disabled: loading || !user,
                    })}
                    {renderField({
                        label: "Pays",
                        value: country,
                        onChange: setCountry,
                        icon: Globe,
                        type: "text",
                        placeholder: "Votre pays",
                        disabled: loading || !user,
                    })}

                    <button
                        type="submit"
                        disabled={loading || !user}
                        className="md:col-span-2 mt-2 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#ab05bd] py-3.5 text-sm font-extrabold tracking-wide text-white shadow-[0_0_25px_rgba(171,5,189,0.35)] transition-all duration-300 hover:bg-[#c205d6] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                Enregistrement...
                                <Loader2 className="h-4 w-4 animate-spin" />
                            </>
                        ) : (
                            <>
                                Enregistrer les informations
                                <Save className="h-4 w-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    )
}
