/* eslint-disable @next/next/no-img-element */
import siteMetadata from '@/lib/utility/siteMetadata'

import { FaXTwitter } from 'react-icons/fa6';

import Image from "next/image"



const SocialMedia = ({x}:{x:string}) => {
  return (
    <div className=" justify-center">
      <div className="flex gap-4">
        <a href={siteMetadata.linkedin} className="h-5 w-5 aspect-square rounded hover:scale-125 cursor-pointer transition-all ease-in-out duration-200" target="_blank">
          <img src="/images/LinkedIn.png" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} />
        </a>
        <a href={siteMetadata.instagram} className="h-5 w-5 aspect-square rounded hover:scale-125 cursor-pointer transition-all ease-in-out duration-200 " target="_blank">
          <Image src="/images/instagram.jpg" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} priority sizes='50'/>
        </a>
        <a href={siteMetadata.twitter} className="h-5 w-5 aspect-square rounded hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer" target="_bank">
          <FaXTwitter className={`${x} h-full w-full aspect-square rounded`} height={40} width={40}/>
        </a>
        <a href={siteMetadata.facebook} className="h-5 w-5 aspect-square rounded hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer" target="_blank">
          <Image src="/images/facebook.svg" alt="facebook" className="h-full w-full aspect-square rounded" height={40} width={40} priority sizes='50'/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia