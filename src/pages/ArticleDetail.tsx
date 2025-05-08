
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getArticleById } from '../data/mockData';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, UserIcon, BookmarkIcon, Share } from 'lucide-react';
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
      <article className="bg-metodista-light">
        <div className="metodista-container py-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="bg-metodista-blue hover:bg-metodista-blue/90">{article.category}</Badge>
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="outline">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-metodista-blue">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-8">
            <Button variant="outline" size="sm" onClick={handleSaveArticle}>
              <BookmarkIcon className="h-4 w-4 mr-2" />
              Salvar
            </Button>
            <Button variant="outline" size="sm" onClick={handleShareArticle}>
              <Share className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
          
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            {article.image && (
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
            
            <div className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-4">Resumo</h2>
              <p className="text-gray-700">{article.abstract}</p>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="font-serif text-xl font-semibold mb-4">Conteúdo</h2>
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Sobre o Autor</h3>
              <p className="text-gray-700 mb-1">{article.author}</p>
              <p className="text-gray-600 text-sm">{article.authorInstitution}</p>
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Referências</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {article.references.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
