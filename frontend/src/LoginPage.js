import { React, useState } from "react";

const LoginPage = props => {
    const [user, setUser] = useState("");
    return (
    <>
            <h1>LOGIN PAGE</h1>
            <form>
                <label>Usuario:</label>
                <input type="text" value={user} onChange={e => setUser(e.target.value)}/>
            </form>
            <br></br>
        <button onClick={() => props.callback(user)}>LOGIN</button>
    </>)
}

export default LoginPage