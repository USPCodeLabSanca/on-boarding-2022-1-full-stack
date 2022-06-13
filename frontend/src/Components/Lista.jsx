import React, { useState } from "react"
import Card from "./Card";
import './Lista.css'
import axios from 'axios'

const Lista = props => {

    const [currState, setState] = useState({"cards":[], "pulledCards":false});

    if (!currState["pulledCards"]) {
        console.log("pulling cards");
        axios.get('http://localhost:5300/card/' + props.lista._id)
            .catch(e => console.log("No cards to pull"))
            .then(function (response) {
                setState({
                    ...currState,
                    cards: response ? response.data : [],
                    pulledCards: true
                })
            })
    }

    async function addEmptyCard() {
        await axios.post('http://localhost:5300/card/' + props.lista._id, {
            titulo:"Novo Cartao",
            descricao:"Description"
        })
        let stateCopy = JSON.parse(JSON.stringify(currState));
        stateCopy.pulledCards = false;
        setState(stateCopy);
    }

    function cards() {
        return currState['cards'].map(card => <Card key={card._id} card={card} refresh={changePulledCards}/>);
    }     

    function saveListName(newListName) {
        let el = document.getElementById("text:"+props.lista._id);
        let content = el.value;
        console.log(content);
        axios.put('http://localhost:5300/cardList/'+props.lista._id, {
            'titulo':content
        })
        .then(function () {
            props.refresh();
        })
    }

    async function removeList() {
        console.log("Deleting list " + props.lista._id);
        await axios.delete("http://localhost:5300/cardList/"+props.lista._id);
        props.refresh();
    }

    function changePulledCards() {
        let stateCopy = JSON.parse(JSON.stringify(currState));
        stateCopy.pulledCards = false;
        setState(stateCopy);
    }

    return (
        <div className="cardList">
            <div className="holder">
            <button className="removeButton" onClick={() => removeList()}>x</button>
            <input id={"text:"+props.lista._id} type="text" className="titleText" defaultValue={props.lista.titulo}/>
            <input type="submit" className="titleSubmit" onClick={() => saveListName()}
                    value="save"/>
            </div>
            <div className="cardContainer">
                {cards()}
                <button id="newCardButton" onClick={addEmptyCard}>+</button>
            </div>
        </div>
    )
}

export default Lista