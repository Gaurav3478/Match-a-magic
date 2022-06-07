import { useState } from 'react';
import './CongratsModal.css'

export default function CongratsModal({turns, shuffleCards}) {
    const [showModal, setShowModal] = useState(true)
    const stopShowModal = () => {
        setShowModal(false)
    }

  return (
    <div className = "CongratsModal">
        {showModal && <h1>Congrats! You won in {turns} moves!</h1>}
        {showModal && <button onClick={shuffleCards} class = "congrats-btn">Play again</button>}
        {showModal && <span class="deleteMeetingClose" onClick = {stopShowModal}>&times;</span>}
    </div>
  )
}
