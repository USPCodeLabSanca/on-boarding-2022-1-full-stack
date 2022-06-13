import React from "react"
import './Card.css'
import axios from 'axios'

const Card = props => {
    async function removeCard() {
        console.log("Deleting card " + props.card._id);
        await axios.delete("http://localhost:5300/card/"+props.card._id);
        props.refresh();
    }

    async function saveCard() {
        console.log("Saving")
        let tituloVal = document.getElementById("titulo:"+props.card._id).innerHTML;
        let bodyVal = document.getElementById("text:"+props.card._id).innerHTML;
        console.log("Updating card " + props.card._id);
        await axios.put("http://localhost:5300/card/"+props.card._id, {
            "titulo":tituloVal,
            "descricao":bodyVal
        });
        props.refresh();
    }

    return (
        <div className="card">
            <button className="card-button" onClick={() => removeCard()}>x</button>
            <button className="card-button" onClick={() => saveCard()}>save</button>
            <h3 id={"titulo:"+props.card._id} contentEditable="true" >{props.card.titulo}</h3>
            <p contentEditable="true" className="description" id={"text:"+props.card._id}>{props.card.descricao}</p>
        </div>
    )
}

export default Card