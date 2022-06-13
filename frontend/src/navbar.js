import React, { useState } from "react"
import './navbar.css'
import axios from 'axios';

const BarraNavegacao = props => {
  async function removeBoard(indice) {
    await axios.delete("http://localhost:5300/board/"+props.quadros[indice]._id);
    props.refresh();
  }

  async function addEmptyBoard() {
    await axios.post("http://localhost:5300/board", {
      titulo:"New Board"
    });
    props.refresh();
  }

  //A Key tinha que ficar no <> mas é mais dificil consertar que deixar errado
  function mapQuadros() {
    return props.quadros.map((quadro, indice) => 
      <>
          <a key={indice} className={indice === props.quadro ? "quadro selecionado" : "quadro botoes-navegacao"}
           href={'/?quadro='+indice.toString()}>
              {quadro.titulo}
          </a>
          <button className="remove-board" onClick={() => removeBoard(indice)}>x</button>
      </>
    )
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
