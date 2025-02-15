
import { BiChat, BiNews } from "react-icons/bi"
import { BsHouse } from "react-icons/bs"
import { TbUsersGroup } from "react-icons/tb"

const iconMap = {
    chat: BiChat,
    match: TbUsersGroup,
    newsletter: BiNews,
    advert: BsHouse
  
  
  }

const Features = () => {

    const featuresItem = [
        {
            title: 'Smart Match',
            description: 'AI-powered compatibility matching',
            type: 'march'
        },
        {
            title: 'Instant Chat',
            description: 'Real-time connection with potential co-renters',
            type: 'chat'
        },
        {
            title: 'Post',
            description: 'Post spaces to find renters or co-renters',
            type: 'advert'
        },
        {
            title: 'Tips',
            description: 'Get tips on how to get along with co-renters',
            type: 'newsletter'
        }
    ]

    return (
        <div className="grid grid-rows-[auto_1fr] wrapper">
            <h2 className="text-lg md:text-2xl text-center">Key <span className="text-orange-500">Features</span></h2>
            <div className="grid grid-cols-2 pt-8 gap-8 lg:pt-[10rem] items-center justify-center">
                {
                    featuresItem.map(({ title, description }, i) => (
                        <Card key={i} title={title} description={description} index={i} />
                    )

                    )
                }
            </div>
        </div>
    )
}

export default Features


function Card({ title, description, index }: { title: string, description: string, index:number }) {

    const type = index == 0 ? 'match'
      : index == 1 ? 'chat' 
      : index == 2 ? 'advert' : 'newsletter'
  const Icon = iconMap[type];

    return (
        <div className="grid">
            <div className="grid gap-1">
                <div className="flex gap-2">
                    <h2 className="text-base md:text-lg font-medium text-black">{title}</h2>
                    {
                        Icon ? <Icon className="h-8 w-8 text-orange-500 pb-2"/> : null
                    }
                </div>
                <p className="text-sm md:text-base text-gray-600">{description}</p>
            </div>
             
        </div>
    )


}