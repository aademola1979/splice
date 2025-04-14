import PostSidebar from "@/app/partial/dashboard/bars/sidebars/PostSidebar";
import PostMobileNav from "@/app/partial/mobileNav/PostMobileNav";



const Layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <section className="w-full grid grid-rows-[auto_1fr] md:grid-rows-1  md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
     <div className="block px-2 pt-4 md:hidden ">
      <PostMobileNav />
     </div>
     <PostSidebar />
      <>
        {children}
      </>
    </section>
  )
};

export default Layout