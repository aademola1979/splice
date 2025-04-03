
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";
import Link from "next/link";




const Layout = ({ children }: { children: React.ReactNode }) => {

  const items = [
    {
      icon: '',
      text: 'Dashboard',
      link: '/dashboard'
    },
    {
      icon: '',
      text: 'Main Page',
      link: '/dashboard/profile_view'
    },

    {
      icon: '',
      text: 'Personal Info',
      link: '/dashboard/profile_view/profile/personal_info'
    },

    {
      icon: '',
      text: 'Preferences',
      link: '/dashboard/profile_view/profile/preferences'
    }
  ]
  return (
    <section className="w-full grid  grid-cols-[15rem_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
      <div className="flex flex-col gap-2 border-r-2 p-5">
        <Link href='/dashboard/profile_view'>
        <SubDashboardHeader className="text-2xl">Profile</SubDashboardHeader>
        </Link>
        <div className="flex flex-col gap-2 text-gray-500">
          {
            items.map(({ text, link }, i) => (
              <Link className="" key={i} href={link}>
                <span>{text}</span>
              </Link>
            ))
          }
        </div>
      </div>
      <>
        {children}
      </>
    </section>
  )
};

export default Layout