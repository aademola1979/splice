import Link from "next/link"
import Logo from "../Logo"
import SectionWrapper from "../SectionWrapper"
import ContactDetails from "./ContactDetails"
import ContactForm from "./ContactForm"
import Menu from "./Menu"


const CallToAction = () => {

    return (
        <SectionWrapper className="relative w-full bg-myblue">
            <Link href={'/'} className="">
                <Logo className="h-[1.75rem] w-[2rem] md:h-[2.5rem] md:w-[3rem]" />
            </Link>
            <div className="h-full grid  md:pl-0 pt-20">
                <div className="grid detail_form text-white h-full gap-4 pl-6">
                    <div className="flex-1 pl-6 grid gap-8 contactDetail h-full md:flex justify-between ">
                        <Menu />
                        <ContactDetails />
                    </div>
                    <div className=" flex-1 pl-6 contactForm flex justify-center w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
export default CallToAction