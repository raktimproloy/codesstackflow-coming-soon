'use client'
import React, { useState } from 'react'
import Modal from './Modal';

function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
    <div className='fixed bottom-[50px] right-[50px]'>
      <button onClick={openModal} className="bg-red-500 text-white py-2 px-4 mt-4" style={{borderRadius:"0px 20px 0px 20px"}}>
        Feedback
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default index