import React from "react"
import BarraNavegacao from './navbar'

const MainPage = props => {
    return (
        <>
        <BarraNavegacao />
            <h1>PAGINA PRINCIPAL :)</h1>
            <p>User = {props.user}</p>
        </>
    )
}

export default MainPage