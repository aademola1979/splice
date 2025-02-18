import Link from "next/link"
import Logo from "./Logo"
import Nav from "./Nav"
import SocialMedia from "./SocialMedia"
import { Button } from "@/components/ui/button"
import MobileNav from "./mobileNav"
import CustomSearch from "./search"
import siteMetadata from "@/lib/utility/siteMetadata"


const Header = () => {
  return (
    <header className="w-full flex pt-4 pb-2 justify-between gap-2 md:gap-8 shadow-md backdrop-blur fixed z-50 top-0 px-4 md:px-8 lg:px-16">

      <Link href={'/'} className="flex gap-2">
        <Logo className="h-[1.75rem] w-[2rem] md:h-[2.5rem] md:w-[3rem]" />
        <div className="flex">
          <span className="text-lg md:text-2xl font-semibold md:font-bold text-orange-500">{siteMetadata.title}</span>
        </div>
      </Link>

      <div className="flex flex-col gap-2 flex-1">
        <div className="hidden md:flex justify-between">
        <Nav />
          <SocialMedia x="" />
        </div>
        <div className="flex h-[3rem]">
        
          <div className="flex gap-4 md:gap-8 justify-end items-center w-full">
            <div className="cursor-pointer pb-1 md:pb-2 self-start"><CustomSearch className="text-black/70 font-normal h-4 w-4 md:h-5 md:w-5 hover:scale-110" /></div>
            <Link href='/join' className="hidden md:block h-fit"><Button variant={'outline'}>Join</Button></Link>
            <Link href='/login' className="hidden md:block border-b text-sm border-transparent hover:border-black/90">Login</Link>  
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header