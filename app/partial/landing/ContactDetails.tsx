
import { FaLocationDot } from "react-icons/fa6"
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import SocialMedia from "../SocialMedia";
import Underline from "../Underline";


const iconMap = {
    mobile: FaMobileAlt,
    location: FaLocationDot,
    email: MdOutlineAlternateEmail
}

type Detail = {
    text: string,
    type: string,


}

const contactDetails = [
    {
        text: '12, Aba Road, Port Harcourt',
        type: 'location'
    },

    {
        text: `+2347038032454,
              +2340945950212`,
        type: 'mobile'
    },

    {
        text: 'korent@gmail.com',
        type: ''
    }
]

const ContactDetails = () => {


    return (
        <div className="grid grid-rows-[auto_1fr] gap-4">
            <div className="">
                <h1 className="text-white/90 text-medium uppercase w-max pb-4">address information</h1>
                <Underline className="w-[6rem] mb-4" />

            </div>
            <div className="flex flex-col justify-between">

                <div className="flex flex-col justify-center gap-4">
                    {
                        contactDetails.map((detail, i) => (
                            <Card key={i} detail={detail} index={i} />
                        ))
                    }

                </div>
                <div className="mt-4">
                    <SocialMedia x="" />
                </div>
            </div>

        </div>
    )
}

export default ContactDetails


const Card = ({ detail, index }: { detail: Detail, index: number }) => {

    const { text } = detail;

    const icon = index == 0 ? 'location'
        : index == 1 ? 'mobile' : 'email'

    const Icon = iconMap[icon]



    return (
        <div className="flex gap-2">
            <span className="pt-1">
                {
                    Icon ? <Icon className="text-orange-400" /> : null
                }
            </span>
            <p className="text-white/60 text-sm">{text}</p>
        </div>
    )

}