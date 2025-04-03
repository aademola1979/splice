import SubDashboardBar from "@/app/partial/dashboard/bars/SubDashboardBar";
import LinkDashboardHeader from "@/app/partial/dashboard/LinkDashboardHeader";
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader"



const Layout = ({ children }: { children: React.ReactNode }) => {
  const items = [
    {
      icon: 'Main Page',
      text: 'Themes',
      link: '/dashboard/setting_view'
    },
    {
      icon: '',
      text: 'Themes',
      link: '/dashboard/setting_view/themes'
    },
    {
      icon: '',
      text: 'Family',
      link: '/dashboard/setting_view/family'
    }
  ]
    return (
      <section className="w-full grid grid-rows-[96px_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
        <div className="grid gap">
        <SubDashboardHeader className="">Settings</SubDashboardHeader>
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
        <>
          {children}
        </>
      </section>
    )
  };
  
  export default Layout


  