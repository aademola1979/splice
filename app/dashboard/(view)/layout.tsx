import MainDashboardSidebar from "@/app/partial/dashboard/bars/sidebars";
import MainMobileNav from "@/app/partial/mobileNav/MainMobileNav";





const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="md:grid md:grid-cols-[15rem_1fr] gap-4 !min-h-[100vh] max-w-full relative ">
      <MainDashboardSidebar className="hidden md:flex flex-col"/>
      <div className="block md:hidden pt-4 px-2">
        <MainMobileNav />
      </div>
      <main className="bg-inherit p-5 md:p-10 lg:p-12">
        {children}
      </main>
    </section>
  )
};

export default Layout