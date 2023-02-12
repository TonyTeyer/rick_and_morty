import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';



function App () {
  const navigate = useNavigate()
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const username = "jesus@henry.com";
  const password = "jesus1234"

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function login(userData) {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home")
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            setCharacters((prevChars) => [...prevChars, data]);
          } 
          else {
            window.alert('No hay personajes con ese ID');
          }
      });
}



  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className='App'>
      {
        location.pathname !== "/" && <Nav onSearch={onSearch}  />
      }
      <Routes>
        <Route 
          path='/'
          element={ <Form login={login}/> }
        
        />

        <Route 
          path='/home'
          element={ <Cards characters={characters} onClose= {onClose}/> }
        />
        <Route
          path='/about'
          element={ <About/> }
        />
        <Route 
          path='/detail/:detailId'
          element={ <Detail/> }
        />

      </Routes>

    </div>
  )
}

export default App
