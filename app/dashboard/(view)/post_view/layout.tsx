import SubDashboardBar from "@/app/partial/dashboard/bars/SubDashboardBar";
import LinkDashboardHeader from "@/app/partial/dashboard/LinkDashboardHeader";
import SubDashboardHeader from "@/app/partial/dashboard/SubDashboardHeader";
import { createLucideIcon, PodcastIcon } from "lucide-react";
import { BsPostageFill } from "react-icons/bs";
import { MdOutlineRecommend } from "react-icons/md";




const Layout = ({ children }: { children: React.ReactNode }) => {

  const items = [
    {
      icon: PodcastIcon,
      text: 'Main Page',
      link: '/dashboard/post_view'

    },
    {
      icon: PodcastIcon,
      text: 'Posts',
      link: '/dashboard/post_view/posts/all_posts'

    },
    {
      icon: createLucideIcon,
      text: 'Create',
      link: '/dashboard/post_view//posts/create_post'

    },
    {
      icon: BsPostageFill,
      text: 'My Posts',
      link: '/dashboard/post_view/posts/my_posts'

    },
    {
      icon: MdOutlineRecommend,
      text: 'Recommended',
      link: '/dashboard/post_view/posts/recommended_posts'

    }
  ]

  return (
    <section className="w-full grid  grid-rows-[96px_1fr] gap-4 min-h-[100vh] max-w-[100%] relative bg-[rgba(240,240,240)]">
     <div className="grid  gap-2">
     <SubDashboardHeader className="">Posts</SubDashboardHeader>
     <SubDashboardBar className="">
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