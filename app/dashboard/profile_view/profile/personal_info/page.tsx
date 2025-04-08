import PersonalInfo from "@/app/partial/dashboard/personal_info"


const PerosnalInfoPage = async() => {
  const api_base_url = process.env.API_BASE_URL
  const data = await fetch(`${api_base_url}/api/user/personal_info/0f33de29-fdff-4d00-b4a4-1fc25f771c49`)
  const profile = await data.json()
  console.log(profile)
  
 
  

  return (
    <div className="min-w-full min-h-full">
      
      <PersonalInfo profile={profile}/>
     
      
    </div>
  )
}

export default PerosnalInfoPage