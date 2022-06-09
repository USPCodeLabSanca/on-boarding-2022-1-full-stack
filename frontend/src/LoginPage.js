import { React, useState } from "react";
import "./LoginPage.css";
import logo from "./images/logo-login.png"
import cat from "./images/cat.png"

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

    function setVisible(id) {
        var el = document.getElementById(id);
        if (el){
            console.log("Found cat visible")
            el.style.visibility="visible";
        }
        else {
            console.log("Not fount cat")
        }
    }
    function setHidden(id) {
        var el = document.getElementById(id);
        if (el){
            console.log("Found cat hidden")
            el.style.visibility="hidden";
        }
        else {
            console.log("Not fount cat")
        }
    }

    return (
    <div id="body-login-page">
        <div id="background-login">
                <img id="logo-login" src={logo} alt="logo-login"/>
                <form>
                    <label>Usuario:</label>
                    <div id="loginDiv">
                        <img id="cat-image" src={cat} alt=""/>
                        <input class="user-input" id="loginInput" type="text" placeholder="username"
                        value={user} 
                        onChange={e => {setUser(e.target.value)}}
                        />
                    </div>
                    <label>Senha:</label>
                    <input class="user-input" type="password" placeholder="password"/>
                </form>
                <br></br>
            <div id="buttons-login-cadastrar">
                <button onClick={() => {handleCookie(user)}}>Login</button>
                <button onClick={() => {alert("Quero cadastrar")}}>Cadastrar</button>
            </div>
        </div>
    </div>)
}

export default LoginPage