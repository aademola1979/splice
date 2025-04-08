

const Mission = async () => {

  const api_base_url = process.env.API_BASE_URL
  
  const data = await fetch(`${api_base_url}/api/user/f1d20524-474e-4fc4-8759-b47b21016343`)
  const newdata = await data.json()
  console.log(newdata)
  const profile = newdata;
  const {first_name, middle_name, last_name} = profile
  return (
    <div className="h-screen">
      <p>
        Permit me to introduce my self. My name is {first_name} {middle_name} {last_name}.
      
      </p>

    </div>
  )
}

export default Mission