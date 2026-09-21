import { useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X, ZoomIn, ZoomOut, Check } from "lucide-react"

type AvatarCropperProps = {
    src: string
    onCancel: () => void
    onConfirm: (croppedDataUrl: string) => void
}

const BOX = 320 // zone d'édition visible (px)
const CROP = 256 // diamètre du cercle de sélection (px)
const OUTPUT = 512 // taille finale de l'image enregistrée (px)
const MAX_ZOOM = 3

export default function AvatarCropper({ src, onCancel, onConfirm }: AvatarCropperProps) {
    const imgRef = useRef<HTMLImageElement | null>(null)
    const dragRef = useRef<{ x: number; y: number } | null>(null)
    const [natural, setNatural] = useState<{ w: number; h: number } | null>(null)
    const [zoom, setZoom] = useState(1)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    // L'image couvre toujours entièrement le cercle, même à zoom 1
    const baseScale = natural ? Math.max(CROP / natural.w, CROP / natural.h) : 1
    const scale = baseScale * zoom

    const clampOffset = (x: number, y: number, s: number) => {
        if (!natural) return { x: 0, y: 0 }
        const maxX = Math.max(0, (natural.w * s - CROP) / 2)
        const maxY = Math.max(0, (natural.h * s - CROP) / 2)
        return {
            x: Math.min(maxX, Math.max(-maxX, x)),
            y: Math.min(maxY, Math.max(-maxY, y)),
        }
    }

    const handleZoom = (value: number) => {
        setZoom(value)
        setOffset((o) => clampOffset(o.x, o.y, baseScale * value))
    }

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        dragRef.current = { x: e.clientX, y: e.clientY }
    }

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragRef.current) return
        const dx = e.clientX - dragRef.current.x
        const dy = e.clientY - dragRef.current.y
        dragRef.current = { x: e.clientX, y: e.clientY }
        setOffset((o) => clampOffset(o.x + dx, o.y + dy, scale))
    }

    const handlePointerUp = () => {
        dragRef.current = null
    }

    const handleConfirm = () => {
        const img = imgRef.current
        if (!img || !natural) return

        // Zone de l'image d'origine (en pixels réels) qui se trouve dans le cercle
        const sw = CROP / scale
        const sx = natural.w / 2 + (-CROP / 2 - offset.x) / scale
        const sy = natural.h / 2 + (-CROP / 2 - offset.y) / scale

        const canvas = document.createElement("canvas")
        canvas.width = OUTPUT
        canvas.height = OUTPUT
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        ctx.imageSmoothingQuality = "high"
        ctx.drawImage(img, sx, sy, sw, sw, 0, 0, OUTPUT, OUTPUT)

        onConfirm(canvas.toDataURL("image/webp", 0.9))
    }

    // Portail : le parent a un backdrop-filter qui piégerait un élément "fixed"
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-6 text-white shadow-2xl md:p-8">
                <button
                    type="button"
                    onClick={onCancel}
                    aria-label="Fermer"
                    className="absolute right-5 top-5 cursor-pointer text-white/60 hover:text-white"
                >
                    <X size={20} />
                </button>

                <h3 className="mb-1 text-2xl font-black">Recadrer la photo</h3>
                <p className="mb-5 text-sm text-white/50">
                    Glissez l'image pour choisir la partie à garder.
                </p>

                <div
                    className="relative mx-auto touch-none select-none overflow-hidden rounded-2xl bg-black"
                    style={{ width: BOX, height: BOX, maxWidth: "100%" }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <img
                        ref={imgRef}
                        src={src}
                        alt="Image à recadrer"
                        draggable={false}
                        onLoad={(e) => {
                            const el = e.currentTarget
                            setNatural({ w: el.naturalWidth, h: el.naturalHeight })
                        }}
                        className="pointer-events-none absolute left-1/2 top-1/2 max-w-none cursor-grab"
                        style={
                            natural
                                ? {
                                      width: natural.w * scale,
                                      height: natural.h * scale,
                                      transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
                                  }
                                : { opacity: 0 }
                        }
                    />
                    {/* Cercle de sélection : l'ombre assombrit tout ce qui sera coupé */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-500"
                        style={{
                            width: CROP,
                            height: CROP,
                            boxShadow: "0 0 0 9999px rgba(0,0,0,0.65)",
                        }}
                    />
                </div>

                <div className="mx-auto mt-5 flex max-w-xs items-center gap-3">
                    <ZoomOut size={18} className="shrink-0 text-white/50" />
                    <input
                        type="range"
                        min={1}
                        max={MAX_ZOOM}
                        step={0.01}
                        value={zoom}
                        onChange={(e) => handleZoom(Number(e.target.value))}
                        aria-label="Zoom"
                        className="w-full cursor-pointer accent-fuchsia-500"
                    />
                    <ZoomIn size={18} className="shrink-0 text-white/50" />
                </div>

                <div className="mt-6 flex gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 cursor-pointer rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold transition-colors hover:bg-white/10"
                    >
                        Annuler
                    </button>
                    <button
                        type="button"
                        onClick={handleConfirm}
                        disabled={!natural}
                        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-fuchsia-600 py-3 text-sm font-bold text-white transition-colors hover:bg-fuchsia-500 disabled:opacity-50"
                    >
                        Valider
                        <Check size={16} />
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}
