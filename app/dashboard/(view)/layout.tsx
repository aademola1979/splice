import MainDashboardSidebar from "@/app/partial/dashboard/bars/sidebars";




const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="md:grid md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-full relative ">
      <MainDashboardSidebar />
      <main className="bg-inherit p-5 md:p-10 lg:p-12">
        {children}
      </main>
    </section>
  )
};

export default Layout