
import React from 'react';
import Layout from '../components/layout/Layout';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import CategoryList from '../components/CategoryList';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { featuredArticles, categories } from '../data/mockData';

const Index = () => {
  // Get the first article as the featured one
  const featuredArticle = featuredArticles[0];
  // Get the rest of the articles
  const recentArticles = featuredArticles.slice(1);

  return (
    <Layout>
      <section className="bg-metodista-light py-8">
        <div className="metodista-container">
          <h1 className="text-center font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-metodista-blue">
            Revista Digital - Universidade Metodista de Angola
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Publicações científicas e acadêmicas da comunidade metodista angolana
          </p>
          
          {featuredArticle && (
            <div className="mb-12 animate-fade-in">
              <FeaturedArticle
                id={featuredArticle.id}
                title={featuredArticle.title}
                abstract={featuredArticle.abstract}
                category={featuredArticle.category}
                author={featuredArticle.author}
                date={featuredArticle.date}
                image={featuredArticle.image || "/placeholder.svg"}
              />
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="metodista-container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-metodista-blue">Artigos Recentes</h2>
            <Button variant="outline" asChild>
              <Link to="/artigos">Ver Todos os Artigos</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.slice(0, 3).map((article) => (
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
        </div>
      </section>
      
      <section className="py-12 bg-metodista-light">
        <div className="metodista-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-metodista-blue mb-6">Destaques por Área</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentArticles.slice(3, 7).map((article) => (
                  <ArticleCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    abstract={article.abstract}
                    category={article.category}
                    author={article.author}
                    date={article.date}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <CategoryList categories={categories.slice(0, 6)} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-metodista-blue text-white">
        <div className="metodista-container text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Submeta o seu Artigo Científico</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Compartilhe sua pesquisa com a comunidade acadêmica. Nossa revista digital está sempre aberta a novas contribuições científicas.
          </p>
          <Button size="lg" asChild className="bg-metodista-gold hover:bg-metodista-gold/90 text-metodista-blue">
            <Link to="/submeter">Submeter Artigo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
