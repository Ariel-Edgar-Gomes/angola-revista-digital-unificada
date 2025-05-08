
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getArticleById } from '../data/mockData';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, UserIcon, BookmarkIcon, Share, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  const handleSaveArticle = () => {
    toast({
      title: "Artigo salvo",
      description: "O artigo foi salvo na sua biblioteca.",
    });
  };

  const handleShareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copiado",
      description: "O link do artigo foi copiado para a área de transferência.",
    });
  };

  if (!article) {
    return (
      <Layout>
        <div className="metodista-container py-12">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Artigo não encontrado</h2>
            <p className="mb-6">O artigo que você está procurando não existe ou foi removido.</p>
            <Button asChild>
              <Link to="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-80 bg-[#1b1464]/5 -z-10"></div>
        <div className="absolute top-20 right-40 w-72 h-72 rounded-full bg-[#e53935]/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-[#1b1464]/5 blur-3xl -z-10"></div>
        
        <div className="metodista-container py-12">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link to="/" className="text-[#1b1464] hover:text-[#e53935] transition-colors flex items-center gap-1">
              <ArrowLeft size={14} />
              <span>Voltar para Início</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/artigos" className="text-[#1b1464] hover:text-[#e53935] transition-colors">
              Artigos
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 truncate max-w-[200px]">{article.title}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="bg-[#1b1464] hover:bg-[#1b1464]/90 animate-fade-in">{article.category}</Badge>
            {article.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-[#1b1464]/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#1b1464] relative inline-block animate-fade-in">
            {article.title}
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e53935]/30 transform origin-left scale-x-0 animate-[scale-in_0.5s_0.3s_forwards]"></div>
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <UserIcon className="h-4 w-4 text-[#1b1464]" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <CalendarIcon className="h-4 w-4 text-[#1b1464]" />
              <span>{article.date}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSaveArticle}
              className="border-[#1b1464]/20 hover:border-[#1b1464] hover:bg-[#1b1464]/5 transition-all"
            >
              <BookmarkIcon className="h-4 w-4 mr-2 text-[#1b1464]" />
              Salvar
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShareArticle}
              className="border-[#1b1464]/20 hover:border-[#1b1464] hover:bg-[#1b1464]/5 transition-all"
            >
              <Share className="h-4 w-4 mr-2 text-[#1b1464]" />
              Compartilhar
            </Button>
          </div>
          
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md relative overflow-hidden animate-fade-in border border-gray-100" style={{ animationDelay: "0.4s" }}>
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1b1464]/3 rounded-bl-[100px] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#e53935]/3 rounded-tr-[100px] -z-0"></div>
            
            {article.image && (
              <div className="mb-8 rounded-lg overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1b1464]/10 to-[#e53935]/10 mix-blend-overlay z-10"></div>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-auto rounded-lg relative z-0 transform scale-105 hover:scale-100 transition-all duration-500"
                />
              </div>
            )}
            
            <div className="mb-8 relative z-10">
              <h2 className="font-serif text-xl font-semibold mb-4 text-[#1b1464] flex items-center gap-2">
                <div className="h-5 w-1 bg-[#e53935]"></div>
                Resumo
              </h2>
              <p className="text-gray-700 leading-relaxed">{article.abstract}</p>
            </div>
            
            <div className="prose max-w-none relative z-10">
              <h2 className="font-serif text-xl font-semibold mb-4 text-[#1b1464] flex items-center gap-2">
                <div className="h-5 w-1 bg-[#e53935]"></div>
                Conteúdo
              </h2>
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            <Separator className="my-8" />
            
            <div className="relative z-10">
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#1b1464] flex items-center gap-2">
                <div className="h-5 w-1 bg-[#e53935]"></div>
                Sobre o Autor
              </h3>
              <div className="bg-[#1b1464]/5 p-4 rounded-lg">
                <p className="text-gray-700 mb-1 font-medium">{article.author}</p>
                <p className="text-gray-600 text-sm">{article.authorInstitution}</p>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="relative z-10">
              <h3 className="font-serif text-xl font-semibold mb-4 text-[#1b1464] flex items-center gap-2">
                <div className="h-5 w-1 bg-[#e53935]"></div>
                Referências
              </h3>
              <div className="bg-[#f5f5f5] p-4 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {article.references.map((reference, index) => (
                    <li key={index} className="text-sm">{reference}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
