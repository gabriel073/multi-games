import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Memotest from "../components/memotest/Memotest.jsx";
import WordsPerMinute from "../components/palabras/WordsPerMinute.jsx";
import Pokemon from "../components/pokemon/Pokemon.jsx";
import App from "../App.jsx";



function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/memotest" element={<Memotest />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/wpm" element={<WordsPerMinute />} />
      </Routes>
    </Router>
  )
}

export default Rutas;