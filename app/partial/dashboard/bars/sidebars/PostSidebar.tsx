'use client'
import React from 'react'
import SideBarContainer from '../SideBarContainer'
import Link from 'next/link'
import { ArrowLeft, HomeIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SidebarLinkContainer from '../../SidebarLinkContainer'
import { postItems } from '@/lib/data'
import { CgFileDocument } from 'react-icons/cg'
import { MdCreate, MdEditDocument, MdRecommend } from 'react-icons/md'
import SideBarHeaderContainer from '../SideBarHeaderContainer'

const PostSidebar = () => {
  const pathname = usePathname()



  return (
    <SideBarContainer className="hidden md:block">
      <SideBarHeaderContainer header_text='Post' />
      <div className="flex flex-col gap-2 text-myblue/80">
        {
          postItems.map(({ text, link }, i) => (
            <Link key={i} href={link}
              className={`1 grid grid-cols-[2rem_1fr] text-base px-2 rounded border-l-4 group
                    ${link == pathname ? "border-l-blue-700" : "border-white"}`}>

              {
                text == "Dashboard" ?
                  (<SidebarLinkContainer className="" link={link}><ArrowLeft className='' /></SidebarLinkContainer>) :
                  text == "Post Main Page" ?
                    (<SidebarLinkContainer className="" link={link}><HomeIcon className="w-5 h-5" /></SidebarLinkContainer>) :
                    text == "All Posts" ?
                      (<SidebarLinkContainer className="" link={link}><CgFileDocument className="h-5 w-5" /></SidebarLinkContainer>) :
                      text == "Create Post" ?
                        (<SidebarLinkContainer className="" link={link}><MdCreate className='' /></SidebarLinkContainer>) :
                        text == "My Posts" ?
                          (<SidebarLinkContainer className="" link={link}><MdEditDocument className='' /></SidebarLinkContainer>) :
                          (<SidebarLinkContainer className="" link={link}><MdRecommend className='' /></SidebarLinkContainer>)
              }
              <div className="">
                <span className='border-b border-b-white group-hover:border-b-black'>{text}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </SideBarContainer>
  )
}

export default PostSidebar