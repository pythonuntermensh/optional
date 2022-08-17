import React, { useEffect } from 'react'

import './modal.css'

const Modal = () => {

    useEffect( () => {
        const modal = document.getElementById('contacts-modal');

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });

        document.querySelector('.close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    })

    return (
        <div className="modal" id="contacts-modal">
            <div className="modal-content">
                <h5>Message was sent!</h5>
                <button className='btn btn-primary close-btn'>Got it</button>
            </div>
        </div>
    )
}

export default Modal