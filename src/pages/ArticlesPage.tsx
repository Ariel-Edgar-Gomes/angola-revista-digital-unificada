
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ArticleCard from '../components/ArticleCard';
import { getAllArticles, getAllCategories } from '../data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

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
      <div className="metodista-container py-8">
        <h1 className="font-serif text-3xl font-bold mb-8 text-metodista-blue">Todos os Artigos</h1>
        
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Pesquisar artigos..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-2">
          <Button 
            variant={activeCategory === null ? "default" : "outline"} 
            onClick={() => handleCategoryChange(null)}
            className={activeCategory === null ? "bg-metodista-blue hover:bg-metodista-blue/90" : ""}
          >
            Todos
          </Button>
          
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className={activeCategory === category.id ? "bg-metodista-blue hover:bg-metodista-blue/90" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
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
            <h3 className="text-xl font-medium mb-2">Nenhum artigo encontrado</h3>
            <p className="text-gray-600">
              Tente ajustar seus critérios de pesquisa ou selecionar outra categoria.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticlesPage;
