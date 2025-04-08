
import ProfileSidebar from "@/app/partial/dashboard/bars/sidebars/ProfileSidebar";





const Layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <section className="w-full grid  md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
      <ProfileSidebar />
      <div className="p-5 md-10 lg:p-12">
        {children}
      </div>
    </section>
  )
};

export default Layout