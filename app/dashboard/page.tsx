import MainDashboardSidebar from "../partial/dashboard/bars/sidebars"
import MainMobileNav from "../partial/mobileNav/MainMobileNav"


const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-[15rem_1fr] !min-h-[100vh] grid-rows-[auto_1fr] md:grid-rows-1">
      <MainDashboardSidebar className="hidden md:flex flex-col h-full border"/>
      <div className="block md:hidden px-2 py-4 "><MainMobileNav /></div>
      <div className="border"></div>
    </div>
  )
}

export default Dashboard