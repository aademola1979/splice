import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

type Faqs = {
    question: string,
    response: string

}

type FaqsList = [Faqs]

const AccordionComponent = ({faqs}:{faqs:FaqsList}) => {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-4 shadow rounded-md">
                {
                    faqs.map(({question, response}, i)=>(
                        <AccordionItem key={i} value={question} className="bg-white/70 py-2 px-4 md:px-8 rounded-md">
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent className="bg-gray-100 p-2 text-black/80">{response}</AccordionContent>

                        </AccordionItem>
                    ))
                }

    </Accordion>
  )
}

export default AccordionComponent