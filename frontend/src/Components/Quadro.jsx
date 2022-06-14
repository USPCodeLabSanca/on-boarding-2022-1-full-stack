import React, { useState, useEffect } from "react";
import Lista from "./Lista"
import axios from "axios";
import './Quadro.css'

const Quadro = props => {
    const [currState, setState] = useState({ "listas": [], 'quadroID': -1 });
    
    if (currState.quadroID !== props.quadro._id) {
        changePulledList();
    }

    async function addEmptyList() {
        await axios.post('http://localhost:5300/cardList/' + props.quadro._id, {
            titulo:"New List"
        })
        changePulledList();
    }
    
    async function changePulledList() {
        console.log("pulling listas")
        
        const response = await axios.get('http://localhost:5300/cardList/' + props.quadro._id)
        setState({
            ...currState,
            quadroID: props.quadro._id,
            listas: response['data'],
            pulledListas: true
        })    
    }

    async function moveCard(card, finalList) {
        await axios.put("http://localhost:5300/card/" + card._id + "/" + finalList);
        changePulledList();
        
        //Setta as listas mudadas pra dirty pra poder atualizar elas
        const newArr = currState.listas;
        newArr.find(l => l._id == card.lista).dirty = true;
        newArr.find(l => l._id == finalList).dirty = true;
        setState({
            ...currState,
            newArr
        })
    }

    function listas() {
        return currState['listas'].map(lista => <Lista key={lista._id} lista={lista} refresh={changePulledList} allLists={currState.listas} moveCard={moveCard} />)
    }

    return (
        <div id="quadro">
            {listas()}
            <button id="newListButton" onClick={addEmptyList}>Adicionar lista</button>
        </div>
    )
}

export default Quadro