import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from './components/pages/home'
import Oleos from './components/pages/oleos-essenciais'
import Aromaterapia from './components/pages/o-que-e-aromaterapia'
import Ajuda from './components/pages/ajuda-para'
import Referencias from './components/pages/referencias-bibliograficas'
import Sobre from './components/pages/sobre-aroma'
import Detalhes from './components/pages/oleo-detalhes'
import DetalhesAjuda from './components/pages/Ajuda-detalhes'

//Componetes
import Navebar from './components/NavBar/index';
import Footer from './components/Footer/index';
import Container from './components/Container/index';

function App() {
  return (
    <BrowserRouter>
      <Navebar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/o-que-e-aromaterapia" element={<Aromaterapia />} />

          <Route path="/oleos-essenciais" element={<Oleos />} />

          <Route path="/ajuda-para" element={<Ajuda />} />

          <Route path="/referencias-bibliograficas" element={<Referencias />} />

          <Route path="/sobre-aroma" element={<Sobre />} />

          <Route path="/oleo-detalhes/:id" element={<Detalhes/>} />

          <Route path="/Ajuda-detalhes/:id" element={<DetalhesAjuda/>} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
