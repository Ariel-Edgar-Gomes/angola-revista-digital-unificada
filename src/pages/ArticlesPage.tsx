
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles, getAllCategories } from '../data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const ArticlesPage = () => {
  const articles = getAllArticles();
  const categories = getAllCategories();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
  };
  
  const filteredArticles = articles.filter(article => {
    // Filter by search query
    const matchesSearch = searchQuery.trim() === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = activeCategory === null || article.categoryId === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b1464]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e53935]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="metodista-container py-10">
        <h1 className="font-serif text-4xl font-bold mb-2 text-[#1b1464] animate-fade-in relative inline-block">
          Artigos Científicos
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e53935]/70"></div>
        </h1>
        <p className="text-gray-600 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Explore a nossa coleção de artigos científicos publicados por pesquisadores e académicos da comunidade metodista.
        </p>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fade-in border border-gray-100" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2 text-[#1b1464]">
            <Filter className="h-5 w-5" />
            Filtros
          </h2>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Pesquisar artigos..."
              className="pl-10 border-[#1b1464]/20 focus:border-[#1b1464] hover:border-[#1b1464]/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <h3 className="text-sm font-medium mb-3 text-gray-600">Categorias:</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <Button 
              variant={activeCategory === null ? "default" : "outline"} 
              onClick={() => handleCategoryChange(null)}
              className={activeCategory === null ? 
                "bg-[#1b1464] hover:bg-[#1b1464]/90 animate-fade-in" : 
                "border-[#1b1464]/20 hover:border-[#1b1464] hover:bg-[#1b1464]/5 animate-fade-in"
              }
              size="sm"
            >
              Todos
            </Button>
            
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={activeCategory === category.id ? 
                  "bg-[#1b1464] hover:bg-[#1b1464]/90 animate-fade-in" : 
                  "border-[#1b1464]/20 hover:border-[#1b1464] hover:bg-[#1b1464]/5 animate-fade-in"
                }
                size="sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="font-medium text-[#1b1464]">{filteredArticles.length}</span> artigo{filteredArticles.length !== 1 ? 's' : ''} encontrado{filteredArticles.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {filteredArticles.map((article, index) => (
              <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <Search className="h-8 w-8 text-[#1b1464]" />
            </div>
            <h3 className="text-xl font-medium mb-2">Nenhum artigo encontrado</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Tente ajustar seus critérios de pesquisa ou selecionar outra categoria.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticlesPage;
