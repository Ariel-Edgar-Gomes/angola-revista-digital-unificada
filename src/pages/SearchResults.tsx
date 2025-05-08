
import React from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/ArticleCard';
import { useLocation, Link } from 'react-router-dom';
import { searchArticles } from '../data/mockData';
import { Button } from '@/components/ui/button';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const articles = searchArticles(query);

  return (
    <Layout>
      <div className="metodista-container py-8">
        <h1 className="font-serif text-3xl font-bold mb-2 text-metodista-blue">Resultados da Pesquisa</h1>
        <p className="text-gray-600 mb-8">
          {articles.length} resultado{articles.length !== 1 ? 's' : ''} para "{query}"
        </p>
        
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
            <h3 className="text-xl font-medium mb-2">Nenhum resultado encontrado</h3>
            <p className="text-gray-600 mb-6">
              Não foram encontrados artigos que correspondam à sua pesquisa.
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

export default SearchResults;
