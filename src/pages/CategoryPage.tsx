
import React from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/ArticleCard';
import { Link, useParams } from 'react-router-dom';
import { getArticlesByCategory, getCategoryById } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookIcon } from 'lucide-react';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  const articles = id ? getArticlesByCategory(id) : [];

  if (!category) {
    return (
      <Layout>
        <div className="metodista-container py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1b1464]/10 mb-4 animate-pulse">
              <BookIcon className="h-8 w-8 text-[#1b1464]" />
            </div>
            <h2 className="text-2xl font-serif font-bold mb-4">Categoria não encontrada</h2>
            <p className="mb-6 text-gray-600">A categoria que você está procurando não existe ou foi removida.</p>
            <Button asChild className="bg-[#1b1464] hover:bg-[#1b1464]/90">
              <Link to="/categorias">Ver todas as categorias</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#1b1464]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#e53935]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="metodista-container py-10">
        <Link to="/categorias" className="inline-flex items-center gap-1 text-[#1b1464] hover:text-[#e53935] transition-colors mb-6 group animate-fade-in">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para categorias</span>
        </Link>
        
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-[#1b1464]/10 p-3 rounded-full">
              <BookIcon className="h-6 w-6 text-[#1b1464]" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#1b1464]">{category.name}</h1>
          </div>
          
          <p className="text-gray-600 ml-16">
            Mostrando {articles.length} artigo{articles.length !== 1 ? 's' : ''} nesta categoria
          </p>
        </div>
        
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div className="animate-fade-in" key={article.id} style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}>
                <ArticleCard
                  id={article.id}
                  title={article.title}
                  abstract={article.abstract}
                  category={article.category}
                  author={article.author}
                  date={article.date}
                  image={article.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1b1464]/10 mb-4">
              <BookIcon className="h-8 w-8 text-[#1b1464]/70" />
            </div>
            <h3 className="text-xl font-medium mb-2">Nenhum artigo nesta categoria</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Ainda não há artigos publicados na categoria <span className="font-medium">{category.name}</span>.
            </p>
            <Button asChild className="bg-[#1b1464] hover:bg-[#1b1464]/90">
              <Link to="/artigos">Ver todos os artigos</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
