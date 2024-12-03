import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { validate } from 'email-validator'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput'

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSingup = async (e) => {
        e.preventDefault()

        if (!name) {
            setError("Please enter your name")
        }

        if (!validate(email) || !email) {
            setError("Please enter a valid email address")
            return
        }

        if (!password) {
            setError("Please Enter password")
            return
        }

        setError("")

        //Enter API Call Below


    }

    return (
        <>
            <main className='max-h-screen overflow-y-hidden'>


                <Navbar />
                <div className='flex justify-center items-center w-full m-36 mx-auto'>
                    <div className='flex flex-col justify-center items-center p-8 w-96 border border-green-200 rounded-md'>
                        <form onSubmit={handleSingup} className='flex flex-col justify-center items-center py-20 gap-6 '>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        className="bg-transparent border border-neutral-500 rounded-sm p-3 w-64 focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200"
                                        placeholder='Karan Adam'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
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
                                <h2>Already have an account? <Link className='underline text-green-400 font-semibold' to={'/login'}>Login!</Link ></h2>

                            </div>
                            <button type='submit' className='w-64 py-2 px-10 bg-green-500 text-black font-semibold mt-2 hover:bg-green-600'>Create account</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Signup