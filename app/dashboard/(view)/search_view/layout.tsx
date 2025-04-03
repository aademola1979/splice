


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full grid  md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
      search
      <>
        {children}
      </>
    </section>
  )
};

export default Layout