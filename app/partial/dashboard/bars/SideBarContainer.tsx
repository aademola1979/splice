import React from "react"


const SideBarContainer = ({children, className}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`bg-white/80 p-4 hidden md:flex flex-col gap-5 border-r-2 ${className}`}>
        {children}
    </div>
  )
}

export default SideBarContainer