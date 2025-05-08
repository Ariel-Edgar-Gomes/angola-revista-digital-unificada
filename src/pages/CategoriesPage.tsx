
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../data/mockData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BookIcon, ChevronRight } from 'lucide-react';

const CategoriesPage = () => {
  const categories = getAllCategories();

  return (
    <Layout>
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#1b1464]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#e53935]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="metodista-container py-10">
        <h1 className="font-serif text-4xl font-bold mb-2 text-[#1b1464] animate-fade-in relative inline-block">
          Categorias
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e53935]/70"></div>
        </h1>
        <p className="text-gray-600 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Explore os artigos por áreas de conhecimento e descubra pesquisas relacionadas à sua área de interesse.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={`/categorias/${category.id}`} 
              key={category.id} 
              className="group animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-transparent hover:border-[#1b1464]/10 overflow-hidden bg-white relative">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#1b1464]/5 rounded-bl-[100px] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#e53935]/5 rounded-tr-[100px] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-left"></div>
                
                <CardContent className="pt-8 relative">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#1b1464]/10 p-4 rounded-full group-hover:bg-[#1b1464]/15 transition-all transform group-hover:-translate-y-1 duration-300">
                      <BookIcon className="h-8 w-8 text-[#1b1464]" />
                    </div>
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-center mb-2 text-[#1b1464] group-hover:text-[#e53935] transition-colors">
                    {category.name}
                  </h2>
                </CardContent>
                <CardFooter className="justify-between items-center pb-6">
                  <span className="bg-[#1b1464] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {category.count} artigo{category.count !== 1 ? 's' : ''}
                  </span>
                  
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1b1464]/10 group-hover:bg-[#1b1464] transition-all">
                    <ChevronRight className="h-4 w-4 text-[#1b1464] group-hover:text-white transition-colors" />
                  </div>
                </CardFooter>
                
                {/* Enhanced hover indicator */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#e53935] transition-all duration-300 group-hover:w-full"></div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
