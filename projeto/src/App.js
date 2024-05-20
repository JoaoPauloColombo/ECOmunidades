import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Bio from './pages/Bio';
import Cadastro from './pages/Cadastro';
import GlobalStyles from './styles/GlobalStyle';
import Noticias from './pages/Noticias';
import Projetos from './pages/Projetos';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/noticias" element={<Noticias />}/>
        <Route path="/projetos" element={<Projetos />}/>
        <Route path="/bio/:id" element={<Bio />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;