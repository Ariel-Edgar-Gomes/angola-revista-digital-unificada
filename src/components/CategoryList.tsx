
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="bg-metodista-light rounded-lg p-6">
      <h2 className="font-serif text-xl font-semibold mb-4 text-metodista-blue">Categorias</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/categorias/${category.id}`}
            className="flex items-center justify-between hover:bg-white p-2 rounded transition-colors"
          >
            <span className="font-medium text-gray-700">{category.name}</span>
            <span className="bg-metodista-blue text-white text-xs px-2 py-1 rounded-full">{category.count}</span>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Button variant="outline" asChild className="w-full">
          <Link to="/categorias">Ver Todas as Categorias</Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoryList;
