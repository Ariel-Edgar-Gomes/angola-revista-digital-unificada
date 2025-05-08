
import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="metodista-container py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-metodista-blue rounded-full h-10 w-10 flex items-center justify-center text-white font-serif text-xl">
                UM
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-metodista-blue">Revista Digital</h1>
                <p className="text-xs text-gray-500">Universidade Metodista de Angola</p>
              </div>
            </Link>
          </div>
          
          <div className="flex-1 max-w-md mx-auto md:mx-0 w-full relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Pesquisar artigos científicos..." 
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-metodista-blue focus:ring-metodista-blue rounded-full"
              />
            </div>
          </div>
          
          <nav className="flex items-center gap-2">
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link to="/categorias">Categorias</Link>
            </Button>
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link to="/sobre">Sobre</Link>
            </Button>
            <Button variant="default" className="bg-metodista-blue hover:bg-metodista-blue/90 text-sm" asChild>
              <Link to="/submeter">Submeter Artigo</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
