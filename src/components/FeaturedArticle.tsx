
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
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gradient-to-b from-black/80 via-black/50 to-transparent absolute inset-0 z-10" />
      <img src={image} alt={title} className="w-full h-[500px] object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 text-white">
        <Badge className="bg-metodista-gold hover:bg-metodista-gold/90 mb-3">{category}</Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 sm:mb-3">
          {title}
        </h2>
        <p className="text-gray-200 mb-4 max-w-2xl line-clamp-3">{abstract}</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center text-sm gap-4">
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
          <Button asChild className="bg-metodista-blue hover:bg-metodista-blue/90 text-white">
            <Link to={`/artigos/${id}`}>Ler Artigo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
