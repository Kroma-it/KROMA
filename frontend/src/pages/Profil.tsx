import UserInfo from "../components/UserInfo"
import ClientForm from "../components/ClientForm"
import ServiceHistory from "../components/ServiceHistory"
import PackHistory from "../components/PackHistory"
import FeedbackHistory from "../components/FeedbackHistory"

export default function Profil() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d0718]">
            {/* Ambient glow blobs */}
            <div className="fixed bottom-[10%] left-[5%] w-[400px] h-[400px] bg-linear-to-tr from-fuchsia-700 to-purple-700 rounded-full blur-[160px] opacity-25 pointer-events-none z-0"></div>
            <div className="fixed top-[20%] right-[5%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-[130px] opacity-20 pointer-events-none z-0"></div>

            <div className="z-10 flex w-full items-center flex-col gap-6 mt-40">
                {/* Two-column layout */}
                <div className="flex flex-col items-start gap-6 lg:flex-row">
                    <UserInfo />
                    <ClientForm />
                </div>

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[2fr_1fr]">
                    <ServiceHistory />
                    <PackHistory />
                </div>

                <FeedbackHistory />
            </div>
        </div>
    )
}
