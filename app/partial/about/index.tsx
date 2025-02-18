import SectionWrapper from "../SectionWrapper"
import ContactInfo from "./ContactInfo"
import Mission from "./Mission"
import Vision from "./Vision"


const AboutPage = () => {
  return (
    <SectionWrapper className="pt-12">
        <Mission />
        <Vision />
        <ContactInfo />
    </SectionWrapper>
  )
}

export default AboutPage