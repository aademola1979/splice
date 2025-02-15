/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import SectionHeading from "../SectionHeading"
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"

import SectionWrapper from "../SectionWrapper"

const Testimonials = () => {
    const testimonials = [
        {
            name:'Ademola Adeniji',
            position:'CEO',
            company:'KoRent',
            message:`We engaged our platform to secure and an office and co-renter for KoRent. 
            It has been a wonderful experience sharing an office and rent with Mr. Moses. We've been able to save money on rent and this has helped us greatly as a start-up business.`,
            image:'/images/CEO.JPG'
        },

        /*{
            name:'Moses Uche',
            position:'CEO',
            company:'PragmaTech',
            message:'I stumbled on KoRent platform at a time i desperately needed an office and had only a little amount. Co-renting with Mr Ademola, CEO of KoRent bailed me out of that situation.',
            image:'images/moses.jpg'
        }*/

    ]
    return (
        <section className="w-full h-[32rem] relative">
            <Image src={'/images/testimonial_bg.jpg'} alt="testimonial" height={150} width={250}
            sizes="500" priority
                className="w-full h-full"/>
            <SectionWrapper className="absolute grid z-30  text-white top-0 right-0 left-0 bottom-0 bg-myblue/80 ">
                
                <div className="grid grid-rows-[auto_auto_1fr] gap-4">
                    <SectionHeading className="" text="Testimonials" />
                    
                    <div className="flex items-center justify-center">
                        {
                            testimonials.map((testimonial, i)=>(
                                <TestimonialCard key={i} testimonial={testimonial}/>

                            ))
                        }
                        
                    </div>
                </div>

            </SectionWrapper>

        </section>
    )
}

export default Testimonials


/*const TestimonialIntro = () => {
    return (
        <div className="flex w-full justify-center">
            <p className="text-xs text-center max-w-[35rem]">
                Hear What our users are saying about co-living; how co-living has helped them to save cash to spend on other things, such as investments, rather than rents.
            </p>

        </div>

    )
}*/

type Testimonial = {
    name:string,
    position: string,
    company: string,
    message:string,
    image:string

}


function TestimonialCard({testimonial}:{testimonial:Testimonial}) {
    const {name, position, company, message, image} = testimonial
    return (
        <div className="grid gap-8 items-center justify-center -z-50 p-4 rounded-md">
            
            <div className="w-full flex justify-center">
                <img src={image} alt={position} width={250} height={250} sizes="500"
              className="aspect-square rounded-full h-[8rem] w-[8rem]"/> 
             </div>
            <div className="grid gap-1 justify-center w-full items-center h-full">
                <span className="text-orange-500">{name}</span>
                <span className="text-sm">{position}, {company}</span>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] gap-1">
                <BiSolidQuoteAltLeft className="text-orange-500"/>
                <p className="max-w-[28rem] sm:text-sm xs:text-xs text-sm">
                    {message} 
                </p>
                <BiSolidQuoteAltRight className="self-end text-orange-500"/>

            </div>
        </div>
    )
}