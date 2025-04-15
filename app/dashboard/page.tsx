import MainDashboardSidebar from "../partial/dashboard/bars/sidebars"
import MainMobileNav from "../partial/mobileNav/MainMobileNav"
import SearchLink from "../partial/search/SearchLink"


const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-[15rem_1fr] !min-h-[100vh] grid-rows-[auto_1fr] md:grid-rows-1">
      <MainDashboardSidebar className="hidden md:flex flex-col h-full border" />
      <div className="block md:hidden px-2 py-4 "><MainMobileNav /></div>
      <div className="border page-container">
        <div className="w-full flex justify-center">
          <SearchLink className="w-full" item={{ link: "/dashboard/search/search_site", text: "Search Site" }} />
        </div>

      </div>
    </div>
  )
}

export default Dashboard