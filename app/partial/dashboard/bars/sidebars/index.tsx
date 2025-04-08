'use client'
import { HomeIcon, PodcastIcon, Settings, Wallet2Icon } from "lucide-react"
import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { MdPayment } from "react-icons/md"
import SideBarContainer from "../SideBarContainer"
import SideBarHeader from "../SideBarHeader"
import SideBarInnerContainer from "../SideBarInnerContainer"
import { usePathname } from "next/navigation"
import SidebarLinkContainer from "../../SidebarLinkContainer"


const MainDashboardSidebar = () => {
    const pathname = usePathname()
    const sidebarItems = [
     
        {
            
            text: 'Home',
            link: '/dashboard'
        },

        {
            
            text: 'Payments',
            link: '/dashboard/payment_view'
        },

        {
            
            text: 'Posts',
            link: '/dashboard/post_view'
        },

        {
           
            text: 'Profile',
            link: '/dashboard/profile_view'
        },

        {
            
            text: 'Wallet',
            link: '/dashboard/wallet'
        },

        {
            text: 'Settings',
            link: '/dashboard/setting_view'
        }
    ]
    return (
        <SideBarContainer className="">
                <SideBarHeader className="">
                    DashBoard
                </SideBarHeader>
                   
            <SideBarInnerContainer className="gap-4 text-myblue/80">
                {
                    sidebarItems.map(({ text, link}, i) => (
                        <Link href={link} className={`
                            ${pathname == link ? "border-blue-700" : "border-l-white"}
                        grid grid-cols-[2rem_1fr] border-l-4 text-base rounded px-2`} key={i}>
                            {
                                text == "Home"?
                                (<SidebarLinkContainer className="" link={link}><HomeIcon className="h-5 w-5"/></SidebarLinkContainer>) :
                                text == "Profile"?
                                (<SidebarLinkContainer className="" link={link}><CgProfile className="h-5 w-5"/></SidebarLinkContainer>) :
                                text == "Payments"?
                                (<SidebarLinkContainer className="" link={link}><MdPayment className="h-5 w-5"/></SidebarLinkContainer>) :
                                text == "Settings" ?
                                (<SidebarLinkContainer className="" link={link}><Settings className=""/></SidebarLinkContainer>) :
                                text == "Posts" ?
                                (<SidebarLinkContainer className="" link={link}><PodcastIcon className=""/></SidebarLinkContainer>) :
                                (<SidebarLinkContainer className="" link={link}><Wallet2Icon className="h-5 w-5"/></SidebarLinkContainer>)

                            }
                            
                            <span>{text}</span>
                        </Link>
                    ))
                }

            </SideBarInnerContainer>

        </SideBarContainer>
    )
}

export default MainDashboardSidebar