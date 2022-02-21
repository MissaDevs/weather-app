import { WStatus } from './Weather/WStatus'
import { WeekW } from './Weather/WeekW'

export const Weather = () => {
  return (
    <div className='container px-40 mt-10 text-white overflow-auto pb-3'>

        <div className='text-lg text-gray float-right'>
            <button className='bg-violet rounded-full px-4 py-3 mr-2 cursor-pointer'> <h2 className='font-bold text-2xl text-custwhite'>°C</h2></button>
            <button className='bg-violet rounded-full px-4 py-3 cursor-pointer'> <h2 className='font-bold text-2xl text-custwhite'>°F</h2></button>
        </div>

        <div className='mt-28'>
          <div className='md:grid md:grid-cols-5 md:w-full'>
            <WeekW
              day='Tomorrow'
              dg="16°C"
              dg2="11°C"
            />

            <WeekW
              day='Tomorrow'
              dg="16°C"
              dg2="11°C"
            />
            
            <WeekW
              day='Tomorrow'
              dg="16°C"
              dg2="11°C"
            />

            <WeekW
              day='Tomorrow'
              dg="16°C"
              dg2="11°C"
            />

            <WeekW
              day='Tomorrow'
              dg="16°C"
              dg2="11°C"
            />
          </div>
        </div>

        <div className='mt-20'>
          <h1 className='text-2xl font-medium'>Today's Hightlights</h1>

          <WStatus/>
        </div>
    </div>
  )
}
