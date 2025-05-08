
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-white">
        <Badge className="bg-metodista-gold hover:bg-metodista-gold/90 mb-4 animate-fade-in">
          {category}
        </Badge>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 animate-fade-in">
          {title}
        </h2>
        
        <p className="text-gray-200 mb-6 max-w-3xl text-base sm:text-lg line-clamp-3 animate-fade-in">
          {abstract}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-fade-in">
          <div className="flex items-center text-sm gap-6">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-metodista-gold" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-metodista-gold" />
              <span>{date}</span>
            </div>
          </div>
          <Button asChild className="bg-metodista-blue hover:bg-metodista-darkBlue text-white button-shine shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Link to={`/artigos/${id}`}>Ler Artigo</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-6 right-6 w-24 h-24 border border-white/10 rounded-full z-10"></div>
      <div className="absolute top-10 right-10 w-16 h-16 border border-metodista-gold/20 rounded-full z-10"></div>
    </div>
  );
};

export default FeaturedArticle;
