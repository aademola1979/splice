
import WalletSidebar from "@/app/partial/dashboard/bars/sidebars/WalletSidebar";
import WalletMobileNav from "@/app/partial/mobileNav/WalletMobileNav";




const Layout = ({ children }: { children: React.ReactNode }) => {
    
    return (
        <section className="grid grid-rows-[auto_1fr] md:grid-rows-1  md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
            <div className="block md:hidden pt-4 pl-2">
                <WalletMobileNav />

            </div>
            <WalletSidebar />
            <div className="p-5 md:p-10 lg:p-12 ">
                {children}
            </div>
        </section>
    )
};

export default Layout