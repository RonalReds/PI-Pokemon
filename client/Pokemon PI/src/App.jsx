import { Route, Routes, useLocation } from 'react-router-dom';
import LandinPage from './components/LandingPage/landingPage';
import Home from './components/Home/Home';
import PokemonDetail from './components/Detail/PokemonDetail';
import NewPokemon from './components/Create-Pokemon/PostPokemon';
import NavBar from './components/NavBar/NavBar';


function App() {

  const location = useLocation();
  

  return (
    <div>
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandinPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<PokemonDetail />} />
        <Route path='/create' element={<NewPokemon />} />
      </Routes>
    </div>
  )
}

export default App
