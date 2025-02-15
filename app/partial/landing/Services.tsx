
import { FcAdvertising } from "react-icons/fc"
import { TbUsersGroup } from "react-icons/tb"
import RichLink from "../RichLink";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import { MdSplitscreen } from "react-icons/md";
import { MdOutlineSafetyCheck } from "react-icons/md";

const iconMap = {
    advert: FcAdvertising,
    safety: MdOutlineSafetyCheck,
    match: TbUsersGroup,
    split: MdSplitscreen
};




const Services = () => {
    const services = [
        {
            title: 'Safety First',
            description: 'Choose from a community of 100% verified users.',
            type: 'safety',
            href: '/policy', 
            text: 'Read Policy'

        },
        
        {
            title: 'Rent Splitting',
            description: 'Easily find co-renters, share your space and split rent.',
            type: 'split',
            href: '/how_it_works', 
            text: 'Split Rent'

        },
        {
            title: 'Smart Matching',
            description: 'Get personality-based matching.',
            type: 'match',
            href: '/get_match', 
            text: 'Get Matched'

        },

        {
            title: 'Post spaces',
            description: 'Post your space and get a co-renter 100% perfect for you.',
            type: 'advert',
            href: '/post_spaces',
            text: 'Post Spaces'
        },
        
    ]
    return (
        <SectionWrapper className="px-4 md:px-8 bg-white/70 py-[8rem] grid wrapper lg:px-16">
            <SectionHeading text="Why using our platform" className="mb-12"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between flex-nowrap">
                {
                    services.map(({ title, description, href, text }, i) => (
                        <div key={i} className="px-4">
                            <Card title={title} description={description} index={i} href={href} text={text}/>
                            

                        </div>
                    ))
                }
            </div>
        </SectionWrapper>
    )
}

export default Services



function Card({ title, description, index, href, text }: { title: string, description: string, href:string, text:string, index: number }) {
    const type = index == 0 ? 'safety'
        : index == 1 ? 'split' 
        : index == 2 ? 'match' : 'advert'

    const Icon = iconMap[type];

    return (

        <div className="flex gap-2 flex-1">
            <div className="">
                {
                    Icon ? <Icon className="h-8 w-8 text-blue-950" /> : null
                }
            </div>
            <div className="grid gap-2">
                <h2 className="text-base md:text-lg text-orange-500 capitalize">{title}</h2>
                <p className="text-sm md:text-base text-gray-500">{description}</p>
                <div className="flex justify-start">
                                <RichLink href={href} text={text} className="" />
                </div>
            </div>

        </div>
    )

}