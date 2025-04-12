'use client'
import DashBoardSideBar from "../DashBoardSideBar"
import { SheetClose } from "@/components/ui/sheet"
import { profileSidebarItems } from "@/lib/data"
import Link from "next/link"
import { SidebarItemsType } from "@/lib/types"
import { usePathname } from "next/navigation"
import { ArrowLeft, Info } from "lucide-react"
import { MdOutlineRoomPreferences } from "react-icons/md"
import { CgProfile } from "react-icons/cg"


const ProfileMobileNav = () => {
    return (
        <DashBoardSideBar >
            <div className="flex flex-col gap-3 pt-4">
                {
                    profileSidebarItems.map((item, i) => (
                        <MobileSidebarLink item={item} key={i} />

                    ))
                }
            </div>
        </DashBoardSideBar>
    )
}

export default ProfileMobileNav



const MobileSidebarLink = ({ item }: { item: SidebarItemsType }) => {
    const { link, text } = item
    const pathname = usePathname()
    return (

        <SheetClose asChild >
            <Link href={link} className={`${pathname === link ? "border-blue-700" : "border-white"} p-1 rounded-md border-l-4`}>
                <div className={`${pathname === link ? " " : ""} w-max grid grid-cols-[2rem_1fr]`}>
                    <span className={`${pathname == link ? "text-blue-700" : "text-black/90"}`}>
                        {
                            text == "Dashboard" ?
                                (<ArrowLeft className="font-thin h-5" />) :
                                text == "Profile" ?
                                (<CgProfile />) :
                                text == "Personal Info" ?
                                (<Info className="h-4 w-4" />) :
                                (<MdOutlineRoomPreferences className="h-5 w-5" />)
                        }
                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-sm">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )
}