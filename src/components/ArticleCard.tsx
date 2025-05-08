
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, UserIcon } from 'lucide-react';

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
      <Card className="h-full overflow-hidden transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl border-transparent hover:border-[#1b1464]/10">
        {image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
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
          <p className="text-gray-600 text-sm line-clamp-3">{abstract}</p>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <UserIcon className="h-3 w-3 text-[#1b1464]/70" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3 text-[#1b1464]/70" />
            <span>{date}</span>
          </div>
        </CardFooter>
        
        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#e53935] transition-all duration-300 group-hover:w-full"></div>
      </Card>
    </Link>
  );
};

export default ArticleCard;
