import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md'
import { IoMdReturnLeft } from 'react-icons/io'

const AddEditNotes = ({ noteData, type, onClose }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])

    const [error, setError] = useState(null)

    const addNewNote = async () => { }

    const editNote = async () => { }

    const hadleAddNote = () => {
        if (!title) {
            setError("Please enter the title")
            return
        }

        if (!content) {
            setError("Please enter the content")
            return
        }

        setError("")

        if (type == 'edit') {
            editNote()
        }
        else {
            addNewNote()
        }
    }


    return (

        <div className='relative'>
            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3' onClick={onClose}>
                <MdClose className='text-xl' />
            </button>
            <div className='flex flex-col gap-12 p-6'>
                <div className='flex flex-col gap-2'>
                    <label className='text-md text-neutral-500'>Title</label>
                    <input type="text" placeholder='Go to gym at 5' className='input-box rounded-md font-medium p-3 text-' value={title} onChange={({ target }) => setTitle(target.value)} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-md text-neutral-500'>Note</label>
                    <textarea type="text" placeholder='yada yada' rows={10} className='input-box rounded-md font-medium p-3' value={content} onChange={({ target }) => setContent(target.value)} />
                </div>
                <div>
                    <label className='text-md text-neutral-500'>Tags</label>
                    <TagInput className='' tags={tags} setTags={setTags} />
                    {error && <p className='text-sm text-red-500 mt-4'>{error}</p>}
                </div>



                <button onClick={hadleAddNote} className='bg-green-500 p-4 text-black'>Add Note</button>
            </div>

        </div>

    )
}

export default AddEditNotes