

const Mission = async () => {
  const data = await fetch('http://localhost:8000/profile')
  const newdata = await data.json()
  console.log(newdata)
  const profile = newdata.profile;
  const {first_name, middle_name, last_name, bio_data:{age, height, weight}} = profile
  return (
    <div className="h-screen">
      <p>
        Permit me to introduce my self. My name is {first_name} {middle_name} {last_name}.
        I&apos;m {age} years old. I&apos;m {height} feet tall and weigh {weight}kg.
      </p>

    </div>
  )
}

export default Mission