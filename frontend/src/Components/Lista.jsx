import React, { useState } from "react"
import Card from "./Card";
import './Lista.css'
import axios from 'axios'

const Lista = props => {

    const [currState, setState] = useState({"cards":[], "pulledCards":false});

    if (!currState["pulledCards"]) {
        axios.get('http://localhost:5300/card/'+props.lista._id)
            .then(function (response) {
                let cards = response['data'];
                console.log(cards);

                let stateCopy = JSON.parse(JSON.stringify(currState));
                stateCopy.cards = cards;
                stateCopy.pulledCards = true;

                setState(stateCopy)
            })
    }

    function addEmptyCard() {
        axios.post('http://localhost:5300/card/' + props.lista._id, {
            titulo:"Novo Cartao",
            descricao:"Description"
        })
        let stateCopy = JSON.parse(JSON.stringify(currState));
        stateCopy.pulledCards = false;
        setState(stateCopy);
    }

    function cards() {
        return currState['cards'].map(card => <Card key={card.id} card={card} />);
    }     

    function saveListName(newListName) {
        props.lista.titulo = newListName;
    }

    return (
        <div className="cardList">
            <h2 className="listTitle" id={"list"+props.lista._id.toString()} contentEditable="true" 
                onInput={(e) => saveListName(e.currentTarget.textContent)}>{props.lista.titulo}</h2>
            <div className="cardContainer">
                {cards()}
                <button id="newCardButton" onClick={addEmptyCard}>+</button>
            </div>
            
        </div>
    )
}

export default Lista