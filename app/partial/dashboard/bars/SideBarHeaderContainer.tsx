import Logo from "../../Logo"
import SideBarHeader from "./SideBarHeader"


const SideBarHeaderContainer = ({header_text}:{header_text:string}) => {
  return (
    <div className="inline-flex justify-between w-full">
    <Logo className="w-5 h-5 mt-2" />
    <SideBarHeader className="">
        {header_text}
    </SideBarHeader>
</div>
  )
}

export default SideBarHeaderContainer