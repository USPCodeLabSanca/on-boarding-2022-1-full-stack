import React, { useState } from "react"
import Lista from "./Components/Lista"
import './MainPage.css'
import BarraNavegacao from './navbar'

const MainPage = props => {

    const [listasAtuais, setListArr] = useState([]);

    function addEmptyList() {
        const newList = {
            id: listasAtuais.length,
            nome: 'Nova Lista'
        };
        setListArr([
            ...listasAtuais,
            newList
        ]);
    }

    addEmptyList();


    function listas() {
        return listasAtuais.map(lista => <Lista key={lista.id} lista={lista}/>)
    }

    return (
        <>
            <BarraNavegacao />
            <h1>PAGINA PRINCIPAL :)</h1>
            <p>User = {props.user}</p>
            <div className="listContainer">
                {listas()}
                <button className="newListButton" onClick={addEmptyList}>Nova Lista</button>
            </div>
        </>
    )
}

export default MainPage