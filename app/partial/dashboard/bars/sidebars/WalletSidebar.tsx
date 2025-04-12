'use client'
import Link from "next/link"
import SubDashboardHeader from "../../SubDashboardHeader"
import SideBarContainer from "../SideBarContainer"
import SideBarInnerContainer from "../SideBarInnerContainer"
import { ArrowLeft, WalletCardsIcon } from "lucide-react"
import { MdAccountBalanceWallet } from "react-icons/md"
import { usePathname } from "next/navigation"
import SidebarLinkContainer from "../../SidebarLinkContainer"
import { walletSidebarItems } from "@/lib/data"


const WalletSidebar = () => {
    const pathname = usePathname()
    
  return (
    <SideBarContainer className="hidden md:block">
                <SubDashboardHeader className="text-2xl">Splice Wallet</SubDashboardHeader>
                <SideBarInnerContainer className="">
                    {
                        walletSidebarItems.map(({link, text}, i)=>(
                            <Link key={i} className={`
                            grid grid-cols-[2rem_1fr] border-l-4 rounded px-2
                            ${link == pathname ? "border-blue-700" : "border-white"}
                            `} href={link}>
                               
                                    {
                                        text == 'Dashboard' ?
                                        (<SidebarLinkContainer className="" link={link}><ArrowLeft className=""/></SidebarLinkContainer>):
                                        text == 'Wallet' ?
                                        (<SidebarLinkContainer className="" link={link}><WalletCardsIcon className="h-[18px] w-[18px]"/></SidebarLinkContainer>):
                                        (<SidebarLinkContainer className="" link={link}><MdAccountBalanceWallet className="h-5 w-5"/></SidebarLinkContainer>)
                                    }
                                <span>{text}</span>
                            </Link>

                        ))
                    }
                    
                    
                </SideBarInnerContainer>
            </SideBarContainer>
  )
}

export default WalletSidebar