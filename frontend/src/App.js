import {React, useState } from 'react';
import Condicional from './Components/Condicional';
import MainPage from './MainPage';
import LoginPage from './LoginPage';


const login = 'login';
const mainPage = 'mainPage';

function App() {
  const [currentPage, setPage] = useState(login);
  const [currentUser, setUser] = useState('');

  function loginCallback(user) {
    if (user !== '')
    {
      setPage(mainPage);
      setUser(user);
    }
  }

  console.log(currentPage);

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