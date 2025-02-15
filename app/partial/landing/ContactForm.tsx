
import Underline from "../Underline"
import MessageForm from "../forms/MessageForm"


const ContactForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full pl-6">
      <div className="">
        <h1 className="text-white/90 text-medium uppercase w-max pb-4">Leave A message</h1>
        <Underline className="w-[4rem] mb-4" />
      </div>
      <div className="">
        <div className="borde xs:w-full sm:w-full md:w-[25rem]">
          <MessageForm />
        </div>
        
      </div>

    </div>
  )
}

export default ContactForm