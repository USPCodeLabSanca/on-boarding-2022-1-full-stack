import React, { useState } from "react"
import './navbar.css'
import axios from 'axios';

const BarraNavegacao = props => {
  function removeBoard(indice) {
    axios.delete("http://localhost:5300/board/"+props.quadros[indice]._id);
    props.refresh();
  }

  function addEmptyBoard() {
    axios.post("http://localhost:5300/board", {
      titulo:"New Board"
    });
    props.refresh();
  }

  function mapQuadros() {
    return props.quadros.map((quadro, indice) => 
        <><a className={indice===props.quadro ? "quadro selecionado" : "quadro botoes-navegacao" }
        key={indice} href={'/?quadro='+indice.toString()}>
            {quadro.titulo}
        </a>
        <button className="remove-board" onClick={() => removeBoard(indice)}>x</button>
        </>)
  }

  return (
    <div className="barraNavegacao" id="barraNavegacao">
        {mapQuadros()}
        <button className="criaQuadro botoes-navegacao" onClick={() => addEmptyBoard()}>
            +
        </button>
      </div>
  )
}

export default BarraNavegacao;
