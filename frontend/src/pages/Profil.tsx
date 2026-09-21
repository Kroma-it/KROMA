import UserInfo from "../components/UserInfo"
import ClientForm from "../components/ClientForm"
import ServiceHistory from "../components/ServiceHistory"
import PackHistory from "../components/PackHistory"
import FeedbackHistory from "../components/FeedbackHistory"

export default function Profil() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#0d0718]">
            {/* Ambient glow blobs */}
            <div className="fixed bottom-[10%] left-[5%] w-[400px] h-[400px] bg-linear-to-tr from-fuchsia-700 to-purple-700 rounded-full blur-[160px] opacity-25 pointer-events-none z-0"></div>
            <div className="fixed top-[20%] right-[5%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-[130px] opacity-20 pointer-events-none z-0"></div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pb-16 pt-28 sm:px-6 md:gap-6 md:pt-36 lg:px-10">
                {/* Infos + feedback : côte à côte sur grand écran, empilés sinon */}
                <div className="grid grid-cols-1 items-start gap-5 md:gap-6 xl:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]">
                    <UserInfo />
                    <ClientForm />
                </div>

                <div className="grid grid-cols-1 items-start gap-5 md:gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                    <ServiceHistory />
                    <PackHistory />
                </div>

                <FeedbackHistory />
            </div>
        </div>
    )
}
