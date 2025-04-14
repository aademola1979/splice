
import ProfileSidebar from "@/app/partial/dashboard/bars/sidebars/ProfileSidebar";
import ProfileMobileNav from "@/app/partial/mobileNav/ProfileMobileNav";





const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <section className="w-full grid grid-rows-[auto_1fr] md:grid-rows-1  md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
      <div className="block md:hidden pt-4 pl-2">
        <ProfileMobileNav />
      </div>
      <ProfileSidebar />
      <div className="p-5 border bg-white">
        {children}
      </div>
    </section>
  )
};

export default Layout