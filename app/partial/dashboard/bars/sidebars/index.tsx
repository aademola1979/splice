'use client'
import { HomeIcon, Settings, Wallet2Icon } from "lucide-react"
import Link from "next/link"
import { CgFileDocument, CgProfile } from "react-icons/cg"
import { MdPayment } from "react-icons/md"
import SideBarContainer from "../SideBarContainer"
import SideBarInnerContainer from "../SideBarInnerContainer"
import { usePathname } from "next/navigation"
import SidebarLinkContainer from "../../SidebarLinkContainer"
import { mainSidebarItems } from "@/lib/data"
import SideBarHeaderContainer from "../SideBarHeaderContainer"


const MainDashboardSidebar = ({ className }: { className: string }) => {
    const pathname = usePathname()

    return (
        <SideBarContainer className={`${className}`}>
            <SideBarHeaderContainer header_text="Dashboard" />
            <SideBarInnerContainer className="gap-4 text-myblue/80">
                {
                    mainSidebarItems.map(({ text, link }, i) => (
                        <Link href={link} className={`
                            ${pathname == link ? "border-blue-700" : "border-l-white"}
                        grid grid-cols-[2rem_1fr] border-l-4 text-base rounded px-2 group`} key={i}>
                            {
                                text == "Dashboard" ?
                                    (<SidebarLinkContainer className="" link={link}><HomeIcon className="h-5 w-5" /></SidebarLinkContainer>) :
                                    text == "Profile" ?
                                        (<SidebarLinkContainer className="" link={link}><CgProfile className="h-5 w-5" /></SidebarLinkContainer>) :
                                        text == "Payments" ?
                                            (<SidebarLinkContainer className="" link={link}><MdPayment className="h-5 w-5" /></SidebarLinkContainer>) :
                                            text == "Settings" ?
                                                (<SidebarLinkContainer className="" link={link}><Settings className="" /></SidebarLinkContainer>) :
                                                text == "Posts" ?
                                                    (<SidebarLinkContainer className="" link={link}><CgFileDocument className="" /></SidebarLinkContainer>) :
                                                    (<SidebarLinkContainer className="" link={link}><Wallet2Icon className="h-5 w-5" /></SidebarLinkContainer>)

                            }

                            <div className="">
                                <span className='border-b border-b-white group-hover:border-b-black'>{text}</span>
                            </div>
                        </Link>
                    ))
                }

            </SideBarInnerContainer>

        </SideBarContainer>
    )
}

export default MainDashboardSidebar