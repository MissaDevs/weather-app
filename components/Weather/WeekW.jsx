import Shower from '../../public/img/Shower.png'
import Image from 'next/image'

export const WeekW = ({day, dg, dg2}) => {
  return (
    <div className='md:w-36 md:h-56 bg-card text-center'>
        <div className='mt-5'>
        <span className='text-lg'>{day}</span>
        <Image src={Shower} width={75} height={85} objectFit={'cover'}/>
        <div className='mt-10 grid grid-cols-2'>
            <span>{dg}</span>
            <span className='text-gray'>{dg2}</span>
        </div>
        </div>
    </div>
  )
}
