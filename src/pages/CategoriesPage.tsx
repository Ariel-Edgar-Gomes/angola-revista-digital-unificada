
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../data/mockData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BookIcon } from 'lucide-react';

const CategoriesPage = () => {
  const categories = getAllCategories();

  return (
    <Layout>
      <div className="metodista-container py-8">
        <h1 className="font-serif text-3xl font-bold mb-8 text-metodista-blue">Categorias de Publicações</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/categorias/${category.id}`} key={category.id}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-metodista-light p-4 rounded-full">
                      <BookIcon className="h-8 w-8 text-metodista-blue" />
                    </div>
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-center mb-2 text-metodista-blue">
                    {category.name}
                  </h2>
                </CardContent>
                <CardFooter className="justify-center pb-6">
                  <span className="bg-metodista-blue text-white text-sm font-medium px-3 py-1 rounded-full">
                    {category.count} artigo{category.count !== 1 ? 's' : ''}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
