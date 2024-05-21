// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Meu Site</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Sobre</a></li>
          <li><a href="#" className="text-white">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};


const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};


const Home = () => {
  return (
    <main className="flex-grow p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Meu Site</h2>
        <p className="text-lg mb-4">Este é um exemplo de um site criado com React e Tailwind CSS.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Clique Aqui
        </button>
      </div>
    </main>
  );
};
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;



