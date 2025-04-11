

const InfoLabel = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`${className} text-black/80 font-semibold`}>{children}</div>
  )
}

export default InfoLabel