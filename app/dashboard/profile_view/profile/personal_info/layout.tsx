import SubDashboardBar from "@/app/partial/dashboard/bars/SubDashboardBar";
import LinkDashboardHeader from "@/app/partial/dashboard/LinkDashboardHeader";
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";




const Layout = ({ children }: { children: React.ReactNode }) => {
    const items = [
    
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
    
        
      ]
    return (
        <section className="w-full grid  grid-rows-[96px_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
        <div className="grid  gap-2">
        <SubDashboardHeader className="">Personal Info</SubDashboardHeader>
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