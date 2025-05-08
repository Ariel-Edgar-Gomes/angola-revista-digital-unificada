
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
    <Link to={`/artigos/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {image && (
          <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Badge className="bg-metodista-blue hover:bg-metodista-blue/90">{category}</Badge>
          </div>
          <h3 className="font-serif font-semibold text-lg text-metodista-blue mt-2">{title}</h3>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-gray-600 text-sm line-clamp-3">{abstract}</p>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <UserIcon className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArticleCard;
