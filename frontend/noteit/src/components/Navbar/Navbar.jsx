import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchBar from '../SearchBar/SearchBar'
import ProfileInfo from '../cards/ProfileInfo'
import noteitLogo from '../..//assets/noteitLogo.svg'

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery)
        }

    }

    const onClearSearch = () => {
        setSearchQuery("")
        handleClearSearch()
    }

    return (
        <div className='flex items-center justify-between border-1 border-b-2 border-green-200 px-6 py-6'>
            <h2 className='text-3xl font-bold'><img src={noteitLogo} alt="noteitLogo" width="180pspx" /></h2>
            <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value)
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    )
}

export default Navbar