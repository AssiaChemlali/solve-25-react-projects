import React, { useRef, useState } from 'react'
import Modal from './Modal'

const ModalPopup = () => {
  const [isShow, setIsShow] = useState(false)
  const refModal = useRef()

  function handleOpenModel() {
     refModal.current.showModal()
    setIsShow(true)
  }

  return (
    <div className='flex justify-center flex-col items-center p-10'>
      <button
        onClick={handleOpenModel}
        className='bg-blue-500 text-white p-2 rounded text-xl capitalize flex'>open modal popus</button>
      
        <Modal
          ref={refModal}
          isShow={isShow}
          header="Header Modal"
          body="body content"
          footer="footer modal"
          setIsShow={setIsShow} />
      

    </div>
  )
}

export default ModalPopup
