
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";
import SearchLink from "@/app/partial/search/SearchLink";




const Layout = ({ children }: { children: React.ReactNode }) => {
    /*const items = [
    
        {
          icon: '',
          text: 'Address Info',
          link: '/dashboard/profile_view/profile/personal_info/address_info'
        },
        {
            icon: '',
            text: 'Financial Info',
            link: '/dashboard/profile_view/profile/personal_info/financial_info'
          },

          {
            icon: '',
            text: 'References Info',
            link: '/dashboard/profile_view/profile/personal_info/references_info'
          },

          {
            icon: '',
            text: 'Verification Info',
            link: '/dashboard/profile_view/profile/personal_info/verification_info'
          },
    
        
      ]*/
    return (
        <section className="grid  grid-rows-[auto_1fr] gap-4 min-h-full w-full relative">
        <div className="grid w-full gap-4 md:gap-12 px-2">
        <SearchLink className="w-full" item={{ link:"/", text:"Search Site" }} />
        <SubDashboardHeader className="text-2xl">Your Info</SubDashboardHeader>
        </div>
        <div className="">
          {children}
        </div>
      </section>
    )
  };
  
  export default Layout