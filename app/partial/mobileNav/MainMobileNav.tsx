'use client'
import DashBoardSideBar from "../DashBoardSideBar"
import { SheetClose } from "@/components/ui/sheet"
import { mainSidebarItems } from "@/lib/data"
import Link from "next/link"
import { SidebarItemsType } from "@/lib/types"
import { usePathname } from "next/navigation"
import { Home, Settings, Wallet2Icon } from "lucide-react"
import { MdOutlinePayment} from "react-icons/md"
import { CgFileDocument, CgProfile } from "react-icons/cg"



const MainMobileNav = () => {
    return (
        <DashBoardSideBar >
            <div className="flex flex-col gap-3 pt-4">
                {
                    mainSidebarItems.map((item, i) => (
                        <MobileSidebarLink item={item} key={i} />

                    ))
                }
            </div>
        </DashBoardSideBar>
    )
}

export default MainMobileNav



const MobileSidebarLink = ({ item }: { item: SidebarItemsType }) => {
    const { link, text } = item
    const pathname = usePathname()
    return (

        <SheetClose asChild>
            <Link href={link} className={`${pathname === link ? "rounded-md border-blue-700 text-myblue" : "bg-white border-white"} p-1 rounded border-l-4`}>
                <div className={`${pathname === link ? " " : ""} w-max grid grid-cols-[2rem_1fr]`}>
                    <span className={`${link == pathname ? "text-blue-700" : "text-black/90"}`}>
                        {
                            text == "Dashboard" ?
                                (<Home className="font-thin h-5"/>) :
                                text == "Payments" ?
                                (<MdOutlinePayment />) :
                                text == "Profile" ?
                                (<CgProfile className="h-4 w-4"/>) :
                                text == "Settings"?
                                (<Settings className="h-5 w-5"/>):
                                text == "Wallet" ?
                                (<Wallet2Icon className="h-4 w-4"/>) :
                                (<CgFileDocument/>)
                        }
                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-xs">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )
}