
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-metodista-blue text-white pt-12 pb-6">
      <div className="metodista-container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-metodista-gold font-serif text-lg font-semibold mb-4">Revista Digital</h3>
            <p className="text-gray-300 text-sm">
              Sistema de publicações científicas da Universidade Metodista de Angola
            </p>
          </div>
          
          <div>
            <h3 className="text-metodista-gold font-serif text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Página Inicial</Link>
              </li>
              <li>
                <Link to="/categorias" className="text-gray-300 hover:text-white">Categorias</Link>
              </li>
              <li>
                <Link to="/submeter" className="text-gray-300 hover:text-white">Submeter Artigo</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white">Sobre a Revista</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-metodista-gold font-serif text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categorias/ciencias-sociais" className="text-gray-300 hover:text-white">Ciências Sociais</Link>
              </li>
              <li>
                <Link to="/categorias/engenharia" className="text-gray-300 hover:text-white">Engenharia</Link>
              </li>
              <li>
                <Link to="/categorias/medicina" className="text-gray-300 hover:text-white">Medicina</Link>
              </li>
              <li>
                <Link to="/categorias/educacao" className="text-gray-300 hover:text-white">Educação</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-metodista-gold font-serif text-lg font-semibold mb-4">Contacto</h3>
            <address className="text-gray-300 text-sm not-italic">
              <p>Universidade Metodista de Angola</p>
              <p>Luanda, Angola</p>
              <p className="mt-2">
                <a href="mailto:revista@uma.co.ao" className="hover:text-white">revista@uma.co.ao</a>
              </p>
              <p>
                <a href="tel:+244999999999" className="hover:text-white">+244 999 999 999</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Universidade Metodista de Angola. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/termos" className="hover:text-white">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-white">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
