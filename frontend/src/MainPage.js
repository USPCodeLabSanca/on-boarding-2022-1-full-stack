import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import axios from 'axios'
import Condicional from './Components/Condicional'
import BarraNavegacao from './navbar'
import Quadro from "./Components/Quadro";
import './MainPage.css'

const MainPage = props => {
    const [removeCookie, setCookie] = useCookies(["user"]);
    const [currState, setState] = useState({ "quadros": [], 'pulledQuadros': false, 'quadroSelecionado': 0 });

    if (!currState.pulledQuadros) {
        changePulledBoards();
    }
    function changePulledBoards(newSelected) {
        console.log("pulling quadros")
        axios.get('http://localhost:5300/board')
        .catch(e => console.log("No boards to pull"))
        .then(function (response) {
            let quadros = response['data'];
            let stateCopy = JSON.parse(JSON.stringify(currState));
            stateCopy.quadros = quadros;
            stateCopy.pulledQuadros = true;
            
            let novoQuadro = (newSelected !== undefined) ? newSelected : currState.quadroSelecionado;
            if (novoQuadro < 0) novoQuadro = 0;
            else if (quadros.length > 0 && novoQuadro >= quadros.length) novoQuadro = quadros.length - 1;
            stateCopy.quadroSelecionado = novoQuadro

            setState(stateCopy)
        })
    }

    function handleRemoveCookie() {
        setCookie("user", '', {path:'/'});
    }

    return (
        <>
        <div id="mainPage">
            <div id="header">
                <div id="body-main">
                    <div id="hi-user">Olá {props.user}, seja bem vindo(a)</div>
                    <button className="quadro logout botoes-navegacao"  key='logout' onClick={() => {handleRemoveCookie()}}> 
                    Logout 
                    </button>
                </div>
                <BarraNavegacao quadro={currState.quadroSelecionado} quadros={currState['quadros']} refresh={changePulledBoards}/>
            </div>
            
            <div id="mainPageBackground">
                <Condicional if={currState.quadros.length > 0 && currState.quadroSelecionado < currState.quadros.length}>
                    {<Quadro quadro={currState.quadros[currState.quadroSelecionado]} />}
                </Condicional>
            </div>
        </div>
            
        </>
    )
}

export default MainPage