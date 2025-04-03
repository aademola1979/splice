

const SubDashboardHeader = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`flex justify-start font-bold ${className}`}>
        {children}
    </div>
  )
}

export default SubDashboardHeader