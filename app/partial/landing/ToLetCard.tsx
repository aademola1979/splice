import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Image from 'next/image';
import { BathIcon, BedDoubleIcon } from "lucide-react"
import RichLink from '../RichLink';

type toletInfo = {
    category: string,
    bedRoomNumber: number,
    bathroomNumber: number,
    kitchenNumber: number,
    description: string,
    location: string,
    maxCo_renters: number,
    image: string,
    price: number,
    duration: string
}

const ToLetCard = ({ apartment }: { apartment: toletInfo }) => {
    const { category,
        bedRoomNumber,
        bathroomNumber,
        location,
        maxCo_renters,
        image,
        price,
        kitchenNumber } = apartment;

    return (
        <Card className='flex-1 max-w-[18rem]'>
            <CardHeader>
                <CardTitle>{category}</CardTitle>
                <CardDescription>@ {location}</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-2'>
                <div className='w-full flex justify-center '>
                    <Image src={image} alt={category} height={200} width={200}
                    sizes='200'
                        className='aspect-square rounded-lg border-2 border-orange-400' />
                </div>
                <div className="flex flex-nowrap justify-between">
                    <div className="flex gap-1 text-gray-400 text-xs">
                        <span className=' font-semibold'><BedDoubleIcon /></span>
                        <span className='pt-1'>{bedRoomNumber} beds</span>
                    </div>
                    <div className="flex gap-1 justify-between text-gray-400 text-xs">
                        <span className=' font-semibold'><BathIcon /></span>
                        <span className='pt-1' >{bathroomNumber} baths</span>
                        
                    </div>
                   <div className="flex gap-1">
                   <span className='pt-1 text-xs text-gray-400'>{kitchenNumber} kitchen</span>
                    </div> 
                </div>

            </CardContent>
            <CardFooter className='grid gap-2'>
                <div className="flex justify-between">
                    <div className="grid text-xs text-gray-500">
                        <span className='text-nowrap'>Max Co-renter: {maxCo_renters}</span>
                        <span className='text-nowrap'>Waiting Co-renters: 1</span>
                    </div>
                    <span className='pt-3 text-orange-500 text-xs'>N{price}</span>
                </div>
                <div className="text-sm text-gray-500 grid">

                    <div className="flex w-full justify-center">
                        <RichLink href='/' text='See Property' className='text-black' />
                    </div>
                </div>
            </CardFooter>



        </Card>
    )
}

export default ToLetCard