import SubDashboardBar from "@/app/partial/dashboard/bars/SubDashboardBar";
import PreferenceSubDashboard from "@/app/partial/dashboard/PreferenceSubDahboard";
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";
import { preferenceItems } from "@/lib/data";




const Layout = ({ children }: { children: React.ReactNode }) => {
 
return (
    <section className="w-full grid  grid-rows-[auto_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
    <div className="grid  gap-2">
      <div className="grid gap-4">
       
    <SubDashboardHeader className="text-2xl">Preference Info</SubDashboardHeader>
    </div>
    <SubDashboardBar className="border-0">
     {
       preferenceItems.map((item, i)=>(
        <PreferenceSubDashboard key={i} item={item}/>
         
       ))
     }
     </SubDashboardBar>
    </div>
        <div className="">
          {children}
        </div>
      </section>
    )
  };
  
  export default Layout