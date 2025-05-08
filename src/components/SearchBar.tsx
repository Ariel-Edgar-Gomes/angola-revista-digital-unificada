
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/pesquisa?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <form 
      onSubmit={handleSearch} 
      className="group relative w-full max-w-md transition-all duration-500"
    >
      <div className={`flex overflow-hidden rounded-full transition-all duration-300 ${isFocused ? 'shadow-[0_0_0_2px_rgba(0,51,102,0.2),0_8px_20px_rgba(0,0,0,0.1)]' : 'shadow-md'}`}>
        <div className="relative flex-grow">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 
            ${isFocused ? 'text-metodista-blue' : 'text-gray-400'} h-4 w-4`} />
          <Input
            type="text"
            placeholder="Pesquisar artigos científicos..."
            className="pl-10 pr-4 py-2 h-11 w-full border-0 rounded-l-full focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <Button 
          type="submit" 
          className="bg-metodista-blue hover:bg-metodista-blue/90 rounded-l-none rounded-r-full transition-all duration-300
            hover:shadow-inner h-11"
        >
          Pesquisar
        </Button>
      </div>
      <div className={`absolute inset-0 rounded-full bg-metodista-blue/5 scale-[0.97] blur-md transition-opacity duration-500
        ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
    </form>
  );
};

export default SearchBar;
