import Link from "next/link"
import Intorduction from "./Intorduction"
import Nav from "./Nav"
import Logo from "../Logo"
import MobileNav from "../mobileNav"
import CustomSearch from "../search"
import siteMetadata from "@/lib/utility/siteMetadata"


const Header = () => {
  return (
    <header className="w-full grid text-white gap-2">
      <div className="flex justify-between w-full gap-5 pt-4">
        <Link href={'/'} className="flex gap-2">
          <Logo className="h-[2.75rem] w-[3rem] md:h-[3.5rem] md:w-[4rem]" />
          <div className="h-full flex items-end">
            <span className="text-lg md:text-2xl font-semibold md:font-bold">{siteMetadata.title}</span>
          </div>

        </Link>
        <Nav />
        <div className="flex gap-4 md:gap-8">
          <div className="hidden md:block cursor-pointer hover:scale-110 pt-2 h-max"><CustomSearch className="w-5 h-5" /></div>
          <Link href='/login' className="hidden md:block px-4 py-1 border-2 border-white hover:scale-105 rounded-sm h-max">Login</Link>
          <MobileNav/>
        </div>

      </div>
      <Intorduction />
    </header>
  )
}

export default Header