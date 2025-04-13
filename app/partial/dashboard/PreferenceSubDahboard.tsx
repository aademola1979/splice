'use client'
import { SidebarItemsType } from "@/lib/types"
import LinkDashboardHeader from "./LinkDashboardHeader"
import { MdRoomPreferences } from "react-icons/md"
import { BiGroup } from "react-icons/bi"
import { CgMore } from "react-icons/cg"
import { usePathname } from "next/navigation"



const PreferenceSubDashboard = ({item}:{item:SidebarItemsType}) => {
  const {link, text} = item
  const pathname = usePathname()
   
  return (
    <LinkDashboardHeader className={`grid grid-cols-[2rem_auto] ${pathname == link ? "border-blue-700" : "border-black"}`} link={link}>
          <span className={`${pathname == link ? "text-blue-700" : "text-black/90"}`}>
            {
              text == "Accommodation Preferences" ?
              (<MdRoomPreferences className="h-5 w-5"/>) :
              text == "Partner Preferences" ?
              (<BiGroup className="h-5 w-5"/>) :
              (<CgMore className="h-5 w-5"/>)
            }

          </span>
           <span>{text}</span>
         </LinkDashboardHeader>
  )
}

export default PreferenceSubDashboard