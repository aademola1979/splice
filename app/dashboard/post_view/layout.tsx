import PostSidebar from "@/app/partial/dashboard/bars/sidebars/PostSidebar";
import PostMobileNav from "@/app/partial/mobileNav/PostMobileNav";
import SearchLink from "@/app/partial/search/SearchLink";



const Layout = ({ children }: { children: React.ReactNode }) => {


  return (
    <section className="w-full grid grid-rows-[auto_1fr] md:grid-rows-1  md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
     <div className="block px-2 pt-4 md:hidden ">
      <PostMobileNav />
     </div>
     <PostSidebar />
      <div className="grid grid-rows-[auto_1fr] h-full page-container">
      <SearchLink className="mb-4" item={{ link:"/dashboard/search/search_post", text:"Search Posts" }}/>
        {children}
      </div>
    </section>
  )
};

export default Layout