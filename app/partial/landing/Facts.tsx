

const Facts = () => {
   const facts=[

    {
        num:'95%',
        text:'match satisfaction'

    },

    {
        num:'10,000+',
        text:'verified Users'

    },

    {
        num:'50+',
        text:'campus reach'

    },

    {
        num:'24/7',
        text:'support team'

    },

   
   ]
  return (
    <div className=" text-gray-500 flex flex-col items-center w-full justify-center gap-4">
        <div className="grid md:grid-cols-2 lg:flex items-center justify-center px-8 gap-4 w-full">
            {
                facts.map(({num, text}, i)=>(
                    <div key={i} className=" bg-gray-100 rounded-xl
                     text-gray-700 p-2 flex-1 grid justify-center items-center shadow-sm">
                        <div className="p-4">
                        <h3 className="w-full text-center text-orange-500 ">{num}</h3>
                        </div>
                        <p className="capitalize text-nowrap text-sm text-center rounded-xl">{text}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Facts