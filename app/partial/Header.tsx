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
    <header className="w-full flex py-4 justify-between gap-4 md:gap-8 shadow-md backdrop-blur fixed z-50 top-0 px-4 md:px-8 lg:px-16">

      <Link href={'/'} className="flex gap-2">
        <Logo className="h-[2.75rem] w-[3rem] md:h-[3.5rem] md:w-[4rem]" />
        <div className="h-full flex items-end">
          <span className="text-lg md:text-2xl font-semibold md:font-bold text-orange-500">{siteMetadata.title}</span>
        </div>
      </Link>

      <div className="flex flex-col gap-4 flex-1">
        <div className="hidden md:flex justify-end">
          <SocialMedia x="" />
        </div>
        <div className="flex w-full justify-between gap-8">
          <Nav />
          <div className="flex gap-4 md:gap-8 justify-end w-full">
            <div className="cursor-pointer hover:scale-110 self-end pb-1 md:pb-2"><CustomSearch className="text-black/70 font-normal h-4 w-4 md:h-5 md:w-5" /></div>
            <Link href='/join' className="hidden md:block h-max"><Button variant={'outline'}>Join</Button></Link>
            <Link href='/login' className="hidden md:block border-b border-transparent hover:border-black/90 h-max self-end">Login</Link>  
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header