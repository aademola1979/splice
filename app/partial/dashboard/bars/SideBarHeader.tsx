import React from "react"


const SideBarHeader = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`font-bold text-2xl text-myblue ${className}`}>
        {children}
    </div>
  )
}

export default SideBarHeader