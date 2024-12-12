import React from 'react'

const EmptyCard = ({ imgSrc, message }) => {
    return (
        <div className='flex flex-col items-center justify-center mt-32'>
            <img src={imgSrc} alt="no-notes" className='w-72' />
            <p className='w-1/2 text-lg font-medium text-green-500 text-center leading-7 mt-10'>
                {message}
            </p>
        </div>
    )
}

export default EmptyCard