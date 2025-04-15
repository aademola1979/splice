'use client'
import React from 'react'
import SideBarContainer from '../SideBarContainer'
import Link from 'next/link'
import SubDashboardHeader from '../../SubDashboardHeader'
import { CgProfile } from 'react-icons/cg'
import { ArrowLeft, HomeIcon, InfoIcon } from 'lucide-react'
import { MdRoomPreferences } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import SidebarLinkContainer from '../../SidebarLinkContainer'
import { profileSidebarItems } from '@/lib/data'
import Logo from '@/app/partial/Logo'

const ProfileSidebar = () => {
  const pathname = usePathname()



  return (
    <SideBarContainer className="hidden md:block">
      <div className="inline-flex justify-between w-full">
        <Logo className='mt-2 h-5 w-5'/>
      <Link href='/dashboard/profile_view'>
        <SubDashboardHeader className="text-2xl flex gap-4 mb-4">
          <span className="pt-1 text-blue-400"><CgProfile /></span>
          <span>Profile</span>
        </SubDashboardHeader>
      </Link>
      </div>
      <div className="flex flex-col gap-2 text-myblue/80">
        {
          profileSidebarItems.map(({ text, link }, i) => (
            <Link key={i} href={link}
              className={`1 grid grid-cols-[2rem_1fr] px-2 text-base rounded border-l-4
                    ${link == pathname ? "border-blue-700" : "border-white"} group`}>
              {
                text == "Profile" ?
                  (<SidebarLinkContainer className="" link={link}><HomeIcon className='' /></SidebarLinkContainer>) :
                  text == "Preferences" ?
                    (<SidebarLinkContainer className="" link={link}><MdRoomPreferences
                      className="w-5 h-5" /></SidebarLinkContainer>) :
                    text == "Personal Info" ?
                      (<SidebarLinkContainer className="" link={link}><InfoIcon className="h-5 w-5" /></SidebarLinkContainer>) :
                      (<SidebarLinkContainer className="" link={link}><ArrowLeft className='' /></SidebarLinkContainer>)
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

export default ProfileSidebar