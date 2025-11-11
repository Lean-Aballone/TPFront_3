import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Lean from './pages/Lean';
import Bitacora from './pages/Bitacora';
import Erika from './pages/Erika';
import Gonza from './pages/Gonza';
import Mariano from './pages/Mariano';
import Home from './pages/Home';
import Peliculas from './pages/Peliculas.jsx';
import Diagrama from './pages/Diagrama.jsx';
import Clima from './pages/Clima.jsx';
import Noticias from './pages/Noticias.jsx';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/bitacora" element={<Bitacora/>}/>
          <Route path="/lean" element={<Lean />} />
          <Route path="/erika" element={<Erika />} />
          <Route path="/gonza" element={<Gonza />} />
          <Route path="/mariano" element={<Mariano />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/diagrama" element={<Diagrama />} />
          <Route path="/clima" element={<Clima />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
