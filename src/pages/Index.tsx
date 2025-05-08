
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
      <section className="py-8 sm:py-10 md:py-16">
        <div className="metodista-container">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-metodista-blue animate-fade-in">
              Revista Digital
            </h1>
            <div className="w-24 h-1 mx-auto bg-metodista-gold mb-3"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in">
              Publicações científicas e acadêmicas da comunidade metodista angolana
            </p>
          </div>
          
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
      
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-metodista-blue/20 to-transparent"></div>
        <div className="metodista-container">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-metodista-blue"></div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-metodista-blue">Artigos Recentes</h2>
            </div>
            <Button variant="outline" className="border-metodista-blue text-metodista-blue hover:bg-metodista-blue hover:text-white transition-colors duration-300" asChild>
              <Link to="/artigos">Ver Todos os Artigos</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.slice(0, 3).map((article, index) => (
              <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
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
        </div>
      </section>
      
      <section className="py-16 bg-metodista-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-metodista-blue/20 to-transparent"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-metodista-gold/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-metodista-blue/5 blur-3xl"></div>
        
        <div className="metodista-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-metodista-blue"></div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-metodista-blue">Destaques por Área</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentArticles.slice(3, 7).map((article, index) => (
                  <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <ArticleCard
                      id={article.id}
                      title={article.title}
                      abstract={article.abstract}
                      category={article.category}
                      author={article.author}
                      date={article.date}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-serif text-xl font-bold text-metodista-blue mb-6 flex items-center gap-2">
                <div className="h-5 w-0.5 bg-metodista-gold"></div>
                Categorias
              </h3>
              <CategoryList categories={categories.slice(0, 6)} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-metodista-blue text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-40 bg-metodista-darkBlue/30 -skew-y-6 transform-gpu"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-metodista-gold/30"></div>
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-metodista-gold/20"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-metodista-gold/10"></div>
        
        <div className="metodista-container text-center relative z-10">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Submeta o seu Artigo Científico</h2>
          <div className="w-24 h-1 mx-auto bg-metodista-gold/50 mb-6"></div>
          <p className="mb-8 max-w-2xl mx-auto">
            Compartilhe sua pesquisa com a comunidade acadêmica. Nossa revista digital está sempre aberta a novas contribuições científicas.
          </p>
          <Button size="lg" asChild className="bg-metodista-gold hover:bg-metodista-lightGold text-metodista-blue font-medium px-8 button-shine">
            <Link to="/submeter">Submeter Artigo</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
