import BioData from "./BioData"

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

const PersonalInfo = ({profile}:{profile:Profile}) => {
   
    const {first_name, middle_name, last_name} = profile

  return (
    <div className="px-5 md:px-14 lg:px-20 flex flex-col justify-center w-full items-center">
        <BioData first_name={first_name} middle_name={middle_name} last_name={last_name}/>
    </div>
  )
}

export default PersonalInfo