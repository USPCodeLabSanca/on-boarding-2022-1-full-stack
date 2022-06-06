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

  function loginCallback(user) {
    if (user !== '')
    {
      setPage(mainPage);
      setUser(user);
    }
  }

  return (
    <>
      <Condicional if={!cookies.user || cookies.user == 'undefined'}>
        <LoginPage callback={loginCallback}/>
      </Condicional>

      <Condicional if={cookies.user}>
        <MainPage user={cookies.user}/>
      </Condicional>
    </>
  );
}

export default App;