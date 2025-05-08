
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-metodista-blue pt-16 pb-8 overflow-hidden">
      {/* Abstract design elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-metodista-gold/80 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-metodista-darkBlue rounded-full filter blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-metodista-gold rounded-full filter blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/3"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22 opacity=%22.1%22%3E%3Cpath d=%22M0 0h40v40H0V0zm40 40h40v40H40V40z%22 fill=%22%23fff%22/%3E%3C/svg%3E')] pointer-events-none"></div>
      
      <div className="metodista-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg shadow-inner-lg">
                <div className="bg-gradient-to-br from-metodista-gold to-metodista-lightGold rounded-md h-9 w-9 flex items-center justify-center text-metodista-blue font-serif text-xl font-bold shadow-md">
                  U
                </div>
              </div>
              <h3 className="text-metodista-lightGold font-serif text-xl font-semibold">Revista Digital</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sistema de publicações científicas da Universidade Metodista de Angola, 
              dedicado à excelência acadêmica e à divulgação de pesquisas inovadoras.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://facebook.com" aria-label="Facebook" className="bg-white/10 hover:bg-metodista-gold/90 hover:text-metodista-blue transition-all duration-300 p-2 rounded-full text-white shadow-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="bg-white/10 hover:bg-metodista-gold/90 hover:text-metodista-blue transition-all duration-300 p-2 rounded-full text-white shadow-md">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="bg-white/10 hover:bg-metodista-gold/90 hover:text-metodista-blue transition-all duration-300 p-2 rounded-full text-white shadow-md">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" aria-label="Youtube" className="bg-white/10 hover:bg-metodista-gold/90 hover:text-metodista-blue transition-all duration-300 p-2 rounded-full text-white shadow-md">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-metodista-lightGold font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-metodista-gold/40 rounded"></span>
              Links Úteis
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Página Inicial</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
              <li>
                <Link to="/categorias" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Categorias</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
              <li>
                <Link to="/submeter" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Submeter Artigo</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Sobre a Revista</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-metodista-lightGold font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-metodista-gold/40 rounded"></span>
              Categorias
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/categorias/ciencias-sociais" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Ciências Sociais</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
              <li>
                <Link to="/categorias/engenharia" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Engenharia</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
              <li>
                <Link to="/categorias/medicina" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Medicina</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
              <li>
                <Link to="/categorias/educacao" className="text-gray-300 hover:text-metodista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-metodista-gold/60 transition-all duration-300 rounded"></span>
                  <span>Educação</span>
                  <ArrowRight className="h-3 w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-metodista-gold" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-metodista-lightGold font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-metodista-gold/40 rounded"></span>
              Contacto
            </h3>
            <address className="text-gray-300 text-sm not-italic space-y-5">
              <p className="flex items-start gap-3">
                <span className="bg-white/10 p-2 rounded-md flex-shrink-0 mt-1 shadow-inner">
                  <Mail className="h-4 w-4 text-metodista-gold" />
                </span>
                <a href="mailto:revista@uma.co.ao" className="hover:text-metodista-gold transition-colors">
                  revista@uma.co.ao
                </a>
              </p>
              <p className="flex items-start gap-3">
                <span className="bg-white/10 p-2 rounded-md flex-shrink-0 mt-1 shadow-inner">
                  <Phone className="h-4 w-4 text-metodista-gold" />
                </span>
                <a href="tel:+244999999999" className="hover:text-metodista-gold transition-colors">
                  +244 999 999 999
                </a>
              </p>
              <div className="pt-2 bg-white/5 p-4 rounded-lg shadow-inner backdrop-blur-sm">
                <p className="mb-1 text-metodista-gold/90">Universidade Metodista de Angola</p>
                <p>Luanda, Angola</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Universidade Metodista de Angola. Todos os direitos reservados.</p>
            <div className="flex gap-8 text-xs">
              <Link to="/termos" className="hover:text-metodista-gold transition-colors">Termos de Uso</Link>
              <Link to="/privacidade" className="hover:text-metodista-gold transition-colors">Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
