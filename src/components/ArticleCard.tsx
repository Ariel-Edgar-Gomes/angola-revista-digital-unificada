
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  abstract: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  abstract,
  category,
  author,
  date,
  image
}) => {
  return (
    <Link to={`/artigos/${id}`} className="group block h-full">
      <Card className="h-full overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border-transparent hover:border-[#1b1464]/10 relative">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute transform rotate-45 bg-[#1b1464]/5 text-[#1b1464]/80 w-24 h-5 top-6 right-[-30px]"></div>
        </div>
        
        {image && (
          <div className="h-48 overflow-hidden relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {/* Enhanced gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1464]/30 via-[#1b1464]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Read more indicator that appears on hover */}
            <div className="absolute bottom-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <ArrowRight className="h-4 w-4 text-[#1b1464]" />
            </div>
          </div>
        )}
        <CardHeader className="pb-2 relative">
          <Badge 
            className="absolute -top-4 left-4 bg-[#1b1464] hover:bg-[#0f0c47] shadow-md"
          >
            {category}
          </Badge>
          <h3 className="font-serif font-semibold text-lg text-[#1b1464] mt-4 group-hover:text-[#e53935] transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-gray-600 text-sm line-clamp-3 group-hover:text-gray-700 transition-colors">{abstract}</p>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 flex items-center justify-between border-t border-gray-100 mt-2 pt-3">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3 text-[#1b1464]/70" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-[#1b1464]/70" />
            <span>{date}</span>
          </div>
        </CardFooter>
        
        {/* Enhanced hover indicator with animation */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#e53935] transition-all duration-300 group-hover:w-full"></div>
        
        {/* Subtle corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#1b1464]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#1b1464]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      </Card>
    </Link>
  );
};

export default ArticleCard;
