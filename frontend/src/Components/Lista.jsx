import React, { useState, useEffect } from "react"
import Card from "./Card";
import './Lista.css'

const Lista = props => {

    const [cardsAtuais, setCardArr] = useState([]);

    function addEmptyCard() {
        const newCard = {
            id: cardsAtuais.length,
            nome: 'Novo Card'
        };
        setCardArr([
            ...cardsAtuais,
            newCard
        ]);
    }

    function cards() {
        return cardsAtuais.map(card => <Card key={card.id} card={card} />);
    }     

    return (
        <div>
            <h2 className="listTitle">{props.lista.nome}</h2>
            <div className="cardList">
                <div className="cardContainer">
                    {cards()}
                </div>
                <button className="newCardButton" onClick={addEmptyCard}>+</button>
            </div>
            
        </div>
    )
}

export default Lista