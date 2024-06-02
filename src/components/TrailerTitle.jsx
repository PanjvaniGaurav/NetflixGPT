import React from 'react'

const TrailerTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12 flex justify-between'>
    <div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-5/12'>{overview}</p>
    </div>
    </div>
  )
}

export default TrailerTitle