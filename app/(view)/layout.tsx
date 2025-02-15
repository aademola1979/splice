import Footer from "../partial/Footer";
import Header from "../partial/Header";




const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full grid grid-rows-[1fr_auto] min-h-[100vh] relative pt-16">
      <Header />
        {children}
      <Footer />
    </section>
  )
};

export default Layout