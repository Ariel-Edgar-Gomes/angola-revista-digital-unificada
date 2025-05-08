
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-metodista-blue pt-16 pb-6 overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-metodista-gold to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-metodista-darkBlue rounded-full filter blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-metodista-gold rounded-full filter blur-[100px] opacity-10 translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="metodista-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                <div className="bg-metodista-gold rounded-md h-8 w-8 flex items-center justify-center text-metodista-blue font-serif text-xl font-bold">
                  U
                </div>
              </div>
              <h3 className="text-metodista-gold font-serif text-xl font-semibold">Revista Digital</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sistema de publicações científicas da Universidade Metodista de Angola, 
              dedicado à excelência acadêmica e à divulgação de pesquisas inovadoras.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-metodista-lightGold font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-metodista-gold/40 rounded"></span>
              Links Úteis
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/categorias" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/submeter" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Submeter Artigo
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Sobre a Revista
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-metodista-lightGold font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-metodista-gold/40 rounded"></span>
              Categorias
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/categorias/ciencias-sociais" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Ciências Sociais
                </Link>
              </li>
              <li>
                <Link to="/categorias/engenharia" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Engenharia
                </Link>
              </li>
              <li>
                <Link to="/categorias/medicina" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Medicina
                </Link>
              </li>
              <li>
                <Link to="/categorias/educacao" className="text-gray-300 hover:text-metodista-lightGold transition-colors flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-metodista-gold/30 rounded"></span>
                  Educação
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-metodista-lightGold font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-metodista-gold/40 rounded"></span>
              Contacto
            </h3>
            <address className="text-gray-300 text-sm not-italic space-y-4">
              <p className="flex items-start gap-3">
                <span className="bg-white/10 p-1.5 rounded-md flex-shrink-0 mt-1">
                  <Mail className="h-4 w-4 text-metodista-gold" />
                </span>
                <a href="mailto:revista@uma.co.ao" className="hover:text-metodista-lightGold transition-colors">
                  revista@uma.co.ao
                </a>
              </p>
              <p className="flex items-start gap-3">
                <span className="bg-white/10 p-1.5 rounded-md flex-shrink-0 mt-1">
                  <Phone className="h-4 w-4 text-metodista-gold" />
                </span>
                <a href="tel:+244999999999" className="hover:text-metodista-lightGold transition-colors">
                  +244 999 999 999
                </a>
              </p>
              <div className="pt-2">
                <p className="mb-1">Universidade Metodista de Angola</p>
                <p>Luanda, Angola</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Universidade Metodista de Angola. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs">
              <Link to="/termos" className="hover:text-metodista-lightGold transition-colors">Termos de Uso</Link>
              <Link to="/privacidade" className="hover:text-metodista-lightGold transition-colors">Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
