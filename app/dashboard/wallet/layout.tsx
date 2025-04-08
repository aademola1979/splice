
import WalletSidebar from "@/app/partial/dashboard/bars/sidebars/WalletSidebar";



const Layout = ({ children }: { children: React.ReactNode }) => {
    
    return (
        <section className="hidden md:grid md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
            <WalletSidebar />
            <div className="p-5 md:p-10 lg:p-12 ">
                {children}
            </div>
        </section>
    )
};

export default Layout