

const FormWrapper = ({children, className}:{children:React.ReactNode, className:string}) => {
  return (
    <div className={`${className} px-4 md:px-8 lg:px-16 min-h-screen flex items-center justify-center`}>
        {children}
    </div>
  )
}

export default FormWrapper