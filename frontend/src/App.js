import {React } from 'react';
import Condicional from './Components/Condicional';
import MainPage from './MainPage';
import LoginPage from './LoginPage';

import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);

  return (
    <>
      <Condicional if={!cookies.user || cookies.user === ''}>
        <LoginPage/>
      </Condicional>

      <Condicional if={cookies.user}>
        <MainPage user={cookies.user}/>
      </Condicional>
    </>
  );
}

export default App;