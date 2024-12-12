import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({ userInfo, onLogout }) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-neutral-400 text-black flex items-center justify-center rounded-full'>
                <p>{getInitials(userInfo?.fullName)}</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium'>{userInfo?.fullName}</p>
                <button className='underline' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo