import React, { useState } from "react"
import './navbar.css'
import axios from 'axios';

const BarraNavegacao = props => {
  async function removeBoard(indice) {
    await axios.delete("http://localhost:5300/board/" + props.quadros[indice]._id);

    if (indice < props.quadro) {
      props.refresh(props.quadro - 1);
    }
    else {
      props.refresh();
    }
  }

  async function saveBoard(indice) {
    let el = document.getElementById(props.quadros[indice]._id);
    let content = el.innerHTML
    console.log(content)
    await axios.put("http://localhost:5300/board/" + props.quadros[indice]._id, {
      titulo:content
    });
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
          onClick={() => props.refresh(indice)} contentEditable="true" id={quadro._id}>
              {quadro.titulo}
          </a>
          <div className="boardEditor">
          <button className="remove-board button-board" onClick={() => removeBoard(indice)}>x</button>
          <button className="save-board button-board" onClick={() => saveBoard(indice)}>save</button>
          </div>
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
