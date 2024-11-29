import React, { forwardRef } from 'react'

const Modal = forwardRef(({ isShow, setIsShow,header,footer,body }, ref) => {


  function handleCloseModal() {
    ref.current.close()
    setIsShow(false)
  }
  return (
    <>
      {isShow && <div className="fixed inset-0  bg-blue-100" aria-hidden="false"></div>} 
      <dialog className="z-50 w-[500px] bg-white " ref={ref} id='modal'>
        <header className='bg-blue-500 text-white p-4 flex font-bold'>
          <h1 className='text-2xl'>{header}</h1>
          <span className='ml-auto cursor-pointer text-2xl' onClick={handleCloseModal}>X</span>
        </header>
        <div className='p-5 text-center text-base h-[200px]'>{body}</div>
        <footer className='bg-blue-500 text-white p-4 flex font-bold'>
          <h1 className='text-2xl'>{footer}</h1>
        </footer>
      </dialog>
    </>
  )
}
)

export default Modal
