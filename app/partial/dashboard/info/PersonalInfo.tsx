import { Edit } from "lucide-react"
import InfoCardWrapper from "../InfoCardWrapper"
import InfoContainer from "../InfoContainer"
import InfoLabel from "../InfoLabel"
import InfoText from "../InfoText"
import { MdDeleteOutline } from "react-icons/md"

type PersonalInfoDetails = {
    first_name: string,
    middle_name?: string,
    last_name: string,
    email: string,
    DOB: string,
    telephone: string

}

const PersonalInfo = ({ infoDetails }: { infoDetails: PersonalInfoDetails }) => {

    const { first_name, middle_name, last_name, email, DOB, telephone } = infoDetails
    return (
        <div className="grid gap-4 min-w-full">
            <h3 className="font-semibold text-xl">Personal Info</h3>
            <InfoCardWrapper className="border-orange-500">
                <div className="flex flex-col gap-3">
                    <InfoContainer className="">
                        <InfoLabel className="">Full Name</InfoLabel>
                        <InfoText className="flex gap-1">
                            <span className="">{first_name}</span>

                            {
                                middle_name && (

                                    <span className="">{middle_name}</span>
                                )
                            }


                            <span className="">{last_name}</span>
                        </InfoText>

                    </InfoContainer>

                    <InfoContainer className="flex gap-1">
                        <InfoLabel className="">Email:</InfoLabel>
                        <InfoText className="">{email}</InfoText>
                    </InfoContainer>
                    <InfoContainer className="">
                        <InfoLabel className="">DOB:</InfoLabel>
                        <InfoText className="">{DOB}</InfoText>
                    </InfoContainer>
                    <InfoContainer className="">
                        <InfoLabel className="">Tel:</InfoLabel>
                        <InfoText className="">{telephone}</InfoText>
                    </InfoContainer>
                </div>
                <div className="flex flex-col gap-1">
                    <button className="p-1 border text-gray-700 hover:border-gray-400">
                        <Edit className="h-5 w-5 text-gray-700 hover:border-gray-400" />
                    </button>
                    <button className="p-1 border hover:border-gray-400">
                        <MdDeleteOutline className="h-5 w-5 text-gray-700" />
                    </button>
                </div>
            </InfoCardWrapper>
        </div>
    )
}

export default PersonalInfo