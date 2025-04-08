

const BioData = ({ first_name, middle_name = "", last_name }: { first_name: string, middle_name: string, last_name: string }) => {

    return (
        <div className="grid gap-1 p-5 bg-white/90 min-w-full rounded shadow">
            <div className="flex gap-1">
                <span>First Name:</span>
                <span>{first_name}</span>
            </div>
            {
                middle_name && (
                    <div className="flex gap-1">
                        <span>Middle Name:</span>
                        <span>{middle_name}</span>
                    </div>)
            }

            <div className="flex gap-1">
                <span>Last Name:</span>
                <span>{last_name}</span>
            </div>
        </div>
    )
}

export default BioData