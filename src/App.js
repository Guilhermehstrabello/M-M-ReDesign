import React from 'react';
import './App.css';
import HeroSection from './assets/MM.png';
import Logo from './assets/Logo_M&M.png';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="Navbar">
        <div className="Logo">
        <img src={Logo} alt="Logo" />
        </div>
        <nav className="NavLinks">
          <a href="#">Produtos</a>
          <a href="#">Datas Comemorativas</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Faça Seu Pacote M&M</a>
        </nav>
        <div className="Icons">
          <FaUser size={20} color="#50221C" id='user' />
          <FaShoppingCart size={20} color="#50221C" id='cart' />
        </div>
      </header>

      <section className="Hero">
        <div className="HeroContent">
          <div className="HeroText">
            <h3>15% de desconto para presentes com o código Desc15</h3>
            <h2 style={{ fontFamily: 'Made-Sunflower' }}>Doces Presentes</h2>
            <h1>Para o seu docinho</h1>
            <div className="HeroButtons">
              <button className="produtos">Produtos</button>
              <button className="promocao">Promoção de Páscoa</button>
            </div>
          </div>
          <div className="HeroImage">
            <img src={HeroSection} alt="Descrição da imagem" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
