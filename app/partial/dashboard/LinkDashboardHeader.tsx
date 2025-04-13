import Link from 'next/link'


const LinkDashboardHeader = ({children, link, className}:{link:string, className:string, children:React.ReactNode}) => {
  return (
    <Link href={link} className={` ${className}
         text-black/80 
        border-[1px] border-[#B6B6B6] bg-white/80 hover:bg-white/80
        rounded px-4 items-center py-1 h-[2rem] cursor-pointer font-[700]
        hover:border-gray-500 text-xs snap-start`}>
            {children}         
        </Link>
  )
}

export default LinkDashboardHeader