export default function Morph() {
    return (
        <div className="relative w-full max-w-lg mx-auto min-h-[400px] flex items-center justify-center p-8 mt-20">
            {/* Background animated blobs */}
            <div className="absolute top-[-40px] -left-20 w-72 h-72 bg-fuchsia-600 rounded-full mix-blend-screen blur-2xl animate-morph animate-float1"></div>
            <div className="absolute top-[-60px] -right-20 w-72 h-72 bg-violet-600 rounded-full mix-blend-screen blur-2xl animate-morph animate-float2" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-0 left-16 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen blur-2xl animate-morph animate-float3" style={{ animationDelay: '4s' }}></div>

        </div>
    );
}

