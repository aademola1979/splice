import Link from "next/link"
import Underline from "../Underline"



const Menu = () => {
    const items = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'About',
            link: '/about'
        },
        {
            text: 'Contact',
            link: '/contact'
        },
        {
            text: 'Login',
            link: '/login'
        },
        {
            text: 'Join',
            link: '/join'
        },
        {
            text: 'Pricing',
            link: '/pricing'
        },
        {
            text: 'How It Works',
            link: '/how_it_works'
        },
        {
            text: 'Community',
            link: '/community'
        },
        {
            text: 'Career',
            link: '/career'
        },
        {
            text: 'Policy',
            link: '/policy'
        },
        {
            text: 'Privacy',
            link: '/privacy'
        }
    ]
    return (
        <div className="flex flex-col gap-4">
            <div className="">
                <h1 className="uppercase w-max text-lg font-medium text-white/80 pb-4">
                    Menu
                </h1>
                <Underline className="w-[6rem] mb-4" />

            </div>

            <div className="flex flex-col gap-1">
                {
                    items.map(({ text, link }, i) => (

                        <Link key={i} href={link} className="text-sm w-max text-white/60 border-b border-transparent hover:border-orange-500">
                            {text}
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}

export default Menu