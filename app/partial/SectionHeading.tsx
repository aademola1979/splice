
import { BsDashLg } from 'react-icons/bs'

const SectionHeading = ({text, className}:{text:string, className:string}) => {
    return (
        <div className={`${className} w-full font-bold flex justify-start`}>
            <span className="pt-1"><BsDashLg className='text-orange-600 text-[3rem] pb-6 font-bold' /></span>
            <h1 className="flex font-bold capitalize text-base md:text-lg lg:text-xl">
                {text}
            </h1>
        </div>
    )
}

export default SectionHeading