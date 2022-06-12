import React from "react"
import './Card.css'
import axios from 'axios'

const Card = props => {
    async function removeCard() {
        console.log("Deleting card " + props.card._id);
        await axios.delete("http://localhost:5300/card/"+props.card._id);
        props.refresh();
    }

    return (
        <div className="card">
            <button className="remove-card" onClick={() => removeCard()}>x</button>
            <h3>{props.card.titulo}</h3>
            <p className="description">{props.card.descricao}</p>
        </div>
    )
}

export default Card