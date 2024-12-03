import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchBar from '../SearchBar/SearchBar'
import ProfileInfo from '../cards/ProfileInfo'

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const onLogout = () => {
        navigate("/login")
    }

    const handleSearch = () => {

    }

    const onClearSearch = () => {
        setSearchQuery("")
    }

    return (
        <div className='flex items-center justify-between border-1 border-b-2 border-green-200 px-6 py-6'>
            <h2 className='text-3xl font-bold'>noteit</h2>
            <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value)
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo onLogout={onLogout} />
        </div>
    )
}

export default Navbar