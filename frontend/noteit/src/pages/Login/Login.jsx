import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { validate } from 'email-validator'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'
import axiosInstance from "../../utils/axiosInstance"


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!validate(email)) {
            setError("Please enter a valid email address")
            return
        }

        if (!password) {
            setError("Please enter password")
            return
        }

        setError("")

        //Login API call
        try {
            //handle successfull login response
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password,
            })
            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken)
                navigate("/dashboard")
            }
        } catch (error) {
            //hanlde login error
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message)
            } else {
                setError("An unexpected error occured. Please try again.")
            }
        }

    }

    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center w-full m-36 mx-auto'>
                <div className='flex flex-col justify-center items-center p-8 w-96 border border-green-200 rounded-md'>
                    <form onSubmit={handleLogin} className='flex flex-col justify-center items-center py-20 gap-6 '>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">Email</label>
                                <input
                                    className="bg-transparent border border-neutral-500 rounded-sm p-3 w-64 focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200"
                                    placeholder='xyz@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <PasswordInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {error && <p className='text-red-500 text-md'>{error}</p>}

                        <div>
                            <h2>Don't have an account? <Link className='underline text-green-400 font-semibold' to={'/signup'}>Signup!</Link ></h2>

                        </div>
                        <button type='submit' className='w-64 py-2 px-10 bg-green-500 text-black font-semibold mt-2 hover:bg-green-600'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login