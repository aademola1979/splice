

const SubDashboardBar = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`
    flex w-full items-center px-2 h-full gap-5 flex-wrap border ${className}`}>
      {children}
    </div>
  )
}

export default SubDashboardBar