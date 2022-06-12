import React, { useState } from "react"
import { useCookies } from "react-cookie";
import axios from 'axios'
import Condicional from './Components/Condicional'
import BarraNavegacao from './navbar'
import Quadro from "./Quadro";
import './MainPage.css'

const MainPage = props => {
    const [removeCookie, setCookie] = useCookies(["user"]);
    const [currState, setState] = useState({"quadros":[], 'pulledQuadros':false, 'pulledListas':false});

    function changePulledBoards() {
        let stateCopy = JSON.parse(JSON.stringify(currState));
        stateCopy.pulledQuadros = false;
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
        const parsed = parseInt(params.get("quadro"), 10);
        quadroSelecionado = (parsed > 0 && parsed < currState.quadros.length) ? parsed : 0;
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

    function handleRemoveCookie() {
        setCookie("user", '', {path:'/'});
    }

    return (
        <>
            <div id="body-main">
                <div id="hi-user">Olá {props.user}, seja bem vindo(a)</div>
                <button className="quadro logout botoes-navegacao"  key='logout' onClick={() => {handleRemoveCookie()}}> 
                Logout 
                </button>
            </div>
            <BarraNavegacao quadro={quadroSelecionado} quadros={currState['quadros']} refresh={changePulledBoards} />
            <div id="mainPageBackground">
                <Condicional if={currState.quadros.length > 0 && quadroSelecionado < currState.quadros.length}>
                    {<Quadro quadro={currState.quadros[quadroSelecionado]} />}
                </Condicional>
            </div>
        </>
    )
}

export default MainPage