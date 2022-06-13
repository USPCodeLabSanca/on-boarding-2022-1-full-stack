import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import axios from 'axios'
import Condicional from './Components/Condicional'
import BarraNavegacao from './navbar'
import Quadro from "./Components/Quadro";
import './MainPage.css'

const MainPage = props => {
    const [removeCookie, setCookie] = useCookies(["user"]);
    const [currState, setState] = useState({ "quadros": [], 'pulledQuadros': false, 'pulledListas': false });

    function changePulledBoards() {
        let stateCopy = JSON.parse(JSON.stringify(currState));
        stateCopy.pulledQuadros = false;
        setState(stateCopy);
    }

    if (!currState['pulledQuadros']){
        console.log("pulling quadros")
        axios.get('http://localhost:5300/board')
        .then(function (response) {
            let quadros = response['data'];
            let stateCopy = JSON.parse(JSON.stringify(currState));
            stateCopy.quadros = quadros;
            stateCopy.pulledQuadros = true;
            setState(stateCopy)
        })
    }

    // Olha a variavel quadro no parametro get
    // Se nenhum quadro ta setado, usa o valor padrao de 0
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let paramQuadro = params.get("quadro");
    let quadroSelecionado;
    if (!paramQuadro || isNaN(paramQuadro)) {
        quadroSelecionado = 0;
    }
    else {
        let parsed = parseInt(paramQuadro, 10);
        if (parsed < 0 || parsed >= currState.quadros.length) {
            parsed = (parsed < 0) ? 0 : currState.quadros.length - 1;
            if (currState.quadros.length > 0) {
                params.set("quadro", parsed);
                window.location.search = params;    
            }
        }
        quadroSelecionado = parsed;
    }
    
    

    

    function handleRemoveCookie() {
        setCookie("user", '', {path:'/'});
    }

    return (
        <>
            <div id="header">
            <div id="body-main">
                <div id="hi-user">Olá {props.user}, seja bem vindo(a)</div>
                    <button className="quadro logout botoes-navegacao"  key='logout' onClick={() => {handleRemoveCookie()}}> 
                    Logout 
                    </button>
                </div>
                <BarraNavegacao quadro={quadroSelecionado} quadros={currState['quadros']} refresh={changePulledBoards} />
            </div>
            
            <div id="mainPageBackground">
                <Condicional if={currState.quadros.length > 0 && quadroSelecionado < currState.quadros.length}>
                    {<Quadro quadro={currState.quadros[quadroSelecionado]} />}
                </Condicional>
            </div>
        </>
    )
}

export default MainPage