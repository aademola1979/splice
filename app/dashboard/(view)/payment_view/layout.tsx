import SubDashboardBar from "@/app/partial/dashboard/bars/SubDashboardBar";
import LinkDashboardHeader from "@/app/partial/dashboard/LinkDashboardHeader";
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";




const Layout = ({ children }: { children: React.ReactNode }) => {

  const items = [
    {
      icon: '',
      text: 'Main Page',
      link: '/dashboard/payment_view/payments'

    },
    {
      icon: '',
      text: 'Method',
      link: '/dashboard/payment_view/payments/payment_methods'

    },
    {
      icon: '',
      text: 'Records',
      link: '/dashboard/payment_view/payments/payment_records'

    },
  ]
  return (
    <section className="w-full grid  grid-rows-[96px_1fr] gap-4 min-h-[100vh] max-w-[100%] relative">
      <div className="grid gap-2">
      <SubDashboardHeader className="">
        <span className="">Payments</span>
      </SubDashboardHeader>
      <SubDashboardBar className="flex w-full justify-start gap-8 border-0">
      {
        items.map(({text, link}, i)=>(
          <LinkDashboardHeader className="" key={i} link={link}>
            <span>{text}</span>
          </LinkDashboardHeader>
        ))
      }
      
     </SubDashboardBar>
     </div>
      <>
        {children}
      </>
    </section>
  )
};

export default Layout