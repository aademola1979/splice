'use client'

import {
    Sheet, SheetTrigger, SheetContent,
    SheetClose, SheetTitle,
    SheetDescription,

} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "@/app/partial/SocialMedia";
import { Menu} from "lucide-react";
/*import { Contact2, HomeIcon, Menu, SearchCheckIcon } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdPrivateConnectivity } from "react-icons/md";
import { FcAbout, FcPrivacy } from "react-icons/fc";*/

type Item = {
    text: string,
    link: string,
    icon?: React.ReactNode
}

const MobileNav = () => {

    const pathname = usePathname()

    const traditionalNavItmes = [
        {
            text: "Home",
            link: "/",
            icon: ""
        },
        {
            text: "About",
            link: "/about",
            icon: ""
        },

        {
            text: "Contact",
            link: "/contact",
            icon: ""
        },

    ]

    const realDealItems = [
        {
            text: "How It Works",
            link: "/how_it_works",
            icon: ""
        },
        {
            text: "Search For Co-renters",
            link: "/findpartners",
            icon: ""
        },
        {
            text: "Search Neighbourhood",
            link: "/find_spaces",
            icon: ""
        },
        {
            text: "Get Match",
            link: "/get_match",
            icon: ""
        },
    ]

    const specialItems = [

    
        {
            text: "Community",
            link: "/community",
            icon: ""
        },
        {
            text: 'Career',
            link: '/career',
            icon: ''
        },

        {
            text: "Pricing",
            link: "/pricing",
            icon: ""
        },
        {
            text: "Policy",
            link: "/policy",
            icon: ""
        },
        {
            text: "Privacy",
            link: "/privacy",
            icon: ""
        },

    ]




    return (
        <div className="">
            <Sheet >
                <SheetTrigger asChild className="" >
                    <Menu className={`block md:hidden text-xl ${pathname === '/' ? 'text-white' : 'text-myblue'}`} />
                </SheetTrigger>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <SheetContent side="left" className="min-h-[100vh] overflow-x-auto pt-[4rem] flex flex-col justify-between gap-4 bg-myblue ">
                    <div className="flex flex-col gap-4">
                        <div className=" grid gap-2 border-b pb-4">
                            {
                                traditionalNavItmes.map((item: Item, i) => (
                                    <Card key={i} item={item} />

                                ))
                            }
                        </div>

                        <div className=" grid gap-2 border-b pb-4">
                            {
                                realDealItems.map((item: Item, i) => (
                                    <Card key={i} item={item} />

                                ))
                            }
                        </div>

                        <div className=" grid gap-2 border-b pb-4">
                            {
                                specialItems.map((item: Item, i) => (
                                    <Card key={i} item={item} />

                                ))
                            }
                        </div>
                    </div>
                    <div className="self-end flex justify-center  w-full">
                        <SocialMedia x="text-white" />
                    </div>
                </SheetContent>
            </Sheet>
            
        </div>
    )
}

export default MobileNav


function Card({ item }: { item: Item }) {

    const pathname = usePathname()

    return (
        <SheetClose asChild>
            <Link href={item.link} className={`${pathname === item.link ? "bg-blue-100 text-myblue" : ""} `}>
                <div
                    className={`${pathname === item.link ? " text-mybluetwo" : "text-white/90"} p-1 border-b border-transparent hover:border-white w-max`}
                >
                    {item.text}

                </div>
            </Link>
        </SheetClose>
    )

}