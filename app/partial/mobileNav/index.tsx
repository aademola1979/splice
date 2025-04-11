'use client'

import {
    Sheet, SheetTrigger, SheetContent,
    SheetClose, SheetTitle,
    SheetDescription,

} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "@/app/partial/SocialMedia";
import Logo from "../Logo";
import { Contact, HomeIcon, Menu, SearchCheckIcon } from "lucide-react";
import { FaMagnifyingGlass, FaUserGroup } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";
import { MdOutlineWorkspacePremium, MdPolicy, MdPriceChange} from "react-icons/md";
import { FcAbout, FcPrivacy } from "react-icons/fc";

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
            color: ""
        },
        {
            text: "About",
            link: "/about",
            color: "text-green-300"
        },

        {
            text: "Contact",
            link: "/contact",
            color: "text-green-400"
        },

    ]

    const realDealItems = [
        {
            text: "How It Works",
            link: "/how_it_works",
            color: "text-blue-500"
        },
        {
            text: "Search For Co-renters",
            link: "/find_partners",
            color: ""
        },
        {
            text: "Search Neighbourhood",
            link: "/find_spaces",
            color: "text-blue-700"
        },
        {
            text: "Get Match",
            link: "/get_match",
            color: "text-rose-200"
        },
    ]

    const specialItems = [


        {
            text: "Community",
            link: "/community",
            color: "text-orange-500"
        },

        {
            text: "Pricing",
            link: "/pricing",
            color: "text-blue-300"
        },
        {
            text: "Policy",
            link: "/policy",
            color: "text-orange-200"
        },
        {
            text: "Privacy",
            link: "/privacy",
            color: "text-blue-600"
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
                                    <TraditionalItemsCard key={i} item={item} />

                                ))
                            }
                        </div>

                        <div className=" grid gap-2 border-b pb-4">
                            {
                                realDealItems.map((item: Item, i) => (
                                    <RealDealsCard key={i} item={item} />

                                ))
                            }
                        </div>

                        <div className=" grid gap-2 border-b pb-4">
                            {
                                specialItems.map((item: Item, i) => (
                                    <SpecialDealsCard key={i} item={item} />

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


function RealDealsCard({ item }: { item: Item }) {

    const {link, text, color} = item

    const pathname = usePathname()

    return (
        <SheetClose asChild>
            <Link href={link} className={`${pathname === link ? "bg-blue-100 text-myblue" : ""} `}>
                <div className={`${pathname === link ? " text-mybluetwo" : "text-white/90"} w-max grid grid-cols-[2rem_1fr]`}>
                    <span className={`${color ? color : "text-white"}`}>
                        {
                            text == "How It Works" ?
                            (<MdOutlineWorkspacePremium />):
                            text == "Search For Co-renters" ?
                            (<SearchCheckIcon className="w-4 h-4"/>) :
                            text == "Search Neighbourhood" ?
                            (<FaMagnifyingGlass/>):
                            (<FaUserGroup/>)
                        }

                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-sm">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )

}


function TraditionalItemsCard({ item }: { item: Item }) {

    const {text, link, color} = item

    const pathname = usePathname()

    return (
        <SheetClose asChild>
            <Link href={link} className={`${pathname === link ? "bg-blue-100 text-myblue" : ""} `}>
                <div className={`${pathname === link ? " text-mybluetwo" : "text-white/90"} p-1  w-max grid grid-cols-[2rem_1fr]`}>
                    <span className={``}>
                        {
                            text == "Home" ?
                            (<HomeIcon className={`${color ? color : "text-white"} w-[18px] h-[18px]`}/>):
                            text == "Contact" ?
                            (<Contact className={`${color ? color : "text-white"} w-[18px] h-[18px]`}/>):
                            (<FcAbout />)
                        }
                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-sm">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )

}



function SpecialDealsCard({ item }: { item: Item }) {

    const {text, link, color} = item

    const pathname = usePathname()

    return (
        <SheetClose asChild>
            <Link href={link} className={`${pathname === link ? "bg-blue-100 text-myblue" : ""} `}>
                <div className={`${pathname === link ? " text-mybluetwo" : "text-white/90"} p-1  w-max grid grid-cols-[2rem_1fr]`}>
                    <span className={``}>
                        {
                            text == "Community" ?
                            (<CgCommunity className={`${color ? color : "text-white"} w-[18px] h-[18px]`}/>):
                            text == "Privacy" ?
                            (<FcPrivacy className={`${color ? color : "text-white"} w-[18px] h-[18px]`}/>):
                            text == "Pricing" ?
                            (<MdPriceChange />) :
                            (<MdPolicy/>)
                        }
                    </span>
                    <span className="border-b border-transparent hover:border-white font-sans text-sm">{text} </span>
                </div>
            </Link>
        </SheetClose>
    )

}