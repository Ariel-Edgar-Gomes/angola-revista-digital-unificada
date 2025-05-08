
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, UserIcon } from 'lucide-react';

interface FeaturedArticleProps {
  id: string;
  title: string;
  abstract: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  abstract,
  category,
  author,
  date,
  image
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-10"></div>
      
      {/* Image with enhanced animation */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      
      {/* Content with improved styling and animations */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20 text-white">
        <Badge className="bg-[#e53935] hover:bg-[#c62828] mb-4 animate-fade-in">
          {category}
        </Badge>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 animate-fade-in leading-tight text-balance">
          {title}
        </h2>
        
        <p className="text-gray-100 mb-6 max-w-3xl text-base sm:text-lg md:text-xl line-clamp-3 animate-fade-in">
          {abstract}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-fade-in">
          <div className="flex items-center text-sm gap-6">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-[#e53935]" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-[#e53935]" />
              <span>{date}</span>
            </div>
          </div>
          <Button asChild className="bg-[#1b1464] hover:bg-[#110c3c] text-white button-shine shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Link to={`/artigos/${id}`}>Ler Artigo Completo</Link>
          </Button>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-6 right-6 w-28 h-28 border border-white/10 rounded-full z-10 animate-float"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border border-[#e53935]/20 rounded-full z-10"></div>
      <div className="absolute top-14 right-14 w-12 h-12 border border-[#1b1464]/20 rounded-full z-10"></div>
      
      {/* Angular decorative element */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#1b1464]/10 -rotate-45 transform origin-top-left z-5"></div>
    </div>
  );
};

export default FeaturedArticle;
