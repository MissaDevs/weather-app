import { useState } from 'react'

export const Progress = ({progress}) => {

  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle = {
        opacity: 1,
        width: `${progress}%`
    }

    setStyle(newStyle)
  }, 500)

  return (
    <div className='progress'>
        <div className='progress-done' style={style}></div>
    </div>
  )
}
