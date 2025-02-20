



const Mission = async () => {
  const data = await fetch('https://app-5511.onrender.com/')
  const newdata = await data.json()
  console.log(newdata)
  return (
    <div>{newdata.Greet}</div>
  )
}

export default Mission