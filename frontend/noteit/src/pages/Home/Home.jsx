import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'
import moment from "moment"
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import EmptyCard from '../../components/EmptyCard/EmptyCard'
import addNoteImg from '../../assets/addNoteImg.svg'
import noDataImg from '../../assets/noDataImg.svg'

const Home = () => {

    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null
    })

    const [userInfo, setUserInfo] = useState(null)
    const [allNotes, setAllNotes] = useState([]);

    const [isSearch, setIsSearch] = useState(false)

    const navigate = useNavigate()

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" })
    }

    //get user info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user")
            if (response.data && response.data.user) {
                setUserInfo(response.data.user)
            }
        }
        catch (error) {
            if (error.response.status === 401) {
                localStorage.clear()
                navigate('/login')
            }
        }
    }

    //get all notes
    const getAllNotes = async () => {
        try {
            const response = await axiosInstance.get("/get-all-notes")

            if (response.data && response.data.notes) {
                setAllNotes(response.data.notes)
            }
        } catch (error) {
            console.log("An unexpected error occured. Please try again")
        }



    }

    //delete note
    const deleteNote = async (data) => {
        const noteId = data._id

        try {
            const response = await axiosInstance.delete("/delete-note/" + noteId)

            if (response.data && !response.data.error) {
                getAllNotes()

            }
        } catch (error) {
            if (error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                console.log("An unexpected error occured. Please try again")
            }
        }

    }

    //serach for a note
    const onSearchNote = async (query) => {
        try {
            const response = await axiosInstance.get("/search-notes", {
                params: { query },
            })

            if (response.data && response.data.notes) {
                setIsSearch(true)
                setAllNotes(response.data.notes)
            }
        } catch (error) {
            console.log(error)
        }

    }

    //update isPinned
    const updateIsPinned = async (noteData) => {
        const noteId = noteData._id
        try {
            const response = await axiosInstance.put("/update-note-pin/" + noteId, {
                isPinned: !noteData.isPinned
            })

            if (response.data && response.data.note) {
                getAllNotes()

            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClearSearch = () => {
        setIsSearch(false)
        getAllNotes()

    }

    useEffect(() => {
        getAllNotes()
        getUserInfo()
        return () => { }
    }, [])

    return (
        <>
            <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />
            <div className='container mx-auto'>
                {allNotes.length > 0 ? (<div className='grid grid-cols-3 gap-4 mt-8'>
                    {allNotes.map((item, index) => (
                        <Notecard
                            key={item._id}
                            title={item.title}
                            date={item.createdOn}
                            content={item.content}
                            tags={item.tags}
                            isPinned={item.isPinned}
                            onEdit={() => { handleEdit(item) }}
                            onDelete={() => { deleteNote(item) }}
                            onPinned={() => { updateIsPinned(item) }}
                        />
                    ))}

                </div>) : (
                    <EmptyCard imgSrc={isSearch ? noDataImg : addNoteImg} message={isSearch ? `Oops! No matching notes found :(` : `Click on the '+' icon to add your first note on noteit!`} />
                )}

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
                    }}
                    getAllNotes={getAllNotes} />
            </Modal>
        </>
    )
}

export default Home