import Footer from "../partial/Footer";
import Header from "../partial/Header";




const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full grid grid-rows-[auto_1fr_auto] min-h-[100vh] relative pt-16">
      <Header />
        {children}
      <Footer />
    </main>
  )
};

export default Layout