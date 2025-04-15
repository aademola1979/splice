import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Edit2} from "lucide-react"
import React from "react"



const EditModal = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Edit2 className="font-thin border border-gray-400 p-1 h-7 w-7 hover:border-gray-500"/>
        </SheetTrigger>
      <SheetTitle className="hidden"></SheetTitle>
      <SheetDescription className="hidden"></SheetDescription>
      <SheetContent x_style="" side={'bottom'} className={`${className}`} >
          {children}
      </SheetContent>
    </Sheet>
  )
}

export default EditModal