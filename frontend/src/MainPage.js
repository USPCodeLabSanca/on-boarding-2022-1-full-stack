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


    function listas() {
        return listasAtuais.map(lista => <Lista key={lista.id} lista={lista}/>)
    }

    return (
        <>
            <BarraNavegacao />
            <p>User = {props.user}</p>
            <div id="mainPageBackground">
                
                    {listas()}
                    <button id="newListButton" onClick={addEmptyList}>Nova Lista</button>
                
            </div>
        </>
    )
}

export default MainPage