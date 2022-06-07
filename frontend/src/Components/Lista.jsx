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

    function saveListName(newListName) {
        props.lista.nome = newListName;
    }

    return (
        <div className="cardList">
            <h2 className="listTitle" id={"list"+props.lista.id.toString()} contentEditable="true" 
                onInput={(e) => saveListName(e.currentTarget.textContent)}>{props.lista.nome}</h2>
            <div className="cardContainer">
                {cards()}
                <button id="newCardButton" onClick={addEmptyCard}>+</button>
            </div>
            
        </div>
    )
}

export default Lista