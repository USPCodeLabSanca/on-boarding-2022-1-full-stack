import { React, useState } from "react";
import "./LoginPage.css";
import logo from "./images/logo-login.png"
import cat from "./images/cat.png"

import { useCookies } from "react-cookie";
import axios from "axios";

const LoginPage = props => {
    const [user, setUser] = useState({
        "username": "",
        "password": ""
    });
    const [cookies, setCookie] = useCookies(["user"]);

    async function handleCookie(user) {
        try{
            const response = await axios.post(`http://localhost:5300/signin`, user);
            setCookie("user", user.username, {
                path: "/",
                maxAge: 3600
            });
        }
        catch(error){
            if(error.status === 401) alert(`Nome de usuário ou senha inválida! Tente novamente!`);
            Error.captureStackTrace(error)
        }
    }

    async function handleSignup(user){
        try{
            const response = await axios.post(`http://localhost:5300/signup`, user)
            if(response.status === 200) alert(`Usuário cadastrado com sucesso!!!!`);
            else alert(`Usuário não cadastrado! Tente novamente mais tarde!`)
        }
        catch(error){
            console.log(error)
        }
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
                        <input className="user-input" id="loginInput" type="text" placeholder="username"
                        value={user.username} 
                        onChange={e => {setUser({
                            ...user,
                             'username': e.target.value
                        })}}
                        />
                    </div>
                    <label>Senha:</label>
                    <input className="user-input" type="password" placeholder="password" value={user.password}
                    onChange={(e) => {setUser({
                        ...user,
                        'password': e.target.value,
                    })}}/>
                </form>
                <br></br>
            <div id="buttons-login-cadastrar">
                <button onClick={() => {handleCookie(user)}}>Login</button>
                <button onClick={() => {handleSignup(user)}}>Cadastrar</button>
            </div>
        </div>
    </div>)
}

export default LoginPage