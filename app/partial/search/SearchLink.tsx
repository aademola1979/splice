import { SidebarItemsType } from "@/lib/types"
import { Search } from "lucide-react"
import Link from "next/link"


const SearchLink = ({className, item}:{className:string,item:SidebarItemsType}) => {
    const {link, text} = item
    return (
       
            <Link href={link} className={`group border-2 border-blue-400 hover:border-blue-700 rounded-full flex gap-2 py-1 px-2 ${className}`}>
                <Search className="text-gray-500"/>
                <span className="text-gray-400 font-sans font-light group-hover:text-gray-500">{text}</span>
            </Link>
       
    )
}

export default SearchLink