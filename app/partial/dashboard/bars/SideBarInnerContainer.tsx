

const SideBarInnerContainer = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`flex flex-col gap-2 text-black font-thin text-[8px]] font-sans ${className}`}>
        {children}
    </div>
  )
}

export default SideBarInnerContainer