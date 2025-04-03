import MainDashboardSidebar from "@/app/partial/dashboard/bars";




const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="md:grid md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
      <MainDashboardSidebar />
      <main className="p-5">
        {children}
      </main>
    </section>
  )
};

export default Layout