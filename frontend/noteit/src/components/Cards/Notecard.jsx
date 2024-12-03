import React from 'react'
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md'

const Notecard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinned }) => {
    return (
        <div className='border rounded-md hover:shadow-xl p-4 transition-all ease-in-out '>
            <div className='flex items-center justify-between'>
                <div>
                    <h6 className='text-sm font-medium'>{title}</h6>
                    <span className='text-xs text-neutral-400'>{date}</span>
                </div>
                <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-green-400' : 'text-neutral-300'}`} onClick={onPinned} />
            </div>
            <p className='text-xs text-neutral-400'>{content.slice(0, 60)}</p>
            <div className='flex items-center justify-between mt-2'>
                <div className='text-xs text-neutral-400'>{tags}</div>
                <div className='flex items-center gap-2'>
                    <MdCreate className="icon-btn" onClick={onEdit} />
                    <MdDelete className="icon-btn hover:text-red-300" onClick={onDelete} />
                </div>
            </div>
        </div>
    )
}

export default Notecard