



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="md:grid gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
      <main className="">
        {children}
      </main>
    </section>
  )
};

export default Layout