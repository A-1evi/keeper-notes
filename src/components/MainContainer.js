import React from 'react'
import InputBox from './InputBox'
import Notes from './Notes'
import { useSelector } from 'react-redux'
import ModalComponent from './ModalComponent'

const MainContainer = () => {
  const showNoteModal = useSelector(store => store.input.showNoteModal)
  return (
    <div className='w-full'>
        <InputBox/>
        <Notes/>
        {showNoteModal && <ModalComponent/>}
    </div>
  )
}

export default MainContainer