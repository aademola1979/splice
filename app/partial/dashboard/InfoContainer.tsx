

const InfoContainer = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`${className} grid grid-cols-[7rem_1fr]`}>{children}</div>
  )
}

export default InfoContainer