export default function BackgroundBlobs() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden bg-[#0d0914] pointer-events-none">
            {/* 
        Tailwind v4 allows arbitrary values. We use them here for the complex keyframes 
        that aren't part of standard utility classes.
        Using arbitrary variants and properties to keep it contained without modifying global CSS.
      */}
            <style>{`
        @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes float1 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(10vw, 5vh) scale(1.1); }
            100% { transform: translate(-5vw, 15vh) scale(0.9); }
        }
        @keyframes float2 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-15vw, -10vh) scale(1.2); }
            100% { transform: translate(5vw, -5vh) scale(0.85); }
        }
        @keyframes float3 {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20vw, 20vh) scale(0.9); }
            100% { transform: translate(-10vw, 10vh) scale(1.1); }
        }
        
        .animate-blob1 { animation: morph 8s ease-in-out infinite, float1 15s ease-in-out infinite alternate; }
        .animate-blob2 { animation: morph 10s ease-in-out infinite alternate-reverse, float2 18s ease-in-out infinite alternate; }
        .animate-blob3 { animation: morph 12s ease-in-out infinite alternate, float3 20s ease-in-out infinite alternate; }
      `}</style>

            {/* Blob 1 (Purple) */}
            <div
                className="absolute w-[45vw] h-[45vw] -top-[10%] -left-[10%] mix-blend-screen blur-[90px] opacity-80 rounded-full animate-blob1"
                style={{ background: 'linear-gradient(135deg, #8b3dff 0%, #5116a9 100%)' }} />

            {/* Blob 2 (Pink/Magenta) */}
            <div
                className="absolute w-[40vw] h-[40vw] -bottom-[5%] -right-[5%] mix-blend-screen blur-[90px] opacity-80 rounded-full animate-blob2"
                style={{ background: 'linear-gradient(135deg, #ff3d8b 0%, #a91651 100%)' }} />

            {/* Blob 3 (Blue) */}
            <div
                className="absolute w-[35vw] h-[35vw] bottom-[20%] left-[20%] mix-blend-screen blur-[90px] opacity-60 rounded-full animate-blob3"
                style={{ background: 'linear-gradient(135deg, #3d8bff 0%, #1651a9 100%)' }} />
        </div>
    );
}
