
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="metodista-container py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-metodista-blue rounded-lg h-10 w-10 flex items-center justify-center text-white font-serif text-xl group-hover:scale-105 transition-transform">
                <span className="animate-float">UM</span>
              </div>
              <div className="relative overflow-hidden">
                <h1 className="text-xl font-serif font-bold text-metodista-blue">
                  Revista Digital
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-metodista-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h1>
                <p className="text-xs text-gray-500">Universidade Metodista de Angola</p>
              </div>
            </Link>
          </div>
          
          <div className="flex-1 max-w-md mx-auto md:mx-4 w-full relative order-3 md:order-2">
            <SearchBar />
          </div>
          
          <div className="order-2 md:order-3 flex items-center">
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-metodista-blue hover:text-metodista-darkBlue"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/categorias" className="group px-4 py-2 text-sm font-medium text-metodista-blue hover:text-metodista-darkBlue transition-colors flex items-center gap-1">
                      <span>Categorias</span>
                      <span className="h-0.5 w-0 bg-metodista-gold group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/sobre" className="group px-4 py-2 text-sm font-medium text-metodista-blue hover:text-metodista-darkBlue transition-colors flex items-center gap-1">
                      <span>Sobre</span>
                      <span className="h-0.5 w-0 bg-metodista-gold group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Button className="bg-metodista-blue hover:bg-metodista-blue/90 text-sm ml-2 button-shine" asChild>
                <Link to="/submeter">Submeter Artigo</Link>
              </Button>
            </nav>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-2 pb-2">
            <Link 
              to="/categorias" 
              className="px-4 py-2 text-metodista-blue hover:bg-metodista-light rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link 
              to="/sobre" 
              className="px-4 py-2 text-metodista-blue hover:bg-metodista-light rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/submeter" 
              className="px-4 py-2 bg-metodista-blue text-white rounded-md hover:bg-metodista-darkBlue transition-colors flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Submeter Artigo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
