import { React, useState } from "react";
import { BackgroundLogin, BodyLoginPage } from "./style";
import "./LoginPage.css";
import logo from "./images/logo-login.png"

import { useCookies } from "react-cookie";

const LoginPage = props => {
    const [user, setUser] = useState("");
    const [cookies, setCookie] = useCookies(["user"]);

    function handleCookie(name) {
        setCookie("user", name, {
            path: "/",
            maxAge: 3600
        });
    }

    return (
    <BodyLoginPage>
        <BackgroundLogin>
                <img id="logo-login" src={logo} alt="logo-login"/>
                <form>
                    <label>Usuario:</label>
                    <input type="text" placeholder="username" value={user} onChange={e => setUser(e.target.value)}/>
                    <label>Senha:</label>
                    <input type="password" placeholder="password" onChange={console.log("Atualizando senha")}/>
                </form>
                <br></br>
            <div id="buttons-login-cadastrar">
                <button onClick={() => {handleCookie(user)}}>LOGIN</button>
                <button onClick={() => {alert("Quero cadastrar")}}>Cadastrar</button>
            </div>
        </BackgroundLogin>
    </BodyLoginPage>)
}

export default LoginPage