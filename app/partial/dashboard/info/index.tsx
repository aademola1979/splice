import AddressInfo from "./AddressInfo"
import PersonalInfo from "./PersonalInfo"


type Profile = {
    first_name:string, 
    middle_name:string, 
    last_name: string, 
    email: string, DOB: string, 
    telephone: string, 
    street:string, 
    city: string, 
    lga_name: string, 
    state_name: string, 
    zone_name: string
}

const Info = ({profile}:{profile:Profile}) => {
   
    const {first_name, middle_name, last_name, email, telephone, DOB, 
      street, city, state_name, zone_name, lga_name} = profile
    
    const addressDetails = {street, city, state_name, zone_name, lga_name }

    const infoDetails = {first_name, middle_name, last_name, email, telephone, DOB}

  return (
    <div className="px-5 md:px-14 lg:px-20 flex flex-col gap-8 justify-center w-full items-center">
        <PersonalInfo infoDetails={infoDetails}/>
        <AddressInfo address={addressDetails}/>

    </div>
  )
}

export default Info