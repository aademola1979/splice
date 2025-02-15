import SectionHeading from '@/app/partial/SectionHeading'
import SectionWrapper from '@/app/partial/SectionWrapper'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { categorisedFaqs } from '@/public/data/faq'


const ApplicantFaqsPage = () => {
    const faqs = categorisedFaqs[0].applicants
  return (
    <SectionWrapper className=''>
        <SectionHeading text={`applicants\' Frequently asked questions`}  className=''/>
        <p className='p-2 text-gray-500 text-sm md:text-base'>This list of frequently asked questions and responses is provided for your convenience. 
            In case none of them meets your specific need, kindly reach out to our support team. </p>
        <Accordion type="single" collapsible className="w-full grid gap-4 shadow rounded-md">
                {
                    faqs.map(({question, response}, i)=>(
                        <AccordionItem key={i} value={question} className="bg-white/70 py-2 px-4 md:px-8 rounded-md">
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent className="bg-gray-50 p-2 text-black/80">{response}</AccordionContent>

                        </AccordionItem>
                    ))
                }

            </Accordion>
    </SectionWrapper>
  )
}

export default ApplicantFaqsPage