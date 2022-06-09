import React, { useState } from "react"
import Lista from "./Components/Lista"
import './MainPage.css'
import BarraNavegacao from './navbar'
import axios from 'axios'

const MainPage = props => {

    const [currState, setState] = useState({"listas":[],"quadros":[], 'pulledQuadros':false, 'pulledListas':false});

    function addEmptyList() {
        axios.post('http://localhost:5300/cardList/' + currState['quadros'][quadroSelecionado]._id, {
            titulo:"New List"
        })
        let stateCopy = JSON.parse(JSON.stringify(currState));
        stateCopy.pulledListas = false;
        setState(stateCopy);
    }

    // Olha a variavel quadro no parametro get
    // Se nenhum quadro ta setado, usa o valor padrao de 0
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let quadroSelecionado;
    if (!params.get("quadro") || isNaN(params.get("quadro"))) {
        quadroSelecionado = 0;
    }
    else {
        quadroSelecionado = parseInt(params.get("quadro"), 10);
    }

    if(currState['pulledQuadros'] & !currState['pulledListas']) {
        console.log("pulling listas")
        axios.get('http://localhost:5300/cardList/'+currState['quadros'][quadroSelecionado]._id)
            .then(function (response) {
                let listas = response['data'];
                console.log(listas);

                let stateCopy = JSON.parse(JSON.stringify(currState));
                stateCopy.listas = listas;
                stateCopy.pulledListas = true;

                setState(stateCopy)
            })
    }

    if (!currState['pulledQuadros']){
        console.log("pulling quadros")
        axios.get('http://localhost:5300/board')
        .then(function (response) {
          let quadros = response['data'];
          let stateCopy = JSON.parse(JSON.stringify(currState));
          stateCopy.quadros = quadros;
          stateCopy.pulledQuadros = true;

          setState(stateCopy)})
    }


    function listas() {
        return currState['listas'].map(lista => <Lista key={lista._id} lista={lista}/>)
    }

    return (
        <>
            <BarraNavegacao quadro={quadroSelecionado} quadros={currState['quadros']}/>
            <p>User = {props.user}</p>
            <div id="mainPageBackground">
                
                    {listas()}
                    <button id="newListButton" onClick={addEmptyList}>Adicionar lista</button>
                
            </div>
        </>
    )
}

export default MainPage