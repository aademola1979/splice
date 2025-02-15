
import SectionHeading from "../SectionHeading"
import SectionWrapper from "../SectionWrapper"
import ToLetCard from "./ToLetCard"


const ToLet = () => {
    const toletList = [
        {
            category:'Home',
            bedRoomNumber:2,
            bathroomNumber:2,
            kitchenNumber:1,
            description: 'each room is 300ft by 300ft while the sitting room is 500ft by 500ft',
            location:'Ibadan',
            maxCo_renters:3,
            image:'/images/to_let1.jpg',
            price:350000,
            duration:'per annum'
        },
        {
            category:'Office',
            bedRoomNumber:0,
            bathroomNumber:0,
            kitchenNumber:0,
            description: 'Spacious and in a busy area of Port Harcourt',
            location:'Port Harcourt',
            maxCo_renters:0,
            image:'/images/office.jpg',
            price:1000000,
            duration:'per annum'
        },
        {
            category:'Warehouse',
            bedRoomNumber:0,
            bathroomNumber:0,
            kitchenNumber:0,
            description:'Spacious, secured and safe ',
            location:'Aba',
            maxCo_renters:6,
            image:'/images/warehouse.jpg',
            price:1500000,
            duration:'per annum'
        }
    ]
    return (
        <SectionWrapper className='bg-white/90'>
            <div className=" grid gap-8">
                <SectionHeading className="mb-12" text="Latest Vacant Spaces"/>
                
            </div>
            <div className="pt-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-mono flex gap-4">
                <span className="text-orange-500 pb-4">Explore <span className="text-black/90">Neighbourhood</span></span>      
            </h3>
            <p className=" text-gray-600 text-base lg:text-xl pb-8">Explore latest collections of vacant spaces, specially selected for you.</p>

            </div>
            <div className="grid md:flex gap-4 flex-wrap justify-center">
                {
                    toletList.map((apartment, i)=>(
                        <ToLetCard key={i} apartment={apartment}/>

                    ))
                }
            </div>

        </SectionWrapper>
    )
}


export default ToLet