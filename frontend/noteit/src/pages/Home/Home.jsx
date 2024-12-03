import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'

const Home = () => {

    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null
    })

    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 gap-4 mt-8'>
                    <Notecard
                        title={"Meeting on 7th November"}
                        date={"7th November 2024"}
                        content={"Meeting on 7th November"}
                        tags={"#Meeting"}
                        isPinned={true}
                        onEdit={() => { }}
                        onDelete={() => { }}
                        onPinned={() => { }}
                    />
                </div>

            </div>

            <button>
                <div className='w-16 h-16 flex items-center justify-center rounded-xl  transition-all bg-green-500 hover:bg-green-400 cursor-pointer absolute right-10 bottom-10' onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: "add", data: null })
                }}>
                    <MdAdd className="text-[32px] text-black" />
                </div>
            </button>
            <Modal
                isOpen={openAddEditModal.isShown}
                contentLabel=''
                onRequestClose={() => { }}
                className='bg-neutral-800 w-[40%] max-h-3/4 rounded-md mx-auto m-10 p-10 '
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)"
                    }
                }}

            >
                <AddEditNotes
                    type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                    onClose={() => {
                        setOpenAddEditModal({ isShown: false, type: "add", data: null })
                    }} />
            </Modal>
        </>
    )
}

export default Home