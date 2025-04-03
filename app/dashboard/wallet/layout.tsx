
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";
import Link from "next/link";





const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="hidden md:grid md:grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
            <div className="p-5 min-h-full border-r-2 bg-[rgba(240,240,240)] flex flex-col gap-8">
                <SubDashboardHeader className="text-2xl">Splice Wallet</SubDashboardHeader>
                <div className="flex flex-col gap-2 text-gray-500">
                    <Link className="" href='/dashboard'>Dashboard </Link>
                    <Link className="" href='/dashboard/wallet'>Main Page</Link>
                    <Link className="" href='/dashboard'>Home</Link>
                </div>
            </div>
            <>
                {children}
            </>
        </section>
    )
};

export default Layout