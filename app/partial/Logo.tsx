import Image from "next/image"


const Logo = ({className}:{className:string}) => {
  return (
      <Image src={'/images/logo-corent.png'} alt="logo" height={150} width={200} sizes="500"
      className={`${className}`}/>
  )
}

export default Logo