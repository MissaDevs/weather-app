import { Progress } from '../bar/Progress'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export const WStatus = () => {
  return (
    <>
        <div className='grid grid-cols-2'>
            <div className='w-96 bg-card h-56 mt-10 text-center'>
                <p className='mt-5 mb-3 text-custwhite'>Wind status</p>
                <h1 className='text-7xl font-bold text-custwhite'>7<span className='text-4xl font-light'>mph</span></h1>
                <div className='mt-10 ml-36 flex items-center'>
                    <FontAwesomeIcon className='mr-2 bg-gray p-2 rounded-full text-custwhite' icon={faLocationArrow} />
                    <span className='text-custwhite'>WSW</span>
                </div>
            </div>

            <div className='w-96 bg-card h-56 mt-10 text-center'>
                <p className='mt-5 mb-3 text-custwhite'>Humidity</p>
                <h1 className='text-7xl font-bold text-custwhite'>84<span className='text-4xl font-light'>%</span></h1>

                <div className='mt-5 text-center text-gray font-bold'>
                    <div className='grid grid-cols-3'>
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>

                    <div className='ml-14 -mt-3'>
                        <Progress
                            progress={84} />
                    </div>

                    <div className='mr-12 -mt-3 text-right'>
                        <p>%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <div className='w-96 bg-card h-40 mt-10 text-center'>
                <p className='mt-5 mb-3 text-custwhite'>Visibility</p>
                <h1 className='text-7xl font-bold text-custwhite'>6,4<span className='text-4xl font-light'> miles</span></h1>
            </div>

            <div className='w-96 bg-card h-40 mt-10 text-center'>
                <p className='mt-5 mb-3 text-custwhite'>Visibility</p>
                <h1 className='text-7xl font-bold text-custwhite'>998<span className='text-4xl font-light'> mb</span></h1>
            </div>
        </div>
    </>
  )
}
