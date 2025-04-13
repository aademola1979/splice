'use client'
import {
  Sheet, SheetTrigger, SheetContent, SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../Logo";
import { Button } from "@/components/ui/button";
import SectionWrapper from "../SectionWrapper";



const CustomSearch = ({ className }: { className: string }) => {
  return (
    <SectionWrapper className="">
      <Sheet >
        <SheetTrigger asChild className="" >
          <FaMagnifyingGlass className={`${className} `} />
        </SheetTrigger>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <SheetContent x_style="" side="top" className="min-h-[100vh] overflow-x-auto pt-[1rem] flex flex-col gap-4 bg-myblue">
          <SectionWrapper className="flex flex-col gap-4">
            <div className="w-full">
              <Logo className="h-[1.75rem] w-[2rem]" />
              <form className="mt-4 rounded-sm p-1">
                <div className="w-full grid gap-0.5 grid-cols-[auto_1fr]">
                  <Button variant={'outline'} className="p-2 text-gray-500"><FaMagnifyingGlass /></Button>
                  <input placeholder="Search site" className="p-1 px-4 bg-white focus:outline-none outline-none border-2 border-transparent focus:border-blue-600/80 rounded-sm text-gray-400 focus:text-gray-700" />
                </div>
              </form>
            </div>

          </SectionWrapper>
        </SheetContent>
      </Sheet>

    </SectionWrapper>
  )
}

export default CustomSearch