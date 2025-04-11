import React from "react"


const InfoCardWrapper = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`${className} bg-white/80 p-5 border-l-4 md:border-l-8 shadow rounded flex justify-between`}>
        {children}
    </div>
  )
}

export default InfoCardWrapper