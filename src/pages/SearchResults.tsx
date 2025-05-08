
import React from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/ArticleCard';
import { useLocation, Link } from 'react-router-dom';
import { searchArticles } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Filter, BookOpen, AlertCircle } from 'lucide-react';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const articles = searchArticles(query);

  return (
    <Layout>
      {/* Enhanced background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#1b1464]/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#e53935]/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-60 w-40 h-40 bg-[#1b1464]/3 rounded-full blur-3xl -z-10 animate-float opacity-20"></div>
      
      <div className="metodista-container py-10">
        <Link to="/" className="inline-flex items-center gap-1 text-[#1b1464] hover:text-[#e53935] transition-colors mb-6 group animate-fade-in">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para página inicial</span>
        </Link>
        
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-[#1b1464]/10 p-3 rounded-full relative overflow-hidden group">
              <Search className="h-6 w-6 text-[#1b1464] relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1b1464]/0 via-[#1b1464]/5 to-[#1b1464]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#1b1464] relative">
              Resultados da Pesquisa
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-[#e53935]/70"></span>
            </h1>
          </div>
          
          <div className="ml-16 flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-gray-600">
              <span className="font-medium">{articles.length}</span> resultado{articles.length !== 1 ? 's' : ''} encontrado{articles.length !== 1 ? 's' : ''} 
            </p>
            <div className="hidden sm:block text-gray-400 mx-2">•</div>
            <p className="text-[#1b1464] bg-[#1b1464]/5 px-3 py-1 rounded-full text-sm inline-flex items-center gap-1 border border-[#1b1464]/10">
              <Search className="h-3 w-3" />
              <span>"{query}"</span>
            </p>
          </div>
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
          <div className="text-center py-16 bg-white rounded-lg shadow-md animate-fade-in border border-gray-100 relative overflow-hidden" style={{ animationDelay: "0.3s" }}>
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1b1464]/3 rounded-bl-[100px] -z-0 opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#e53935]/3 rounded-tr-[100px] -z-0 opacity-5"></div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1b1464]/10 mb-4 relative">
              <AlertCircle className="h-8 w-8 text-[#1b1464]/70" />
              <div className="absolute inset-0 rounded-full border border-[#1b1464]/30 animate-ping opacity-20"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-[#1b1464]">Nenhum resultado encontrado</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Não foram encontrados artigos para a sua pesquisa <span className="font-medium">"{query}"</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-[#1b1464] hover:bg-[#1b1464]/90">
                <Link to="/artigos" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Ver todos os artigos</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-[#1b1464]/20 hover:border-[#1b1464]/60">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar para a página inicial</span>
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 bg-[#1b1464]/5 p-4 rounded-lg max-w-md mx-auto">
              <h4 className="text-sm font-medium mb-2 text-[#1b1464]">Sugestões de pesquisa:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Verifique a ortografia das palavras-chave</li>
                <li>• Tente palavras-chave mais genéricas</li>
                <li>• Navegue por categorias para encontrar conteúdos relacionados</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
