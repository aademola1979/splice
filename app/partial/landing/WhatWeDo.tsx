
import Home1 from '@/public/images/home1.jpg'
import Image from 'next/image'
import Facts from './Facts'
import SectionHeading from '../SectionHeading'
import SectionWrapper from '../SectionWrapper'


const WhatWeDo = () => {
    return (
        <SectionWrapper className="bg-white/70 ">
           <SectionHeading className='mb-12' text='What We Offer'/>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className='col-span-1 p-4 flex justify-center items-center'>
                <Image src={Home1} alt='home' height={100} width={200} sizes='250'
                    className='rounded-3xl aspect-square' />

            </div>
            <div className='col-span-2 grid gap-4 px-4 md:px-8 lg:px-16'>
                <h3 className='text-2xl md:4xl font-medium text-black/90'>We help you to cut your rent in half or more</h3>
                <div className="">
                    <p className='text-gray-600'> With our sophisticated matching algorithm, you can be matched with a perfect person to share your space and rent with; and therefore, cut your rent by more than 50%.</p>
                    <p className='text-gray-600'>Trusted by 10,000+ students across 50+ higher institutions, you too can use Split Space to find your perfect co-living match and save up to 60% on rent.</p>
                </div>
                <Facts />
            </div>
        </div>
        </SectionWrapper>
    )
}

export default WhatWeDo