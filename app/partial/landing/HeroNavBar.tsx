import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb"
import Link from "next/link"
import Logo from "../Logo"
import CustomSearch from "../search"




const HeroNavBar = () => {
  const heroNavBarItems = [


    {
      text: 'How It Works',
      link: '/how_it_works',
      icon: '',
      show: 'hidden md:block'
    },
    {
      text: 'Spaces Near You',
      link: '/find_spaces',
      icon: '',
      show: 'hidden md:block'
    },

    {
      text: 'Community',
      link: '/community',
      icon: '',
      show: "hidden md:block",
    },

  ]
  return (
    <div className="flex flex-nowrap justify-between bg-picoteeblue px-4 md:px-8 py-2 !h-fit">
      <div className="h-fit grid items-center">
        <Logo className="h-[1.75rem] w-[2rem] md:h-[2.5rem] md:w-[3rem]" />
      </div>
      <Breadcrumb>
        <BreadcrumbList className=" text-medium flex w-full justify-end gap-4 md:gap-6 text-white py-3 px-4 md:px-12 lg:px-18">

          {
            heroNavBarItems.map((item, i) => (

              <BreadcrumbItem key={i} className="group">
                <Link href={item.link} className={`flex items-center border-b border-current gap-x-4 py-2 
        transition-all duration-300 hover:border-orange-500 ${item.show}`}>{item.text}</Link>

              </BreadcrumbItem>
            )
            )
          }
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex md:hidden gap-4 text-white h-[2rem] ">
        <Link href={'/login'} className="h-fit pt-3">Login</Link>
        <CustomSearch className=""/>
      </div>
    </div>
  )
}

export default HeroNavBar