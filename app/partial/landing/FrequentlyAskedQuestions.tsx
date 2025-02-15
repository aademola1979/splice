import SectionHeading from "../SectionHeading"
import SectionWrapper from "../SectionWrapper"
import faqs from "@/public/data/faq"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import Underline from "../Underline"

const FrequentlyAskedQuestions = () => {
    
  return (
    <SectionWrapper className="bg-white/80">
        <SectionHeading text="FAQ" className="pb-12"/>
        <div className="mb-8">
            <h3 className="text-2xl font-semibold flex justify-center gap-2 capitalize" >
                <span className="text-orange-500">questions?</span> 
                <span>Look here</span>
            </h3>
            <div className="flex w-full justify-center">
            <Underline className="w-[5rem] pt-2"/>
            </div>
            
        </div>
        <div className="w-full">
            <Accordion type="single" collapsible className="w-full grid gap-4 shadow rounded-md">
                {
                    faqs.slice(0, 5).map(({question, response}, i)=>(
                        <AccordionItem key={i} value={question} className="bg-white/70 py-2 px-4 md:px-8 rounded-md">
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent className="bg-slate-100 py-4 p-2 text-black/80 rounded-sm text-xs lg:text-sm">{response}</AccordionContent>

                        </AccordionItem>
                    ))
                }

            </Accordion>

        </div>

    </SectionWrapper>
  )
}

export default FrequentlyAskedQuestions