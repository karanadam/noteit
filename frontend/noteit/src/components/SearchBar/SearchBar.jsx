import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const SearchBar = ({ value, onClearSearch, handleSearch, onChange }) => {
    return (
        <div className='w-80 p-4 border-1 border border-neutral-500 rounded-md flex justify-between items-center gap-2'>
            <input
                value={value}
                type="text"
                placeholder='Search note'
                className='bg-transparent outline-none w-full '
                onChange={onChange} />

            {value && <IoMdClose size={24} onClick={onClearSearch} className="cursor-pointer hover:text-neutral-400" />}
            <FaSearch onClick={handleSearch} className='cursor-pointer  hover:text-neutral-400' />
        </div>
    )
}

export default SearchBar