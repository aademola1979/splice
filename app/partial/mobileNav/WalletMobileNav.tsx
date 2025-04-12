'use client'
import DashBoardSideBar from "../DashBoardSideBar"
import { SheetClose } from "@/components/ui/sheet"
import { walletSidebarItems } from "@/lib/data"
import Link from "next/link"
import { SidebarItemsType } from "@/lib/types"
import { usePathname } from "next/navigation"
import { ArrowLeft, Wallet2Icon } from "lucide-react"
import { MdAccountBalanceWallet} from "react-icons/md"


const WalletMobileNav = () => {
    return (
        <DashBoardSideBar >
            <div className="flex flex-col gap-3 pt-4">
                {
                    walletSidebarItems.map((item, i) => (
                        <MobileSidebarLink item={item} key={i} />

                    ))
                }
            </div>
        </DashBoardSideBar>
    )
}

export default WalletMobileNav



const MobileSidebarLink = ({ item }: { item: SidebarItemsType }) => {
    const { link, text } = item
    const pathname = usePathname()
    return (

        <SheetClose asChild>
            <Link href={link} className={`${pathname === link ? "bg-blue-100 text-myblue" : ""} p-1 rounded`}>
                <div className={`${pathname === link ? " text-mybluetwo" : "text-black/90"} w-max grid grid-cols-[2rem_1fr]`}>
                    <span>
                        {
                            text == "Dashboard" ?
                            (<ArrowLeft className="font-thin h-5"/>) :
                            text == "Wallet" ?
                            (<Wallet2Icon className="h-4 w-4"/>) :
                                    
                            (<MdAccountBalanceWallet className="h-5 w-5"/>)
                        }
                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-sm">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )
}