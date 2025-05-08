
import React from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/ArticleCard';
import { Link, useParams } from 'react-router-dom';
import { getArticlesByCategory, getCategoryById } from '../data/mockData';
import { Button } from '@/components/ui/button';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;
  const articles = id ? getArticlesByCategory(id) : [];

  if (!category) {
    return (
      <Layout>
        <div className="metodista-container py-12">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Categoria não encontrada</h2>
            <p className="mb-6">A categoria que você está procurando não existe ou foi removida.</p>
            <Button asChild>
              <Link to="/categorias">Ver todas as categorias</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="metodista-container py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/categorias" className="text-sm text-gray-500 hover:text-metodista-blue">
              Categorias
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
          <h1 className="font-serif text-3xl font-bold mb-2 text-metodista-blue">{category.name}</h1>
          <p className="text-gray-600">
            Mostrando {articles.length} artigo{articles.length !== 1 ? 's' : ''} nesta categoria
          </p>
        </div>
        
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                abstract={article.abstract}
                category={article.category}
                author={article.author}
                date={article.date}
                image={article.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Nenhum artigo nesta categoria</h3>
            <p className="text-gray-600 mb-6">
              Ainda não há artigos publicados nesta categoria.
            </p>
            <Button asChild>
              <Link to="/artigos">Ver todos os artigos</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
