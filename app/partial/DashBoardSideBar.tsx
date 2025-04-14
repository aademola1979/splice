'use client'

import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import Logo from "./Logo";
import React from "react";
import { FcMenu } from "react-icons/fc";

const DashBoardSideBar = ({ children }: { children: React.ReactNode }) => {


    return (

        <Sheet>

            <div className="flex justify-between px-3">
                <Logo className="h-5 w-6" />
                <SheetTrigger asChild className="" >
                    <FcMenu className={`block md:hidden text-xl`} />
                </SheetTrigger>

            </div>

            <SheetTitle className="hidden"></SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
            <SheetContent x_style="" side="left" className="min-h-[100vh] w-full pt-4 ">
                <div className="grid grid-rows-[auto_1fr] h-full">
                    <div className="w-full mb-4">
                        <Logo className="h-[1.75rem] w-[2rem]" />
                    </div>

                    <div className="">{children}</div>

                </div>

            </SheetContent>
        </Sheet>
    )
}

export default DashBoardSideBar


