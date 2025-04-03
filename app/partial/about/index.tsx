import SectionWrapper from "../SectionWrapper"
import ContactInfo from "./ContactInfo"
import Mission from "./Mission"
import Vision from "./Vision"


const AboutPage = () => {
  return (
    <SectionWrapper className="pt-[4rem]">
        <Mission />
        <Vision />
        <ContactInfo />
    </SectionWrapper>
  )
}

export default AboutPage