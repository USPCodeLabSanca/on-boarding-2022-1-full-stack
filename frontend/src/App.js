import {React, useState } from 'react';
import Condicional from './Components/Condicional';
import MainPage from './MainPage';
import LoginPage from './LoginPage';

import { useCookies } from "react-cookie";


const login = 'login';
const mainPage = 'mainPage';

function App() {
  const [currentPage, setPage] = useState(login);
  const [currentUser, setUser] = useState('');
  const [cookies, setCookie] = useCookies(["user"]);

  //Essa função será chamada pela loginPage para mudar o login, temporariamente não tem nenhuma verificação ou autenticação
  function loginCallback(user) {
    if (user !== '')
    {
      setUser(user);
      setPage(mainPage);
    }
  }

  return (
    <>
      <Condicional if={!cookies.user || cookies.user === ''}>
        <LoginPage callback={loginCallback}/>
      </Condicional>

      <Condicional if={cookies.user}>
        <MainPage user={cookies.user}/>
      </Condicional>
    </>
  );
}

export default App;