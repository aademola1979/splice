import SubDashboardBar from "@/app/partial/dashboard/bars/SubDashboardBar";
import LinkDashboardHeader from "@/app/partial/dashboard/LinkDashboardHeader";
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";




const Layout = ({ children }: { children: React.ReactNode }) => {
  const items = [
    
    
    
    {
      icon: '',
      text: 'Accommodation Preferences',
      link: '/dashboard/profile_view/profile/preferences/accommodation_preferences'
    },

    {
      icon: '',
      text: 'Partners Preferences',
      link: '/dashboard/profile_view/profile/preferences/partners_preferences'
    },
    {
      icon: '',
      text: 'Additional Preferences',
      link: '/dashboard/profile_view/profile/preferences/additional_preferences'
    },
    
    
  ]
return (
    <section className="w-full grid  grid-rows-[96px_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
    <div className="grid  gap-2">
    <SubDashboardHeader className="">Preference Info</SubDashboardHeader>
    <SubDashboardBar className="">
     {
       items.map(({text, link}, i)=>(
         <LinkDashboardHeader className="" key={i} link={link}>
           <span>{text}</span>
         </LinkDashboardHeader>
       ))
     }
     </SubDashboardBar>
    </div>
        <main className="">
          {children}
        </main>
      </section>
    )
  };
  
  export default Layout