import React from "react"
import './Card.css'

const Card = props => {
    return (
        <div className="card">
            <h3>{props.card.nome}</h3>
            <p className="description">{props.card.descricao}</p>
        </div>
    )
}

export default Card