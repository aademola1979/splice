'use client'

import {
    Sheet, SheetTrigger, SheetContent,
    SheetClose, SheetTitle,
    SheetDescription,

} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "@/app/partial/SocialMedia";
import { Menu } from "lucide-react";
import Logo from "../Logo";
/*import { Contact2, HomeIcon, Menu, SearchCheckIcon } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";
import { TbBuildingCommunity } from "react-icons/tb";
import { MdPrivateConnectivity } from "react-icons/md";
import { FcAbout, FcPrivacy } from "react-icons/fc";*/

type Item = {
    text: string,
    link: string,
    color?: string
}

const MobileNav = () => {

    const pathname = usePathname()



    const traditionalNavItmes = [
        {
            text: "Home",
            link: "/",
            color: "bg-orange-500"
        },
        {
            text: "About",
            link: "/about",
            color: ""
        },

        {
            text: "Contact",
            link: "/contact",
            color: "bg-orange-200"
        },

    ]

    const realDealItems = [
        {
            text: "How It Works",
            link: "/how_it_works",
            color: "bg-blue-500"
        },
        {
            text: "Search For Co-renters",
            link: "/find_partners",
            color: ""
        },
        {
            text: "Search Neighbourhood",
            link: "/find_spaces",
            color: "bg-blue-700"
        },
        {
            text: "Get Match",
            link: "/get_match",
            color: "bg-rose-200"
        },
    ]

    const specialItems = [


        {
            text: "Community",
            link: "/community",
            color: "bg-orange-500"
        },
        {
            text: 'Career',
            link: '/career',
            color: ''
        },

        {
            text: "Pricing",
            link: "/pricing",
            color: "bg-blue-300"
        },
        {
            text: "Policy",
            link: "/policy",
            color: "bg-orange-200"
        },
        {
            text: "Privacy",
            link: "/privacy",
            color: "bg-blue-600"
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
                <SheetContent side="left" className="min-h-[100vh] overflow-x-auto pt-4 flex flex-col justify-between gap-4 bg-myblue ">
                    <div className="flex flex-col gap-4">
                        <div className="w-full border-b pb-2">
                            <Logo className="h-[1.75rem] w-[2rem]" />
                        </div>
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
                <div className={`${pathname === item.link ? " text-mybluetwo" : "text-white/90"} p-1  w-max flex gap-4 items-center`}>
                    <span className={`${item.color ? item.color : "bg-white"} h-2 w-2 rounded-full aspect-square pt-1`}></span>
                    <span className="border-b border-transparent hover:border-white">{item.text} </span>
                </div>
            </Link>
        </SheetClose>
    )

}