'use client'
import DashBoardSideBar from "../DashBoardSideBar"
import { SheetClose } from "@/components/ui/sheet"
import { postItems } from "@/lib/data"
import Link from "next/link"
import { SidebarItemsType } from "@/lib/types"
import { usePathname } from "next/navigation"
import { ArrowLeft, HomeIcon} from "lucide-react"
import { CgFileDocument } from 'react-icons/cg'
import { MdCreate, MdEditDocument, MdRecommend } from 'react-icons/md'

const PostMobileNav = () => {
    return (
        <DashBoardSideBar >
            <div className="flex flex-col gap-3 pt-4">
                {
                    postItems.map((item, i) => (
                        <MobileSidebarLink item={item} key={i} />

                    ))
                }
            </div>
        </DashBoardSideBar>
    )
}

export default PostMobileNav



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
                                text == "Post Main Page" ?
                                (<HomeIcon />) :
                                text == "All Posts" ?
                                (<CgFileDocument className="h-4 w-4" />) :
                                text == "Create Post" ?
                                (<MdCreate className="" />) :
                                text == "My Posts" ?
                                (<MdEditDocument/>):
                                (<MdRecommend/>)
                        }
                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-xs">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )
}