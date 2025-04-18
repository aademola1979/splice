



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full grid  md:grid-rows-[2rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
      <>
        {children}
      </>
    </section>
  )
};

export default Layout