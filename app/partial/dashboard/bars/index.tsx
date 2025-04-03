import { HomeIcon, PodcastIcon, Settings } from "lucide-react"
import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { MdPayment } from "react-icons/md"



const MainDashboardSidebar = () => {
    const sidebarItems = [
     
        {
            icon: HomeIcon,
            text: 'home',
            link: '/dashboard'
        },

        {
            icon: MdPayment,
            text: 'payments',
            link: '/dashboard/payment_view'
        },

        {
            icon: PodcastIcon,
            text: 'posts',
            link: '/dashboard/post_view'
        },

        {
            icon: CgProfile,
            text: 'profile',
            link: '/dashboard/profile_view'
        },

        {
            icon: HomeIcon,
            text: 'Wallet',
            link: '/dashboard/wallet'
        },

        {
            icon: Settings,
            text: 'settings',
            link: '/dashboard/setting_view'
        }
    ]
    return (
        <div className="bg-white/40 p-4 hidden md:flex flex-col gap-5 border-r-2">
                <div className="font-bold text-2xl text-myblue">
                    Dashboard
                </div>
            <div className="flex flex-col gap-2 text-gray-500">
                {
                    sidebarItems.map(({ text, link }, i) => (
                        <div className="" key={i}>
                            <Link href={link}>{text}</Link>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default MainDashboardSidebar