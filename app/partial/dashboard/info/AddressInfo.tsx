
import InfoCardWrapper from "../InfoCardWrapper"
import InfoContainer from "../InfoContainer"
import InfoLabel from "../InfoLabel"
import InfoText from "../InfoText"
import { Edit } from "lucide-react"
import { MdDeleteOutline } from "react-icons/md"

type Address = {
  street: string,
  city: string,
  lga_name: string,
  state_name: string,
  zone_name: string
}

const AddressInfo = ({ address }: { address: Address }) => {
  const { city, street, lga_name: LGA, state_name: state, zone_name: zone } = address
  return (
    <div className="grid gap-4 min-w-full">
      <h3 className="font-semibold text-xl">Address Info</h3>
      <InfoCardWrapper className="border-blue-600">
        <div className="flex flex-col gap-3">
          <InfoContainer className="">
            <InfoLabel className="">Street:</InfoLabel>
            <InfoText className="">{street}</InfoText>
          </InfoContainer>
          <InfoContainer className="">
            <InfoLabel className="">City:</InfoLabel>
            <InfoText className="">{city}</InfoText>
          </InfoContainer>
          <InfoContainer className="">
            <InfoLabel className="">LGA:</InfoLabel>
            <InfoText className="">{LGA}</InfoText>
          </InfoContainer>
          <InfoContainer className="">
            <InfoLabel className="">State:</InfoLabel>
            <InfoText className="">{state}</InfoText>
          </InfoContainer>
          <InfoContainer className="">
            <InfoLabel className="">Zone:</InfoLabel>
            <InfoText className="">{zone}</InfoText>
          </InfoContainer>
        </div>
        <div className="flex flex-col gap-1 font-thin">
          <button className="p-1 border text-gray-700 hover:border-gray-400">
            <Edit className="h-5 w-5 text-gray-700" />
          </button>
          <button className="p-1 border hover:border-gray-400">
            <MdDeleteOutline className="h-5 w-5 text-gray-700" />
          </button>

        </div>

      </InfoCardWrapper>
    </div>
  )
}

export default AddressInfo