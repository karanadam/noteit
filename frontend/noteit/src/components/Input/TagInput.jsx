import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({ tags, setTags }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const addNewtag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()])
            setInputValue('')
        }
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            addNewtag()
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }

    return (



        <div >
            {tags?.length > 0 &&
                (
                    <div className='flex items-center gap-2 flex-wrap mt-2'>
                        {tags.map((tag, index) => (
                            < span key={index} className='flex justify-center items-center border border-1 rounded-lg px-2 py-1 gap-1 text-sm bg-neutral-700' >
                                # {tag}
                                <button button onClick={() => { handleRemoveTag(tag) }} className=''>
                                    <MdClose />
                                </button>
                            </span>
                        ))
                        }
                    </div >
                )}
            <div className='flex gap-4 w-fit h-fit mt-3'>
                <input type="text" className='bg-transparent border border-1 rounded-md px-2 py-2 focus:outline-none ' onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='Add tags' value={inputValue} />
                <button className='bg-transparent border border-1 border-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black'
                    onClick={() => {
                        addNewtag()
                    }}>
                    <MdAdd size={24} />
                </button>
            </div>
        </div >
    )
}

export default TagInput