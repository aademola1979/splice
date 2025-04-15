'use client'
import Link from "next/link"
import SideBarContainer from "../SideBarContainer"
import SideBarInnerContainer from "../SideBarInnerContainer"
import { ArrowLeft, WalletCardsIcon } from "lucide-react"
import { MdAccountBalanceWallet } from "react-icons/md"
import { usePathname } from "next/navigation"
import SidebarLinkContainer from "../../SidebarLinkContainer"
import { walletSidebarItems } from "@/lib/data"
import SideBarHeaderContainer from "../SideBarHeaderContainer"


const WalletSidebar = () => {
    const pathname = usePathname()

    return (
        <SideBarContainer className="hidden md:block">
            <SideBarHeaderContainer header_text="Wallet" />
            <SideBarInnerContainer className="mt-4">
                {
                    walletSidebarItems.map(({ link, text }, i) => (
                        <Link key={i} className={`
                            grid grid-cols-[2rem_1fr] border-l-4 text-base rounded px-2
                            ${link == pathname ? "border-blue-700" : "border-white"}
                            group`} href={link}>
                            <span className={`${pathname == link ? "text-blue-700" : ""}`}>
                                {
                                    text == 'Dashboard' ?
                                        (<SidebarLinkContainer className="" link={link}><ArrowLeft className="" /></SidebarLinkContainer>) :
                                        text == 'Wallet' ?
                                            (<SidebarLinkContainer className="" link={link}><WalletCardsIcon className="h-[18px] w-[18px]" /></SidebarLinkContainer>) :
                                            (<SidebarLinkContainer className="" link={link}><MdAccountBalanceWallet className="h-5 w-5" /></SidebarLinkContainer>)
                                }

                            </span>

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

export default WalletSidebar