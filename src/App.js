import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Film from './componen/Film';
import Gallery from './componen/Gallery';
import Home from './componen/Home';
import Music from './componen/Mucis';
import Profile from './componen/Profile';

function App() {
  return (
    <>
    <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/profile">Profile</Link> </li>
      <li> <Link to="/gallery">Gallery</Link> </li>
      <li> <Link to="/music">Music</Link> </li>
      <li> <Link to="/film">Film</Link> </li>
    </ul>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/music' element={<Music />} />
      <Route path='/film' element={<Film />} />
    </Routes>
    </>
  );
}

export default App;
