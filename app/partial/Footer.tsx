import CopyRight from "@/app/partial/CopyRight"
import CallToAction from "./landing/CallToAction"


const Footer = () => {
  return (
    <footer className=''>
      <CallToAction />
      <CopyRight className="text-gray-500"/>
    </footer>
  )
}

export default Footer