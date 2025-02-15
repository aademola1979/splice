'use client'
import {
    Sheet, SheetTrigger, SheetContent, SheetTitle,
    SheetDescription,} from "@/components/ui/sheet";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../Logo";
import { Button } from "@/components/ui/button";



const CustomSearch = ({className}:{className:string}) => {
  return (
    <div>
         <Sheet >
                <SheetTrigger asChild className="" >
                    <FaMagnifyingGlass className={`${className} `} />
                </SheetTrigger>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <SheetContent side="top" className="min-h-[100vh] overflow-x-auto pt-[1rem] flex flex-col gap-4 bg-myblue">
                    <div className="flex flex-col gap-4">
                      <div className="w-full"><Logo className="h-[1.75rem] w-[2rem]"/>
                      <form className="mt-4 rounded-sm p-1">
                        <div className="w-full grid gap-0.5 grid-cols-[auto_1fr]">
                          <Button variant={'outline'} className="p-2 text-gray-500"><FaMagnifyingGlass /></Button>
                          <input placeholder="Search site" className="p-1 bg-white focus:border-0 rounded-sm text-black/80"/>
                        </div>
                      </form>
                      </div>
 
                    </div>
                </SheetContent>
            </Sheet>
            
    </div>
  )
}

export default CustomSearch