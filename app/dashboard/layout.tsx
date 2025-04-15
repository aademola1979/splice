
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="relative !min-h-[100vh] w-full">
       
        {children}
      </main>
  )
};

export default Layout