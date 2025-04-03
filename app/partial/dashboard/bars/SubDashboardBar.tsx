

const SubDashboardBar = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`no-scrollbar flex w-full justify-start h-full gap-5 overflow-x-scroll flex-nowrap snap-x ${className}`}>
      {children}
    </div>
  )
}

export default SubDashboardBar