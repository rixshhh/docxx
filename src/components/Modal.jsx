import React, { useRef  } from 'react'

function Modal({onclose}) {

    const modalref = useRef();
    const closeModal = (e) =>{
        if(modalref.current === e.target){
            onclose();
        }
    }

  return (
    <div>
      <div ref={modalref} onClick={closeModal} className='fixed inset-0 z-[4] bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>
        <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label for="textarea" id='textarea' >Add Description.</label>
          <textarea required cols="50" rows="10"></textarea>
        </div>
        <button class="button">Add.</button>
      </form>
    </div>
        </div>
    </div>
  )
}

export default Modal
