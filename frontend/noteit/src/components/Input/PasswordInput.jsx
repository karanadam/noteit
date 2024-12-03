import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const PasswordInput = ({ value, onChange, placeholder }) => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Password</label>
            <div className='flex justify-between items-center border border-neutral-500 rounded-sm p-3 w-64 focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200'>
                <input
                    className="bg-transparent outline-none "
                    placeholder={placeholder || "Password"}
                    value={value}
                    onChange={onChange}
                    type={isShowPassword ? 'text' : 'password'} />
                {isShowPassword ? <FaRegEye
                    size={18}
                    className='text-neutral-400 cursor-pointer'
                    onClick={() => { toggleShowPassword() }}
                /> : <FaRegEyeSlash
                    size={18}
                    className='text-neutral-400 cursor-pointer'
                    onClick={() => { toggleShowPassword() }}
                />}
            </div>

        </div>
    )
}

export default PasswordInput
