import React, { useState, useEffect } from "react";
import Lista from "./Lista"
import axios from "axios";
import './Quadro.css'

const Quadro = props => {
    const [currState, setState] = useState({ "listas": [], 'pulledListas': false, 'quadroID': -1 });
    
    if (currState.pulledListas && currState.quadroID !== props.quadro._id) {
        changePulledList();
    }

    async function addEmptyList() {
        await axios.post('http://localhost:5300/cardList/' + props.quadro._id, {
            titulo:"New List"
        })
        changePulledList();
    }
    
    function changePulledList() {
        setState({
            ...currState,
            pulledListas: false
        })
    }

    if(!currState.pulledListas) {
        console.log("pulling listas")
        
        axios.get('http://localhost:5300/cardList/' + props.quadro._id)
        .catch(e => console.log("No lists to pull"))
        .then(response =>
        {
                setState({
                    ...currState,
                    quadroID: props.quadro._id,
                    listas: response['data'],
                    pulledListas: true
                })    
            }
            
        )
    }

    function listas() {
        return currState['listas'].map(lista => <Lista key={lista._id} lista={lista} refresh={changePulledList}/>)
    }

    return (
        <div id="quadro">
            {listas()}
            <button id="newListButton" onClick={addEmptyList}>Adicionar lista</button>
        </div>
    )
}

export default Quadro