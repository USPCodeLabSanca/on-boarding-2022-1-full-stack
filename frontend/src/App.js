import {React, useState } from 'react';
import Condicional from './Components/Condicional';
import MainPage from './MainPage';
import LoginPage from './LoginPage';


const login = 'login';
const mainPage = 'mainPage';

function App() {
  const [currentPage, setPage] = useState(login);
  const [currentUser, setUser] = useState('');

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
      <Condicional if={currentPage === 'login'}>
        <LoginPage callback={loginCallback}/>
      </Condicional>

      <Condicional if={currentPage === 'mainPage'}>
        <MainPage user={currentUser}/>
      </Condicional>
    </>
  );
}

export default App;