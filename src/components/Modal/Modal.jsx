import React from 'react'
import styles from './Modal.module.css'

const Modal = ({showModal, onClose, values}) => {

    const {name, email, phone, numberOfPeople, date, time, place, comm, nameError, emailError, phoneNumberError, numPeopleError, dateError, timeError, placeError, finalError} = values
  
    return (
    <>
    {showModal && 
    <div>
        <div className={styles.modal_container}>
            <div className={styles.heading}>
                <h1>Reservation Completed for {name}</h1>   
            </div>
            <div className={styles.details_box}>
                <h2>Reservation details:</h2>
                <h4>Name of the reserver: {name}</h4>
            </div>
            
            <div className={styles.modal_btns}>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
    }
    </>
    
  )
}

export default Modal