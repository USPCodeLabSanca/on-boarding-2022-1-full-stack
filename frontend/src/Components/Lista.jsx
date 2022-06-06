import React, { useState } from "react"
import Card from "./Card";
import './Lista.css'

const Lista = props => {

    const [cardsAtuais, setCardArr] = useState([]);

    function addEmptyCard() {
        const newCard = {
            id: cardsAtuais.length,
            nome: 'Novo Card',
            descricao: 'Esse card está vazio!'
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
        <div className="cardList">
            <h2 id="listTitle">{props.lista.nome}</h2>
            <div className="cardContainer">
                {cards()}
                <button id="newCardButton" onClick={addEmptyCard}>+</button>
            </div>
            
        </div>
    )
}

export default Lista