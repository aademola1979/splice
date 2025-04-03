

const CopyRight = ({className}:{className:string}) => {
    const date = new Date()
    return (
        <div className={`py-2 flex ${className} font-thin justify-center items-center`}>
            <p className="flex gap-1">
                <span>&copy;</span>
                <span>PragmaTech</span>
                <span>{date.getFullYear()}</span>
            </p>
        </div>
    )
}

export default CopyRight