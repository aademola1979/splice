

const SideBarInnerContainer = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`flex flex-col gap-2 text-gray-700 ${className}`}>
        {children}
    </div>
  )
}

export default SideBarInnerContainer