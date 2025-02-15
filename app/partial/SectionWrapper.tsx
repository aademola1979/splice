


const SectionWrapper = ({className, children}:{className:string, children:React.ReactNode}) => {
  return (
    <div className={`${className} px-2 md:px-8 lg:px-16 pb-16 pt-4`}>
        {children}
    </div>
  )
}

export default SectionWrapper