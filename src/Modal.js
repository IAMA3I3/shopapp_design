import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ModalComponent from './components/ModalComponent'

const Modal = ({ setShowModal, title, info, onProceed }) => {

    return ReactDOM.createPortal(
        <ModalComponent setShowModal={setShowModal} title={title} info={info} onProceed={onProceed} />,
        document.querySelector('#modal')
    )
}

export default Modal