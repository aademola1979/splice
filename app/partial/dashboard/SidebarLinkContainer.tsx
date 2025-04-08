'use client'

import { usePathname } from "next/navigation"

const SidebarLinkContainer = ({link, className, children}:{link:string, className:string, children:React.ReactNode}) => {
    const pathname = usePathname()
    return (
    <span className={`${className} ${link == pathname ? "text-blue-700 border-blue-700" : "text-black/80 border-white"}`}>
        {children}
    </span>
  )
}

export default SidebarLinkContainer