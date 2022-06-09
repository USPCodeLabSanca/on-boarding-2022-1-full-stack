import React, { useState } from "react"
import './navbar.css'
import { useCookies } from "react-cookie";
import axios from 'axios';

const BarraNavegacao = props => {
  const [removeCookie, setCookie] = useCookies(["user"]);

  function mapQuadros() {
    return props.quadros.map((quadro, indice) => 
        <a className={indice===props.quadro ? "quadro selecionado" : "quadro" }
        key={indice} href={'/?quadro='+indice.toString()}>
            {quadro.titulo}
        </a>)
  }

  function handleRemoveCookie() {
    setCookie("user", '', {path:'/'});
  }

  return (
    <div className="barraNavegacao" id="barraNavegacao">
      {mapQuadros()}
        <a className="quadro criaQuadro" key='+' href={'/criaQuadro'}>
            +
        </a>
        <button className="quadro logout"  key='logout' 
        onClick={() => {handleRemoveCookie()}}>
            Logout
        </button>
      </div>
  )
}

export default BarraNavegacao;
