
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
      {/* Hero section with enhanced styling */}
      <section className="py-8 sm:py-10 md:py-16">
        <div className="metodista-container">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[#1b1464] animate-fade-in relative inline-block">
              Revista Digital
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e53935]"></div>
              <div className="absolute -z-10 -inset-1 blur-xl bg-[#1b1464]/5 opacity-50 rounded-full"></div>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#e53935] mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>
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
      
      {/* Recent articles section with enhanced styling */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1b1464]/20 to-transparent"></div>
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#1b1464]/5 blur-3xl"></div>
        
        <div className="metodista-container">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-[#1b1464]"></div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1464] relative">
                Artigos Recentes
                <div className="absolute -z-10 inset-0 blur-sm bg-[#1b1464]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </h2>
            </div>
            <Button variant="outline" className="border-[#1b1464] text-[#1b1464] hover:bg-[#1b1464] hover:text-white transition-colors duration-300 relative overflow-hidden" asChild>
              <Link to="/artigos">
                Ver Todos os Artigos
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
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
      
      {/* Categories section with enhanced styling */}
      <section className="py-16 bg-[#f5f5f5] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1b1464]/20 to-transparent"></div>
        {/* Enhanced decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#e53935]/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-[#1b1464]/5 blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-1 h-20 bg-[#1b1464]/10 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-16 bg-[#e53935]/10 rounded-full"></div>
        
        <div className="metodista-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-[#1b1464]"></div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1464]">Destaques por Área</h2>
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
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b1464]/5 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#e53935]/5 rounded-tr-3xl"></div>
              
              <h3 className="font-serif text-xl font-bold text-[#1b1464] mb-6 flex items-center gap-2">
                <div className="h-5 w-0.5 bg-[#e53935]"></div>
                Categorias
              </h3>
              <CategoryList categories={categories.slice(0, 6)} />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section with enhanced styling */}
      <section className="py-16 bg-[#1b1464] text-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 right-0 w-full h-40 bg-[#0f0c47]/30 -skew-y-6 transform-gpu"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e53935]/30"></div>
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-[#e53935]/20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-[#e53935]/10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-20 right-20 w-12 h-12 rounded-full border border-[#e53935]/5 animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-white/5"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-white/5"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-white/5"></div>
        </div>
        
        <div className="metodista-container text-center relative z-10">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative inline-block">
            Submeta o seu Artigo Científico
            <div className="absolute -z-10 inset-0 blur-lg bg-[#e53935]/20 rounded-lg opacity-60"></div>
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#e53935]/50 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
          <p className="mb-8 max-w-2xl mx-auto">
            Compartilhe sua pesquisa com a comunidade acadêmica. Nossa revista digital está sempre aberta a novas contribuições científicas.
          </p>
          <Button size="lg" asChild className="bg-[#e53935] hover:bg-[#c62828] text-white font-medium px-8 button-shine relative overflow-hidden">
            <Link to="/submeter">
              Submeter Artigo
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
