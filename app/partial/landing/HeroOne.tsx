/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"


const HeroOne = () => {
  return (
    <div className="w-full sm:h-[18rem] lg:h-[32rem] shadow-sm relative">
      <img src={'/images/hero.jpg'} alt="hero" width={250} height={350} sizes="1000"
      className="w-full h-full -z-0 rounded-t-[1.5rem]"/>
      <div className="absolute right-0 left-0 top-0 bottom-0 z-10 w-full h-full rounded-t-[1.5rem] flex flex-col gap-11 justify-center bg-mybluetwo/80 items-center text-white">
        <div className="px-4 md:px-8 flex flex-col gap-2 items-center w-full">
          <h1 className="text-sm md:text-xl lg:text-3xl font-bold text-white">Join the rent-splitting revolution</h1>
          <h3 className="text-xs md:text-base">Save more than 50% on your rent</h3>
        </div>
        <div className="group flex gap-2">
          <Link href={'/join'} className="flex items-center text-xl font-medium border-b border-current gap-x-4 py-2 
        transition-all duration-300 group hover:pl-4 hover:pr-1">Join Free</Link>
          <span className="pt-3 font-bold w-max">
            <BsArrowRight className="transition-all group-hover:ml-2 text-2xl duration-300 h-25 w-25" />
          </span>

        </div>
      </div>

    </div>

  )
}

export default HeroOne