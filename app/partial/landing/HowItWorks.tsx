
import { GroupIcon, PencilLineIcon } from "lucide-react"
import { CgProfile } from "react-icons/cg"
import { TbUsersGroup } from "react-icons/tb"
import Features from "./Features"
import SectionHeading from "../SectionHeading"
import SectionWrapper from "../SectionWrapper"
import RichLink from "../RichLink"




const cardItems = [
  {
    title: 'Sign Up',
    description: 'Create an account if you don\'t already have one and log into your account to complete your registration.',
    type: "sign-up"
  },
  {
    title: 'Create Profile and Add Preferences',
    description: 'Create your profile and tell us your preferences and lifestyles',
    type: "create"
  },

  {
    title: 'Get Recommendations',
    description: 'Get recommendations from our list of more than 10,000 co-renter seekers',
    type: "recommendation"
  },

  {
    title: 'Connect',
    description: 'Connect with compatible co-renter(s), share space, split costs and save more than half of your rent costs',
    type: "connect"
  },
  


]

const iconMap = {
  sign_up: PencilLineIcon,
  create: CgProfile,
  recommendation: GroupIcon,
  connect: TbUsersGroup,


}


const HowItWorks = () => {
  return (
    <SectionWrapper className="bg-white/85 py-16 flex flex-col px-2 md:px-8 lg:px-16">
      <SectionHeading className="mb-12" text="How It Works"/>

      <div className="grid lg:flex gap-8 flex-wrap px-4">

        <div className="flex-1">
          <div className="flex justify-center w-full px-4 md:px-8">
            <h2 className="text-lg md:text-xl font-semibold mb-8">4 Simple Steps to <span className="text-orange-500">Shared Success: </span><span>A Step-by-Step Guide </span></h2>
          </div>
          <div className="flex flex-col gap-6 pr-0 md:pr-12">
            {
              cardItems.map(({ title, description }, i: number) => (
                <Card key={i} title={title} description={description} index={i} />
              ))
            }
          </div>
        </div>
        <div className="flex-1"><Features /></div>
      </div>
      <div className="flex justify-center pt-8 px-8">
        <RichLink href="/how_it_works" text="Read More" className=""/>
      </div>
    </SectionWrapper>
  )
}

export default HowItWorks


function Card({ title, description, index }: { title: string, description: string, index: number }) {

  const type = index == 0 ? 'sign_up'
    : index == 1 ? 'create'
      : index == 2 ? 'recommendation' : 'connect'
  const Icon = iconMap[type];

  return (
    <div className="grid grid-cols-[3rem_1fr] gap-4 group">
      <div className={`aspect-square flex justify-center items-center rounded-full ${index == 0 ? 'bg-myblue' : 'bg-gray-200/50'}`}>
        {Icon ? <Icon className={`w-5 h-5 text-orange-500 ${index == 0 ? 'text-white' : ''}`} /> : null}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h2 className="font-medium text-lg text-black">{title}</h2>
        <p className="text-sm md:text-base text-gray-600">{description}</p>

      </div>
    </div>
  )



}