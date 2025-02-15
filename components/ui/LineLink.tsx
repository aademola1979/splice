
import Link from "next/link"
import LineLinkIcon from '../icons/arrow-right'

type Input = {
    className:string,
    href:string,
    text: string
}
const LineLink = ({input}:{input:Input}) => {
  return (
    <div className="flex items-start">
      <Link
        href={input.href}
        className="flex items-center border-b border-current gap-x-4 py-2 
        transition-all duration-300 group hover:pl-4 hover:pr-1"
      >
        <>
          <span className={`${input.className}`}>{input.text}</span>
          <LineLinkIcon
            size='20'
            className="transition-all group-hover:ml-2 duration-300"
          />
        </>
      </Link>
    </div>
    
  )
}

export default LineLink