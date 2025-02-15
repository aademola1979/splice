import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"


const RichLink = ({href, text, className}:{href:string, text:string, className:string}) => {
  return (
    <div>
        <div className="group flex gap-2">
          <Link href={href} className={`flex items-center ${className} border-b border-current gap-x-4 py-2 
        transition-all duration-300 group hover:pl-4 hover:pr-1`}>{text}</Link>
          <span className="pt-3 font-bold w-max">
            <BsArrowRight className="transition-all group-hover:ml-2 text-2xl duration-300 h-25 w-25" />
          </span>
          </div>
    </div>
  )
}

export default RichLink