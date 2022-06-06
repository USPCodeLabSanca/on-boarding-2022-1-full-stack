import { React, useState } from "react";
import { BackgroundLogin } from "./style";
import "./LoginPage.css";

const LoginPage = props => {
    const [user, setUser] = useState("");
    return (
    <BackgroundLogin>
            <h1>LOGIN PAGE</h1>
            <form>
                <label>Usuario:</label>
                <input type="text" placeholder="username" value={user} onChange={e => setUser(e.target.value)}/>
                <label>Senha:</label>
                <input type="text" placeholder="password" onChange={e => setUser(e.target.value)}/>
            </form>
            <br></br>
        <div id="buttons-login-cadastrar">
            <button onClick={() => props.callback(user)}>LOGIN</button>
            <button onClick={() => {console.log("Quero cadastrar")}}>Cadastrar</button>
        </div>
    </BackgroundLogin>)
}

export default LoginPage